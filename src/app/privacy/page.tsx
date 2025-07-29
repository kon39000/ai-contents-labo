import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'プライバシーポリシー | AI Contents Labo',
  description: 'AI Contents Laboのプライバシーポリシーです。個人情報の取り扱いについて説明しています。',
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-50 via-white to-cyan-50 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            プライバシーポリシー
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
            個人情報の取り扱いについて説明しています
          </p>
        </div>
      </section>

      {/* Privacy Content */}
      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
            
            {/* 個人情報の定義 */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b border-gray-200 pb-2">
                1. 個人情報の定義
              </h2>
              <p className="text-gray-600 leading-relaxed">
                本プライバシーポリシーにおいて「個人情報」とは、個人情報保護法にいう「個人情報」を指すものとし、
                生存する個人に関する情報であって、当該情報に含まれる氏名、生年月日、住所、電話番号、
                連絡先その他の記述等により特定の個人を識別できる情報を指します。
              </p>
            </div>

            {/* 収集する情報 */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b border-gray-200 pb-2">
                2. 収集する個人情報
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>当サービスでは、以下の個人情報を収集する場合があります：</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>氏名、メールアドレス</li>
                  <li>お問い合わせ内容</li>
                  <li>サービス利用履歴</li>
                  <li>IPアドレス、クッキー情報</li>
                  <li>その他、サービス提供に必要な情報</li>
                </ul>
              </div>
            </div>

            {/* 利用目的 */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b border-gray-200 pb-2">
                3. 個人情報の利用目的
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>収集した個人情報は、以下の目的で利用いたします：</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>サービスの提供、運営、維持、改善</li>
                  <li>お客様からのお問い合わせへの対応</li>
                  <li>メルマガやお知らせの配信</li>
                  <li>利用規約に違反したユーザーの特定</li>
                  <li>サービスの利用状況の分析</li>
                  <li>新機能、更新情報、キャンペーン等の案内</li>
                </ul>
              </div>
            </div>

            {/* 第三者提供 */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b border-gray-200 pb-2">
                4. 個人情報の第三者提供
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  収集した個人情報は、お客様の同意を得ることなく第三者に提供することはありません。
                  ただし、以下の場合を除きます：
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>法令に基づく場合</li>
                  <li>人の生命、身体または財産の保護のために必要がある場合</li>
                  <li>公衆衛生の向上または児童の健全な育成の推進のために特に必要がある場合</li>
                  <li>国の機関もしくは地方公共団体またはその委託を受けた者が法令の定める事務を遂行することに対して協力する必要がある場合</li>
                </ul>
              </div>
            </div>

            {/* 外部サービス */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b border-gray-200 pb-2">
                5. 外部サービスの利用
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>当サービスでは、以下の外部サービスを利用しており、それぞれのプライバシーポリシーが適用されます：</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Google Analytics（アクセス解析）</li>
                  <li>Discord（コミュニティ運営）</li>
                  <li>YouTube（動画配信）</li>
                  <li>Twitter/X（情報発信）</li>
                  <li>その他、サービス運営に必要な外部ツール</li>
                </ul>
              </div>
            </div>

            {/* Cookie */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b border-gray-200 pb-2">
                6. Cookieの使用
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  当サービスでは、ユーザーの利便性向上とサービス改善のため、Cookieを使用しています。
                  Cookieの使用を希望されない場合は、ブラウザの設定でCookieを無効にすることができますが、
                  一部の機能が正常に動作しない場合があります。
                </p>
              </div>
            </div>

            {/* 個人情報の開示・訂正等 */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b border-gray-200 pb-2">
                7. 個人情報の開示・訂正等
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  お客様ご本人から個人情報の開示、訂正、追加、削除、利用停止の申し出があった場合には、
                  本人確認を実施した上で、合理的な範囲で速やかに対応いたします。
                </p>
              </div>
            </div>

            {/* セキュリティ */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b border-gray-200 pb-2">
                8. 個人情報の安全管理
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  個人情報の紛失、破壊、改ざん、漏洩等を防止するため、適切な安全管理措置を講じます。
                  また、個人情報を取り扱う従業者に対して、適切な監督を行います。
                </p>
              </div>
            </div>

            {/* プライバシーポリシーの変更 */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b border-gray-200 pb-2">
                9. プライバシーポリシーの変更
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  本プライバシーポリシーは、法令の変更、サービス内容の変更等に応じて、変更する場合があります。
                  変更後のプライバシーポリシーは、当サイトに掲載した時点から効力を生じます。
                </p>
              </div>
            </div>

            {/* お問い合わせ */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b border-gray-200 pb-2">
                10. お問い合わせ
              </h2>
              <div className="space-y-4">
                <p className="text-gray-600">
                  本プライバシーポリシーに関するお問い合わせは、以下の方法でお願いいたします。
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a 
                    href="https://nmo-event.peatix.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-200 text-center"
                  >
                    ウェビナーで質問する
                  </a>
                  <a 
                    href="https://discord.gg/nmo" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="border-2 border-cyan-500 text-cyan-600 hover:bg-cyan-500 hover:text-white font-bold py-3 px-6 rounded-lg transition-all duration-200 text-center"
                  >
                    Discordで相談する
                  </a>
                </div>
              </div>
            </div>

            <div className="text-center text-sm text-gray-500 pt-8 border-t border-gray-200">
              <p>制定日：2023年3月1日</p>
              <p>最終更新日：2025年7月29日</p>
              <p className="mt-2">AI Contents Labo</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}