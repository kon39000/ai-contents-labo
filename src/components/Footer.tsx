import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container-max">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* ブランド情報 */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-cyan-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">AI</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">AI Contents Labo</h3>
                <p className="text-xs text-gray-400">子育て中でもAIで月5万円</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm mb-4">
              忙しいママ・パパでもAIを活用して継続的な収入を得られるコミュニティです。
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
                <Link href="/webinar" className="text-gray-300 hover:text-white transition-colors">
                  無料ウェビナー
                </Link>
              </li>
              <li>
                <Link href="/community" className="text-gray-300 hover:text-white transition-colors">
                  実践コミュニティ
                </Link>
              </li>
              <li>
                <Link href="/newsletter" className="text-gray-300 hover:text-white transition-colors">
                  メールマガジン
                </Link>
              </li>
              <li>
                <Link href="/premium" className="text-gray-300 hover:text-white transition-colors">
                  有料会員講座
                </Link>
              </li>
            </ul>
          </div>
          
          {/* コンテンツ */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-cyan-400">コンテンツ</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/blog" className="text-gray-300 hover:text-white transition-colors">
                  ブログ記事
                </Link>
              </li>
              <li>
                <Link href="/success-stories" className="text-gray-300 hover:text-white transition-colors">
                  成功事例
                </Link>
              </li>
              <li>
                <Link href="/resources" className="text-gray-300 hover:text-white transition-colors">
                  学習リソース
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-300 hover:text-white transition-colors">
                  よくある質問
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
                <Link href="/privacy" className="text-gray-300 hover:text-white transition-colors">
                  プライバシーポリシー
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-300 hover:text-white transition-colors">
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
                🐦 Twitter
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