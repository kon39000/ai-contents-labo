import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'ありがとうございます - AI Contents Labo',
  description: 'メルマガ登録ありがとうございます。特典動画の詳細をご確認ください。',
}

export default function ThanksPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Success Section */}
      <section className="bg-gradient-to-br from-orange-50 via-white to-cyan-50 py-16 lg:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-6xl mb-8">🎉</div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            ありがとうございます！
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
            メルマガへのご登録が完了いたしました。<br />
            特典動画をお楽しみください。
          </p>
        </div>
      </section>

      {/* Video Details Section */}
      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-orange-50 to-cyan-50 rounded-3xl p-8 lg:p-12 border border-orange-100">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                特典動画について
              </h2>
            </div>
            
            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
                <h3 className="text-xl font-bold text-orange-700 mb-3">
                  📧 メールをご確認ください
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  ご登録いただいたメールアドレスに、特典動画のアクセス情報をお送りいたします。<br />
                  メールが届かない場合は、迷惑メールフォルダもご確認ください。
                </p>
              </div>
              
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
                <h3 className="text-xl font-bold text-cyan-700 mb-3">
                  🎥 動画の視聴方法
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  メール内のリンクをクリックすると、特典動画をご視聴いただけます。<br />
                  動画は24時間いつでもご覧いただけます。
                </p>
              </div>
              
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
                <h3 className="text-xl font-bold text-purple-700 mb-3">
                  💬 サポートについて
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  ご質問やサポートが必要な場合は、メルマガに返信していただくか、<br />
                  お問い合わせフォームからご連絡ください。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Next Steps Section */}
      <section className="bg-gray-50 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              次のステップ
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              特典動画をご覧いただいた後は、ぜひ他のコンテンツもチェックしてみてください
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link 
              href="/members"
              className="text-center p-8 rounded-2xl bg-white border border-orange-100 hover:border-orange-200 transition-colors group"
            >
              <div className="text-5xl mb-6 group-hover:scale-110 transition-transform">🎉</div>
              <h3 className="text-xl font-bold text-orange-700 mb-4 group-hover:text-orange-600">
                メンバーの成果
              </h3>
              <p className="text-gray-700 leading-relaxed">
                実際のメンバーが投稿した成果報告をご覧ください
              </p>
            </Link>
            
            <a 
              href="https://ai-contents-labo.com/"
              className="text-center p-8 rounded-2xl bg-white border border-cyan-100 hover:border-cyan-200 transition-colors group"
            >
              <div className="text-5xl mb-6 group-hover:scale-110 transition-transform">🌐</div>
              <h3 className="text-xl font-bold text-cyan-700 mb-4 group-hover:text-cyan-600">
                公式サイト
              </h3>
              <p className="text-gray-700 leading-relaxed">
                最新情報やコンテンツをチェックしてみてください
              </p>
            </a>
            
            <Link 
              href="/about-us"
              className="text-center p-8 rounded-2xl bg-white border border-purple-100 hover:border-purple-200 transition-colors group"
            >
              <div className="text-5xl mb-6 group-hover:scale-110 transition-transform">ℹ️</div>
              <h3 className="text-xl font-bold text-purple-700 mb-4 group-hover:text-purple-600">
                About Us
              </h3>
              <p className="text-gray-700 leading-relaxed">
                AIコンテンツラボについて詳しく知りたい方はこちら
              </p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}