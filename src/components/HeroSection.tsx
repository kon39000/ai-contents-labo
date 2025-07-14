'use client'

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-br from-orange-50 to-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            <span className="text-orange-600">1日15分</span>のAI学習で<br />
            <span className="text-cyan-600">100円note</span>から始める副収入
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            忙しい会社員・主婦でも大丈夫！<br />
            <span className="font-semibold text-orange-600">スキマ時間</span>でAIを学んで、<span className="font-semibold text-cyan-600">仲間と一緒</span>に小さな成果から始めよう
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <a 
              href="#newsletter" 
              className="btn-primary text-lg px-8 py-4 inline-block"
            >
              📧 無料メルマガで特典動画を受け取る
            </a>
            <a 
              href="#webinar" 
              className="btn-secondary text-lg px-8 py-4 inline-block"
            >
              🎥 無料ウェビナーに参加する
            </a>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl mb-3">⏰</div>
              <h3 className="text-lg font-semibold mb-2 text-orange-600">1日15分から</h3>
              <p className="text-gray-600">通勤時間、昼休み、寝る前のスキマ時間。まとまった時間は不要です</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-3">💰</div>
              <h3 className="text-lg font-semibold mb-2 text-cyan-600">100円noteから</h3>
              <p className="text-gray-600">いきなり高額は目指さない。小さな成功体験を積み重ねる安心設計</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-3">👥</div>
              <h3 className="text-lg font-semibold mb-2 text-purple-600">一人じゃない</h3>
              <p className="text-gray-600">同じ目標を持つ仲間と一緒だから、挫折せずに続けられます</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}