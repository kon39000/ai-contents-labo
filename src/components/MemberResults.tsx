'use client'

export default function MemberResults() {
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
    <section className="bg-gray-50 section-padding">
      <div className="container-max">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            🎉 小さな一歩から始まった成功体験
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            「1日15分」「100円note」から始めた仲間たちの<br />
            リアルな声をお届けします
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {memberPosts.map((post) => (
            <div key={post.id} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-start mb-4">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-primary-600 font-bold text-lg">
                    {post.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{post.name}</h3>
                  <p className="text-gray-500 text-sm">{post.handle}</p>
                </div>
              </div>
              
              <p className="text-gray-800 mb-4 leading-relaxed">{post.content}</p>
              
              <div className="flex items-center justify-between text-sm text-gray-500">
                <span>{post.date}</span>
                <div className="flex items-center space-x-4">
                  <span className="flex items-center">
                    <span className="text-red-500 mr-1">❤️</span>
                    {post.likes}
                  </span>
                  <span className="flex items-center">
                    <span className="text-green-500 mr-1">🔄</span>
                    {post.retweets}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <div className="bg-white rounded-xl p-8 shadow-lg max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              あなたも成果を出してみませんか？
            </h3>
            <p className="text-gray-600 mb-6">
              メンバーたちと同じように、AIを活用して継続的な収入を得る方法を学べます
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#newsletter" className="btn-primary">
                📧 メルマガで詳細を確認
              </a>
              <a href="#webinar" className="btn-secondary">
                🎥 ウェビナーに参加
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}