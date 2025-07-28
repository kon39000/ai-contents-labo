import { Metadata } from 'next'

export const metadata: Metadata = {
  title: '利用規約 | AI Contents Labo',
  description: 'AI Contents Laboの利用規約をご確認ください。',
}

export default function TermsPage() {
  return (
    <div className="bg-warm-50 min-h-screen">
      {/* ヒーローセクション */}
      <section className="bg-gradient-to-br from-orange-50 to-cyan-50 section-padding">
        <div className="container-max">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              📋 利用規約
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
              AI Contents Laboのサービス利用に関する規約
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
                <h2 className="text-2xl font-bold text-gray-900 mb-4">第1条（適用）</h2>
                <p className="text-gray-700 leading-relaxed">
                  本規約は、AI Contents Labo（以下「当サービス」といいます）の利用に関して、
                  当サービスを提供する運営者（以下「運営者」といいます）と利用者との間の権利義務関係を定めるものです。
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">第2条（利用登録）</h2>
                <div className="text-gray-700 leading-relaxed space-y-4">
                  <p>1. 当サービスの利用を希望する者は、本規約に同意の上、運営者の定める方法によって利用登録を申請するものとします。</p>
                  <p>2. 運営者は、利用登録の申請者に以下の事由があると判断した場合、利用登録の申請を承認しないことがあります：</p>
                  <ul className="list-disc list-inside ml-4 space-y-1">
                    <li>利用登録の申請に際して虚偽の事項を届け出た場合</li>
                    <li>本規約に違反したことがある者からの申請である場合</li>
                    <li>その他、運営者が利用登録を相当でないと判断した場合</li>
                  </ul>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">第3条（利用者の義務）</h2>
                <div className="text-gray-700 leading-relaxed space-y-4">
                  <p>利用者は、当サービスの利用にあたり、以下の行為をしてはなりません：</p>
                  <ul className="list-disc list-inside ml-4 space-y-1">
                    <li>法令または公序良俗に違反する行為</li>
                    <li>犯罪行為に関連する行為</li>
                    <li>他者の知的財産権、肖像権、プライバシー、名誉その他の権利または利益を侵害する行為</li>
                    <li>他者を差別または誹謗中傷する行為</li>
                    <li>営業、宣伝、広告、勧誘、その他営利を目的とする行為</li>
                    <li>当サービスの運営を妨害するおそれのある行為</li>
                    <li>その他、運営者が不適切と判断する行為</li>
                  </ul>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">第4条（サービス内容の変更等）</h2>
                <p className="text-gray-700 leading-relaxed">
                  運営者は、利用者に通知することなく、当サービスの内容を変更または停止することができるものとし、
                  これによって利用者に生じた損害について一切の責任を負いません。
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">第5条（利用制限および登録抹消）</h2>
                <div className="text-gray-700 leading-relaxed space-y-4">
                  <p>運営者は、利用者が以下のいずれかに該当する場合には、事前の通知なく利用者に対して当サービスの全部もしくは一部の利用を制限し、または利用者としての登録を抹消することができるものとします：</p>
                  <ul className="list-disc list-inside ml-4 space-y-1">
                    <li>本規約のいずれかの条項に違反した場合</li>
                    <li>登録事項に虚偽の事実があることが判明した場合</li>
                    <li>当サービスの運営を妨害した場合</li>
                    <li>その他、運営者が当サービスの利用を適当でないと判断した場合</li>
                  </ul>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">第6条（免責事項）</h2>
                <div className="text-gray-700 leading-relaxed space-y-4">
                  <p>1. 運営者は、当サービスに事実上または法律上の瑕疵がないことを明示的にも黙示的にも保証しておりません。</p>
                  <p>2. 運営者は、当サービスに起因して利用者に生じたあらゆる損害について一切の責任を負いません。</p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">第7条（規約の変更）</h2>
                <p className="text-gray-700 leading-relaxed">
                  運営者は、必要と判断した場合には、利用者に通知することなくいつでも本規約を変更することができるものとします。
                  なお、本規約の変更後、当サービスの利用を開始した場合には、当該利用者は変更後の規約に同意したものとみなします。
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