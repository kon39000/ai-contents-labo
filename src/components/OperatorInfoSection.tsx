export default function OperatorInfoSection() {
  return (
    <section className="bg-gray-50 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            運営者情報
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            AIコンテンツラボを運営している代表をご紹介します
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {/* こんさんの情報 */}
          <div className="bg-white rounded-3xl p-8 shadow-lg">
            <div className="flex flex-col md:flex-row items-center md:items-start mb-6">
              <div className="w-24 h-24 bg-gradient-to-r from-orange-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-3xl mr-6 mb-4 md:mb-0">
                こ
              </div>
              <div className="text-center md:text-left">
                <h3 className="text-3xl font-bold text-gray-900 mb-2">こん</h3>
                <p className="text-xl text-gray-600 mb-4">AIコンテンツラボ 運営者</p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  AIコンテンツラボの運営者として、実践的なAI活用法の指導とコミュニティ運営を行っています。
                  「今日の学びを、明日の力に」をモットーに、メンバーのスキルアップを徹底サポート。
                </p>
                <p className="text-gray-700 leading-relaxed">
                  「どんなことを書いても、こんさんが一言コメントくれる！これ、他のコミュニティには絶対ない」と
                  メンバーから愛され、5,700名以上のメンバーを指導し、多数の成功事例を輩出しています。
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <a 
                href="https://discord.gg/nmo" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-indigo-100 text-indigo-800 px-3 py-2 rounded-full text-sm font-medium hover:bg-indigo-200 transition-colors text-center"
              >
                💬 Discord
              </a>
              <a 
                href="https://twitter.com/kon39000" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-blue-100 text-blue-800 px-3 py-2 rounded-full text-sm font-medium hover:bg-blue-200 transition-colors text-center"
              >
                🐦 X(Twitter)
              </a>
              <a 
                href="https://www.youtube.com/@nsc-nmo" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-red-100 text-red-800 px-3 py-2 rounded-full text-sm font-medium hover:bg-red-200 transition-colors text-center"
              >
                📺 YouTube
              </a>
              <a 
                href="https://www.udemy.com/user/kon-101/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-purple-100 text-purple-800 px-3 py-2 rounded-full text-sm font-medium hover:bg-purple-200 transition-colors text-center"
              >
                🎓 Udemy
              </a>
              <a 
                href="https://note.com/kon39000" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-green-100 text-green-800 px-3 py-2 rounded-full text-sm font-medium hover:bg-green-200 transition-colors text-center"
              >
                📝 note
              </a>
              <a 
                href="https://stand.fm/channels/5fd9a8143147b7f1382167e2" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-orange-100 text-orange-800 px-3 py-2 rounded-full text-sm font-medium hover:bg-orange-200 transition-colors text-center"
              >
                🎙️ stand.fm
              </a>
              <a 
                href="https://voicy.jp/channel/821951" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-yellow-100 text-yellow-800 px-3 py-2 rounded-full text-sm font-medium hover:bg-yellow-200 transition-colors text-center"
              >
                🎤 Voicy
              </a>
              <a 
                href="https://nmo-event.peatix.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-cyan-100 text-cyan-800 px-3 py-2 rounded-full text-sm font-medium hover:bg-cyan-200 transition-colors text-center"
              >
                🎫 ウェビナー
              </a>
            </div>
          </div>
        </div>
        
        {/* コミュニティの特徴 */}
        <div className="mt-16 bg-gradient-to-r from-orange-50 to-cyan-50 rounded-3xl p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            「今日の生徒が、明日の講師になる」コミュニティ
          </h3>
          <p className="text-gray-700 mb-6 max-w-4xl mx-auto leading-relaxed">
            AIコンテンツラボでは、学んだメンバーが講師として他のメンバーに教える文化があります。
            この循環により、全員が学び続け、成長し続ける環境を実現しています。
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
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
        </div>
      </div>
    </section>
  )
}