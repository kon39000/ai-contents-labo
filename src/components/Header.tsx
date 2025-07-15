'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16">
          {/* ロゴ */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-cyan-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">AI</span>
            </div>
            <div>
              <h1 className="text-xl font-bold gradient-text">AI Contents Labo</h1>
              <p className="text-xs text-gray-500">子育て中でもAIで月5万円</p>
            </div>
          </Link>
          
          {/* デスクトップメニュー */}
          <nav className="hidden lg:flex items-center space-x-8 flex-nowrap whitespace-nowrap">
            <Link href="/" className="h-full flex items-center text-gray-700 hover:text-orange-600 font-medium transition-colors duration-150">
              ホーム
            </Link>
            <Link href="/about" className="h-full flex items-center text-gray-700 hover:text-orange-600 font-medium transition-colors duration-150">
              ACLについて
            </Link>
            <Link href="/webinar" className="h-full flex items-center text-gray-700 hover:text-orange-600 font-medium transition-colors duration-150">
              無料ウェビナー
            </Link>
            <Link href="/members" className="h-full flex items-center text-gray-700 hover:text-orange-600 font-medium transition-colors duration-150 relative">
              メンバーズ
              <span className="absolute -top-1 -right-2 bg-orange-500 text-white text-xs px-1 py-0.5 rounded-full">NEW</span>
            </Link>
            <Link href="/blog" className="h-full flex items-center text-gray-700 hover:text-orange-600 font-medium transition-colors duration-150">
              ブログ
            </Link>
            <Link href="/contact" className="h-full flex items-center text-gray-700 hover:text-orange-600 font-medium transition-colors duration-150">
              お問い合わせ
            </Link>
          </nav>
          
          {/* CTAボタン */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link href="#newsletter" className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold px-4 py-2 rounded-lg transition-all duration-150 text-sm">
              📧 メルマガ登録
            </Link>
            <Link href="https://nmo-event.peatix.com/" target="_blank" className="bg-white border-2 border-cyan-500 text-cyan-600 hover:bg-cyan-50 font-semibold px-4 py-2 rounded-lg transition-colors duration-150 text-sm">
              🎥 ウェビナー申込
            </Link>
          </div>
          
          {/* モバイルメニューボタン */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? 'メニューを閉じる' : 'メニューを開く'}
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span className={`bg-gray-700 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
              <span className={`bg-gray-700 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
              <span className={`bg-gray-700 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
            </div>
          </button>
        </div>
        
        {/* モバイルメニュー */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-gray-200">
            <div className="py-4 space-y-4">
              <Link href="/" className="block px-4 py-2 text-gray-700 hover:bg-orange-50 hover:text-orange-600" onClick={() => setIsMenuOpen(false)}>
                🏠 ホーム
              </Link>
              <Link href="/about" className="block px-4 py-2 text-gray-700 hover:bg-orange-50 hover:text-orange-600" onClick={() => setIsMenuOpen(false)}>
                ℹ️ ACLについて
              </Link>
              <Link href="/webinar" className="block px-4 py-2 text-gray-700 hover:bg-orange-50 hover:text-orange-600" onClick={() => setIsMenuOpen(false)}>
                🎥 無料ウェビナー
              </Link>
              <Link href="/members" className="block px-4 py-2 text-gray-700 hover:bg-orange-50 hover:text-orange-600 relative" onClick={() => setIsMenuOpen(false)}>
                🎉 メンバーズ <span className="bg-orange-500 text-white text-xs px-1 py-0.5 rounded-full ml-1">NEW</span>
              </Link>
              <Link href="/blog" className="block px-4 py-2 text-gray-700 hover:bg-orange-50 hover:text-orange-600" onClick={() => setIsMenuOpen(false)}>
                📝 ブログ
              </Link>
              <Link href="/success-stories" className="block px-4 py-2 text-gray-700 hover:bg-orange-50 hover:text-orange-600" onClick={() => setIsMenuOpen(false)}>
                🏆 成功事例
              </Link>
              <Link href="/contact" className="block px-4 py-2 text-gray-700 hover:bg-orange-50 hover:text-orange-600" onClick={() => setIsMenuOpen(false)}>
                📞 お問い合わせ
              </Link>
              
              <div className="px-4 py-2 space-y-2">
                <Link href="#newsletter" className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold py-3 rounded-lg text-sm w-full inline-block text-center transition-all duration-150" onClick={() => setIsMenuOpen(false)}>
                  📧 メルマガ登録
                </Link>
                <Link href="https://nmo-event.peatix.com/" target="_blank" className="bg-white border-2 border-cyan-500 text-cyan-600 hover:bg-cyan-50 font-semibold py-3 rounded-lg text-sm w-full inline-block text-center transition-colors duration-150" onClick={() => setIsMenuOpen(false)}>
                  🎥 ウェビナー申込
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}