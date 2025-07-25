'use client'

import { useState, useEffect } from 'react'

type Announcement = {
  id: string
  title: string
  body: string
  linkUrl?: string
  publishedAt: string
  createdAt: string
}

export default function AdminAnnouncementsPage() {
  const [announcements, setAnnouncements] = useState<Announcement[]>([])
  const [loading, setLoading] = useState(true)
  const [formData, setFormData] = useState({
    title: '',
    body: '',
    linkUrl: '',
    publishedAt: ''
  })

  useEffect(() => {
    fetchAnnouncements()
  }, [])

  const fetchAnnouncements = async () => {
    try {
      const response = await fetch('/api/announcements')
      if (response.ok) {
        const data = await response.json()
        setAnnouncements(data)
      }
    } catch (error) {
      console.error('Error fetching announcements:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const response = await fetch('/api/announcements', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          body: formData.body
        }),
      })

      if (response.ok) {
        setFormData({
          title: '',
          body: '',
          linkUrl: '',
          publishedAt: ''
        })
        fetchAnnouncements()
        alert('Announcement added successfully!')
      } else {
        alert('Error adding announcement')
      }
    } catch (error) {
      console.error('Error adding announcement:', error)
      alert('Error adding announcement')
    }
  }

  const handleDelete = async (id: string) => {
    if (confirm('Are you sure you want to delete this announcement?')) {
      try {
        const response = await fetch(`/api/announcements?id=${id}`, {
          method: 'DELETE',
        })

        if (response.ok) {
          fetchAnnouncements()
          alert('Announcement deleted successfully!')
        } else {
          alert('Error deleting announcement')
        }
      } catch (error) {
        console.error('Error deleting announcement:', error)
        alert('Error deleting announcement')
      }
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Announcement Management</h1>
        
        {/* Add Announcement Form */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Add New Announcement</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Title *
                </label>
                <input
                  type="text"
                  required
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Published At *
                </label>
                <input
                  type="datetime-local"
                  required
                  value={formData.publishedAt}
                  onChange={(e) => setFormData({ ...formData, publishedAt: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Body *
              </label>
              <textarea
                required
                rows={6}
                value={formData.body}
                onChange={(e) => setFormData({ ...formData, body: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Link URL (optional)
              </label>
              <input
                type="url"
                value={formData.linkUrl}
                onChange={(e) => setFormData({ ...formData, linkUrl: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
            
            <button
              type="submit"
              className="bg-orange-600 text-white px-6 py-2 rounded-md hover:bg-orange-700 transition-colors"
            >
              Add Announcement
            </button>
          </form>
        </div>

        {/* Announcement List */}
        <div className="bg-white rounded-lg shadow-md">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-xl font-bold text-gray-900">Existing Announcements</h2>
          </div>
          
          {loading ? (
            <div className="p-6 text-center">Loading...</div>
          ) : announcements.length === 0 ? (
            <div className="p-6 text-center text-gray-500">No announcements found</div>
          ) : (
            <div className="divide-y divide-gray-200">
              {announcements.map((announcement) => (
                <div key={announcement.id} className="p-6">
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <h3 className="text-lg font-bold text-gray-900">{announcement.title}</h3>
                        <span className="text-gray-400">•</span>
                        <span className="text-gray-500 text-sm">
                          {new Date(announcement.publishedAt).toLocaleDateString('ja-JP')}
                        </span>
                      </div>
                      <p className="text-gray-800 mb-2 whitespace-pre-wrap">{announcement.body}</p>
                      {announcement.linkUrl && (
                        <a 
                          href={announcement.linkUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-cyan-600 hover:text-cyan-700 text-sm"
                        >
                          View Link →
                        </a>
                      )}
                    </div>
                    <button
                      onClick={() => handleDelete(announcement.id)}
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