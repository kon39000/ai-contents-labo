'use client'

export default function CompanyInfoSection() {
  return (
    <section className="bg-gray-50 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            運営会社情報
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            AIコンテンツラボを運営する合同会社NFTオーケストラについて
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* 会社基本情報 */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  会社概要
                </h3>
                
                <div className="space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-center">
                    <dt className="font-semibold text-gray-700 mb-1 sm:mb-0 sm:w-24">
                      会社名
                    </dt>
                    <dd className="text-gray-900">
                      合同会社NFTオーケストラ
                    </dd>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row sm:items-center">
                    <dt className="font-semibold text-gray-700 mb-1 sm:mb-0 sm:w-24">
                      代表
                    </dt>
                    <dd className="text-gray-900">
                      勝沼知世（こん）
                    </dd>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row sm:items-center">
                    <dt className="font-semibold text-gray-700 mb-1 sm:mb-0 sm:w-24">
                      設立
                    </dt>
                    <dd className="text-gray-900">
                      2022年6月14日
                    </dd>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row sm:items-start">
                    <dt className="font-semibold text-gray-700 mb-1 sm:mb-0 sm:w-24">
                      事業内容
                    </dt>
                    <dd className="text-gray-900">
                      AI技術を活用したコンテンツ制作支援<br />
                      オンライン教育・コミュニティ運営<br />
                      デジタルコンテンツ企画・制作
                    </dd>
                  </div>
                </div>
              </div>
              
              {/* お問い合わせ情報 */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  お問い合わせ
                </h3>
                
                <div className="space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-center">
                    <dt className="font-semibold text-gray-700 mb-1 sm:mb-0 sm:w-20">
                      メール
                    </dt>
                    <dd>
                      <a 
                        href="mailto:info@nft-orchestra.com"
                        className="text-orange-600 hover:text-orange-700 transition-colors"
                      >
                        info@nft-orchestra.com
                      </a>
                    </dd>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row sm:items-center">
                    <dt className="font-semibold text-gray-700 mb-1 sm:mb-0 sm:w-20">
                      ウェブサイト
                    </dt>
                    <dd>
                      <a 
                        href="https://www.nft-orchestra.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-orange-600 hover:text-orange-700 transition-colors"
                      >
                        www.nft-orchestra.com
                      </a>
                    </dd>
                  </div>
                </div>
                
                <div className="mt-8">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">
                    私たちのミッション
                  </h4>
                  <p className="text-gray-700 leading-relaxed">
                    「今日の生徒が明日の講師」の理念のもと、AI技術を活用した学習環境を提供し、
                    誰もが気軽に学び、成長し、そして教え合えるコミュニティの創造を目指しています。
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-12 text-center">
              <div className="inline-flex items-center space-x-4">
                <a 
                  href="https://vibe-mail.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold py-3 px-6 rounded-full shadow-lg transform hover:scale-105 transition-all duration-200"
                >
                  AIコンテンツラボに参加する
                </a>
                <a 
                  href="mailto:info@nft-orchestra.com"
                  className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold py-3 px-6 rounded-full transition-colors duration-200"
                >
                  お問い合わせ
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}