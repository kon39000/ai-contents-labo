'use client'

import React from 'react'

export default function ProblemSection() {
  return (
    <section className="bg-gray-50 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            こんな悩み、ありませんか？
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            AIを学んでも、なかなかスキルアップに繋げられない方が多いのが現実です
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* 問題カード1 */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-red-400">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                  <span className="text-2xl">😰</span>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  AIを学んでも実際にスキルアップできない
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  「ChatGPTの使い方は覚えたけど、それをどうやって実践に活かすかわからない」<br />
                  「学習はしているのに、具体的なスキル向上を感じられない」
                </p>
              </div>
            </div>
          </div>
          
          {/* 問題カード2 */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-red-400">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                  <span className="text-2xl">😔</span>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  一人だと続かない、挫折してしまう
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  「最初はやる気があったけど、途中で諦めてしまった」<br />
                  「質問できる人がいなくて、つまずいたまま」
                </p>
              </div>
            </div>
          </div>
          
          {/* 問題カード3 */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-red-400">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                  <span className="text-2xl">🤔</span>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  何から始めればいいか分からない
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  「AIツールがたくさんあって、どれを使えばいいのかわからない」<br />
                  「ネットに情報は多いけど、体系的に学べない」
                </p>
              </div>
            </div>
          </div>
          
          {/* 問題カード4 */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-red-400">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                  <span className="text-2xl">⏰</span>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  忙しくて時間が取れない
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  「仕事や家事で忙しくて、まとまった時間が取れない」<br />
                  「子育て中で、集中して学習する時間がない」
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* 解決の提示 */}
        <div className="text-center bg-gradient-to-r from-orange-50 to-cyan-50 rounded-3xl p-12">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              でも、大丈夫です！
            </h3>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              AIコンテンツラボでは、これらの悩みを全て解決できる環境を用意しています。<br />
              <span className="font-bold text-orange-600">実践重視のカリキュラム</span>と<span className="font-bold text-cyan-600">仲間との支え合い</span>で、<br />
              忙しいあなたでも確実にスキルアップすることができます。
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a 
                href="https://nmo1.com/p/r/DfDZJpzk" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold py-4 px-8 rounded-full shadow-lg transform hover:scale-105 transition-all duration-200"
              >
                今すぐ解決策を確認する
              </a>
              <a 
                href="https://nmo-event.peatix.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="border-2 border-cyan-500 text-cyan-600 hover:bg-cyan-500 hover:text-white font-bold py-4 px-8 rounded-full transition-all duration-200"
              >
                無料ウェビナーで詳しく聞く
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}