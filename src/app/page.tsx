import HeroSectionImproved from '@/components/HeroSectionImproved'
import WebinarSectionImproved from '@/components/WebinarSectionImproved'
import MemberResultsImproved from '@/components/MemberResultsImproved'
import NewsletterSectionImproved from '@/components/NewsletterSectionImproved'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <HeroSectionImproved />
      
      {/* 実績セクションを独立 */}
      <section className="bg-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              <span aria-hidden="true">📊</span> 信頼の実績
            </h2>
            <p className="text-gray-600">多くの方にご支持いただいています</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="text-center bg-orange-50 rounded-xl p-6 border border-orange-200">
              <div className="text-2xl md:text-3xl font-bold text-orange-600 mb-2">5,100+</div>
              <div className="text-sm text-gray-600">無料会員</div>
            </div>
            <div className="text-center bg-cyan-50 rounded-xl p-6 border border-cyan-200">
              <div className="text-2xl md:text-3xl font-bold text-cyan-600 mb-2">600+</div>
              <div className="text-sm text-gray-600">有料会員</div>
            </div>
            <div className="text-center bg-purple-50 rounded-xl p-6 border border-purple-200">
              <div className="text-2xl md:text-3xl font-bold text-purple-600 mb-2">100+</div>
              <div className="text-sm text-gray-600">開催講座</div>
            </div>
            <div className="text-center bg-green-50 rounded-xl p-6 border border-green-200">
              <div className="text-2xl md:text-3xl font-bold text-green-600 mb-2">12,000+</div>
              <div className="text-sm text-gray-600">総申込者</div>
            </div>
          </div>
        </div>
      </section>

      <WebinarSectionImproved />
      <MemberResultsImproved />
      <NewsletterSectionImproved />
      
      {/* 他のページへの誘導セクション */}
      <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              <span aria-hidden="true">🚀</span> さらに詳しく知りたい方へ
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              AI Contents Laboについてもっと知って、あなたにぴったりの方法を見つけましょう
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Link 
              href="/about" 
              className="bg-white rounded-xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 border border-orange-100 hover:border-orange-200 block group"
              aria-label="私たちについて詳しく見る"
            >
              <div className="text-4xl mb-4" aria-hidden="true">ℹ️</div>
              <h3 className="text-xl font-bold text-orange-700 mb-3 group-hover:text-orange-600">私たちについて</h3>
              <p className="text-gray-700 text-sm">AI Contents Laboの理念や運営者について詳しくご紹介します</p>
            </Link>
            
            <Link 
              href="/members" 
              className="bg-white rounded-xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 border border-orange-100 hover:border-orange-200 block group relative"
              aria-label="メンバーの成果報告を見る"
            >
              <span className="absolute top-4 right-4 bg-orange-500 text-white text-xs px-2 py-1 rounded-full">NEW</span>
              <div className="text-4xl mb-4" aria-hidden="true">🎉</div>
              <h3 className="text-xl font-bold text-orange-700 mb-3 group-hover:text-orange-600">メンバーの成果</h3>
              <p className="text-gray-700 text-sm">#ACL成果 で投稿された実際の成功体験をご覧ください</p>
            </Link>
            
            <Link 
              href="/community" 
              className="bg-white rounded-xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 border border-cyan-100 hover:border-cyan-200 block group"
              aria-label="コミュニティ詳細を見る"
            >
              <div className="text-4xl mb-4" aria-hidden="true">👥</div>
              <h3 className="text-xl font-bold text-cyan-700 mb-3 group-hover:text-cyan-600">コミュニティ詳細</h3>
              <p className="text-gray-700 text-sm">実践コミュニティでの活動内容やサポート体制をご紹介</p>
            </Link>
            
            <Link 
              href="/blog" 
              className="bg-white rounded-xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 border border-purple-100 hover:border-purple-200 block group"
              aria-label="ブログを見る"
            >
              <div className="text-4xl mb-4" aria-hidden="true">📝</div>
              <h3 className="text-xl font-bold text-purple-700 mb-3 group-hover:text-purple-600">ブログ</h3>
              <p className="text-gray-700 text-sm">AI活用のコツや成功事例など、役立つ情報を毎日更新</p>
            </Link>
            
            <Link 
              href="/webinar" 
              className="bg-white rounded-xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 border border-green-100 hover:border-green-200 block group"
              aria-label="ウェビナー詳細を見る"
            >
              <div className="text-4xl mb-4" aria-hidden="true">🎥</div>
              <h3 className="text-xl font-bold text-green-700 mb-3 group-hover:text-green-600">無料ウェビナー</h3>
              <p className="text-gray-700 text-sm">週1回開催！15分で学べるAI活用術を無料で</p>
            </Link>
            
            <Link 
              href="/contact" 
              className="bg-white rounded-xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-gray-200 block group"
              aria-label="お問い合わせ"
            >
              <div className="text-4xl mb-4" aria-hidden="true">📞</div>
              <h3 className="text-xl font-bold text-gray-700 mb-3 group-hover:text-gray-600">お問い合わせ</h3>
              <p className="text-gray-700 text-sm">ご質問やご相談はお気軽にどうぞ</p>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}