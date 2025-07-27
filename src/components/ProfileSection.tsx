'use client'

import Image from 'next/image'

export default function ProfileSection() {
  return (
    <section className="bg-gradient-to-br from-gray-50 to-orange-50 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            運営者プロフィール
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            「今日の生徒が明日の講師」をモットーに、共に学び成長していく仲間をお待ちしています
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
            <div className="lg:flex">
              {/* プロフィール画像 */}
              <div className="lg:w-1/3 relative">
                <div className="h-80 lg:h-full relative">
                  <Image
                    src="/images/profile.jpg"
                    alt="運営者プロフィール"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
              
              {/* プロフィール内容 */}
              <div className="lg:w-2/3 p-8 lg:p-12">
                <div className="mb-6">
                  <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
                    Kon（コン）
                  </h3>
                  <p className="text-lg text-orange-600 font-semibold mb-4">
                    AIコンテンツラボ 運営者
                  </p>
                </div>
                
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    AI技術を活用したコンテンツ制作の専門家として、多くの方々の学習をサポートしています。
                  </p>
                  
                  <p>
                    「今日の生徒が明日の講師」という理念のもと、学んだ知識を誰かに教えることで、
                    より深い理解と成長を促すコミュニティ運営を心がけています。
                  </p>
                  
                  <p>
                    AIツールの実践的な活用法から、コンテンツ制作のノウハウまで、
                    幅広いテーマでメンバーの皆さんと一緒に学び続けています。
                  </p>
                  
                  <div className="pt-4">
                    <p className="text-sm text-gray-600 mb-2">
                      <span className="font-semibold">専門分野：</span>
                      AI活用、コンテンツ制作、オンライン教育
                    </p>
                    <p className="text-sm text-gray-600">
                      <span className="font-semibold">モットー：</span>
                      「学びを分かち合い、共に成長する」
                    </p>
                  </div>
                </div>
                
                {/* SNSリンク */}
                <div className="mt-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">
                    各種プラットフォーム
                  </h4>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    <a 
                      href="https://discord.gg/nmo"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-sm text-gray-600 hover:text-orange-600 transition-colors"
                    >
                      🎮 Discord
                    </a>
                    <a 
                      href="https://twitter.com/kon39000"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-sm text-gray-600 hover:text-orange-600 transition-colors"
                    >
                      🐦 X (Twitter)
                    </a>
                    <a 
                      href="https://www.youtube.com/@nsc-nmo"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-sm text-gray-600 hover:text-orange-600 transition-colors"
                    >
                      📺 YouTube
                    </a>
                    <a 
                      href="https://www.udemy.com/user/kon-101/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-sm text-gray-600 hover:text-orange-600 transition-colors"
                    >
                      🎓 Udemy
                    </a>
                    <a 
                      href="https://note.com/kon39000"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-sm text-gray-600 hover:text-orange-600 transition-colors"
                    >
                      📝 note
                    </a>
                    <a 
                      href="https://stand.fm/channels/5fd9a8143147b7f1382167e2"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-sm text-gray-600 hover:text-orange-600 transition-colors"
                    >
                      🎙️ stand.fm
                    </a>
                    <a 
                      href="https://nmo-event.peatix.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-sm text-gray-600 hover:text-orange-600 transition-colors col-span-2 sm:col-span-1"
                    >
                      🎫 Peatix
                    </a>
                  </div>
                </div>

                <div className="mt-8">
                  <a 
                    href="https://nmo1.com/p/r/DfDZJpzk"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold py-3 px-6 rounded-full shadow-lg transform hover:scale-105 transition-all duration-200"
                  >
                    一緒に学習を始める
                    <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}