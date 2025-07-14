import { Metadata } from 'next'

export const metadata: Metadata = {
  title: '無料ウェビナー | AI Contents Labo',
  description: '毎週木曜日開催の無料ウェビナー。子育て中でもAIで収入を得るための具体的なノウハウを学べます。',
}

export default function WebinarPage() {
  return (
    <div className="bg-warm-50 min-h-screen">
      {/* ヒーローセクション */}
      <section className="bg-gradient-to-br from-cyan-50 to-orange-50 section-padding">
        <div className="container-max">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              🎥 無料ウェビナー
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-8">
              毎週木曜日 20:00〜21:00<br />
              子どもが寝た後の時間で、<br className="sm:hidden" />AIの可能性を一緒に探しましょう
            </p>
            
            <div className="bg-white rounded-2xl p-8 shadow-xl max-w-2xl mx-auto">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">🎯 次回開催予定</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="text-center">
                  <div className="text-3xl mb-2">📅</div>
                  <div className="text-lg font-semibold text-gray-800">7月17日（木）</div>
                  <div className="text-sm text-gray-600">20:00〜21:00</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl mb-2">🎯</div>
                  <div className="text-lg font-semibold text-gray-800">参加費無料</div>
                  <div className="text-sm text-gray-600">Zoom開催</div>
                </div>
              </div>
              
              <a 
                href="https://nmo-event.peatix.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-primary text-lg w-full inline-block text-center"
              >
                🎫 今すぐPeatixで申込む
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 今月のウェビナー予定 */}
      <section className="bg-white section-padding">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              📅 今月のウェビナー予定
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-6 text-center">
              <div className="text-3xl mb-3">📝</div>
              <h3 className="font-bold text-gray-800 mb-2">7月17日（木）</h3>
              <h4 className="text-sm font-semibold text-orange-700 mb-2">
                【初心者歓迎】ChatGPTで子育てブログを収益化
              </h4>
              <p className="text-xs text-gray-600 mb-3">
                育児体験談を魅力的な記事に変える方法
              </p>
              <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-xs">申込受付中</span>
            </div>
            
            <div className="bg-gradient-to-br from-cyan-50 to-cyan-100 rounded-xl p-6 text-center">
              <div className="text-3xl mb-3">🎨</div>
              <h3 className="font-bold text-gray-800 mb-2">7月24日（木）</h3>
              <h4 className="text-sm font-semibold text-cyan-700 mb-2">
                スキマ時間でできるAI画像生成＆販売術
              </h4>
              <p className="text-xs text-gray-600 mb-3">
                Midjourneyを使った実践的な収益化手法
              </p>
              <span className="bg-cyan-500 text-white px-3 py-1 rounded-full text-xs">準備中</span>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 text-center">
              <div className="text-3xl mb-3">🏆</div>
              <h3 className="font-bold text-gray-800 mb-2">7月31日（木）</h3>
              <h4 className="text-sm font-semibold text-purple-700 mb-2">
                【成功事例】ママ会員の月5万円達成ストーリー
              </h4>
              <p className="text-xs text-gray-600 mb-3">
                双子ママの実体験とコツを大公開
              </p>
              <span className="bg-purple-500 text-white px-3 py-1 rounded-full text-xs">準備中</span>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 text-center">
              <div className="text-3xl mb-3">🤖</div>
              <h3 className="font-bold text-gray-800 mb-2">8月7日（木）</h3>
              <h4 className="text-sm font-semibold text-green-700 mb-2">
                Claude vs ChatGPT：子育てママが選ぶべきAIは？
              </h4>
              <p className="text-xs text-gray-600 mb-3">
                実際の使い比べデモあり
              </p>
              <span className="bg-green-500 text-white px-3 py-1 rounded-full text-xs">準備中</span>
            </div>
          </div>
        </div>
      </section>

      {/* ウェビナーの特徴 */}
      <section className="bg-gradient-to-br from-purple-50 to-cyan-50 section-padding">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              ✨ AI Contents Laboのウェビナーの特徴
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 text-center shadow-lg card-hover">
              <div className="text-4xl mb-4">👶</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">子育て中心の設計</h3>
              <p className="text-gray-600 text-sm">
                子どもが寝た後の時間帯に開催。急な中断もOK、録画で後から視聴可能です。
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-8 text-center shadow-lg card-hover">
              <div className="text-4xl mb-4">💡</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">実践重視の内容</h3>
              <p className="text-gray-600 text-sm">
                理論だけでなく、実際に収入につながる具体的な手法をデモ付きで解説します。
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-8 text-center shadow-lg card-hover">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">質問・相談歓迎</h3>
              <p className="text-gray-600 text-sm">
                個別の状況に合わせたアドバイス。チャットでいつでも質問できます。
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-8 text-center shadow-lg card-hover">
              <div className="text-4xl mb-4">📚</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">専用資料プレゼント</h3>
              <p className="text-gray-600 text-sm">
                ウェビナー参加者限定の実践的なワークシートや チェックリストを配布。
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-8 text-center shadow-lg card-hover">
              <div className="text-4xl mb-4">🎥</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">録画アーカイブ</h3>
              <p className="text-gray-600 text-sm">
                参加者は過去のウェビナー録画も視聴可能。復習や見逃し配信で学習を継続。
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-8 text-center shadow-lg card-hover">
              <div className="text-4xl mb-4">👥</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">コミュニティ招待</h3>
              <p className="text-gray-600 text-sm">
                参加者は実践コミュニティに招待。仲間と一緒に継続的に学習できます。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* よくある質問 */}
      <section className="bg-white section-padding">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              ❓ よくある質問
            </h2>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-gradient-to-r from-orange-50 to-cyan-50 rounded-xl p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-3">
                Q. 本当に無料ですか？後から料金を請求されませんか？
              </h3>
              <p className="text-gray-700">
                A. 完全無料です。料金を請求することは一切ありません。有料サービスについては別途ご案内いたしますが、強制ではありません。
              </p>
            </div>
            
            <div className="bg-gradient-to-r from-cyan-50 to-purple-50 rounded-xl p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-3">
                Q. 子どもが泣いたり、急用で途中退席しても大丈夫ですか？
              </h3>
              <p className="text-gray-700">
                A. もちろん大丈夫です。録画も提供するので、後からゆっくり視聴していただけます。子育て中の方を応援するのが私たちの使命です。
              </p>
            </div>
            
            <div className="bg-gradient-to-r from-purple-50 to-orange-50 rounded-xl p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-3">
                Q. AI初心者でも理解できる内容ですか？
              </h3>
              <p className="text-gray-700">
                A. はい。専門用語を使わず、AIを触ったことがない方でも理解できるよう丁寧に説明します。実際のPC画面をお見せしながら進行します。
              </p>
            </div>
            
            <div className="bg-gradient-to-r from-green-50 to-cyan-50 rounded-xl p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-3">
                Q. 参加できない回があっても大丈夫ですか？
              </h3>
              <p className="text-gray-700">
                A. 大丈夫です。過去のウェビナー録画もご視聴いただけるので、マイペースで学習を進めてください。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-orange-500 to-cyan-600 section-padding text-white">
        <div className="container-max text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            🎯 今すぐ無料ウェビナーに参加しよう
          </h2>
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
            子育て中でも新しい可能性を見つけられることを、<br className="sm:hidden" />一緒に確かめてみませんか？
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://nmo-event.peatix.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white text-orange-600 font-bold py-4 px-8 rounded-full hover:bg-orange-50 transition-colors text-lg"
            >
              🎫 Peatixで今すぐ申込む
            </a>
            <a href="/newsletter" className="bg-transparent border-2 border-white text-white font-bold py-4 px-8 rounded-full hover:bg-white hover:text-orange-600 transition-colors text-lg">
              📧 メルマガでも情報をお届け
            </a>
          </div>
          
          <div className="mt-8 text-sm text-orange-100">
            📧 申込み完了後、開催前日にリマインドメールをお送りします
          </div>
        </div>
      </section>
    </div>
  )
}