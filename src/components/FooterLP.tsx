export default function FooterLP() {
  return (
    <footer className="bg-gray-800 text-white py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          {/* ブランド情報 */}
          <div className="mb-6">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-cyan-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">AI</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">AI Contents Labo</h3>
                <p className="text-xs text-gray-400">1日15分で100円noteから始める</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm mb-4 max-w-2xl mx-auto">
              忙しい会社員・主婦でもAIを活用して継続的な収入を得られるコミュニティです。
            </p>
          </div>
          
          {/* 外部リンク */}
          <div className="border-t border-gray-700 pt-6">
            <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-6 mb-4">
              <a href="https://nmo-event.peatix.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                🎫 無料ウェビナー
              </a>
              <a href="https://voicy.jp/channel/821951" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                🎙️ Voicy
              </a>
              <a href="https://nmo1.com/p/r/DfDZJpzk" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                📧 メルマガ登録
              </a>
            </div>
            
            <p className="text-gray-400 text-sm">
              © 2025 AI Contents Labo. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}