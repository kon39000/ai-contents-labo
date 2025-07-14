'use client'

import { useState } from 'react'

export default function NewsletterSection() {
  const [email, setEmail] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: メルマガ登録のAPI実装
    console.log('Email submitted:', email)
    setIsSubmitted(true)
  }

  return (
    <section id="newsletter" className="bg-gradient-to-br from-primary-600 to-primary-800 section-padding text-white">
      <div className="container-max">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            📧 限定メルマガ登録で「最初の100円note」作成ガイドプレゼント！
          </h2>
          <p className="text-xl text-primary-100 max-w-2xl mx-auto">
            「何から始めればいいかわからない」を解決する<br />
            100円note作成の完全ロードマップを無料でお届け
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-6">
                🎁 初心者でも安心！スタート支援5大特典
              </h3>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <span className="text-secondary-400 text-xl mr-3">1️⃣</span>
                  <div>
                    <h4 className="font-semibold mb-1">「最初の100円note」作成ガイド（30分動画）</h4>
                    <p className="text-primary-200 text-sm">題材選び〜投稿まで、迷わない完全手順書</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-secondary-400 text-xl mr-3">2️⃣</span>
                  <div>
                    <h4 className="font-semibold mb-1">15分学習ワークシート（PDF）</h4>
                    <p className="text-primary-200 text-sm">スキマ時間で確実に進歩する学習計画表</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-secondary-400 text-xl mr-3">3️⃣</span>
                  <div>
                    <h4 className="font-semibold mb-1">初心者向けプロンプト集20選</h4>
                    <p className="text-primary-200 text-sm">コピペするだけで使える厳選プロンプト</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-secondary-400 text-xl mr-3">4️⃣</span>
                  <div>
                    <h4 className="font-semibold mb-1">「挫折しない」継続のコツ（音声10分）</h4>
                    <p className="text-primary-200 text-sm">忙しい人でも3ヶ月続けられる秘訣</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-secondary-400 text-xl mr-3">5️⃣</span>
                  <div>
                    <h4 className="font-semibold mb-1">実践コミュニティ招待権</h4>
                    <p className="text-primary-200 text-sm">一人じゃない安心感で最後まで続けられる</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white/10 rounded-lg p-4 mb-6">
                <p className="text-sm">
                  <span className="font-semibold">💝 安心ポイント：</span>
                  「難しそう」「私にできるかな？」そんな不安を解消する初心者専用の内容です。小さな成功体験から始めて、仲間と一緒に成長しましょう。
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl p-8 text-gray-900">
              <div className="text-center mb-6">
                <div className="text-4xl mb-3">🎯</div>
                <h3 className="text-2xl font-bold mb-2">今すぐ無料で受け取る</h3>
                <p className="text-gray-600">メールアドレスを入力するだけ</p>
              </div>
              
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      メールアドレス
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="your.email@example.com"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      required
                    />
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-secondary-500 hover:bg-secondary-600 text-white font-semibold py-4 rounded-lg transition-colors duration-200 text-lg"
                  >
                    🎁 今すぐ特典動画を受け取る（無料）
                  </button>
                  
                  <p className="text-xs text-gray-500 text-center">
                    ※登録後すぐに「100円note作成ガイド」をお送りします<br />
                    ※不要になったらいつでも配信停止できます<br />
                    ※初心者向けの内容なので安心してご登録ください
                  </p>
                </form>
              ) : (
                <div className="text-center">
                  <div className="text-6xl mb-4">✅</div>
                  <h3 className="text-2xl font-bold text-green-600 mb-4">
                    登録完了！
                  </h3>
                  <p className="text-gray-600 mb-6">
                    ご登録いただいたメールアドレスに特典動画をお送りしました。<br />
                    メールをご確認ください。
                  </p>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <p className="text-sm text-gray-600">
                      📧 メールが届かない場合は、迷惑メールフォルダもご確認ください
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}