import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Newsletter - AI Contents Labo',
  description: '特典動画を無料プレゼント。AIコンテンツラボのメルマガ登録で学習をスタートしましょう。',
  keywords: 'メルマガ, 特典動画, AI学習, 無料, プレゼント',
}

export default function NewsletterPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-50 via-white to-cyan-50 py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            特典動画を無料プレゼント
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
            AIコンテンツラボの学習をスタートするための<br />
            特別な動画コンテンツをお届けします
          </p>
        </div>
      </section>

      {/* Newsletter Form Section */}
      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-orange-50 to-cyan-50 rounded-3xl p-8 lg:p-12 border border-orange-100">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                メルマガ登録フォーム
              </h2>
              <p className="text-gray-700">
                下記フォームにご登録いただくと、特典動画をお受け取りいただけます
              </p>
            </div>
            
            {/* MyASP Form Placeholder */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
              <div className="text-center mb-6">
                <div className="text-4xl mb-4">📧</div>
                <p className="text-gray-600">
                  MyASPフォームがここに埋め込まれます<br />
                  実装時に下記のiframeコードを使用してください
                </p>
              </div>
              
              {/* Placeholder for MyASP iframe */}
              <div className="bg-gray-100 rounded-xl p-8 text-center">
                <code className="text-sm text-gray-600 bg-white px-4 py-2 rounded border">
                  {`<iframe src="YOUR_MYASP_FORM_URL" width="100%" height="1200"></iframe>`}
                </code>
              </div>
            </div>
            
            <div className="text-center mt-8">
              <p className="text-sm text-gray-600">
                ※登録後、特典動画のアクセス情報をお送りいたします<br />
                ※いつでも配信停止が可能です
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-gray-50 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              特典動画で学べること
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-2xl bg-white border border-orange-100">
              <div className="text-5xl mb-6">🎓</div>
              <h3 className="text-xl font-bold text-orange-700 mb-4">
                学習の基礎
              </h3>
              <p className="text-gray-700 leading-relaxed">
                AIコンテンツ制作に必要な基本的な考え方と、効率的な学習方法をご紹介します。
              </p>
            </div>
            
            <div className="text-center p-8 rounded-2xl bg-white border border-cyan-100">
              <div className="text-5xl mb-6">🛠️</div>
              <h3 className="text-xl font-bold text-cyan-700 mb-4">
                実践テクニック
              </h3>
              <p className="text-gray-700 leading-relaxed">
                すぐに使える実践的なテクニックと、プロジェクトの進め方を詳しく解説します。
              </p>
            </div>
            
            <div className="text-center p-8 rounded-2xl bg-white border border-purple-100">
              <div className="text-5xl mb-6">🚀</div>
              <h3 className="text-xl font-bold text-purple-700 mb-4">
                次のステップ
              </h3>
              <p className="text-gray-700 leading-relaxed">
                学習を継続し、さらなるスキルアップを図るための具体的なロードマップをお伝えします。
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}