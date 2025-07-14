import { Metadata } from 'next'
import TweetGallery from '@/components/TweetGallery'
import { SanityTweet } from '@/types/tweet'

export const metadata: Metadata = {
  title: 'メンバーの成果報告 - AI Contents Labo',
  description: '#ACL成果 で投稿された実際のメンバーの成功体験をご紹介。1日15分のAI学習から始まった皆さんの成長をご覧ください。',
  keywords: 'AI学習, 成果報告, 100円note, 副収入, 成功体験, メンバー',
}

// モックデータ（Sanity設定完了後に実際のデータに切り替え）
const mockTweets: SanityTweet[] = [
  {
    _id: '1',
    _type: 'tweet',
    _createdAt: '2025-01-13T00:00:00Z',
    _updatedAt: '2025-01-13T00:00:00Z',
    tweetId: '1234567890',
    text: '初めての100円note、3日で5本売れました！🎉 通勤時間の15分学習の成果が出始めた...！AI Contents Laboで教わったステップ通りにやっただけです。最初の1,000円が見えてきた✨ #ACL成果 #副業初心者',
    authorId: 'user1',
    authorName: '田中さん（会社員）',
    authorUsername: 'tanaka_note',
    authorProfileImageUrl: '',
    createdAt: '2025-01-10T10:00:00Z',
    publicMetrics: {
      retweetCount: 12,
      likeCount: 45,
      replyCount: 8,
      quoteCount: 3,
    },
    hashtags: ['ACL成果', '副業初心者'],
    approved: true,
    approvedAt: '2025-01-13T00:00:00Z',
    approvedBy: 'admin',
  },
  {
    _id: '2',
    _type: 'tweet',
    _createdAt: '2025-01-12T00:00:00Z',
    _updatedAt: '2025-01-12T00:00:00Z',
    tweetId: '1234567891',
    text: '子どもの昼寝中15分 × 1週間でnote完成！😭 最初は『本当にできるの？』って不安だったけど、コミュニティのみんなに支えられて初投稿。300円の売上が人生初の副収入です💝 #ACL成果 #スキマ時間 #主婦の副業',
    authorId: 'user2',
    authorName: '佐藤さん（主婦）',
    authorUsername: 'sato_15min',
    authorProfileImageUrl: '',
    createdAt: '2025-01-08T15:30:00Z',
    publicMetrics: {
      retweetCount: 23,
      likeCount: 67,
      replyCount: 15,
      quoteCount: 5,
    },
    hashtags: ['ACL成果', 'スキマ時間', '主婦の副業'],
    approved: true,
    approvedAt: '2025-01-12T00:00:00Z',
    approvedBy: 'admin',
  },
  {
    _id: '3',
    _type: 'tweet',
    _createdAt: '2025-01-11T00:00:00Z',
    _updatedAt: '2025-01-11T00:00:00Z',
    tweetId: '1234567892',
    text: 'AI初心者だった3ヶ月前の自分にびっくり👀 今月ついに月1,000円を超えて1,200円達成！小さな額だけど、自分の力で稼げたのが嬉しい。次は月3,000円目指します💪 #ACL成果 #AI初心者 #小さな成功',
    authorId: 'user3',
    authorName: '山田さん（フリーランス）',
    authorUsername: 'yamada_ai_start',
    authorProfileImageUrl: '',
    createdAt: '2025-01-05T20:15:00Z',
    publicMetrics: {
      retweetCount: 34,
      likeCount: 89,
      replyCount: 22,
      quoteCount: 8,
    },
    hashtags: ['ACL成果', 'AI初心者', '小さな成功'],
    approved: true,
    approvedAt: '2025-01-11T00:00:00Z',
    approvedBy: 'admin',
  },
]

async function getApprovedTweets(): Promise<SanityTweet[]> {
  // 開発環境ではモックデータを使用
  // 本番環境ではSanityから取得
  if (process.env.NODE_ENV === 'development') {
    return Promise.resolve(mockTweets)
  }
  
  try {
    // TODO: Sanity設定完了後にコメントアウトを外す
    /*
    const { createClient } = await import('@sanity/client')
    const sanityClient = createClient({
      projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '',
      dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
      useCdn: false,
      apiVersion: '2023-05-03',
    })

    const tweets = await sanityClient.fetch(`
      *[_type == "tweet" && approved == true] | order(createdAt desc) {
        _id,
        _type,
        _createdAt,
        _updatedAt,
        tweetId,
        text,
        authorId,
        authorName,
        authorUsername,
        authorProfileImageUrl,
        createdAt,
        publicMetrics,
        hashtags,
        approved,
        approvedAt,
        approvedBy
      }
    `)
    
    return tweets || []
    */
    return mockTweets
  } catch (error) {
    console.error('Failed to fetch tweets from Sanity:', error)
    return mockTweets
  }
}

export default async function MembersPage() {
  const tweets = await getApprovedTweets()

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-50 via-white to-cyan-50 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            <span className="text-orange-600">メンバーの成果報告</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
            「1日15分」「100円note」から始めた仲間たちの<br />
            <span className="font-semibold text-cyan-600">リアルな成功体験</span>をご覧ください
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto mb-8">
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-orange-100">
              <div className="text-3xl font-bold text-orange-600 mb-2">{tweets.length}</div>
              <div className="text-sm text-gray-600">承認済み投稿</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-cyan-100">
              <div className="text-3xl font-bold text-cyan-600 mb-2">
                {tweets.reduce((sum, tweet) => sum + tweet.publicMetrics.likeCount, 0)}
              </div>
              <div className="text-sm text-gray-600">総いいね数</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-purple-100">
              <div className="text-3xl font-bold text-purple-600 mb-2">
                {new Set(tweets.map(tweet => tweet.authorId)).size}
              </div>
              <div className="text-sm text-gray-600">参加メンバー</div>
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 max-w-2xl mx-auto border border-orange-100">
            <p className="text-gray-700 text-sm leading-relaxed">
              <span className="font-semibold text-orange-600">#ACL成果</span> のハッシュタグ付きで投稿された
              メンバーの実際の成果報告です。<br />
              あなたも同じように小さな一歩から始めてみませんか？
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {tweets.length > 0 ? (
            <TweetGallery tweets={tweets} />
          ) : (
            <div className="bg-white rounded-xl p-12 shadow-lg border border-gray-100 text-center">
              <div className="text-6xl mb-6" aria-hidden="true">📝</div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                成果報告を準備中です
              </h2>
              <p className="text-gray-600 mb-8 max-w-md mx-auto">
                メンバーの皆様からの成果報告を承認・掲載準備中です。<br />
                しばらくお待ちください。
              </p>
              <div className="space-y-4">
                <a 
                  href="#newsletter" 
                  className="inline-block bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold py-3 px-6 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-200"
                >
                  <span aria-hidden="true">📧</span> まずは無料で始める
                </a>
                <div>
                  <a 
                    href="/webinar" 
                    className="inline-block bg-white border-2 border-cyan-500 text-cyan-600 hover:bg-cyan-50 font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
                  >
                    <span aria-hidden="true">🎥</span> ウェビナーで詳しく学ぶ
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-orange-600 to-orange-700 py-16 px-4 sm:px-6 lg:px-8 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span aria-hidden="true">🚀</span> あなたも成果を出してみませんか？
          </h2>
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
            メンバーたちと同じように、1日15分のAI学習から始めて<br />
            あなたの成功体験を #ACL成果 で共有しましょう
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="/#newsletter" 
              className="inline-block bg-white text-orange-600 hover:bg-orange-50 font-bold py-4 px-8 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-200 text-lg"
            >
              <span aria-hidden="true">📧</span> 無料で100円note作成ガイドを受け取る
            </a>
            <a 
              href="/webinar" 
              className="inline-block bg-white/20 backdrop-blur-sm border-2 border-white text-white hover:bg-white/30 font-semibold py-4 px-8 rounded-lg transition-all duration-200"
            >
              <span aria-hidden="true">🎥</span> ウェビナーに参加する
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}