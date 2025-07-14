// X API Response Types
export interface XTweetData {
  id: string
  text: string
  created_at: string
  author_id: string
  public_metrics: {
    retweet_count: number
    like_count: number
    reply_count: number
    quote_count: number
  }
  entities?: {
    hashtags?: Array<{
      start: number
      end: number
      tag: string
    }>
  }
}

export interface XUserData {
  id: string
  name: string
  username: string
  profile_image_url?: string
}

export interface XApiResponse {
  data: XTweetData[]
  includes?: {
    users: XUserData[]
  }
  meta: {
    result_count: number
    newest_id?: string
    oldest_id?: string
  }
}

// Internal Tweet Data Types
export interface TweetData {
  tweetId: string
  text: string
  authorId: string
  authorName: string
  authorUsername: string
  authorProfileImageUrl?: string
  createdAt: string
  publicMetrics: {
    retweetCount: number
    likeCount: number
    replyCount: number
    quoteCount: number
  }
  hashtags: string[]
  approved: boolean
  approvedAt?: string
  approvedBy?: string
}

// Sanity Tweet Document Type
export interface SanityTweet extends TweetData {
  _id: string
  _type: 'tweet'
  _createdAt: string
  _updatedAt: string
}