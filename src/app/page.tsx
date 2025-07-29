import HeroSectionImproved from '@/components/HeroSectionImproved'
import StatsSection from '@/components/StatsSection'
import ProblemSection from '@/components/ProblemSection'
import LearningStepsSection from '@/components/LearningStepsSection'
import ThreePillarsSection from '@/components/ThreePillarsSection'
import RoadmapSection from '@/components/RoadmapSection'
import TestimonialsSection from '@/components/TestimonialsSection'
import OperatorInfoSection from '@/components/OperatorInfoSection'
import CompanyInfoSection from '@/components/CompanyInfoSection'
import AnnouncementCard from '@/components/AnnouncementCard'
import TweetCard from '@/components/TweetCard'
import Link from 'next/link'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function getLatestAnnouncements() {
  try {
    const announcements = await prisma.announcement.findMany({
      orderBy: {
        publishedAt: 'desc'
      },
      take: 3
    })
    return announcements.length > 0 ? announcements : getDummyAnnouncements()
  } catch (error) {
    console.error('Error fetching announcements:', error)
    return getDummyAnnouncements()
  }
}

async function getLatestTweets() {
  try {
    const tweets = await prisma.tweet.findMany({
      orderBy: {
        postedAt: 'desc'
      },
      take: 6
    })
    return tweets.length > 0 ? tweets : getDummyTweets()
  } catch (error) {
    console.error('Error fetching tweets:', error)
    return getDummyTweets()
  }
}

function getDummyAnnouncements() {
  return [
    {
      id: 'dummy-1',
      title: 'Voicyチャンネル開設のお知らせ',
      body: '公式Voicyチャンネルを開設しました！音声で学習できる新しいコンテンツを定期配信します。',
      linkUrl: 'https://voicy.jp/channel/821951',
      publishedAt: '2025-01-28T10:00:00Z'
    },
    {
      id: 'dummy-2',
      title: 'AIプログラミングでマネタイズを実現するための第一歩',
      body: '無料ウェビナーを開催します。日時：2025年7月30日（水）12:00〜13:00、講師：むなかたさん、会場：Zoomウェビナー',
      linkUrl: 'https://nmo-event.peatix.com',
      publishedAt: '2025-01-25T09:00:00Z'
    },
    {
      id: 'dummy-3',
      title: 'AIコンテンツラボ新機能リリース',
      body: '新しい学習機能とコミュニティ機能をリリースしました。より充実した学習体験をお届けします。',
      linkUrl: null,
      publishedAt: '2025-01-20T14:30:00Z'
    }
  ]
}

function getDummyTweets() {
  return [
    {
      id: 'tweet-1',
      url: 'https://x.com/ranya_ja/status/1946556515504238650',
      authorName: 'えるぱぱ',
      authorHandle: 'ranya_ja',
      content: 'note投稿開始達成！🎉',
      postedAt: '2025-01-16T10:30:00Z',
      imageUrl: null
    },
    {
      id: 'tweet-2',
      url: 'https://note.com/mako_bloger/n/nb322afb14f77',
      authorName: 'マコ',
      authorHandle: 'mako_bloger',
      content: 'note継続投稿達成！✍️',
      postedAt: '2025-01-24T14:20:00Z',
      imageUrl: null
    },
    {
      id: 'tweet-3',
      url: 'https://x.com/chihuahua130/status/1949224213178712186',
      authorName: 'ほわり',
      authorHandle: 'chihuahua130',
      content: 'Xアカウント開設達成！🎯',
      postedAt: '2025-01-23T18:45:00Z',
      imageUrl: null
    },
    {
      id: 'tweet-4', 
      url: 'https://x.com/chi3_jp/status/1948574179864805531',
      authorName: 'ちーみつ',
      authorHandle: 'chi3_jp',
      content: 'Chrome拡張機能作成達成！💻',
      postedAt: '2025-01-21T18:45:00Z',
      imageUrl: null
    },
    {
      id: 'tweet-5',
      url: 'https://x.com/tkrock01/status/1947253293756891366',
      authorName: 'Tk',
      authorHandle: 'tkrock01', 
      content: 'Suno楽曲制作達成！🎵',
      postedAt: '2025-01-19T12:15:00Z',
      imageUrl: null
    },
    {
      id: 'tweet-6',
      url: 'https://x.com/rikunomom/status/1948763688783282613',
      authorName: 'りくママ',
      authorHandle: 'rikunomom',
      content: 'Kindle出版＆note執筆達成！📚',
      postedAt: '2025-01-22T14:20:00Z',
      imageUrl: null
    },
    {
      id: 'tweet-7',
      url: 'https://x.com/S1Sshikari/status/1944201196467892266',
      authorName: 'island',
      authorHandle: 'S1Sshikari',
      content: 'Suno音楽制作達成！🎵',
      postedAt: '2025-01-08T16:00:00Z',
      imageUrl: null
    },
    {
      id: 'tweet-8',
      url: 'https://amzn.asia/d/9M8CJw8',
      authorName: 'ココ',
      authorHandle: 'coco_kindle',
      content: 'Kindle出版デビュー達成！📖',
      postedAt: '2025-01-12T09:30:00Z',
      imageUrl: null
    },
    {
      id: 'tweet-9',
      url: 'https://x.com/tomozo9/status/1948338832589357375',
      authorName: 'tomozo',
      authorHandle: 'tomozo9',
      content: 'note継続執筆達成！✍️',
      postedAt: '2025-01-20T11:45:00Z',
      imageUrl: null
    },
    {
      id: 'tweet-10',
      url: 'https://x.com/tkrock01/status/1945287992517484795',
      authorName: 'Tk',
      authorHandle: 'tkrock01',
      content: 'AI小説執筆達成！📚',
      postedAt: '2025-01-14T15:20:00Z',
      imageUrl: null
    },
    {
      id: 'tweet-11',
      url: 'https://x.com/junchan614/status/1949195388717760644',
      authorName: 'Junchan',
      authorHandle: 'junchan614',
      content: 'バイブコーディング実践達成！💻',
      postedAt: '2025-01-24T16:00:00Z',
      imageUrl: null
    },
    {
      id: 'tweet-12',
      url: 'https://x.com/minacle_design/status/1942528692259021249',
      authorName: 'みなくる',
      authorHandle: 'minacle_design',
      content: 'Kindle出版デビュー達成！📖',
      postedAt: '2025-01-05T09:30:00Z',
      imageUrl: null
    },
    {
      id: 'tweet-13',
      url: 'https://amzn.asia/d/el2dEQp',
      authorName: 'Hisa',
      authorHandle: 'hisa_kindle',
      content: 'Kindle出版達成！📚',
      postedAt: '2025-01-18T13:45:00Z',
      imageUrl: null
    },
    {
      id: 'tweet-14',
      url: 'https://x.com/SatsukiDesigner/status/1942342873787293849',
      authorName: 'さつき',
      authorHandle: 'SatsukiDesigner',
      content: 'Kindle出版挑戦達成！📖',
      postedAt: '2025-01-04T14:15:00Z',
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
      <StatsSection />
      <ProblemSection />
      <LearningStepsSection />
      <ThreePillarsSection />
      <RoadmapSection />
      <TestimonialsSection />
      <OperatorInfoSection />
      
      {/* 最新情報セクション */}
      <section id="latest-news" className="bg-gray-50 py-16 lg:py-24">
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


      <CompanyInfoSection />
    </>
  )
}