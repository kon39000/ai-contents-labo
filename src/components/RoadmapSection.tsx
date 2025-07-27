'use client'

export default function RoadmapSection() {
  const roadmapSteps = [
    {
      month: "1ヶ月目",
      title: "戦略構築期",
      sessions: [
        "収益化戦略と情報発信",
        "AI活用基礎とツール習得"
      ]
    },
    {
      month: "2ヶ月目", 
      title: "実践開始期",
      sessions: [
        "SNS運用と情報発信",
        "100円note実践制作"
      ]
    },
    {
      month: "3ヶ月目",
      title: "収益化実現期",
      sessions: [
        "Kindle出版実践",
        "セールス戦略と価格設定"
      ]
    },
    {
      month: "4ヶ月目",
      title: "仕組み化完成期",
      sessions: [
        "効率化と仕組み作り",
        "成果発表と今後の展開"
      ]
    }
  ]

  const achievements = [
    { icon: "💰", text: "月1,000〜5,000円の収益" },
    { icon: "📝", text: "100円note 1-2本制作" },
    { icon: "📖", text: "Kindle 1冊出版" },
    { icon: "📱", text: "SNS定期発信" },
    { icon: "🤖", text: "AI活用スキル習得" }
  ]

  return (
    <section className="bg-gradient-to-br from-cyan-50 to-orange-50 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            4ヶ月ロードマップセミナー
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
            有料メンバー限定 - 月5万円への確実な道筋を作る体系的プログラム
          </p>
          <div className="inline-flex items-center bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-sm font-medium">
            📅 2週間に1回の講座 | ⏰ 1日15-30分の学習
          </div>
        </div>

        {/* ロードマップ */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
            学習カリキュラム
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {roadmapSteps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
                  <div className="text-center mb-4">
                    <span className="inline-block bg-gradient-to-r from-cyan-500 to-orange-500 text-white text-sm font-bold px-3 py-1 rounded-full">
                      {step.month}
                    </span>
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-3 text-center">
                    {step.title}
                  </h4>
                  <ul className="space-y-2">
                    {step.sessions.map((session, sessionIndex) => (
                      <li key={sessionIndex} className="text-sm text-gray-700 flex items-start">
                        <span className="inline-block w-2 h-2 bg-orange-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        {session}
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* 矢印（最後以外） */}
                {index < roadmapSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                    <svg className="w-6 h-6 text-orange-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* 4ヶ月後の成果 */}
        <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl mb-12">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
            4ヶ月後に達成できること
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl mb-3">{achievement.icon}</div>
                <p className="text-gray-700 text-sm font-medium">{achievement.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 卒業後の選択肢 */}
        <div className="text-center mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            4ヶ月後の選択肢
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="text-3xl mb-3">🚀</div>
              <h4 className="font-bold text-gray-900 mb-2">自立して継続</h4>
              <p className="text-sm text-gray-600">学んだスキルで独立してコンテンツ制作を継続</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="text-3xl mb-3">📈</div>
              <h4 className="font-bold text-gray-900 mb-2">アドバンスコース</h4>
              <p className="text-sm text-gray-600">さらなる収益向上を目指すプログラムに参加</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="text-3xl mb-3">👨‍🏫</div>
              <h4 className="font-bold text-gray-900 mb-2">個別コンサル</h4>
              <p className="text-sm text-gray-600">マンツーマンでのさらなる成長サポート</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="text-gray-600 mb-6">
            ロードマップセミナーは有料メンバー限定のプログラムです
          </p>
          <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
            <a 
              href="https://roadmap50k.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transform hover:scale-105 transition-all duration-200"
            >
              詳細を確認する
            </a>
            <a 
              href="https://nmo1.com/p/r/DfDZJpzk"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transform hover:scale-105 transition-all duration-200"
            >
              まずは無料で始める
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}