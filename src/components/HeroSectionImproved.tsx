'use client'

import Link from 'next/link'

export default function HeroSectionImproved() {
  return (
    <section className="relative bg-gradient-to-br from-white to-orange-50 py-16 lg:py-24 overflow-hidden">
      {/* 背景装飾 */}
      <div className="absolute inset-0 opacity-5 pointer-events-none hidden lg:block">
        <div className="absolute top-20 left-10 text-4xl">🎓</div>
        <div className="absolute top-32 right-16 text-3xl">🚀</div>
        <div className="absolute bottom-24 left-20 text-3xl">👥</div>
        <div className="absolute bottom-16 right-12 text-4xl">💡</div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            学ぶだけで終わらせない。<br />
            <span className="text-orange-600">作り、発信し、</span><br />
            <span className="text-cyan-600">誰かの先生になろう。</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-4xl mx-auto leading-relaxed">
            <span className="font-semibold text-orange-600">「今日の生徒が明日の講師」</span><br />
            AIコンテンツラボは、学び・実践・仲間づくりを通じて、<br />
            あなたのコンテンツ力を育てるコミュニティです。
          </p>
          
          {/* 特典動画紹介 */}
          <div className="bg-white bg-opacity-80 backdrop-blur-sm rounded-2xl p-6 mb-8 max-w-3xl mx-auto border border-orange-200 shadow-lg">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                🎁 特典動画プレゼント
              </h3>
              <p className="text-lg text-gray-700 mb-4">
                <span className="font-semibold text-orange-600">０から始めるバイブコーディング</span>
              </p>
              <p className="text-gray-600 mb-4">
                初心者向けの動画講座5本をプレゼント！<br />
                基礎から丁寧に解説した特別コンテンツです。
              </p>
            </div>
          </div>

          {/* メインCTA */}
          <div className="mt-8 mb-12">
            <Link 
              href="https://nmo1.com/p/r/DfDZJpzk"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold py-4 px-8 rounded-full shadow-lg transform hover:scale-105 transition-all duration-200 text-lg"
            >
              特典動画を受け取る（無料）
            </Link>
            <p className="text-sm text-gray-600 mt-3">
              ※いつでも配信停止可能
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}