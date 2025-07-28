import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'プライバシーポリシー | AI Contents Labo',
  description: 'AI Contents Laboのプライバシーポリシーをご確認ください。',
}

export default function PrivacyPage() {
  return (
    <div className="bg-warm-50 min-h-screen">
      {/* ヒーローセクション */}
      <section className="bg-gradient-to-br from-orange-50 to-cyan-50 section-padding">
        <div className="container-max">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              🔒 プライバシーポリシー
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
              お客様の個人情報保護に関する方針
            </p>
          </div>
        </div>
      </section>

      {/* コンテンツ */}
      <section className="bg-white section-padding">
        <div className="container-max max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">1. 個人情報の収集について</h2>
                <p className="text-gray-700 leading-relaxed">
                  AI Contents Laboでは、サービス提供のために必要な範囲内で個人情報を収集させていただきます。
                  収集する情報には、お名前、メールアドレス、お問い合わせ内容などが含まれます。
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">2. 個人情報の利用目的</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  収集した個人情報は、以下の目的で利用いたします：
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                  <li>サービスの提供・運営</li>
                  <li>お客様からのお問い合わせへの対応</li>
                  <li>メルマガやウェビナーのご案内</li>
                  <li>サービス改善のための分析</li>
                  <li>重要なお知らせの配信</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">3. 個人情報の第三者提供</h2>
                <p className="text-gray-700 leading-relaxed">
                  お客様の同意なく、個人情報を第三者に提供することはありません。
                  ただし、法令に基づく場合や、お客様や第三者の生命・身体・財産を保護するために必要な場合はこの限りではありません。
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">4. 個人情報の管理</h2>
                <p className="text-gray-700 leading-relaxed">
                  個人情報の漏洩、滅失、毀損の防止その他個人情報の安全管理のために、
                  必要かつ適切な措置を講じます。
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Cookie（クッキー）について</h2>
                <p className="text-gray-700 leading-relaxed">
                  当サイトでは、サービスの利便性向上のためにCookieを使用しています。
                  Cookieを無効にされたい場合は、ブラウザの設定から変更できます。
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">6. お問い合わせ</h2>
                <p className="text-gray-700 leading-relaxed">
                  個人情報の取り扱いに関するご質問やご要望がございましたら、
                  お問い合わせフォームよりご連絡ください。
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <p className="text-sm text-gray-600">
                  制定日：2023年3月1日<br />
                  最終更新日：2025年7月28日
                </p>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <a href="/contact" className="bg-orange-500 text-white font-bold py-3 px-6 rounded-full hover:bg-orange-600 transition-colors">
              📧 お問い合わせ
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}