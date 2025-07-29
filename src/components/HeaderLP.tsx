'use client'

import React from 'react'
import Link from 'next/link'

export default function HeaderLP() {
  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          {/* ロゴ */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-cyan-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">AI</span>
            </div>
            <div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-orange-600 to-cyan-600 bg-clip-text text-transparent">
                AI Contents Labo
              </h1>
              <p className="text-xs text-gray-500">今日の学びを、明日の力に</p>
            </div>
          </div>

          {/* ナビゲーションリンク */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link 
              href="/company-info" 
              className="text-gray-600 hover:text-orange-600 text-sm font-medium transition-colors"
            >
              運営会社
            </Link>
            <Link 
              href="/privacy" 
              className="text-gray-600 hover:text-orange-600 text-sm font-medium transition-colors"
            >
              プライバシーポリシー
            </Link>
            <Link 
              href="/terms" 
              className="text-gray-600 hover:text-orange-600 text-sm font-medium transition-colors"
            >
              利用規約
            </Link>
            <a 
              href="https://nmo1.com/p/r/DfDZJpzk" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold py-2 px-4 rounded-full text-sm transition-all duration-200"
            >
              特典動画を受け取る
            </a>
          </nav>

          {/* モバイルメニュー */}
          <div className="md:hidden">
            <details className="relative">
              <summary className="flex items-center justify-center w-8 h-8 text-gray-600 hover:text-orange-600 cursor-pointer">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </summary>
              <div className="absolute right-0 top-full mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                <Link 
                  href="/company-info" 
                  className="block px-4 py-2 text-gray-600 hover:text-orange-600 hover:bg-gray-50 text-sm"
                >
                  運営会社
                </Link>
                <Link 
                  href="/privacy" 
                  className="block px-4 py-2 text-gray-600 hover:text-orange-600 hover:bg-gray-50 text-sm"
                >
                  プライバシーポリシー
                </Link>
                <Link 
                  href="/terms" 
                  className="block px-4 py-2 text-gray-600 hover:text-orange-600 hover:bg-gray-50 text-sm"
                >
                  利用規約
                </Link>
                <div className="border-t border-gray-200 mt-2 pt-2">
                  <a 
                    href="https://nmo1.com/p/r/DfDZJpzk" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block mx-4 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold py-2 px-4 rounded-full text-sm text-center transition-all duration-200"
                  >
                    特典動画を受け取る
                  </a>
                </div>
              </div>
            </details>
          </div>
        </div>
      </div>
    </header>
  )
}