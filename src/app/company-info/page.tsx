import { Metadata } from 'next'

export const metadata: Metadata = {
  title: '運営会社情報 | AI Contents Labo',
  description: 'AI Contents Laboの運営会社情報をご紹介します。',
}

export default function CompanyInfoPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-50 via-white to-cyan-50 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            運営会社情報
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
            AI Contents Laboを運営している会社の詳細情報をご紹介します
          </p>
        </div>
      </section>

      {/* Company Info Section */}
      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-orange-50 to-cyan-50 rounded-3xl p-8 lg:p-12 border border-orange-100">
              
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">基本情報</h3>
                    <div className="space-y-3">
                      <div>
                        <span className="font-semibold text-gray-700">会社名：</span>
                        <span className="text-gray-600">合同会社NFTオーケストラ</span>
                      </div>
                      <div>
                        <span className="font-semibold text-gray-700">サービス名：</span>
                        <span className="text-gray-600">AI Contents Labo</span>
                      </div>
                      <div>
                        <span className="font-semibold text-gray-700">代表者：</span>
                        <span className="text-gray-600">勝沼知世（こん）</span>
                      </div>
                      <div>
                        <span className="font-semibold text-gray-700">設立：</span>
                        <span className="text-gray-600">2023年</span>
                      </div>
                      <div>
                        <span className="font-semibold text-gray-700">会員数：</span>
                        <span className="text-gray-600">5,700名以上</span>
                      </div>
                      <div>
                        <span className="font-semibold text-gray-700">公式サイト：</span>
                        <a href="https://www.nft-orchestra.com/" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-700 underline">
                          https://www.nft-orchestra.com/
                        </a>
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
                      <li>• ウェビナー・セミナーの開催</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Mission Section */}
            <div className="mt-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                私たちのミッション
              </h2>
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  「今日の学びを、明日の力に」をモットーに、AI技術の普及と実践的活用を通じて、
                  多くの人々がより効率的で創造的なスキルアップを実現できるよう支援することを目指しています。
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  特に、忙しい会社員や主婦の方々でも取り組みやすい形でAI学習を提供し、
                  実践的なスキルの習得をサポートしています。
                </p>
              </div>
            </div>

            {/* Contact Section */}
            <div className="mt-12">
              <div className="bg-gradient-to-r from-orange-50 to-cyan-50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">お問い合わせ</h3>
                <div className="text-center space-y-4">
                  <p className="text-gray-700">
                    サービスに関するご質問やお問い合わせは、以下の方法でお気軽にご連絡ください。
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <a 
                      href="https://nmo-event.peatix.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold py-3 px-6 rounded-full transition-all duration-200"
                    >
                      ウェビナーで質問する
                    </a>
                    <a 
                      href="https://discord.gg/nmo" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="border-2 border-cyan-500 text-cyan-600 hover:bg-cyan-500 hover:text-white font-bold py-3 px-6 rounded-full transition-all duration-200"
                    >
                      Discordで相談する
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}