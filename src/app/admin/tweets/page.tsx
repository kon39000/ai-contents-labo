'use client'

import { useState, useEffect } from 'react'

type Tweet = {
  id: string
  url: string
  authorName: string
  authorHandle: string
  content: string
  postedAt: string
  imageUrl?: string
  createdAt: string
}

export default function AdminTweetsPage() {
  const [tweets, setTweets] = useState<Tweet[]>([])
  const [loading, setLoading] = useState(true)
  const [formData, setFormData] = useState({
    url: '',
    authorName: '',
    authorHandle: '',
    content: '',
    postedAt: '',
    imageUrl: ''
  })

  useEffect(() => {
    fetchTweets()
  }, [])

  const fetchTweets = async () => {
    try {
      const response = await fetch('/api/tweets')
      if (response.ok) {
        const data = await response.json()
        setTweets(data)
      }
    } catch (error) {
      console.error('Error fetching tweets:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const response = await fetch('/api/tweets', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setFormData({
          url: '',
          authorName: '',
          authorHandle: '',
          content: '',
          postedAt: '',
          imageUrl: ''
        })
        fetchTweets()
        alert('Tweet added successfully!')
      } else {
        alert('Error adding tweet')
      }
    } catch (error) {
      console.error('Error adding tweet:', error)
      alert('Error adding tweet')
    }
  }

  const handleDelete = async (id: string) => {
    if (confirm('Are you sure you want to delete this tweet?')) {
      try {
        const response = await fetch(`/api/tweets?id=${id}`, {
          method: 'DELETE',
        })

        if (response.ok) {
          fetchTweets()
          alert('Tweet deleted successfully!')
        } else {
          alert('Error deleting tweet')
        }
      } catch (error) {
        console.error('Error deleting tweet:', error)
        alert('Error deleting tweet')
      }
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Tweet Management</h1>
        
        {/* Add Tweet Form */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Add New Tweet</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Tweet URL *
                </label>
                <input
                  type="url"
                  required
                  value={formData.url}
                  onChange={(e) => setFormData({ ...formData, url: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Author Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.authorName}
                  onChange={(e) => setFormData({ ...formData, authorName: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Author Handle *
                </label>
                <input
                  type="text"
                  required
                  value={formData.authorHandle}
                  onChange={(e) => setFormData({ ...formData, authorHandle: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                  placeholder="username (without @)"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Posted At *
                </label>
                <input
                  type="datetime-local"
                  required
                  value={formData.postedAt}
                  onChange={(e) => setFormData({ ...formData, postedAt: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Content *
              </label>
              <textarea
                required
                rows={4}
                value={formData.content}
                onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Image URL (optional)
              </label>
              <input
                type="url"
                value={formData.imageUrl}
                onChange={(e) => setFormData({ ...formData, imageUrl: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
            
            <button
              type="submit"
              className="bg-orange-600 text-white px-6 py-2 rounded-md hover:bg-orange-700 transition-colors"
            >
              Add Tweet
            </button>
          </form>
        </div>

        {/* Tweet List */}
        <div className="bg-white rounded-lg shadow-md">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-xl font-bold text-gray-900">Existing Tweets</h2>
          </div>
          
          {loading ? (
            <div className="p-6 text-center">Loading...</div>
          ) : tweets.length === 0 ? (
            <div className="p-6 text-center text-gray-500">No tweets found</div>
          ) : (
            <div className="divide-y divide-gray-200">
              {tweets.map((tweet) => (
                <div key={tweet.id} className="p-6">
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <h3 className="font-bold text-gray-900">{tweet.authorName}</h3>
                        <span className="text-gray-500">@{tweet.authorHandle}</span>
                        <span className="text-gray-400">•</span>
                        <span className="text-gray-500 text-sm">
                          {new Date(tweet.postedAt).toLocaleDateString('ja-JP')}
                        </span>
                      </div>
                      <p className="text-gray-800 mb-2 whitespace-pre-wrap">{tweet.content}</p>
                      {tweet.imageUrl && (
                        <img src={tweet.imageUrl} alt="Tweet image" className="max-w-xs rounded-lg mb-2" />
                      )}
                      <a 
                        href={tweet.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-cyan-600 hover:text-cyan-700 text-sm"
                      >
                        View on X →
                      </a>
                    </div>
                    <button
                      onClick={() => handleDelete(tweet.id)}
                      className="ml-4 bg-red-600 text-white px-3 py-1 rounded text-sm hover:bg-red-700 transition-colors"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}