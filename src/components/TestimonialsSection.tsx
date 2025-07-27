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
    name: 'gakushi',
    content: 'udemyが作成できるようになったのが大きいです。また、作ったwebアプリのモニターになってくれる人がいたり、メルマガに入ってくれる人がいたり、コミュニティを通じて繋がりが出来て嬉しいです。',
    highlight: 'コミュニティを通じて繋がりが出来て嬉しい'
  },
  {
    id: '2',
    name: 'てつ',
    content: '今までの講座をアーカイブで見れるようになったこと。なるべくお金をかけずに、AIの最新ツールを学びたい人におすすめ。',
    highlight: 'みんなでわちゃわちゃたのしくAIを学べる場所'
  },
  {
    id: '3',
    name: 'Shinya',
    content: '今まではロム専だったのに情報発信する意欲がわくようになったし、実際発信できるようになった。どんなことを書いても、Konさんが一言コメントくれること！これ、他のコミュニティには絶対ないです！',
    highlight: '情報発信する意欲がわくようになった'
  },
  {
    id: '4',
    name: 'かもとり',
    content: 'Claudeを使って普段の業務効率化を達成できた。わからないことはだれかが質問していることが多いから、AIコンテンツラボ内で検索すればわかることが多い。',
    highlight: '業務効率化を達成できた'
  },
  {
    id: '5',
    name: 'いいにく',
    content: '資料作成の質が上がった。AIに関する情報収集の効率化、実用的な知識が身につく。',
    highlight: 'AIの先生たちの会話を覗ける場所'
  },
  {
    id: '6',
    name: 'タダオ',
    content: 'セミナーが出来るようになりました（上手い下手は別として、行動を起こすことができました）。AIのハイレベルな活用法を知る事が出来る。',
    highlight: '行動を起こすことができた'
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
          <p className="text-gray-600 mb-6">
            あなたも「今日の生徒が明日の講師」を体験してみませんか？
          </p>
          <a 
            href="https://nmo1.com/p/r/DfDZJpzk"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transform hover:scale-105 transition-all duration-200"
          >
            特典動画を受け取って始める
          </a>
        </div>
      </div>
    </section>
  )
}