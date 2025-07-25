import { Metadata } from 'next'
import TweetCard from '@/components/TweetCard'

export const metadata: Metadata = {
  title: 'Members - AI Contents Labo',
  description: 'メンバーの口コミと成果報告をご紹介。実際の学習体験と成功事例をご覧ください。',
  keywords: 'AI学習, 成果報告, 口コミ, 成功体験, メンバー',
}

type Testimonial = {
  id: string
  name?: string
  content: string
  createdAt: Date
}

async function getTweets() {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/api/tweets`, {
      cache: 'no-store'
    })
    if (!response.ok) return getDummyTweets()
    return await response.json()
  } catch (error) {
    console.error('Error fetching tweets:', error)
    return getDummyTweets()
  }
}

function getDummyTweets() {
  return [
    {
      id: 'dummy-1',
      url: 'https://twitter.com/user1/status/1',
      authorName: '田中太郎',
      authorHandle: 'tanaka_ai',
      content: 'AIコンテンツラボで学んだテクニックを使って、初めてのnoteを公開しました！🎉 コミュニティのサポートのおかげで完成できました。#ACL成果',
      postedAt: '2025-01-22T15:30:00Z',
      imageUrl: null
    },
    {
      id: 'dummy-2',
      url: 'https://twitter.com/user2/status/2',
      authorName: '佐藤花子',
      authorHandle: 'sato_contents',
      content: '子育ての合間に学習を続けて3ヶ月。ついにAIを使った副業で初収益が出ました！💰 AIコンテンツラボに出会えて良かった✨ #ACL成果',
      postedAt: '2025-01-20T11:15:00Z',
      imageUrl: null
    },
    {
      id: 'dummy-3',
      url: 'https://twitter.com/user3/status/3',
      authorName: '山田次郎',
      authorHandle: 'yamada_writer',
      content: 'AIライティングのスキルを身につけてから、仕事の効率が格段に上がりました📈 「今日の生徒が明日の講師」を実感しています🎓 #ACL成果',
      postedAt: '2025-01-18T13:45:00Z',
      imageUrl: null
    }
  ]
}

async function getTestimonials(): Promise<Testimonial[]> {
  // 現在はモックデータ、後でAPIから取得
  return [
    {
      id: '1',
      name: 'T.Kさん',
      content: 'AIコンテンツラボに参加してから、AIの使い方が劇的に変わりました。最初は何から始めればいいかわからなかったのですが、段階的な学習カリキュラムのおかげで着実にスキルアップできています。',
      createdAt: new Date('2025-01-15')
    },
    {
      id: '2',
      name: 'M.Yさん',
      content: 'コミュニティの雰囲気がとても良く、質問しやすい環境です。講師の方々も親身になって教えてくださるので、初心者の私でも安心して学習を続けられています。',
      createdAt: new Date('2025-01-10')
    },
    {
      id: '3',
      name: 'H.Sさん',
      content: '実践的な内容が多く、学んだことをすぐに仕事に活かせるのが魅力です。特に、実際のプロジェクトで使えるテクニックを教えてもらえるのが助かっています。',
      createdAt: new Date('2025-01-05')
    }
  ]
}

export default async function MembersPage() {
  const [tweets, testimonials] = await Promise.all([
    getTweets(),
    getTestimonials()
  ])

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-50 via-white to-cyan-50 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Members
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
            メンバーの口コミと成果報告をご紹介します
          </p>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              メンバーの声
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
                <div className="text-gray-800 mb-6 leading-relaxed">
                  "{testimonial.content}"
                </div>
                <div className="text-right">
                  <div className="font-semibold text-gray-700">
                    {testimonial.name || '匿名'}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="bg-gray-50 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              成果報告
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              実際にメンバーが投稿した成果報告をご覧ください
            </p>
          </div>
          
          {tweets.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
            <div className="text-center text-gray-500">
              <p>成果報告はまだありません</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-orange-600 to-orange-700 py-16 lg:py-24 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            あなたも一緒に学びませんか？
          </h2>
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
            今日の生徒が明日の講師。<br />
            一緒に学び、成長し、誰かの先生になりましょう。
          </p>
          
          <a 
            href="/newsletter" 
            className="inline-block bg-white text-orange-600 hover:bg-orange-50 font-bold py-4 px-8 rounded-full shadow-lg transform hover:scale-105 transition-all duration-200 text-lg"
          >
            特典動画を受け取る（無料）
          </a>
        </div>
      </section>
    </div>
  )
}