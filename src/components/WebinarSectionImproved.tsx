'use client'

export default function WebinarSectionImproved() {
  return (
    <section id="webinar" className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            <span aria-hidden="true">🎥</span> 週1回 x 15分学習で身につく無料ウェビナー
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            「何から始めればいいかわからない」を解決！<br />
            AI効率化3ステップの具体的なロードマップをお届けします
          </p>
        </div>
        
        <div className="bg-gradient-to-br from-orange-50 to-cyan-50 rounded-2xl p-8 md:p-12 border border-orange-100">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                次回ウェビナー予定
              </h3>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center text-lg text-gray-700">
                  <span className="text-2xl mr-3" aria-hidden="true">📅</span>
                  <span>毎週木曜日 20:00〜21:00</span>
                </div>
                <div className="flex items-center text-lg text-gray-700">
                  <span className="text-2xl mr-3" aria-hidden="true">💻</span>
                  <span>オンライン開催（Zoom）</span>
                </div>
                <div className="flex items-center text-lg text-gray-700">
                  <span className="text-2xl mr-3" aria-hidden="true">💰</span>
                  <span className="font-semibold text-cyan-700">完全無料</span>
                </div>
              </div>
              
              <div className="mb-8">
                <h4 className="text-lg font-semibold mb-3 text-gray-900">最近のテーマ例：</h4>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-orange-600 mr-2 font-bold" aria-hidden="true">•</span>
                    【超初心者向け】ChatGPT基礎活用で業務効率化
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-600 mr-2 font-bold" aria-hidden="true">•</span>
                    スキマ時間15分でできるAI文章術
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-600 mr-2 font-bold" aria-hidden="true">•</span>
                    Vibeコーディング入門〜AIペアプログラミング実践
                  </li>
                </ul>
              </div>
              
              <a 
                href="https://nmo-event.peatix.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700 text-white font-bold py-4 px-8 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-200 text-lg"
                aria-label="Peatixでウェビナーに参加申込みする"
              >
                <span aria-hidden="true">🎫</span> Peatixで参加申込み
              </a>
            </div>
            
            <div className="text-center">
              <div className="bg-white rounded-xl p-8 shadow-lg border border-cyan-100">
                <div className="text-5xl mb-4" aria-hidden="true">🎯</div>
                <h4 className="text-xl font-bold mb-6 text-gray-900">参加者限定特典</h4>
                <div className="space-y-4 text-left">
                  <div className="flex items-start">
                    <span className="text-green-600 mr-3 mt-1" aria-hidden="true">✓</span>
                    <div>
                      <span className="font-semibold text-gray-900">ウェビナー専用資料</span>
                      <p className="text-sm text-gray-600 mt-1">復習用の詳細資料をプレゼント</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-green-600 mr-3 mt-1" aria-hidden="true">✓</span>
                    <div>
                      <span className="font-semibold text-gray-900">Q&A個別回答</span>
                      <p className="text-sm text-gray-600 mt-1">あなたの質問に直接お答えします</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-green-600 mr-3 mt-1" aria-hidden="true">✓</span>
                    <div>
                      <span className="font-semibold text-gray-900">録画アーカイブ視聴権</span>
                      <p className="text-sm text-gray-600 mt-1">見逃しても安心の復習動画</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-green-600 mr-3 mt-1" aria-hidden="true">✓</span>
                    <div>
                      <span className="font-semibold text-gray-900">コミュニティ招待</span>
                      <p className="text-sm text-gray-600 mt-1">仲間と一緒に学習を継続</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* 安心ポイントを追加 */}
        <div className="mt-12 text-center">
          <div className="bg-cyan-50 rounded-xl p-6 max-w-3xl mx-auto border border-cyan-200">
            <h4 className="text-lg font-semibold text-cyan-800 mb-3">
              <span aria-hidden="true">🤝</span> 初心者でも安心して参加できます
            </h4>
            <p className="text-cyan-700 text-sm leading-relaxed">
              「難しい話についていけるかな？」という心配は不要です。毎回、完全初心者向けの内容から始めて、
              実際にその場で一緒に操作しながら学んでいきます。わからないことはチャットで気軽に質問OK！
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}