import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'ニュース | AI Contents Labo',
  description: 'AI Contents Laboの最新ニュース、お知らせ、アップデート情報をお届けします。',
}

export default function NewsPage() {
  return (
    <div className="bg-warm-50 min-h-screen">
      {/* ヒーローセクション */}
      <section className="bg-gradient-to-br from-orange-50 to-cyan-50 section-padding">
        <div className="container-max">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              📰 ニュース
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
              AI Contents Laboの最新情報をお届けします
            </p>
          </div>
        </div>
      </section>

      {/* コンテンツ */}
      <section className="bg-white section-padding">
        <div className="container-max">
          <div className="text-center">
            <div className="text-6xl mb-6">🚧</div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">準備中</h2>
            <p className="text-gray-600 mb-8">
              ニュースページは現在準備中です。<br />
              最新情報は公式メルマガでお届けしています。
            </p>
            <a href="/newsletter" className="bg-orange-500 text-white font-bold py-3 px-6 rounded-full hover:bg-orange-600 transition-colors">
              📧 メルマガに登録
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}