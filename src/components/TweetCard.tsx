import { format } from 'date-fns'
import { ja } from 'date-fns/locale'
import Link from 'next/link'

type TweetCardProps = {
  id: string
  url: string
  authorName: string
  authorHandle: string
  content: string
  postedAt: Date
  imageUrl?: string
}

export default function TweetCard({ 
  url, 
  authorName, 
  authorHandle, 
  content, 
  postedAt, 
  imageUrl 
}: TweetCardProps) {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-md hover:shadow-lg transition-shadow">
      <div className="flex items-start space-x-4">
        <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center flex-shrink-0">
          <span className="text-gray-600 text-lg">👤</span>
        </div>
        
        <div className="flex-1 min-w-0">
          <div className="flex items-center space-x-2 mb-2">
            <h3 className="font-bold text-gray-900 truncate">{authorName}</h3>
            <span className="text-gray-500 text-sm">@{authorHandle}</span>
            <span className="text-gray-400">•</span>
            <time className="text-gray-500 text-sm">
              {format(postedAt, 'M月d日', { locale: ja })}
            </time>
          </div>
          
          <div className="text-gray-800 mb-4 whitespace-pre-wrap leading-relaxed">
            {content}
          </div>
          
          {imageUrl && (
            <div className="mb-4">
              <img 
                src={imageUrl} 
                alt="投稿画像" 
                className="rounded-lg max-w-full h-auto"
              />
            </div>
          )}
          
          <div className="flex items-center space-x-4 text-gray-500">
            <Link 
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-600 hover:text-cyan-700 text-sm font-medium transition-colors"
            >
              Xで見る →
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}