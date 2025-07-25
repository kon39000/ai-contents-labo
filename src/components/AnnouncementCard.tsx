import { format } from 'date-fns'
import { ja } from 'date-fns/locale'
import Link from 'next/link'

type AnnouncementCardProps = {
  id: string
  title: string
  body: string
  publishedAt: Date
  linkUrl?: string
}

export default function AnnouncementCard({ 
  title, 
  body, 
  publishedAt, 
  linkUrl 
}: AnnouncementCardProps) {
  const excerpt = body.length > 100 ? body.substring(0, 100) + '...' : body

  return (
    <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-md hover:shadow-lg transition-shadow">
      <div className="flex items-start justify-between mb-3">
        <time className="text-sm text-gray-500">
          {format(publishedAt, 'yyyy年M月d日', { locale: ja })}
        </time>
        <span className="bg-orange-100 text-orange-700 text-xs px-2 py-1 rounded-full font-medium">
          お知らせ
        </span>
      </div>
      
      <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2">
        {title}
      </h3>
      
      <p className="text-gray-700 mb-4 leading-relaxed">
        {excerpt}
      </p>
      
      {linkUrl && (
        <Link 
          href={linkUrl}
          className="inline-flex items-center text-cyan-600 hover:text-cyan-700 font-medium text-sm transition-colors"
        >
          詳しく見る →
        </Link>
      )}
    </div>
  )
}