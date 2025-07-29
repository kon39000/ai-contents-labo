'use client'

import { useState } from 'react'
import { Metadata } from 'next'

// export const metadata: Metadata = {
//   title: 'お問い合わせ | AI Contents Labo',
//   description: 'AI Contents Laboへのお問い合わせはこちらから。ご質問やご相談をお気軽にお送りください。',
// }

interface FormData {
  name: string
  email: string
  subject: string
  message: string
}

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null
    message: string
  }>({ type: null, message: '' })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus({ type: null, message: '' })

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (response.ok) {
        setSubmitStatus({
          type: 'success',
          message: result.message
        })
        // フォームをリセット
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        })
      } else {
        setSubmitStatus({
          type: 'error',
          message: result.error || 'エラーが発生しました'
        })
      }
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: '送信に失敗しました。しばらく時間をおいて再度お試しください。'
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-50 via-white to-cyan-50 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            お問い合わせ
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
            ご質問やご相談がございましたら、お気軽にお問い合わせください
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
            
            {/* Status Message */}
            {submitStatus.type && (
              <div className={`mb-6 p-4 rounded-lg ${
                submitStatus.type === 'success' 
                  ? 'bg-green-50 text-green-800 border border-green-200' 
                  : 'bg-red-50 text-red-800 border border-red-200'
              }`}>
                {submitStatus.message}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* お名前 */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  お名前 <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors"
                  placeholder="山田太郎"
                />
              </div>

              {/* メールアドレス */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  メールアドレス <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors"
                  placeholder="example@email.com"
                />
              </div>

              {/* 件名 */}
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  件名 <span className="text-red-500">*</span>
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors"
                >
                  <option value="">件名を選択してください</option>
                  <option value="サービスについて">サービスについて</option>
                  <option value="料金・プランについて">料金・プランについて</option>
                  <option value="技術的な質問">技術的な質問</option>
                  <option value="コミュニティについて">コミュニティについて</option>
                  <option value="その他のお問い合わせ">その他のお問い合わせ</option>
                </select>
              </div>

              {/* メッセージ */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  メッセージ <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors"
                  placeholder="お問い合わせ内容をできるだけ詳しくお書きください"
                />
              </div>

              {/* 送信ボタン */}
              <div className="text-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full md:w-auto px-8 py-4 rounded-lg font-bold text-white transition-all duration-200 ${
                    isSubmitting
                      ? 'bg-gray-400 cursor-not-allowed'
                      : 'bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 transform hover:scale-105'
                  }`}
                >
                  {isSubmitting ? '送信中...' : 'お問い合わせを送信'}
                </button>
              </div>
            </form>
          </div>

          {/* 注意事項 */}
          <div className="mt-8 bg-gradient-to-r from-orange-50 to-cyan-50 rounded-lg p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-3">お問い合わせに関する注意事項</h3>
            <ul className="text-sm text-gray-600 space-y-2">
              <li>• ご返信まで2-3営業日お時間をいただく場合があります</li>
              <li>• 迷惑メールフィルターにより、ご返信が迷惑メールフォルダに振り分けられる場合があります</li>
              <li>• お急ぎの場合は、Discordコミュニティまたは無料ウェビナーでお気軽にご質問ください</li>
            </ul>
            
            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <a 
                href="https://discord.gg/nmo" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-3 px-6 rounded-lg transition-colors text-center"
              >
                💬 Discordで質問する
              </a>
              <a 
                href="https://nmo-event.peatix.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="border-2 border-cyan-500 text-cyan-600 hover:bg-cyan-500 hover:text-white font-bold py-3 px-6 rounded-lg transition-all duration-200 text-center"
              >
                🎫 ウェビナーに参加する
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}