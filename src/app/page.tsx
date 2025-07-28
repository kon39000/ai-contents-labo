import HeroSectionImproved from '@/components/HeroSectionImproved'
import ThreePillarsSection from '@/components/ThreePillarsSection'
import RoadmapSection from '@/components/RoadmapSection'
import TestimonialsSection from '@/components/TestimonialsSection'
import ProfileSection from '@/components/ProfileSection'
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
    return announcements
  } catch (error) {
    console.error('Error fetching announcements:', error)
    return []
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
    return tweets
  } catch (error) {
    console.error('Error fetching tweets:', error)
    return []
  }
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