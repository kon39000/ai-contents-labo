import HeroSectionImproved from '@/components/HeroSectionImproved'
import ThreePillarsSection from '@/components/ThreePillarsSection'
import RoadmapSection from '@/components/RoadmapSection'
import TestimonialsSection from '@/components/TestimonialsSection'
import ProfileSection from '@/components/ProfileSection'
import CompanyInfoSection from '@/components/CompanyInfoSection'
import AnnouncementCard from '@/components/AnnouncementCard'
import TweetCard from '@/components/TweetCard'
import Link from 'next/link'

async function getLatestAnnouncements() {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/api/announcements`, {
      next: { revalidate: 3600 }
    })
    if (!response.ok) return getDummyAnnouncements()
    const announcements = await response.json()
    return announcements.slice(0, 3)
  } catch (error) {
    console.error('Error fetching announcements:', error)
    return getDummyAnnouncements()
  }
}

async function getLatestTweets() {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/api/tweets`, {
      next: { revalidate: 3600 }
    })
    if (!response.ok) return getDummyTweets()
    const tweets = await response.json()
    return tweets.slice(0, 6)
  } catch (error) {
    console.error('Error fetching tweets:', error)
    return getDummyTweets()
  }
}

function getDummyAnnouncements() {
  return [
    {
      id: 'dummy-1',
      title: 'AIコンテンツラボ新機能リリース',
      body: '新しい学習機能とコミュニティ機能をリリースしました。より充実した学習体験をお届けします。',
      linkUrl: null,
      publishedAt: '2025-01-20T10:00:00Z'
    },
    {
      id: 'dummy-2', 
      title: 'Voicy開設のお知らせ',
      body: '公式Voicyチャンネルを開設しました！音声で学習できる新しいコンテンツを定期配信します。',
      linkUrl: 'https://voicy.jp',
      publishedAt: '2025-01-18T14:30:00Z'
    },
    {
      id: 'dummy-3',
      title: '無料ウェビナー開催決定',
      body: 'AI初心者向けの無料ウェビナーを開催いたします。基本的なAI活用方法を解説します。',
      linkUrl: null,
      publishedAt: '2025-01-15T09:00:00Z'
    }
  ]
}

function getDummyTweets() {
  return [
    {
      id: 'real-tweet-1',
      url: 'https://x.com/ranya_ja/status/1946556515504238650',
      authorName: 'えるぱぱ',
      authorHandle: 'ranya_ja',
      content: 'ロードマップ実践でnote投稿を開始しました！🎉 AIコンテンツラボで学んだことを活かして、継続的に情報発信していきます。#ACL成果',
      postedAt: '2025-01-16T10:30:00Z',
      imageUrl: null
    },
    {
      id: 'real-tweet-2', 
      url: 'https://x.com/rikunomom/status/1948763688783282613',
      authorName: 'りくママ',
      authorHandle: 'rikunomom',
      content: 'Kindle出版とnote執筆を同時進行中！📚✍️ AIツールを活用して効率的にコンテンツ制作できるようになりました。子育て中でも夢を諦めない💪 #ACL成果',
      postedAt: '2025-01-22T14:20:00Z',
      imageUrl: null
    },
    {
      id: 'real-tweet-3',
      url: 'https://x.com/chi3_jp/status/1948574179864805531',
      authorName: 'ちーみつ',
      authorHandle: 'chi3_jp',
      content: 'Chrome拡張機能を作成しました！🎯 AIコンテンツラボで学んだプログラミングスキルが活かせて嬉しいです。技術系のコンテンツ制作にも挑戦中 #ACL成果',
      postedAt: '2025-01-21T18:45:00Z',
      imageUrl: null
    },
    {
      id: 'real-tweet-4',
      url: 'https://x.com/tkrock01/status/1947253293756891366',
      authorName: 'Tk',
      authorHandle: 'tkrock01',
      content: 'Sunoで楽曲制作に挑戦！🎵 AIの力を借りて音楽作りを始めました。創作の幅が広がって毎日が楽しいです。次はAI小説にも挑戦予定📖 #ACL成果',
      postedAt: '2025-01-19T12:15:00Z',
      imageUrl: null
    },
    {
      id: 'real-tweet-5',
      url: 'https://x.com/minacle_design/status/1942528692259021249',
      authorName: 'みなくる',
      authorHandle: 'minacle_design',
      content: 'ついにKindle出版デビューしました！📖✨ デザインの知識とAIツールを組み合わせて素敵な本が作れました。次作も準備中です #ACL成果',
      postedAt: '2025-01-05T09:30:00Z',
      imageUrl: null
    },
    {
      id: 'real-tweet-6',
      url: 'https://x.com/junchan614/status/1949195388717760644',
      authorName: 'Junchan',
      authorHandle: 'junchan614',
      content: 'バイブコーディング実践中！💻 学んだことをすぐに実装して、自分なりのコンテンツ作りを楽しんでいます。コミュニティの仲間と切磋琢磨できるのが最高 #ACL成果',
      postedAt: '2025-01-24T16:00:00Z',
      imageUrl: null
    }
  ]
}

export default async function Home() {
  const [announcements, tweets] = await Promise.all([
    getLatestAnnouncements(),
    getLatestTweets()
  ])

  return (
    <>
      <HeroSectionImproved />
      <ThreePillarsSection />
      <RoadmapSection />
      <TestimonialsSection />
      <ProfileSection />
      
      {/* 最新情報セクション */}
      <section className="bg-gray-50 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              最新情報
            </h2>
          </div>
          
          {announcements.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
              {announcements.map((announcement: any) => (
                <AnnouncementCard
                  key={announcement.id}
                  id={announcement.id}
                  title={announcement.title}
                  body={announcement.body}
                  publishedAt={new Date(announcement.publishedAt)}
                  linkUrl={announcement.linkUrl}
                />
              ))}
            </div>
          ) : (
            <div className="text-center text-gray-500 mb-8">
              <p>お知らせはまだありません</p>
            </div>
          )}
          
          <div className="text-center">
            <Link 
              href="/news"
              className="inline-flex items-center text-cyan-600 hover:text-cyan-700 font-medium transition-colors"
              prefetch={false}
            >
              もっと見る →
            </Link>
          </div>
        </div>
      </section>

      {/* 成果報告ハイライト */}
      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              メンバーの成果報告
            </h2>
          </div>
          
          {tweets.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {tweets.map((tweet: any) => (
                <TweetCard
                  key={tweet.id}
                  id={tweet.id}
                  url={tweet.url}
                  authorName={tweet.authorName}
                  authorHandle={tweet.authorHandle}
                  content={tweet.content}
                  postedAt={new Date(tweet.postedAt)}
                  imageUrl={tweet.imageUrl}
                />
              ))}
            </div>
          ) : (
            <div className="text-center text-gray-500 mb-8">
              <p>成果報告はまだありません</p>
            </div>
          )}
          
          <div className="text-center">
            <Link 
              href="/members"
              className="inline-flex items-center text-cyan-600 hover:text-cyan-700 font-medium transition-colors"
              prefetch={false}
            >
              もっと見る →
            </Link>
          </div>
        </div>
      </section>

      <CompanyInfoSection />
    </>
  )
}