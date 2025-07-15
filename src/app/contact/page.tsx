'use client'

import { useState } from 'react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // メール本文を作成
    const mailtoLink = `mailto:info@nft-orchestra.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
      `お名前: ${formData.name}\nメールアドレス: ${formData.email}\n\nお問い合わせ内容:\n${formData.message}`
    )}`

    // メールクライアントを開く
    window.location.href = mailtoLink

    // 送信完了状態に
    setTimeout(() => {
      setIsSubmitted(true)
      setIsSubmitting(false)
    }, 1000)
  }

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            <span aria-hidden="true">📞</span> お問い合わせ
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            ご質問やご不明な点がございましたら<br />
            お気軽にお問い合わせください
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8">
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    お名前 <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="山田太郎"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    メールアドレス <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  お問い合わせ種類 <span className="text-red-500">*</span>
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  required
                >
                  <option value="">選択してください</option>
                  <option value="ウェビナーについて">ウェビナーについて</option>
                  <option value="メルマガについて">メルマガについて</option>
                  <option value="サービス内容について">サービス内容について</option>
                  <option value="技術的な質問">技術的な質問</option>
                  <option value="その他">その他</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  お問い合わせ内容 <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="お問い合わせ内容をご記入ください"
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  required
                />
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full md:w-auto px-8 py-4 rounded-lg font-bold text-lg transition-all duration-200 ${
                    isSubmitting
                      ? 'bg-gray-400 cursor-not-allowed'
                      : 'bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 transform hover:scale-105'
                  } text-white shadow-lg`}
                >
                  {isSubmitting ? (
                    <>
                      <span aria-hidden="true">⏳</span> メールクライアントを開いています...
                    </>
                  ) : (
                    <>
                      <span aria-hidden="true">📧</span> メールで送信する
                    </>
                  )}
                </button>
                
                <p className="text-xs text-gray-500 mt-4 leading-relaxed">
                  ※このボタンを押すとメールアプリが起動します<br />
                  ※info@nft-orchestra.com 宛にメールが送信されます
                </p>
              </div>
            </form>
          ) : (
            <div className="text-center py-12">
              <div className="text-6xl mb-6" aria-hidden="true">✅</div>
              <h2 className="text-2xl font-bold text-green-600 mb-4">
                メールクライアントが起動しました
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                メールアプリが開かれました。<br />
                内容をご確認の上、送信ボタンを押してください。
              </p>
              
              <div className="bg-gray-50 rounded-lg p-6 mb-6">
                <h3 className="font-semibold text-gray-900 mb-2">送信先</h3>
                <p className="text-gray-700">info@nft-orchestra.com</p>
              </div>
              
              <button
                onClick={() => {
                  setIsSubmitted(false)
                  setFormData({ name: '', email: '', subject: '', message: '' })
                }}
                className="text-orange-600 hover:text-orange-700 font-medium"
              >
                ← 新しいお問い合わせを作成
              </button>
            </div>
          )}
        </div>

        {/* よくある質問セクション */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">
            <span aria-hidden="true">❓</span> よくあるご質問
          </h2>
          
          <div className="space-y-6">
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-2">ウェビナーは本当に無料ですか？</h3>
              <p className="text-gray-600 text-sm">
                はい、完全に無料です。参加費用は一切かかりません。Zoom URLをお送りしますので、お気軽にご参加ください。
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-2">AI初心者でも大丈夫ですか？</h3>
              <p className="text-gray-600 text-sm">
                もちろんです！完全初心者の方を想定した内容になっております。基本的な操作から丁寧に説明いたします。
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-2">メルマガの解除はできますか？</h3>
              <p className="text-gray-600 text-sm">
                いつでも解除可能です。メール下部の配信停止リンクから簡単に手続きできます。
              </p>
            </div>
          </div>
        </div>

        {/* 緊急時の連絡先 */}
        <div className="mt-12 text-center">
          <div className="bg-cyan-50 rounded-lg p-6 border border-cyan-200">
            <h3 className="font-semibold text-cyan-800 mb-2">
              <span aria-hidden="true">⚡</span> 緊急時のご連絡
            </h3>
            <p className="text-cyan-700 text-sm">
              システムトラブルやウェビナー当日の緊急時は<br />
              <strong>info@nft-orchestra.com</strong> までメールでご連絡ください
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}