import HeroSectionImproved from '@/components/HeroSectionImproved'
import ThreePillarsSection from '@/components/ThreePillarsSection'
import AnnouncementCard from '@/components/AnnouncementCard'
import TweetCard from '@/components/TweetCard'
import Link from 'next/link'

async function getLatestAnnouncements() {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/api/announcements`, {
      cache: 'no-store'
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
      cache: 'no-store'
    })
    if (!response.ok) return getDummyTweets()
    const tweets = await response.json()
    return tweets.slice(0, 3)
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
      id: 'dummy-tweet-1',
      url: 'https://twitter.com/user1/status/1',
      authorName: '田中太郎',
      authorHandle: 'tanaka_ai',
      content: 'AIコンテンツラボで学んだテクニックを使って、初めてのnoteを公開しました！🎉 コミュニティのサポートのおかげで完成できました。#ACL成果',
      postedAt: '2025-01-22T15:30:00Z',
      imageUrl: null
    },
    {
      id: 'dummy-tweet-2', 
      url: 'https://twitter.com/user2/status/2',
      authorName: '佐藤花子',
      authorHandle: 'sato_contents',
      content: '子育ての合間に学習を続けて3ヶ月。ついにAIを使った副業で初収益が出ました！💰 AIコンテンツラボに出会えて良かった✨ #ACL成果',
      postedAt: '2025-01-20T11:15:00Z',
      imageUrl: null
    },
    {
      id: 'dummy-tweet-3',
      url: 'https://twitter.com/user3/status/3', 
      authorName: '山田次郎',
      authorHandle: 'yamada_writer',
      content: 'AIライティングのスキルを身につけてから、仕事の効率が格段に上がりました📈 「今日の生徒が明日の講師」を実感しています🎓 #ACL成果',
      postedAt: '2025-01-18T13:45:00Z',
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
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
            >
              もっと見る →
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}