import { Metadata } from 'next'

export const metadata: Metadata = {
  title: '特定商取引法に基づく表記 | AI Contents Labo',
  description: 'AI Contents Laboの特定商取引法に基づく表記です。',
}

export default function LegalPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-50 via-white to-cyan-50 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            特定商取引法に基づく表記
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
            特定商取引法に基づく必要な情報を記載しています
          </p>
        </div>
      </section>

      {/* Legal Content */}
      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
            
            {/* 事業者情報 */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b border-gray-200 pb-2">
                事業者情報
              </h2>
              <div className="space-y-3">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <dt className="font-semibold text-gray-700">事業者名</dt>
                  <dd className="md:col-span-2 text-gray-600">AI Contents Labo</dd>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <dt className="font-semibold text-gray-700">運営責任者</dt>
                  <dd className="md:col-span-2 text-gray-600">こん</dd>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <dt className="font-semibold text-gray-700">所在地</dt>
                  <dd className="md:col-span-2 text-gray-600">お問い合わせ後に遅滞なく開示いたします</dd>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <dt className="font-semibold text-gray-700">電話番号</dt>
                  <dd className="md:col-span-2 text-gray-600">お問い合わせ後に遅滞なく開示いたします</dd>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <dt className="font-semibold text-gray-700">メールアドレス</dt>
                  <dd className="md:col-span-2 text-gray-600">Discordまたはウェビナーにてお問い合わせください</dd>
                </div>
              </div>
            </div>

            {/* 販売価格 */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b border-gray-200 pb-2">
                販売価格
              </h2>
              <div className="space-y-3">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <dt className="font-semibold text-gray-700">月額会員</dt>
                  <dd className="md:col-span-2 text-gray-600">各サービスページに記載された価格（税込）</dd>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <dt className="font-semibold text-gray-700">無料サービス</dt>
                  <dd className="md:col-span-2 text-gray-600">メルマガ登録、ウェビナー参加等は無料</dd>
                </div>
              </div>
            </div>

            {/* 支払方法 */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b border-gray-200 pb-2">
                支払方法
              </h2>
              <div className="space-y-3">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <dt className="font-semibold text-gray-700">決済方法</dt>
                  <dd className="md:col-span-2 text-gray-600">
                    <ul className="list-disc list-inside space-y-1">
                      <li>クレジットカード決済</li>
                      <li>銀行振込</li>
                      <li>その他、各サービスで指定された方法</li>
                    </ul>
                  </dd>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <dt className="font-semibold text-gray-700">支払時期</dt>
                  <dd className="md:col-span-2 text-gray-600">サービスお申し込み時</dd>
                </div>
              </div>
            </div>

            {/* サービス提供時期 */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b border-gray-200 pb-2">
                サービス提供時期
              </h2>
              <div className="space-y-3">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <dt className="font-semibold text-gray-700">提供開始</dt>
                  <dd className="md:col-span-2 text-gray-600">お申し込み手続き完了後、速やかに提供いたします</dd>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <dt className="font-semibold text-gray-700">継続サービス</dt>
                  <dd className="md:col-span-2 text-gray-600">月額サービスは毎月継続してご利用いただけます</dd>
                </div>
              </div>
            </div>

            {/* 返品・返金 */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b border-gray-200 pb-2">
                返品・返金について
              </h2>
              <div className="space-y-3">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <dt className="font-semibold text-gray-700">デジタルコンテンツ</dt>
                  <dd className="md:col-span-2 text-gray-600">
                    デジタルコンテンツの性質上、原則として返品・返金はお受けできません
                  </dd>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <dt className="font-semibold text-gray-700">不具合等</dt>
                  <dd className="md:col-span-2 text-gray-600">
                    サービスに重大な不具合がある場合は、個別にご相談させていただきます
                  </dd>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <dt className="font-semibold text-gray-700">中途解約</dt>
                  <dd className="md:col-span-2 text-gray-600">
                    月額サービスはいつでも解約可能です。解約月分の日割り返金は行いません
                  </dd>
                </div>
              </div>
            </div>

            {/* 表現および商品に関する注意事項 */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b border-gray-200 pb-2">
                表現および商品に関する注意事項
              </h2>
              <div className="text-gray-600 space-y-4">
                <p>
                  本サイトに示された表現や再現性には個人差があり、必ずしも利益や効果を保証するものではありません。
                </p>
                <p>
                  当サービスは学習とスキル向上を目的としており、収益の保証は一切いたしません。
                  成果は個人の努力と継続的な学習によるものです。
                </p>
                <p>
                  学習効果やスキル向上の程度には個人差があることをあらかじめご了承ください。
                </p>
              </div>
            </div>

            {/* お問い合わせ */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b border-gray-200 pb-2">
                お問い合わせ
              </h2>
              <div className="space-y-4">
                <p className="text-gray-600">
                  本表記に関するお問い合わせやサービスに関するご質問は、以下の方法でお願いいたします。
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
              <p>最終更新日：2025年7月29日</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}