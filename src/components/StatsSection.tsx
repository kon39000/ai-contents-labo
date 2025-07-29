export default function StatsSection() {
  return (
    <section className="bg-gradient-to-r from-orange-600 to-cyan-600 py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            数字で見るAIコンテンツラボの実績
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            多くのメンバーが実際に成果を出している実績があります
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* コミュニティメンバー数 */}
          <div className="text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                5,700<span className="text-2xl">+</span>
              </div>
              <div className="text-white/90 font-medium text-lg mb-2">
                コミュニティメンバー
              </div>
              <div className="text-white/70 text-sm">
                無料・有料会員の総数
              </div>
            </div>
          </div>
          
          {/* 有料会員数 */}
          <div className="text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                600<span className="text-2xl">+</span>
              </div>
              <div className="text-white/90 font-medium text-lg mb-2">
                有料会員
              </div>
              <div className="text-white/70 text-sm">
                本格的に学習中のメンバー
              </div>
            </div>
          </div>
          
          {/* 成果達成者数 */}
          <div className="text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                50<span className="text-2xl">+</span>
              </div>
              <div className="text-white/90 font-medium text-lg mb-2">
                成果達成者
              </div>
              <div className="text-white/70 text-sm">
                収益化・出版等を実現
              </div>
            </div>
          </div>
          
          {/* 平均収益化期間 */}
          <div className="text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                3<span className="text-2xl">ヶ月</span>
              </div>
              <div className="text-white/90 font-medium text-lg mb-2">
                平均収益化期間
              </div>
              <div className="text-white/70 text-sm">
                学習開始から初収益まで
              </div>
            </div>
          </div>
        </div>
        
        {/* 追加の実績ポイント */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">📚</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Kindle出版者多数</h3>
            <p className="text-white/80 text-sm">
              メンバーの中から多数のKindle作家が誕生
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🎵</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">AI創作活動活発</h3>
            <p className="text-white/80 text-sm">
              音楽制作、小説執筆など多様な創作活動
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">💻</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">技術スキル向上</h3>
            <p className="text-white/80 text-sm">
              プログラミング、ツール開発で実践力UP
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}