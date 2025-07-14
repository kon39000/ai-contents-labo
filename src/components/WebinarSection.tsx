'use client'

export default function WebinarSection() {
  return (
    <section id="webinar" className="bg-white section-padding">
      <div className="container-max">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            🎥 週1回 x 15分学習で身につく無料ウェビナー
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            「何から始めればいいかわからない」を解決！<br />
            100円noteに向けた具体的なステップをお届けします
          </p>
        </div>
        
        <div className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-2xl p-8 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                次回ウェビナー予定
              </h3>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center text-lg">
                  <span className="text-2xl mr-3">📅</span>
                  <span>毎週木曜日 20:00〜21:00</span>
                </div>
                <div className="flex items-center text-lg">
                  <span className="text-2xl mr-3">💻</span>
                  <span>オンライン開催（Zoom）</span>
                </div>
                <div className="flex items-center text-lg">
                  <span className="text-2xl mr-3">💰</span>
                  <span className="font-semibold text-secondary-600">完全無料</span>
                </div>
              </div>
              
              <div className="mb-8">
                <h4 className="text-lg font-semibold mb-3">最近のテーマ例：</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2">•</span>
                    【超初心者向け】ChatGPTで最初の100円note作成
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2">•</span>
                    スキマ時間15分でできるAI文章術
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2">•</span>
                    月1,000円達成者の最初の一歩実例
                  </li>
                </ul>
              </div>
              
              <a 
                href="https://nmo-event.peatix.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-primary text-lg px-8 py-4 inline-block"
              >
                🎫 Peatixで参加申込み
              </a>
            </div>
            
            <div className="text-center">
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="text-6xl mb-4">🎯</div>
                <h4 className="text-xl font-bold mb-4">参加者限定特典</h4>
                <div className="space-y-3 text-left">
                  <div className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>ウェビナー専用資料</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Q&A個別回答</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>録画アーカイブ視聴権</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>コミュニティ招待</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}