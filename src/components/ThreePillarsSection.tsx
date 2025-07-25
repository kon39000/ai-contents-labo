export default function ThreePillarsSection() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            私たちが大切にしている3つのこと
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          <div className="text-center p-8 rounded-2xl bg-orange-50 border border-orange-100">
            <div className="text-5xl mb-6">🎓</div>
            <h3 className="text-xl font-bold text-orange-700 mb-4">
              学び続けられる環境
            </h3>
            <p className="text-gray-700 leading-relaxed">
              アーカイブ講座で過去の学習内容をいつでも復習でき、定期講座で最新の情報をキャッチアップ。あなたのペースで継続学習をサポートします。
            </p>
          </div>
          
          <div className="text-center p-8 rounded-2xl bg-cyan-50 border border-cyan-100">
            <div className="text-5xl mb-6">🚀</div>
            <h3 className="text-xl font-bold text-cyan-700 mb-4">
              実践できる場の提供
            </h3>
            <p className="text-gray-700 leading-relaxed">
              有料コミュニティでの課題共有や登壇機会を通じて、学んだことを実際に使える形にします。理論だけでなく実践で身につけましょう。
            </p>
          </div>
          
          <div className="text-center p-8 rounded-2xl bg-purple-50 border border-purple-100">
            <div className="text-5xl mb-6">👥</div>
            <h3 className="text-xl font-bold text-purple-700 mb-4">
              仲間と育てる・誰かの先生になる機会
            </h3>
            <p className="text-gray-700 leading-relaxed">
              成果共有を通じてコミュニティメンバーと成長し合い、講師デビューで今度はあなたが誰かの学びをサポート。共に成長する文化を大切にしています。
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}