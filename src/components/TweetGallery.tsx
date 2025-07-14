'use client'

import { useState, useMemo } from 'react'
import { SanityTweet } from '@/types/tweet'
import Tweet from './Tweet'

interface TweetGalleryProps {
  tweets: SanityTweet[]
}

type SortOption = 'newest' | 'oldest' | 'mostLiked' | 'mostRetweeted'

const sortOptions: { value: SortOption; label: string }[] = [
  { value: 'newest', label: '新しい順' },
  { value: 'oldest', label: '古い順' },
  { value: 'mostLiked', label: 'いいね数順' },
  { value: 'mostRetweeted', label: 'リツイート数順' },
]

export default function TweetGallery({ tweets }: TweetGalleryProps) {
  const [sortBy, setSortBy] = useState<SortOption>('newest')
  const [searchQuery, setSearchQuery] = useState('')

  // Filter and sort tweets
  const filteredAndSortedTweets = useMemo(() => {
    let filtered = tweets

    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase()
      filtered = tweets.filter(tweet => 
        tweet.text.toLowerCase().includes(query) ||
        tweet.authorName.toLowerCase().includes(query) ||
        tweet.authorUsername.toLowerCase().includes(query) ||
        tweet.hashtags.some(tag => tag.toLowerCase().includes(query))
      )
    }

    // Sort tweets
    const sorted = [...filtered].sort((a, b) => {
      switch (sortBy) {
        case 'newest':
          return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        case 'oldest':
          return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
        case 'mostLiked':
          return b.publicMetrics.likeCount - a.publicMetrics.likeCount
        case 'mostRetweeted':
          return b.publicMetrics.retweetCount - a.publicMetrics.retweetCount
        default:
          return 0
      }
    })

    return sorted
  }, [tweets, searchQuery, sortBy])

  return (
    <div className="space-y-6">
      {/* Header with stats */}
      <div className="bg-white rounded-xl p-6 shadow-lg border border-orange-100">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              <span aria-hidden="true">🎉</span> メンバーの成果報告
            </h2>
            <p className="text-gray-600">
              #ACL成果 で投稿された最新の成功体験をご紹介します
            </p>
          </div>
          <div className="flex items-center gap-4 text-sm">
            <div className="bg-orange-50 px-3 py-2 rounded-lg border border-orange-200">
              <span className="font-semibold text-orange-700">
                {filteredAndSortedTweets.length}件
              </span>
              <span className="text-orange-600 ml-1">表示中</span>
            </div>
            <div className="bg-cyan-50 px-3 py-2 rounded-lg border border-cyan-200">
              <span className="font-semibold text-cyan-700">
                {tweets.length}件
              </span>
              <span className="text-cyan-600 ml-1">総数</span>
            </div>
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
        <div className="flex flex-col md:flex-row gap-4">
          {/* Search */}
          <div className="flex-1">
            <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-2">
              検索
            </label>
            <div className="relative">
              <input
                type="text"
                id="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="ツイート内容、ユーザー名、ハッシュタグで検索..."
                className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              />
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Sort */}
          <div>
            <label htmlFor="sort" className="block text-sm font-medium text-gray-700 mb-2">
              並び順
            </label>
            <select
              id="sort"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as SortOption)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-white"
            >
              {sortOptions.map(option => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Results */}
      {filteredAndSortedTweets.length === 0 ? (
        <div className="bg-white rounded-xl p-12 shadow-lg border border-gray-100 text-center">
          <div className="text-6xl mb-4" aria-hidden="true">🔍</div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            該当するツイートが見つかりません
          </h3>
          <p className="text-gray-600 mb-4">
            検索条件を変更するか、新しい成果報告をお待ちください
          </p>
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg transition-colors"
            >
              検索をクリア
            </button>
          )}
        </div>
      ) : (
        <>
          {/* Tweet Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredAndSortedTweets.map((tweet) => (
              <Tweet key={tweet._id} tweet={tweet} />
            ))}
          </div>

          {/* Load more indicator (placeholder for future pagination) */}
          {filteredAndSortedTweets.length >= 20 && (
            <div className="text-center py-8">
              <p className="text-gray-600">
                さらに多くの成果報告は順次追加されます
              </p>
            </div>
          )}
        </>
      )}
    </div>
  )
}