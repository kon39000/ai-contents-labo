'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function HeaderImproved() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          {/* ロゴ */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-cyan-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">AI</span>
            </div>
            <div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-orange-600 to-cyan-600 bg-clip-text text-transparent">
                AI Contents Labo
              </h1>
              <p className="text-xs text-gray-500">学ぶだけで終わらせない</p>
            </div>
          </Link>
          
          {/* デスクトップメニュー */}
          <nav className="hidden lg:flex items-center space-x-6">
            <Link href="/" className="text-gray-700 hover:text-orange-600 font-medium transition-colors">
              Home
            </Link>
            <Link href="/members" className="text-gray-700 hover:text-orange-600 font-medium transition-colors">
              Members
            </Link>
            <Link href="/about-us" className="text-gray-700 hover:text-orange-600 font-medium transition-colors">
              About Us
            </Link>
            <Link href="/newsletter" className="text-gray-700 hover:text-orange-600 font-medium transition-colors">
              Newsletter
            </Link>
          </nav>
          
          {/* CTAボタン */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link 
              href="/newsletter" 
              className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold text-sm px-6 py-2 rounded-full shadow-md transform hover:scale-105 transition-all duration-200"
            >
              特典動画を受け取る（無料）
            </Link>
          </div>
          
          {/* モバイルメニューボタン */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="メニューを開く"
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
                🏠 Home
              </Link>
              <Link href="/members" className="block px-4 py-2 text-gray-700 hover:bg-orange-50 hover:text-orange-600" onClick={() => setIsMenuOpen(false)}>
                🎉 Members
              </Link>
              <Link href="/about-us" className="block px-4 py-2 text-gray-700 hover:bg-orange-50 hover:text-orange-600" onClick={() => setIsMenuOpen(false)}>
                ℹ️ About Us
              </Link>
              <Link href="/newsletter" className="block px-4 py-2 text-gray-700 hover:bg-orange-50 hover:text-orange-600" onClick={() => setIsMenuOpen(false)}>
                📧 Newsletter
              </Link>
              
              <div className="px-4 py-2 space-y-2">
                <Link 
                  href="/newsletter" 
                  className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold text-sm w-full inline-block text-center py-3 rounded-full shadow-md transform hover:scale-105 transition-all duration-200" 
                  onClick={() => setIsMenuOpen(false)}
                >
                  特典動画を受け取る（無料）
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}