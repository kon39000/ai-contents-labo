import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us - AI Contents Labo',
  description: '運営者「こん」のプロフィールと会社情報、運営実績をご紹介します。',
  keywords: 'AI Contents Labo, 運営者, プロフィール, 会社情報, 実績',
}

export default function AboutUsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-50 via-white to-cyan-50 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About Us
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
            AI Contents Laboの運営者と会社情報をご紹介します
          </p>
        </div>
      </section>

      {/* Profile Section */}
      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              運営者プロフィール
            </h2>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-orange-50 to-cyan-50 rounded-3xl p-8 lg:p-12 border border-orange-100">
              <div className="text-center mb-8">
                <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-6 flex items-center justify-center">
                  {/* Placeholder for profile image */}
                  <span className="text-4xl text-gray-500">👤</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                  こん
                </h3>
                <p className="text-lg text-gray-600">
                  AI Contents Labo 運営者
                </p>
              </div>
              
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 leading-relaxed mb-6">
                    AI技術の普及と活用を通じて、多くの人々がより効率的で創造的な働き方を実現できるよう支援することを目指しています。
                    特に、忙しい会社員や主婦の方々でも取り組みやすい形でAI学習を提供し、実践的なスキルの習得をサポートしています。
                  </p>
                  
                  <p className="text-gray-700 leading-relaxed mb-6">
                    「今日の生徒が明日の講師」という理念のもと、学んだ知識を他の人に教えることで、
                    コミュニティ全体が成長していく文化を大切にしています。
                  </p>
                  
                  <p className="text-gray-700 leading-relaxed">
                    継続的な学習と実践を通じて、AIを活用した新しい働き方やビジネスの可能性を探求し続けています。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Info Section */}
      <section className="bg-gray-50 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              会社情報
            </h2>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-lg border border-gray-200">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">基本情報</h3>
                  <div className="space-y-3">
                    <div>
                      <span className="font-semibold text-gray-700">会社名：</span>
                      <span className="text-gray-600">株式会社○○（仮）</span>
                    </div>
                    <div>
                      <span className="font-semibold text-gray-700">所在地：</span>
                      <span className="text-gray-600">東京都○○区○○（仮）</span>
                    </div>
                    <div>
                      <span className="font-semibold text-gray-700">設立：</span>
                      <span className="text-gray-600">20○○年○月（仮）</span>
                    </div>
                    <div>
                      <span className="font-semibold text-gray-700">代表者：</span>
                      <span className="text-gray-600">こん</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">事業内容</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• AI技術の教育・研修事業</li>
                    <li>• オンライン学習コンテンツの企画・制作</li>
                    <li>• コミュニティ運営・管理</li>
                    <li>• AIツール活用コンサルティング</li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-8 pt-8 border-t border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4">お問い合わせ</h3>
                <p className="text-gray-600">
                  <span className="font-semibold">メール：</span>
                  info@ai-contents-labo.com（仮）
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              運営実績
            </h2>
            <p className="text-gray-600">
              最終更新日：2025/07/24
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-orange-50 to-orange-100 border border-orange-200">
              <div className="text-3xl md:text-4xl font-bold text-orange-600 mb-2">12,100</div>
              <div className="text-sm text-gray-700">X（旧Twitter）フォロワー</div>
            </div>
            
            <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-red-50 to-red-100 border border-red-200">
              <div className="text-3xl md:text-4xl font-bold text-red-600 mb-2">2,360</div>
              <div className="text-sm text-gray-700">YouTube登録者数</div>
            </div>
            
            <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200">
              <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">570+</div>
              <div className="text-sm text-gray-700">noteフォロワー</div>
            </div>
            
            <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-green-50 to-green-100 border border-green-200">
              <div className="text-3xl md:text-4xl font-bold text-green-600 mb-2">1,100+</div>
              <div className="text-sm text-gray-700">stand.fmフォロワー</div>
            </div>
            
            <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-purple-50 to-purple-100 border border-purple-200">
              <div className="text-3xl md:text-4xl font-bold text-purple-600 mb-2">5,000+</div>
              <div className="text-sm text-gray-700">コミュニティ参加者<br />（無料含む）</div>
            </div>
            
            <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-indigo-50 to-indigo-100 border border-indigo-200">
              <div className="text-3xl md:text-4xl font-bold text-indigo-600 mb-2">10</div>
              <div className="text-sm text-gray-700">Udemy講座数</div>
            </div>
            
            <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-pink-50 to-pink-100 border border-pink-200">
              <div className="text-3xl md:text-4xl font-bold text-pink-600 mb-2">1,100+</div>
              <div className="text-sm text-gray-700">Udemy受講者数</div>
            </div>
            
            <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-cyan-50 to-cyan-100 border border-cyan-200">
              <div className="text-2xl md:text-3xl font-bold text-cyan-600 mb-2">開設準備中</div>
              <div className="text-sm text-gray-700">Voicy</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-orange-600 to-orange-700 py-16 lg:py-24 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            一緒に学び、成長しませんか？
          </h2>
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
            AIコンテンツラボで、あなたの学習とスキルアップをサポートします
          </p>
          
          <a 
            href="/newsletter" 
            className="inline-block bg-white text-orange-600 hover:bg-orange-50 font-bold py-4 px-8 rounded-full shadow-lg transform hover:scale-105 transition-all duration-200 text-lg"
          >
            特典動画を受け取る（無料）
          </a>
        </div>
      </section>
    </div>
  )
}