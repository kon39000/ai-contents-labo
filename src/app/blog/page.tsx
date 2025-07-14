import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'ブログ | AI Contents Labo',
  description: 'AI活用のコツ、成功事例、最新情報など、子育て中でもAIで収入を得るための役立つ情報を毎日更新しています。',
}

// モックデータ - 後でSanityから取得
const blogPosts = [
  {
    id: 1,
    title: '【初心者向け】ChatGPTで子育てブログを収益化する5ステップ',
    excerpt: '子育ての体験談をAIを使って魅力的な記事に変え、月3万円の収益を得る具体的な方法をご紹介します。',
    category: 'AI活用術',
    author: 'のも',
    publishedAt: '2025-07-12',
    readTime: '8分',
    image: '/blog/chatgpt-blog-monetization.jpg',
    tags: ['ChatGPT', '初心者', 'ブログ', '収益化']
  },
  {
    id: 2,
    title: 'スキマ時間でできるAI画像生成＆販売で月5万円稼ぐ方法',
    excerpt: '育児の合間にMidjourneyを使って商用利用可能な画像を作成し、収益化する実践的なノウハウをお伝えします。',
    category: '実践事例',
    author: 'ゆりママ',
    publishedAt: '2025-07-10',
    readTime: '12分',
    image: '/blog/ai-image-sales.jpg',
    tags: ['Midjourney', '画像生成', '販売', 'スキマ時間']
  },
  {
    id: 3,
    title: '【成功インタビュー】双子ママが3ヶ月で月4万円達成した秘訣',
    excerpt: '双子の育児で忙しい中、AIを活用して安定収入を得ているあきママさんの体験談と具体的な手法をご紹介。',
    category: '成功事例',
    author: 'あきママ',
    publishedAt: '2025-07-08',
    readTime: '15分',
    image: '/blog/twin-mom-success.jpg',
    tags: ['成功事例', '双子育児', 'インタビュー', '体験談']
  },
  {
    id: 4,
    title: 'Claude、Gemini、ChatGPT：子育てママが選ぶべきAIツールは？',
    excerpt: '主要なAIツールの特徴を比較し、育児中のママ・パパにとって最適なツールの選び方を解説します。',
    category: 'AI比較',
    author: 'のも',
    publishedAt: '2025-07-06',
    readTime: '10分',
    image: '/blog/ai-tools-comparison.jpg',
    tags: ['Claude', 'Gemini', 'ChatGPT', '比較', '選び方']
  },
  {
    id: 5,
    title: '時短プロンプト集：5分でできるコンテンツ作成術',
    excerpt: '忙しい子育て中でも短時間で高品質なコンテンツを作成できる、厳選プロンプト20選をご紹介。',
    category: 'プロンプト集',
    author: 'たかパパ',
    publishedAt: '2025-07-04',
    readTime: '6分',
    image: '/blog/time-saving-prompts.jpg',
    tags: ['プロンプト', '時短', 'コンテンツ作成', '効率化']
  },
  {
    id: 6,
    title: '【Q&A】よくある質問「子どもが小さくてもAI副業はできますか？」',
    excerpt: '0歳児のママから寄せられた質問にお答えします。小さなお子さんがいても無理なく始められる方法とは？',
    category: 'Q&A',
    author: 'みかママ',
    publishedAt: '2025-07-02',
    readTime: '7分',
    image: '/blog/baby-mama-qa.jpg',
    tags: ['Q&A', '0歳児', '子育て', '副業']
  }
]

const categories = [
  { name: 'すべて', count: 42 },
  { name: 'AI活用術', count: 15 },
  { name: '実践事例', count: 12 },
  { name: '成功事例', count: 8 },
  { name: 'プロンプト集', count: 5 },
  { name: 'Q&A', count: 2 }
]

export default function BlogPage() {
  return (
    <div className="bg-warm-50 min-h-screen">
      {/* ヒーローセクション */}
      <section className="bg-gradient-to-br from-purple-50 to-cyan-50 section-padding">
        <div className="container-max">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              📝 AI活用ブログ
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-8">
              子育て中でもAIで収入を得るための<br className="sm:hidden" />実践的なノウハウをお届け
            </p>
            
            {/* 検索バー */}
            <div className="max-w-md mx-auto">
              <div className="relative">
                <input
                  type="search"
                  placeholder="記事を検索..."
                  className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-full focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
                <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-purple-600">
                  🔍
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container-max py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* サイドバー */}
          <aside className="lg:col-span-1">
            <div className="bg-white rounded-xl p-6 shadow-lg mb-8">
              <h3 className="text-lg font-bold text-gray-900 mb-4">📚 カテゴリー</h3>
              <ul className="space-y-2">
                {categories.map((category) => (
                  <li key={category.name}>
                    <button className="flex items-center justify-between w-full text-left px-3 py-2 rounded-lg hover:bg-purple-50 transition-colors">
                      <span className="text-gray-700">{category.name}</span>
                      <span className="bg-purple-100 text-purple-700 text-xs px-2 py-1 rounded-full">
                        {category.count}
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* 人気記事 */}
            <div className="bg-white rounded-xl p-6 shadow-lg mb-8">
              <h3 className="text-lg font-bold text-gray-900 mb-4">🔥 人気記事</h3>
              <div className="space-y-4">
                {blogPosts.slice(0, 3).map((post, index) => (
                  <Link key={post.id} href={`/blog/${post.id}`} className="block group">
                    <div className="flex items-start space-x-3">
                      <span className="bg-purple-100 text-purple-600 text-sm font-bold w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        {index + 1}
                      </span>
                      <div>
                        <h4 className="text-sm font-medium text-gray-900 group-hover:text-purple-600 transition-colors leading-tight">
                          {post.title}
                        </h4>
                        <p className="text-xs text-gray-500 mt-1">{post.readTime}</p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
            
            {/* Newsletter CTA */}
            <div className="bg-gradient-to-br from-orange-500 to-cyan-600 rounded-xl p-6 text-white text-center">
              <div className="text-3xl mb-3">📧</div>
              <h3 className="text-lg font-bold mb-2">最新記事をメールで</h3>
              <p className="text-sm text-orange-100 mb-4">
                新しい記事が公開されたらすぐにお知らせします
              </p>
              <Link href="/newsletter" className="bg-white text-orange-600 font-semibold py-2 px-4 rounded-lg text-sm hover:bg-orange-50 transition-colors inline-block">
                メルマガ登録
              </Link>
            </div>
          </aside>

          {/* メインコンテンツ */}
          <main className="lg:col-span-3">
            {/* 記事一覧 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {blogPosts.map((post) => (
                <article key={post.id} className="bg-white rounded-xl shadow-lg overflow-hidden card-hover">
                  <div className="h-48 bg-gradient-to-br from-purple-100 to-cyan-100 flex items-center justify-center">
                    <span className="text-4xl">📝</span>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-xs font-semibold">
                        {post.category}
                      </span>
                      <span className="text-gray-500 text-xs">{post.readTime}</span>
                    </div>
                    
                    <h2 className="text-xl font-bold text-gray-900 mb-3 leading-tight hover:text-purple-600 transition-colors">
                      <Link href={`/blog/${post.id}`}>
                        {post.title}
                      </Link>
                    </h2>
                    
                    <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <div className="w-8 h-8 bg-gradient-to-r from-orange-400 to-cyan-400 rounded-full flex items-center justify-center">
                          <span className="text-white text-xs font-bold">
                            {post.author.charAt(0)}
                          </span>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-900">{post.author}</p>
                          <p className="text-xs text-gray-500">{post.publishedAt}</p>
                        </div>
                      </div>
                      
                      <Link href={`/blog/${post.id}`} className="text-purple-600 hover:text-purple-700 font-medium text-sm">
                        続きを読む →
                      </Link>
                    </div>
                    
                    {/* タグ */}
                    <div className="flex flex-wrap gap-2 mt-4">
                      {post.tags.map((tag) => (
                        <span key={tag} className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
            
            {/* ページネーション */}
            <div className="flex justify-center mt-12">
              <nav className="flex space-x-2">
                <button className="px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                  ← 前へ
                </button>
                <button className="px-4 py-2 bg-purple-600 text-white rounded-lg">1</button>
                <button className="px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">2</button>
                <button className="px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">3</button>
                <button className="px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                  次へ →
                </button>
              </nav>
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}