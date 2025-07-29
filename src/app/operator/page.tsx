import { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: '運営者プロフィール | AI Contents Labo',
  description: 'AI Contents Laboの運営者「こん」のプロフィールと経歴をご紹介します。',
}

export default function OperatorPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-50 via-white to-cyan-50 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            運営者プロフィール
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
            AI Contents Laboを運営している「こん」のプロフィールをご紹介します
          </p>
        </div>
      </section>

      {/* Profile Section */}
      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-orange-50 to-cyan-50 rounded-3xl p-8 lg:p-12 border border-orange-100">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
                <div className="flex flex-col md:flex-row items-center md:items-start mb-8">
                  {/* Profile Image */}
                  <div className="w-32 h-32 mb-6 md:mb-0 md:mr-8 flex-shrink-0">
                    <div className="w-32 h-32 bg-gradient-to-r from-orange-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-5xl shadow-xl">
                      こ
                    </div>
                  </div>
                  
                  {/* Profile Info */}
                  <div className="text-center md:text-left flex-grow">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">こん（Kon）</h2>
                    <p className="text-xl text-orange-600 font-semibold mb-4">AIコンテンツラボ 運営者 / 合同会社NFTオーケストラ 代表</p>
                    
                    <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-6">
                      <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm font-medium">AI活用専門家</span>
                      <span className="bg-cyan-100 text-cyan-700 px-3 py-1 rounded-full text-sm font-medium">コミュニティ運営</span>
                      <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-medium">スキル育成支援</span>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <div className="space-y-6 text-gray-700 leading-relaxed">
                  <p className="text-lg">
                    AIコンテンツラボの運営者として、実践的なAI活用法の指導とコミュニティ運営を行っています。
                    <span className="font-bold text-orange-600">「今日の学びを、明日の力に」</span>をモットーに、メンバーのスキルアップを徹底サポート。
                  </p>
                  
                  <p>
                    「どんなことを書いても、こんさんが一言コメントくれる！これ、他のコミュニティには絶対ない」と
                    メンバーから愛され、5,700名以上のメンバーを指導し、多数の成功事例を輩出しています。
                  </p>

                  <p>
                    AI技術の普及と活用を通じて、多くの人々がより効率的で創造的なスキルアップを実現できるよう支援することを目指しています。
                    特に、忙しい会社員や主婦の方々でも取り組みやすい形でAI学習を提供し、実践的なスキルの習得をサポートしています。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Links */}
      <section className="bg-gray-50 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              各種プラットフォーム
            </h2>
            <p className="text-lg text-gray-600 mb-12">
              さまざまなプラットフォームで情報発信とコミュニティ運営を行っています
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <a 
                href="https://discord.gg/nmo" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-indigo-100 hover:bg-indigo-200 text-indigo-800 px-4 py-3 rounded-lg text-sm font-medium transition-colors text-center"
              >
                💬 Discord
              </a>
              <a 
                href="https://twitter.com/kon39000" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-blue-100 hover:bg-blue-200 text-blue-800 px-4 py-3 rounded-lg text-sm font-medium transition-colors text-center"
              >
                🐦 X(Twitter)
              </a>
              <a 
                href="https://www.youtube.com/@nsc-nmo" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-red-100 hover:bg-red-200 text-red-800 px-4 py-3 rounded-lg text-sm font-medium transition-colors text-center"
              >
                📺 YouTube
              </a>
              <a 
                href="https://www.udemy.com/user/kon-101/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-purple-100 hover:bg-purple-200 text-purple-800 px-4 py-3 rounded-lg text-sm font-medium transition-colors text-center"
              >
                🎓 Udemy
              </a>
              <a 
                href="https://note.com/kon39000" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-green-100 hover:bg-green-200 text-green-800 px-4 py-3 rounded-lg text-sm font-medium transition-colors text-center"
              >
                📝 note
              </a>
              <a 
                href="https://stand.fm/channels/5fd9a8143147b7f1382167e2" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-orange-100 hover:bg-orange-200 text-orange-800 px-4 py-3 rounded-lg text-sm font-medium transition-colors text-center"
              >
                🎙️ stand.fm
              </a>
              <a 
                href="https://voicy.jp/channel/821951" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-yellow-100 hover:bg-yellow-200 text-yellow-800 px-4 py-3 rounded-lg text-sm font-medium transition-colors text-center"
              >
                🎤 Voicy
              </a>
              <a 
                href="https://nmo-event.peatix.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-cyan-100 hover:bg-cyan-200 text-cyan-800 px-4 py-3 rounded-lg text-sm font-medium transition-colors text-center"
              >
                🎫 ウェビナー
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Community Features */}
      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-orange-50 to-cyan-50 rounded-3xl p-8 text-center">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                「今日の生徒が、明日の講師になる」コミュニティ
              </h3>
              <p className="text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
                AIコンテンツラボでは、学んだメンバーが講師として他のメンバーに教える文化があります。
                この循環により、全員が学び続け、成長し続ける環境を実現しています。
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">📚</span>
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">学習</h4>
                  <p className="text-gray-600 text-sm">実践的なスキルを身につける</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🚀</span>
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">実践</h4>
                  <p className="text-gray-600 text-sm">学んだことをスキルに転換</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">👨‍🏫</span>
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">指導</h4>
                  <p className="text-gray-600 text-sm">他のメンバーに教えて成長</p>
                </div>
              </div>

              <div className="mt-8">
                <a 
                  href="https://nmo1.com/p/r/DfDZJpzk" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold py-4 px-8 rounded-full shadow-lg transform hover:scale-105 transition-all duration-200"
                >
                  一緒に学習を始める
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}