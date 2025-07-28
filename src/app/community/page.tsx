import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'コミュニティ | AI Contents Labo',
  description: 'AI Contents Laboのコミュニティについてご紹介します。仲間と一緒にAI活用を学びませんか？',
}

export default function CommunityPage() {
  const features = [
    {
      icon: "👥",
      title: "活発な交流",
      description: "5,700名以上のメンバーが日々情報交換"
    },
    {
      icon: "🎯",
      title: "実践的な学び",
      description: "理論だけでなく実際の案件獲得まで"
    },
    {
      icon: "👶",
      title: "子育て理解",
      description: "子育て最優先で参加できる環境"
    },
    {
      icon: "💡",
      title: "最新情報",
      description: "AIの最新トレンドを常にキャッチアップ"
    }
  ]

  const activities = [
    {
      title: "毎週のウェビナー",
      description: "最新のAI活用方法や成功事例を共有",
      frequency: "毎週火曜 21:00〜"
    },
    {
      title: "質問・相談タイム",
      description: "わからないことは何でも質問OK",
      frequency: "随時"
    },
    {
      title: "成果報告会",
      description: "メンバーの成功事例を共有",
      frequency: "月1回"
    },
    {
      title: "グループワーク",
      description: "チームで課題に取り組む",
      frequency: "月2回"
    }
  ]

  return (
    <div className="bg-warm-50 min-h-screen">
      {/* ヒーローセクション */}
      <section className="bg-gradient-to-br from-orange-50 to-cyan-50 section-padding">
        <div className="container-max">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              🤝 コミュニティ
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
              同じ想いを持つ仲間と一緒に<br className="sm:hidden" />AI活用の可能性を広げませんか？
            </p>
          </div>
        </div>
      </section>

      {/* コミュニティの特徴 */}
      <section className="bg-white section-padding">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              ✨ コミュニティの特徴
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="text-6xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* コミュニティ活動 */}
      <section className="bg-gradient-to-br from-cyan-50 to-purple-50 section-padding">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              📅 コミュニティ活動
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {activities.map((activity, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{activity.title}</h3>
                <p className="text-gray-600 mb-4">{activity.description}</p>
                <div className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm font-semibold inline-block">
                  {activity.frequency}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* メンバーの声 */}
      <section className="bg-white section-padding">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              💬 メンバーの声
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-xl p-6">
              <div className="text-4xl mb-4">👩‍💼</div>
              <p className="text-gray-700 mb-4">
                「子育てで外に働きに出られない中、コミュニティのおかげで月5万円の収入を得られるようになりました。」
              </p>
              <div className="text-sm text-gray-500">30代ママ・Aさん</div>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-6">
              <div className="text-4xl mb-4">👨‍💻</div>
              <p className="text-gray-700 mb-4">
                「AI初心者でしたが、仲間のサポートで3ヶ月で案件を獲得できました。」
              </p>
              <div className="text-sm text-gray-500">40代パパ・Bさん</div>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-6">
              <div className="text-4xl mb-4">👩‍🎓</div>
              <p className="text-gray-700 mb-4">
                「毎週のウェビナーで最新情報をキャッチアップできるのが本当に助かります。」
              </p>
              <div className="text-sm text-gray-500">20代ママ・Cさん</div>
            </div>
          </div>
        </div>
      </section>

      {/* 参加方法 */}
      <section className="bg-gradient-to-br from-orange-50 to-cyan-50 section-padding">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              🚀 参加方法
            </h2>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-orange-600 font-bold text-xl">1</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">メルマガ登録</h3>
                <p className="text-gray-600">まずはメルマガに登録して基本情報を受け取ります</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-cyan-600 font-bold text-xl">2</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">ウェビナー参加</h3>
                <p className="text-gray-600">無料ウェビナーでコミュニティの雰囲気を体験</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-purple-600 font-bold text-xl">3</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">本格参加</h3>
                <p className="text-gray-600">コミュニティメンバーとして本格的にスタート</p>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <p className="text-xl text-gray-700 mb-8">
              まずは無料から始めてみませんか？
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/newsletter" className="bg-orange-500 text-white font-bold py-4 px-8 rounded-full hover:bg-orange-600 transition-colors">
                📧 メルマガに登録
              </a>
              <a href="/webinar" className="bg-transparent border-2 border-orange-500 text-orange-500 font-bold py-4 px-8 rounded-full hover:bg-orange-500 hover:text-white transition-colors">
                🎥 無料ウェビナーに参加
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}