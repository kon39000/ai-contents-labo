import { Metadata } from 'next'

export const metadata: Metadata = {
  title: '私たちについて | AI Contents Labo',
  description: 'AI Contents Laboの理念、運営者情報、コミュニティの歴史について詳しくご紹介します。',
}

export default function AboutPage() {
  return (
    <div className="bg-warm-50 min-h-screen">
      {/* ヒーローセクション */}
      <section className="bg-gradient-to-br from-orange-50 to-cyan-50 section-padding">
        <div className="container-max">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              ℹ️ AI Contents Laboについて
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
              子育て中のママ・パパが<br className="sm:hidden" />AIで新しい可能性を見つけるためのコミュニティ
            </p>
          </div>
        </div>
      </section>

      {/* ミッション */}
      <section className="bg-white section-padding">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              🎯 私たちのミッション
            </h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-orange-600 mb-6">
                「子育て中でも諦めない」<br />
                新しい働き方を提案します
              </h3>
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p>
                  AI Contents Laboは、忙しい子育て中のママ・パパでも、AIの力を借りて新しい収入源を作れることを証明するコミュニティです。
                </p>
                <p>
                  「子どもが小さいから働きに出られない」<br />
                  「育児で時間がないからスキルアップできない」<br />
                  「将来の教育費が心配」
                </p>
                <p>
                  そんな悩みを抱える方々に、AIという新しい技術を活用した解決策を提供し、一人ひとりが自分らしく輝ける環境を作ることが私たちの使命です。
                </p>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-orange-50 to-cyan-50 rounded-2xl p-8">
              <div className="text-center mb-6">
                <div className="text-6xl mb-4">🌟</div>
                <h4 className="text-xl font-bold text-gray-800">3つの約束</h4>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <span className="text-orange-500 text-xl mr-3 mt-1">1</span>
                  <div>
                    <h5 className="font-semibold text-gray-800">子育て最優先</h5>
                    <p className="text-sm text-gray-600">お子さんとの時間を大切にしながら学べる環境</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-cyan-500 text-xl mr-3 mt-1">2</span>
                  <div>
                    <h5 className="font-semibold text-gray-800">仲間と支え合い</h5>
                    <p className="text-sm text-gray-600">同じ境遇の仲間たちと励まし合いながら成長</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-purple-500 text-xl mr-3 mt-1">3</span>
                  <div>
                    <h5 className="font-semibold text-gray-800">実践重視</h5>
                    <p className="text-sm text-gray-600">理論だけでなく実際に収入につながるサポート</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 運営者紹介 */}
      <section className="bg-gradient-to-br from-cyan-50 to-purple-50 section-padding">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              👨‍💻 運営者について
            </h2>
          </div>
          
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="text-center lg:text-left">
                <div className="w-32 h-32 bg-gradient-to-r from-orange-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto lg:mx-0 mb-6">
                  <span className="text-white font-bold text-4xl">N</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">のも（仮名）</h3>
                <p className="text-orange-600 font-semibold mb-4">AI Contents Labo 代表</p>
                <div className="flex flex-wrap justify-center lg:justify-start gap-2 mb-6">
                  <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm">AI活用専門家</span>
                  <span className="bg-cyan-100 text-cyan-700 px-3 py-1 rounded-full text-sm">コミュニティ運営</span>
                  <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm">子育て応援</span>
                </div>
              </div>
              
              <div className="space-y-4 text-gray-700">
                <p>
                  自身も2児の父親として、仕事と育児の両立に奮闘する中で、AIの可能性に出会いました。
                </p>
                <p>
                  「忙しい子育て世代こそ、AIの力を借りて効率的に収入を得られるはず」
                </p>
                <p>
                  この信念のもと、2023年からAI Contents Laboを立ち上げ、現在まで5,000名以上の方々のAI活用をサポートしています。
                </p>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800 mb-2">🏆 実績</h4>
                  <ul className="text-sm space-y-1">
                    <li>• ウェビナー開催数：100回以上</li>
                    <li>• コミュニティ会員数：5,700名以上</li>
                    <li>• 月収5万円達成者：200名以上</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* コミュニティの歴史 */}
      <section className="bg-white section-padding">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              📈 コミュニティの成長
            </h2>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              <div className="flex flex-col md:flex-row gap-6 items-center">
                <div className="w-24 h-24 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-orange-600 font-bold text-lg">2023.3</span>
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">🚀 AI Contents Labo 設立</h3>
                  <p className="text-gray-600">子育て中の方向けAI活用コミュニティとしてスタート。初回ウェビナーに50名が参加。</p>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row gap-6 items-center">
                <div className="w-24 h-24 bg-cyan-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-cyan-600 font-bold text-lg">2023.8</span>
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">🎯 会員数1,000名突破</h3>
                  <p className="text-gray-600">口コミで広がり、会員数が1,000名を突破。初の月収5万円達成者が誕生。</p>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row gap-6 items-center">
                <div className="w-24 h-24 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-purple-600 font-bold text-lg">2024.3</span>
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">🏆 有料会員サービス開始</h3>
                  <p className="text-gray-600">より深い学習を求める声に応え、4ヶ月集中プログラムを開始。</p>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row gap-6 items-center">
                <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-green-600 font-bold text-lg">2025.7</span>
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">🌟 現在</h3>
                  <p className="text-gray-600">総申込者12,000名突破。毎週のウェビナーと活発なコミュニティで成長を続けています。</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-orange-500 to-cyan-600 section-padding text-white">
        <div className="container-max text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            🤝 一緒にAIの可能性を探しませんか？
          </h2>
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
            AI Contents Laboで、新しい自分を発見してください
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/newsletter" className="bg-white text-orange-600 font-bold py-4 px-8 rounded-full hover:bg-orange-50 transition-colors">
              📧 メルマガで詳細を確認
            </a>
            <a href="/webinar" className="bg-transparent border-2 border-white text-white font-bold py-4 px-8 rounded-full hover:bg-white hover:text-orange-600 transition-colors">
              🎥 無料ウェビナーに参加
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}