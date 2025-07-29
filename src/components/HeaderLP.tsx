export default function HeaderLP() {
  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center py-4">
          {/* ロゴのみ */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-cyan-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">AI</span>
            </div>
            <div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-orange-600 to-cyan-600 bg-clip-text text-transparent">
                AI Contents Labo
              </h1>
              <p className="text-xs text-gray-500">学ぶだけで終わらせない</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}