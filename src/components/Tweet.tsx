'use client'

import { SanityTweet } from '@/types/tweet'
import { formatDistanceToNow } from 'date-fns'
import { ja } from 'date-fns/locale'

interface TweetProps {
  tweet: SanityTweet
}

export default function Tweet({ tweet }: TweetProps) {
  const formatDate = (dateString: string) => {
    try {
      return formatDistanceToNow(new Date(dateString), { 
        addSuffix: true, 
        locale: ja 
      })
    } catch {
      return dateString
    }
  }

  const formatNumber = (num: number) => {
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'K'
    }
    return num.toString()
  }

  const handleTweetClick = () => {
    const tweetUrl = `https://twitter.com/${tweet.authorUsername}/status/${tweet.tweetId}`
    window.open(tweetUrl, '_blank', 'noopener,noreferrer')
  }

  return (
    <article 
      className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 cursor-pointer group"
      onClick={handleTweetClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          handleTweetClick()
        }
      }}
      aria-label={`${tweet.authorName}さんのツイートを見る`}
    >
      {/* Header */}
      <div className="flex items-start mb-4">
        <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-orange-500 rounded-full flex items-center justify-center mr-4 text-white font-bold overflow-hidden">
          {tweet.authorProfileImageUrl ? (
            <img 
              src={tweet.authorProfileImageUrl} 
              alt={`${tweet.authorName}のプロフィール画像`}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          ) : (
            <span className="text-lg">{tweet.authorName.charAt(0)}</span>
          )}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <h3 className="font-semibold text-gray-900 truncate">
              {tweet.authorName}
            </h3>
            <span className="text-gray-500 text-sm">@{tweet.authorUsername}</span>
          </div>
          <time 
            className="text-gray-500 text-sm"
            dateTime={tweet.createdAt}
          >
            {formatDate(tweet.createdAt)}
          </time>
        </div>
        
        {/* X/Twitter Logo */}
        <div className="text-gray-400 group-hover:text-blue-400 transition-colors">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
          </svg>
        </div>
      </div>

      {/* Tweet Content */}
      <div className="mb-4">
        <p className="text-gray-800 leading-relaxed whitespace-pre-wrap">
          {tweet.text}
        </p>
      </div>

      {/* Hashtags */}
      {tweet.hashtags && tweet.hashtags.length > 0 && (
        <div className="mb-4">
          <div className="flex flex-wrap gap-2">
            {tweet.hashtags.map((hashtag, index) => (
              <span 
                key={index}
                className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-orange-100 text-orange-700"
              >
                #{hashtag}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Metrics */}
      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
        <div className="flex items-center space-x-6 text-sm text-gray-500">
          <span className="flex items-center gap-1" aria-label={`${tweet.publicMetrics.likeCount}いいね`}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-red-500">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
            </svg>
            <span className="font-medium text-gray-700">
              {formatNumber(tweet.publicMetrics.likeCount)}
            </span>
          </span>
          
          <span className="flex items-center gap-1" aria-label={`${tweet.publicMetrics.retweetCount}リツイート`}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-green-500">
              <path d="M23.77 15.67c-.292-.293-.767-.293-1.06 0l-2.22 2.22V7.65c0-2.068-1.683-3.75-3.75-3.75h-5.85c-.414 0-.75.336-.75.75s.336.75.75.75h5.85c1.24 0 2.25 1.01 2.25 2.25v10.24l-2.22-2.22c-.293-.293-.768-.293-1.061 0s-.293.768 0 1.061l3.5 3.5c.145.147.337.22.53.22s.383-.072.53-.22l3.5-3.5c.294-.292.294-.767.001-1.06zm-10.66 3.28H7.26c-1.24 0-2.25-1.01-2.25-2.25V6.46l2.22 2.22c.148.147.34.22.532.22s.384-.073.53-.22c.293-.293.293-.768 0-1.061l-3.5-3.5c-.293-.294-.768-.294-1.061 0l-3.5 3.5c-.294.292-.294.767 0 1.06s.767.294 1.06 0l2.22-2.22V16.7c0 2.068 1.683 3.75 3.75 3.75h5.85c.414 0 .75-.336.75-.75s-.337-.75-.75-.75z"/>
            </svg>
            <span className="font-medium text-gray-700">
              {formatNumber(tweet.publicMetrics.retweetCount)}
            </span>
          </span>

          <span className="flex items-center gap-1" aria-label={`${tweet.publicMetrics.replyCount}返信`}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-blue-500">
              <path d="M14.046 2.242l-4.148-.01h-.002c-4.374 0-7.8 3.427-7.8 7.802 0 4.098 3.186 7.206 7.465 7.37v3.828c0 .108.044.286.12.403.142.225.384.347.632.347.138 0 .277-.038.402-.118.264-.168 6.473-4.14 8.088-5.506 1.902-1.61 3.04-3.97 3.043-6.312v-.017c-.006-4.367-3.43-7.787-7.8-7.788zm3.787 12.972c-1.134.96-4.862 3.405-6.772 4.643V16.67c0-.414-.335-.75-.75-.75h-.396c-3.66 0-6.318-2.476-6.318-5.886 0-3.534 2.768-6.302 6.3-6.302l4.147.01h.002c3.532 0 6.3 2.766 6.302 6.296-.003 1.91-.942 3.844-2.514 5.176z"/>
            </svg>
            <span className="font-medium text-gray-700">
              {formatNumber(tweet.publicMetrics.replyCount)}
            </span>
          </span>
        </div>
        
        {/* External link indicator */}
        <div className="text-xs text-gray-400 group-hover:text-gray-600 transition-colors">
          Xで見る
        </div>
      </div>
    </article>
  )
}