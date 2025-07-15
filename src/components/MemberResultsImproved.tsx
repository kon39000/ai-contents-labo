'use client'

export default function MemberResultsImproved() {
  // モックデータ - 実際のTwitter投稿データに置き換え予定
  const memberPosts = [
    {
      id: 1,
      name: "田中さん（会社員）",
      handle: "@tanaka_note",
      content: "初めての100円note、3日で5本売れました！🎉 通勤時間の15分学習の成果が出始めた...！AI Contents Laboで教わったステップ通りにやっただけです。最初の1,000円が見えてきた✨ #100円note #副業初心者",
      date: "2025-07-10",
      likes: 45,
      retweets: 12
    },
    {
      id: 2,
      name: "佐藤さん（主婦）",
      handle: "@sato_15min",
      content: "子どもの昼寝中15分 × 1週間でnote完成！😭 最初は『本当にできるの？』って不安だったけど、コミュニティのみんなに支えられて初投稿。300円の売上が人生初の副収入です💝 #スキマ時間 #主婦の副業",
      date: "2025-07-08",
      likes: 67,
      retweets: 23
    },
    {
      id: 3,
      name: "山田さん（フリーランス）",
      handle: "@yamada_ai_start",
      content: "AI初心者だった3ヶ月前の自分にびっくり👀 今月ついに月1,000円を超えて1,200円達成！小さな額だけど、自分の力で稼げたのが嬉しい。次は月3,000円目指します💪 #AI初心者 #小さな成功",
      date: "2025-07-05",
      likes: 89,
      retweets: 34
    },
    {
      id: 4,
      name: "鈴木さん（パート）",
      handle: "@suzuki_note_life",
      content: "『AIって難しそう』って思ってたけど、ウェビナーでコツコツ学んで今月800円！💰 パート代にプラスできるの嬉しい。一人だったら絶対挫折してたから、仲間がいるって大事🤝 #パート主婦 #AI学習",
      date: "2025-07-03",
      likes: 56,
      retweets: 18
    }
  ]

  return (
    <section className="bg-gray-50 section">
      <div className="container-max">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            <span aria-hidden="true">🎉</span> 小さな一歩から始まった成功体験
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            「1日15分」のAI学習から始めた仲間たちの<br />
            効率化成功体験をお届けします
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {memberPosts.map((post) => (
            <article 
              key={post.id} 
              className="card card-hover border border-gray-100"
              role="article"
              aria-labelledby={`member-${post.id}-name`}
            >
              <div className="flex items-start mb-4">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mr-4 border border-orange-200">
                  <span className="text-orange-700 font-bold text-lg" aria-hidden="true">
                    {post.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <h3 id={`member-${post.id}-name`} className="font-semibold text-gray-900">{post.name}</h3>
                  <p className="text-gray-600 text-sm">{post.handle}</p>
                </div>
              </div>
              
              <blockquote className="text-gray-800 mb-4 leading-relaxed text-sm">
                {post.content}
              </blockquote>
              
              <div className="flex items-center justify-between text-sm text-gray-500 pt-4 border-t border-gray-100">
                <time dateTime={post.date}>{post.date}</time>
                <div className="flex items-center space-x-4">
                  <span className="flex items-center" aria-label={`${post.likes}いいね`}>
                    <span className="text-red-500 mr-1" aria-hidden="true">❤️</span>
                    <span className="text-gray-700 font-medium">{post.likes}</span>
                  </span>
                  <span className="flex items-center" aria-label={`${post.retweets}リツイート`}>
                    <span className="text-green-500 mr-1" aria-hidden="true">🔄</span>
                    <span className="text-gray-700 font-medium">{post.retweets}</span>
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
        
        {/* CTAセクションを改善 - 1つのメインアクションに絞る */}
        <div className="text-center">
          <div className="card max-w-2xl mx-auto border border-orange-100">
            <div className="text-4xl mb-4" aria-hidden="true">🚀</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              あなたも同じような成果を出してみませんか？
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              メンバーたちと同じように、AIを活用して業務効率化を実現する方法を学べます。<br />
              まずは「AI効率化3ステップガイド」を無料で受け取って、最初の一歩を踏み出しましょう。
            </p>
            
            {/* メインCTA */}
            <div className="mb-4">
              <a 
                href="#newsletter" 
                className="inline-block bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold py-4 px-8 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-200 text-lg"
                aria-label="無料でAI効率化3ステップガイドを受け取る"
              >
                <span aria-hidden="true">📧</span> 無料でAI効率化3ステップガイドを受け取る
              </a>
            </div>
            
            {/* サブCTA */}
            <div>
              <a 
                href="#webinar" 
                className="inline-block bg-white border-2 border-cyan-500 text-cyan-600 hover:bg-cyan-50 font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
                aria-label="無料ウェビナーの詳細を見る"
              >
                <span aria-hidden="true">🎥</span> 無料ウェビナーで詳しく学ぶ
              </a>
            </div>
            
            <p className="text-xs text-gray-500 mt-4">
              ※特典はすべて無料です ※不要になったらいつでも配信停止できます
            </p>
          </div>
        </div>
        
        {/* 信頼感を高める追加情報 */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="text-center card border border-orange-100">
            <div className="text-2xl mb-2" aria-hidden="true">⭐</div>
            <div className="text-2xl font-bold text-orange-600 mb-1">4.8/5</div>
            <div className="text-sm text-gray-600">満足度評価</div>
          </div>
          <div className="text-center card border border-cyan-100">
            <div className="text-2xl mb-2" aria-hidden="true">👥</div>
            <div className="text-2xl font-bold text-cyan-600 mb-1">85%</div>
            <div className="text-sm text-gray-600">3ヶ月継続率</div>
          </div>
          <div className="text-center card border border-purple-100">
            <div className="text-2xl mb-2" aria-hidden="true">💰</div>
            <div className="text-2xl font-bold text-purple-600 mb-1">78%</div>
            <div className="text-sm text-gray-600">初収益達成率</div>
          </div>
        </div>
      </div>
    </section>
  )
}