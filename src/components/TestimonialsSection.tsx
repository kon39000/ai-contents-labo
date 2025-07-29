'use client'

interface Testimonial {
  id: string
  name: string
  content: string
  highlight: string
}

const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'gakushiさん',
    content: 'udemyが作成できるようになったのが大きいです。また、作ったwebアプリのモニターになってくれる人がいたり、メルマガに入ってくれる人がいたり、コミュニティを通じて繋がりが出来て嬉しいです。udemyの共同セールで、たくさんのリストが得られたことは強烈な成功体験でした。',
    highlight: 'AIを試せる遊び場'
  },
  {
    id: '2',
    name: 'Tさん',
    content: 'セミナーが出来るようになりました（上手い下手は別として、行動を起こすことができました）。AIのハイレベルな活用法を知る事が出来る。探す手間が省けるのが嬉しい。',
    highlight: '学びの場'
  },
  {
    id: '3',
    name: 'てつさん',
    content: 'noteのプロフィールをAIで整えた、Feloを使えるようになった。今までの講座をアーカイブで見れるようになったこと。',
    highlight: 'みんなでわちゃわちゃたのしくAIを学べる場所'
  },
  {
    id: '4',
    name: 'Shinyaさん',
    content: '今まではロム専だったのに情報発信する意欲がわくようになったし、実際発信できるようになった。どんなことを書いても、Konさんが一言コメントくれること！これ、他のコミュニティには絶対ないです！',
    highlight: '情報発信する意欲がわくように'
  },
  {
    id: '5',
    name: 'かもとりさん',
    content: 'Claudeを使って普段の業務効率化を達成できた。わからないことはだれかが質問していることが多いから、AIコンテンツラボ内で検索すればわかることが多い。',
    highlight: '相談できる場所'
  },
  {
    id: '6',
    name: 'いいにくさん',
    content: '資料作成の質が上がった。AIに関する情報収集の効率化、実用的な知識が身につく。自発的に学ぶ意欲がある人におすすめです。',
    highlight: 'AIの先生たちの会話を覗ける場所'
  }
]

export default function TestimonialsSection() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            メンバーの声
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            実際にAIコンテンツラボで学んでいるメンバーから寄せられた生の声をご紹介します
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id}
              className="bg-gradient-to-br from-orange-50 to-cyan-50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="mb-4">
                <span className="inline-block bg-orange-100 text-orange-800 text-sm px-3 py-1 rounded-full font-medium">
                  {testimonial.highlight}
                </span>
              </div>
              
              <blockquote className="text-gray-700 mb-4 leading-relaxed">
                "{testimonial.content}"
              </blockquote>
              
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gradient-to-r from-orange-400 to-cyan-400 rounded-full flex items-center justify-center text-white font-bold">
                  {testimonial.name.charAt(0)}
                </div>
                <div className="ml-3">
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">メンバー</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-orange-50 to-cyan-50 rounded-3xl p-8 mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              🎯 期間限定募集のお知らせ
            </h3>
            <p className="text-gray-700 mb-6">
              月額会員の募集は期間限定で行っています！<br />
              次回の募集開始は、メルマガ登録者に優先的にお知らせします。<br />
              ぜひメルマガに登録して、参加のチャンスをお見逃しなく✨
            </p>
            <a 
              href="https://nmo1.com/p/r/DfDZJpzk"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold py-4 px-8 rounded-full shadow-lg transform hover:scale-105 transition-all duration-200"
            >
              📧 メルマガに登録して最新情報を受け取る
            </a>
          </div>
          
          <p className="text-gray-600 mb-6">
            まずは無料ウェビナーで体験してみませんか？
          </p>
          <a 
            href="https://nmo-event.peatix.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transform hover:scale-105 transition-all duration-200"
          >
            🎫 無料ウェビナーに参加する
          </a>
        </div>
      </div>
    </section>
  )
}