import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'ブログ | AI Contents Labo',
  description: 'AI効率化のコツ、成功事例、最新情報など、業務効率化のための役立つ情報を準備中です。',
}

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        {/* メインメッセージ */}
        <div className="mb-12">
          <div className="text-8xl mb-6" aria-hidden="true">🚧</div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            ブログページ準備中
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8 leading-relaxed">
            AI効率化に関する実践的なノウハウや<br />
            成功事例をまとめたブログを準備しています
          </p>
        </div>

        {/* 予定コンテンツ */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            <span aria-hidden="true">📝</span> 予定しているコンテンツ
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-orange-50 rounded-lg p-6 border border-orange-200">
              <h3 className="text-lg font-semibold text-orange-700 mb-2">
                <span aria-hidden="true">🤖</span> ChatGPT活用術
              </h3>
              <p className="text-orange-600 text-sm">
                初心者でもすぐに実践できるChatGPTの使い方とコツ
              </p>
            </div>
            
            <div className="bg-cyan-50 rounded-lg p-6 border border-cyan-200">
              <h3 className="text-lg font-semibold text-cyan-700 mb-2">
                <span aria-hidden="true">⚡</span> Gemini CLI実践
              </h3>
              <p className="text-cyan-600 text-sm">
                コマンドライン操作で業務効率を劇的に向上させる方法
              </p>
            </div>
            
            <div className="bg-purple-50 rounded-lg p-6 border border-purple-200">
              <h3 className="text-lg font-semibold text-purple-700 mb-2">
                <span aria-hidden="true">🚀</span> Vibeコーディング入門
              </h3>
              <p className="text-purple-600 text-sm">
                AIペアプログラミングで開発生産性を最大化する技術
              </p>
            </div>
            
            <div className="bg-green-50 rounded-lg p-6 border border-green-200">
              <h3 className="text-lg font-semibold text-green-700 mb-2">
                <span aria-hidden="true">💡</span> 成功事例・体験談
              </h3>
              <p className="text-green-600 text-sm">
                実際にAI効率化を導入したメンバーの体験談
              </p>
            </div>
          </div>
        </div>

        {/* 代替アクション */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            <span aria-hidden="true">📚</span> 今すぐ学習を始めるなら
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <Link 
              href="#newsletter"
              className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold py-4 px-6 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-200"
            >
              <span aria-hidden="true">🎁</span> AI効率化3ステップガイドを受け取る
            </Link>
            
            <Link 
              href="/webinar"
              className="bg-white border-2 border-cyan-500 text-cyan-600 hover:bg-cyan-50 font-bold py-4 px-6 rounded-lg transition-colors duration-200"
            >
              <span aria-hidden="true">🎥</span> 無料ウェビナーに参加する
            </Link>
          </div>
        </div>

        {/* 進捗状況 */}
        <div className="bg-gray-100 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            <span aria-hidden="true">📊</span> 準備進捗状況
          </h3>
          
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-700">コンテンツ企画</span>
              <div className="flex items-center">
                <div className="w-24 bg-gray-200 rounded-full h-2 mr-2">
                  <div className="bg-green-500 h-2 rounded-full" style={{ width: '100%' }}></div>
                </div>
                <span className="text-xs text-green-600 font-medium">完了</span>
              </div>
            </div>
            
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-700">記事執筆</span>
              <div className="flex items-center">
                <div className="w-24 bg-gray-200 rounded-full h-2 mr-2">
                  <div className="bg-orange-500 h-2 rounded-full" style={{ width: '60%' }}></div>
                </div>
                <span className="text-xs text-orange-600 font-medium">60%</span>
              </div>
            </div>
            
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-700">Sanity CMS設定</span>
              <div className="flex items-center">
                <div className="w-24 bg-gray-200 rounded-full h-2 mr-2">
                  <div className="bg-cyan-500 h-2 rounded-full" style={{ width: '30%' }}></div>
                </div>
                <span className="text-xs text-cyan-600 font-medium">30%</span>
              </div>
            </div>
          </div>
          
          <p className="text-xs text-gray-500 mt-4">
            ※ 予定公開日：2025年8月上旬
          </p>
        </div>

        {/* お知らせ */}
        <div className="mt-12">
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
            <p className="text-yellow-800 text-sm">
              <span aria-hidden="true">🔔</span> 
              <strong>ブログ公開のお知らせは、メルマガでいち早くお届けします！</strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}