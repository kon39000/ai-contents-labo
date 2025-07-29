import Link from 'next/link'

export default function FooterImproved() {
  return (
    <footer className="bg-gray-800 text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* ブランド情報 */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-cyan-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">AI</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">AI Contents Labo</h3>
                <p className="text-xs text-gray-400">1日15分で100円noteから始める</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm mb-4">
              忙しい会社員・主婦でもAIを活用して継続的な収入を得られるコミュニティです。
            </p>
            
            {/* 実績 */}
            <div className="grid grid-cols-2 gap-2 text-xs">
              <div className="text-center bg-gray-700 rounded p-2">
                <div className="font-bold text-orange-400">5,100+</div>
                <div className="text-gray-400">無料会員</div>
              </div>
              <div className="text-center bg-gray-700 rounded p-2">
                <div className="font-bold text-cyan-400">600+</div>
                <div className="text-gray-400">有料会員</div>
              </div>
            </div>
          </div>
          
          {/* サービス */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-orange-400">サービス</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="https://vibecoding-monetize.peatix.com/view" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                  無料ウェビナー
                </a>
              </li>
              <li>
                <Link href="/members" className="text-gray-300 hover:text-white transition-colors">
                  メンバーズ <span className="bg-orange-500 text-white text-xs px-1 py-0.5 rounded-full ml-1">NEW</span>
                </Link>
              </li>
              <li>
                <Link href="/#newsletter" className="text-gray-300 hover:text-white transition-colors">
                  メールマガジン
                </Link>
              </li>
            </ul>
          </div>
          
          {/* コンテンツ */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-cyan-400">コンテンツ</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/members" className="text-gray-300 hover:text-white transition-colors">
                  成果報告
                </Link>
              </li>
            </ul>
          </div>
          
          {/* サポート */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-purple-400">サポート</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
                  私たちについて
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
                  お問い合わせ
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-300 hover:text-white transition-colors" prefetch={false}>
                  プライバシーポリシー
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-300 hover:text-white transition-colors" prefetch={false}>
                  利用規約
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        {/* 外部リンク */}
        <div className="border-t border-gray-700 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex space-x-6 mb-4 md:mb-0">
              <a href="https://nmo-event.peatix.com/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                🎫 Peatix
              </a>
              <a href="#discord" className="text-gray-300 hover:text-white transition-colors">
                💬 Discord
              </a>
              <a href="#twitter" className="text-gray-300 hover:text-white transition-colors">
                🐦 X (Twitter)
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