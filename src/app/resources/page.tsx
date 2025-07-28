import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'リソース | AI Contents Labo',
  description: 'AI Contents Laboが提供する学習リソース、ツール、テンプレートをご紹介します。',
}

export default function ResourcesPage() {
  const resources = [
    {
      category: "📚 学習教材",
      items: [
        { name: "ChatGPT完全マスターガイド", description: "基礎から応用まで網羅した完全ガイド", status: "無料" },
        { name: "プロンプトテンプレート集", description: "すぐに使える100のプロンプト", status: "無料" },
        { name: "AI活用事例集", description: "実際の成功事例を詳しく解説", status: "会員限定" }
      ]
    },
    {
      category: "🛠️ ツール・テンプレート",
      items: [
        { name: "収益化チェックリスト", description: "月5万円達成のためのステップ", status: "無料" },
        { name: "案件獲得テンプレート", description: "提案書や契約書のテンプレート", status: "会員限定" },
        { name: "作業効率化ツール集", description: "AIを活用した作業効率化ツール", status: "有料会員" }
      ]
    },
    {
      category: "🎥 動画コンテンツ",
      items: [
        { name: "毎週のウェビナー録画", description: "過去のウェビナーアーカイブ", status: "会員限定" },
        { name: "実践デモ動画", description: "実際の作業手順を動画で解説", status: "有料会員" },
        { name: "Q&Aセッション", description: "よくある質問への回答動画", status: "無料" }
      ]
    }
  ]

  return (
    <div className="bg-warm-50 min-h-screen">
      {/* ヒーローセクション */}
      <section className="bg-gradient-to-br from-orange-50 to-cyan-50 section-padding">
        <div className="container-max">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              📖 リソース
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
              AI活用に役立つ学習教材・ツール・テンプレートをご用意しています
            </p>
          </div>
        </div>
      </section>

      {/* リソース一覧 */}
      <section className="bg-white section-padding">
        <div className="container-max max-w-6xl">
          <div className="space-y-12">
            {resources.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  {category.category}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
                      <div className="flex justify-between items-start mb-3">
                        <h3 className="text-lg font-bold text-gray-900">{item.name}</h3>
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          item.status === '無料' ? 'bg-green-100 text-green-700' :
                          item.status === '会員限定' ? 'bg-blue-100 text-blue-700' :
                          'bg-purple-100 text-purple-700'
                        }`}>
                          {item.status}
                        </span>
                      </div>
                      <p className="text-gray-600 text-sm mb-4">{item.description}</p>
                      <button className="w-full bg-orange-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-orange-600 transition-colors">
                        詳細を見る
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* アクセス方法 */}
          <div className="bg-gradient-to-br from-orange-50 to-cyan-50 rounded-2xl p-8 mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              🔑 リソースへのアクセス方法
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-green-600 text-2xl">📖</span>
                </div>
                <h3 className="font-bold text-gray-800 mb-2">無料リソース</h3>
                <p className="text-sm text-gray-600">メルマガ登録だけで<br />すぐにアクセス可能</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-blue-600 text-2xl">👥</span>
                </div>
                <h3 className="font-bold text-gray-800 mb-2">会員限定</h3>
                <p className="text-sm text-gray-600">無料コミュニティ<br />メンバー向け</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-purple-600 text-2xl">⭐</span>
                </div>
                <h3 className="font-bold text-gray-800 mb-2">有料会員</h3>
                <p className="text-sm text-gray-600">4ヶ月集中プログラム<br />参加者向け</p>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <div className="space-y-4">
              <p className="text-gray-600 mb-6">
                まずは無料リソースから始めませんか？
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/newsletter" className="bg-orange-500 text-white font-bold py-3 px-6 rounded-full hover:bg-orange-600 transition-colors">
                  📧 メルマガに登録
                </a>
                <a href="/webinar" className="bg-transparent border-2 border-orange-500 text-orange-500 font-bold py-3 px-6 rounded-full hover:bg-orange-500 hover:text-white transition-colors">
                  🎥 無料ウェビナーに参加
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}