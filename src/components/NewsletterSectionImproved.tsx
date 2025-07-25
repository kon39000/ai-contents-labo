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
            <span aria-hidden="true">🎓</span> 「ChatGPT15分マスター講座」無料公開中！
          </h2>
          <p className="text-xl text-orange-100 max-w-2xl mx-auto">
            メール登録で学習ポータルにアクセス<br />
            ChatGPTからVibeコーディングまで完全習得
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-white">
                <span aria-hidden="true">🎥</span> 学習ポータルで今すぐ体験できること
              </h3>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <span className="text-yellow-300 text-xl mr-3 mt-1" aria-hidden="true">1️⃣</span>
                  <div>
                    <h4 className="font-semibold mb-1 text-white">ChatGPT15分マスター講座（動画）</h4>
                    <p className="text-orange-100 text-sm">スマホでも学習可能！初心者向けの完全ガイド</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-yellow-300 text-xl mr-3 mt-1" aria-hidden="true">2️⃣</span>
                  <div>
                    <h4 className="font-semibold mb-1 text-white">サイト制作の秘密（動画）</h4>
                    <p className="text-orange-100 text-sm">このサイトがプログラミング知識ゼロで作られた理由</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-yellow-300 text-xl mr-3 mt-1" aria-hidden="true">3️⃣</span>
                  <div>
                    <h4 className="font-semibold mb-1 text-white">Vibeコーディング体験（動画）</h4>
                    <p className="text-orange-100 text-sm">AIとの対話だけでWebページが完成する様子を実演</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-yellow-300 text-xl mr-3 mt-1" aria-hidden="true">4️⃣</span>
                  <div>
                    <h4 className="font-semibold mb-1 text-white">実践エリア・進捗管理</h4>
                    <p className="text-orange-100 text-sm">学んだ内容をその場で試せる環境＋学習進捗の可視化</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-yellow-300 text-xl mr-3 mt-1" aria-hidden="true">5️⃣</span>
                  <div>
                    <h4 className="font-semibold mb-1 text-white">次のステップ案内</h4>
                    <p className="text-orange-100 text-sm">無料ウェビナー・コミュニティへの自然な誘導</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 mb-6 border border-white/30">
                <p className="text-sm text-white">
                  <span className="font-semibold" aria-hidden="true">🌟</span> <span className="font-semibold">学習ポータルの特徴：</span>
                  登録後すぐにアクセス可能！進捗保存機能付きで、いつでも続きから学習できます。スマホ・PC両対応で、あなたのペースで学習を進められます。
                </p>
              </div>
            </div>
            
            <div className="card text-gray-900 shadow-2xl max-w-lg mx-auto w-full rounded-2xl">
              <div className="text-center mb-6">
                <div className="text-4xl mb-3" aria-hidden="true">🎯</div>
                <h3 className="text-2xl font-bold mb-2 text-gray-900">学習ポータルにアクセス</h3>
                <p className="text-gray-600">メール登録で今すぐ学習開始</p>
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
                    <span aria-hidden="true">🎓</span> 学習ポータルにアクセス（完全無料）
                  </button>
                  <p id="submit-help" className="text-xs text-gray-500 text-center leading-relaxed">
                    ※登録後すぐに学習ポータルのアクセス方法をお送りします<br />
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
                    ご登録いただいたメールアドレスに学習ポータルのアクセス方法をお送りしました。<br />
                    メールをご確認ください。
                  </p>
                  <div className="bg-gray-50 rounded-lg p-4 mb-4">
                    <p className="text-sm text-gray-600">
                      <span aria-hidden="true">📧</span> メールが届かない場合は、迷惑メールフォルダもご確認ください
                    </p>
                  </div>
                  <a 
                    href="/learn" 
                    className="inline-block bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-105"
                  >
                    🎓 学習ポータルを体験する
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}