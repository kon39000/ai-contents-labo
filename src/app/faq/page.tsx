import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'よくある質問 | AI Contents Labo',
  description: 'AI Contents Laboに関するよくある質問と回答をまとめました。',
}

export default function FAQPage() {
  const faqs = [
    {
      question: "AI Contents Laboって何ですか？",
      answer: "子育て中のママ・パパがAIを活用して新しい収入源を作るためのコミュニティです。AIツールの使い方から実際の案件獲得まで幅広くサポートしています。"
    },
    {
      question: "参加費用はかかりますか？",
      answer: "基本的なコミュニティ参加は無料です。より深く学びたい方向けの有料プログラムもご用意しています。"
    },
    {
      question: "子育て中で時間がないのですが大丈夫ですか？",
      answer: "はい、子育て最優先で参加いただけます。すき間時間で学習できるコンテンツや、録画で後から視聴できるウェビナーもご用意しています。"
    },
    {
      question: "AIの知識が全くないのですが参加できますか？",
      answer: "もちろんです！初心者の方でも基礎から学べるよう、丁寧にサポートいたします。"
    },
    {
      question: "どのようなAIツールを学べますか？",
      answer: "ChatGPT、Claude、Canva、Notion AIなど、実際に収入につながるAIツールの活用方法を学べます。"
    },
    {
      question: "実際に収入を得られるのですか？",
      answer: "はい、多くのメンバーが月5万円以上の収入を得ています。ただし、個人の努力や状況により結果は異なります。"
    }
  ]

  return (
    <div className="bg-warm-50 min-h-screen">
      {/* ヒーローセクション */}
      <section className="bg-gradient-to-br from-orange-50 to-cyan-50 section-padding">
        <div className="container-max">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              ❓ よくある質問
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
              AI Contents Laboについてよくいただく質問にお答えします
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white section-padding">
        <div className="container-max max-w-4xl">
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-start">
                  <span className="text-orange-500 mr-2">Q.</span>
                  {faq.question}
                </h3>
                <div className="pl-6">
                  <p className="text-gray-700 leading-relaxed flex items-start">
                    <span className="text-cyan-500 mr-2 font-bold">A.</span>
                    <span>{faq.answer}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-6">
              他にご質問がございましたら、お気軽にお問い合わせください。
            </p>
            <a href="/contact" className="bg-orange-500 text-white font-bold py-3 px-6 rounded-full hover:bg-orange-600 transition-colors">
              📧 お問い合わせ
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}