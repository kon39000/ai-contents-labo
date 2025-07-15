'use client'

import { useState } from 'react'

export default function NewsletterSectionImproved() {
  const [email, setEmail] = useState('')
  const [childAge, setChildAge] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Email submitted:', email, 'Child age:', childAge)
    setIsSubmitted(true)
  }

  return (
    <section id="newsletter" className="bg-gradient-to-br from-orange-600 to-orange-700 section text-white">
      <div className="container-max">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            <span aria-hidden="true">🚀</span> 「AI効率化3ステップ」完全ガイドを無料プレゼント！
          </h2>
          <p className="text-xl text-orange-100 max-w-2xl mx-auto">
            ChatGPTからVibeコーディングまで<br />
            業務効率化の完全ロードマップをお届けします
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-white">
                <span aria-hidden="true">🎁</span> 初心者でも安心！AI効率化マスター5大特典
              </h3>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <span className="text-yellow-300 text-xl mr-3 mt-1" aria-hidden="true">1️⃣</span>
                  <div>
                    <h4 className="font-semibold mb-1 text-white">ChatGPT基礎活用ガイド（15分動画）</h4>
                    <p className="text-orange-100 text-sm">初心者でもすぐに使える実践的な操作方法とコツ</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-yellow-300 text-xl mr-3 mt-1" aria-hidden="true">2️⃣</span>
                  <div>
                    <h4 className="font-semibold mb-1 text-white">Gemini CLI導入実践ガイド（30分動画）</h4>
                    <p className="text-orange-100 text-sm">コマンドライン初心者でも安心の完全セットアップ手順</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-yellow-300 text-xl mr-3 mt-1" aria-hidden="true">3️⃣</span>
                  <div>
                    <h4 className="font-semibold mb-1 text-white">Vibeコーディング入門（45分動画）</h4>
                    <p className="text-orange-100 text-sm">AIペアプログラミングで開発効率を3倍にする方法</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-yellow-300 text-xl mr-3 mt-1" aria-hidden="true">4️⃣</span>
                  <div>
                    <h4 className="font-semibold mb-1 text-white">業務効率化プロンプト集50選（PDF）</h4>
                    <p className="text-orange-100 text-sm">コピペで使える実践的なプロンプトテンプレート</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-yellow-300 text-xl mr-3 mt-1" aria-hidden="true">5️⃣</span>
                  <div>
                    <h4 className="font-semibold mb-1 text-white">実践コミュニティ招待権</h4>
                    <p className="text-orange-100 text-sm">同じ目標を持つ仲間とのディスカッション・質問し放題</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 mb-6 border border-white/30">
                <p className="text-sm text-white">
                  <span className="font-semibold" aria-hidden="true">💝</span> <span className="font-semibold">安心ポイント：</span>
                  「難しそう」「私にできるかな？」そんな不安を解消する初心者専用の内容です。小さな成功体験から始めて、仲間と一緒に成長しましょう。
                </p>
              </div>
            </div>
            
            <div className="card text-gray-900 shadow-2xl max-w-lg mx-auto w-full rounded-2xl">
              <div className="text-center mb-6">
                <div className="text-4xl mb-3" aria-hidden="true">🎯</div>
                <h3 className="text-2xl font-bold mb-2 text-gray-900">今すぐ無料で受け取る</h3>
                <p className="text-gray-600">メールアドレスを入力するだけ</p>
              </div>
              
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      メールアドレス <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="your.email@example.com"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-gray-900"
                      required
                      aria-describedby="email-help"
                    />
                    <p id="email-help" className="text-xs text-gray-500 mt-1">
                      登録後すぐに特典をお送りします
                    </p>
                  </div>
                  
                  <div>
                    <label htmlFor="child-age" className="block text-sm font-medium text-gray-700 mb-2">
                      現在の状況（任意）
                    </label>
                    <select 
                      id="child-age"
                      value={childAge}
                      onChange={(e) => setChildAge(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-gray-900"
                      aria-describedby="status-help"
                    >
                      <option value="">選択してください</option>
                      <option value="student">学生</option>
                      <option value="employee">会社員</option>
                      <option value="freelance">フリーランス</option>
                      <option value="homemaker">主婦・主夫</option>
                      <option value="business">個人事業主</option>
                      <option value="other">その他</option>
                    </select>
                    <p id="status-help" className="text-xs text-gray-500 mt-1">
                      あなたに合った情報をお届けするためです
                    </p>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold py-4 rounded-lg transition-all duration-200 text-lg transform hover:scale-105 shadow-lg"
                    aria-describedby="submit-help"
                  >
                    <span aria-hidden="true">🎁</span> 今すぐ特典を受け取る（完全無料）
                  </button>
                  <p id="submit-help" className="text-xs text-gray-500 text-center leading-relaxed">
                    ※登録後すぐに「AI効率化3ステップガイド」をお送りします<br />
                    ※不要になったらいつでも配信停止できます<br />
                    ※初心者向けの内容なので安心してご登録ください
                  </p>
                </form>
              ) : (
                <div className="text-center">
                  <div className="text-6xl mb-4" aria-hidden="true">✅</div>
                  <h3 className="text-2xl font-bold text-green-600 mb-4">
                    登録完了！
                  </h3>
                  <p className="text-gray-600 mb-6">
                    ご登録いただいたメールアドレスに特典動画をお送りしました。<br />
                    メールをご確認ください。
                  </p>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <p className="text-sm text-gray-600">
                      <span aria-hidden="true">📧</span> メールが届かない場合は、迷惑メールフォルダもご確認ください
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