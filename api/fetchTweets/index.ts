import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@sanity/client'
import type { XApiResponse, XTweetData, XUserData, TweetData } from '../../src/types/tweet'

// Sanity client configuration
const sanityClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
  apiVersion: '2023-05-03',
})

// X API configuration
const X_BEARER_TOKEN = process.env.X_BEARER_TOKEN
const X_API_BASE_URL = 'https://api.twitter.com/2'

export const config = {
  runtime: 'edge',
}

async function fetchTweetsFromX(): Promise<TweetData[]> {
  if (!X_BEARER_TOKEN) {
    throw new Error('X_BEARER_TOKEN is not configured')
  }

  // Search for tweets with #ACL成果 hashtag
  const searchParams = new URLSearchParams({
    query: '#ACL成果 -is:retweet',
    'tweet.fields': 'id,text,created_at,author_id,public_metrics,entities',
    'user.fields': 'id,name,username,profile_image_url',
    expansions: 'author_id',
    max_results: '100',
    sort_order: 'recency',
  })

  const response = await fetch(
    `${X_API_BASE_URL}/tweets/search/recent?${searchParams}`,
    {
      headers: {
        Authorization: `Bearer ${X_BEARER_TOKEN}`,
        'Content-Type': 'application/json',
      },
    }
  )

  if (!response.ok) {
    const errorText = await response.text()
    throw new Error(`X API request failed: ${response.status} - ${errorText}`)
  }

  const data: XApiResponse = await response.json()
  
  if (!data.data || data.data.length === 0) {
    return []
  }

  // Map X API response to our internal format
  const tweets: TweetData[] = data.data.map((tweet: XTweetData) => {
    const author = data.includes?.users?.find((user: XUserData) => user.id === tweet.author_id)
    
    const hashtags = tweet.entities?.hashtags?.map(tag => tag.tag) || []
    
    return {
      tweetId: tweet.id,
      text: tweet.text,
      authorId: tweet.author_id,
      authorName: author?.name || 'Unknown',
      authorUsername: author?.username || 'unknown',
      authorProfileImageUrl: author?.profile_image_url,
      createdAt: tweet.created_at,
      publicMetrics: {
        retweetCount: tweet.public_metrics.retweet_count,
        likeCount: tweet.public_metrics.like_count,
        replyCount: tweet.public_metrics.reply_count,
        quoteCount: tweet.public_metrics.quote_count,
      },
      hashtags,
      approved: false, // Default to false, requires manual approval
    }
  })

  return tweets
}

async function saveTweetsToSanity(tweets: TweetData[]): Promise<void> {
  // Check for existing tweets to avoid duplicates
  const existingTweetIds = await sanityClient.fetch(
    `*[_type == "tweet" && tweetId in $tweetIds].tweetId`,
    { tweetIds: tweets.map(t => t.tweetId) }
  )

  const newTweets = tweets.filter(tweet => !existingTweetIds.includes(tweet.tweetId))

  if (newTweets.length === 0) {
    return
  }

  // Transform to Sanity document format
  const sanityDocuments = newTweets.map(tweet => ({
    _type: 'tweet',
    ...tweet,
  }))

  // Batch create documents
  const transaction = sanityClient.transaction()
  sanityDocuments.forEach(doc => {
    transaction.create(doc)
  })

  await transaction.commit()
}

export default async function handler(req: NextRequest) {
  try {
    // Verify request is authorized (simple token check)
    const authHeader = req.headers.get('authorization')
    const expectedToken = process.env.CRON_SECRET_TOKEN
    
    if (!expectedToken || authHeader !== `Bearer ${expectedToken}`) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    console.log('Starting tweet fetch job...')
    
    // Fetch tweets from X API
    const tweets = await fetchTweetsFromX()
    console.log(`Fetched ${tweets.length} tweets from X API`)

    // Save to Sanity
    await saveTweetsToSanity(tweets)
    console.log('Tweets saved to Sanity successfully')

    // Trigger ISR revalidation
    if (process.env.VERCEL_URL) {
      const revalidateUrl = `https://${process.env.VERCEL_URL}/api/revalidate-tweets`
      await fetch(revalidateUrl, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${process.env.REVALIDATE_SECRET}`,
        },
      })
    }

    return NextResponse.json({
      success: true,
      message: `Successfully processed ${tweets.length} tweets`,
      timestamp: new Date().toISOString(),
    })

  } catch (error) {
    console.error('Tweet fetch job failed:', error)
    
    return NextResponse.json({
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
      timestamp: new Date().toISOString(),
    }, { status: 500 })
  }
}