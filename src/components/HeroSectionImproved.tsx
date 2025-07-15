'use client'

export default function HeroSectionImproved() {
  return (
    <section className="relative bg-gradient-to-br from-orange-50 via-white to-cyan-50 py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* 改善された背景装飾 - 視覚ノイズを軽減 */}
      <div className="absolute inset-0 opacity-5 pointer-events-none hidden lg:block">
        <div className="absolute top-20 left-10 text-4xl">🤖</div>
        <div className="absolute top-32 right-16 text-3xl">💡</div>
        <div className="absolute bottom-24 left-20 text-3xl">📝</div>
        <div className="absolute bottom-16 right-12 text-4xl">💰</div>
      </div>
      
      <div className="max-w-7xl mx-auto relative">
        {/* 実績バッジを上部に移動 */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8">
          <div className="bg-white/90 backdrop-blur-sm rounded-full px-3 sm:px-6 py-2 shadow-lg border border-orange-100">
            <span className="text-xs sm:text-sm font-bold text-orange-600">
              <span aria-hidden="true">👥</span> 総申込者12,000人突破！
            </span>
          </div>
          <div className="bg-white/90 backdrop-blur-sm rounded-full px-3 sm:px-6 py-2 shadow-lg border border-cyan-100">
            <span className="text-xs sm:text-sm font-bold text-cyan-600">
              <span aria-hidden="true">🎓</span> ウェビナー100回開催
            </span>
          </div>
        </div>
        
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            <span className="text-orange-600">ChatGPTから始めて</span><br />
            <span className="text-cyan-600">コーディングまで！</span><br />
            AI効率化ロードマップ
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
            忙しい会社員・主婦でも大丈夫！<br />
            <span className="font-semibold text-orange-600">1日15分 × 3週間</span>で<span className="font-semibold text-cyan-600">業務効率化</span>をマスターしよう
          </p>
          
          {/* メインCTAを1つに絞る */}
          <div className="mb-12">
            <a 
              href="#newsletter" 
              className="inline-block bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold py-4 px-8 rounded-full shadow-lg transform hover:scale-105 transition-all duration-200 text-lg"
              aria-label="無料メルマガに登録してAI効率化3ステップガイドを受け取る"
            >
              <span aria-hidden="true">🚀</span> AI効率化3ステップガイドを無料で受け取る
            </a>
            <p className="text-sm text-gray-600 mt-3">
              ※特典動画付き・いつでも配信停止可能
            </p>
          </div>
          
          {/* 特徴カードを改善 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-orange-100 hover:shadow-xl transition-all duration-300">
              <div className="text-3xl mb-3" aria-hidden="true">🤖</div>
              <h3 className="text-lg font-semibold mb-2 text-orange-700">ChatGPT基礎</h3>
              <p className="text-gray-600 text-sm">誰でもできる基本操作から始めて、コンテンツ作成の土台を作ります</p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-cyan-100 hover:shadow-xl transition-all duration-300">
              <div className="text-3xl mb-3" aria-hidden="true">⚡</div>
              <h3 className="text-lg font-semibold mb-2 text-cyan-700">Gemini CLI</h3>
              <p className="text-gray-600 text-sm">コマンドライン操作で業務効率を大幅アップ！実践導入ガイド付き</p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-purple-100 hover:shadow-xl transition-all duration-300">
              <div className="text-3xl mb-3" aria-hidden="true">🚀</div>
              <h3 className="text-lg font-semibold mb-2 text-purple-700">Vibeコーディング</h3>
              <p className="text-gray-600 text-sm">AIとペアプログラミング！最新の開発手法で生産性を最大化</p>
            </div>
          </div>
          
          {/* 補助CTA */}
          <div className="mt-8">
            <a 
              href="#webinar" 
              className="inline-block bg-white border-2 border-cyan-500 text-cyan-600 hover:bg-cyan-50 font-semibold py-3 px-6 rounded-full transition-colors duration-200"
              aria-label="無料ウェビナーの詳細を見る"
            >
              <span aria-hidden="true">🎥</span> 無料ウェビナーを見てみる
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}