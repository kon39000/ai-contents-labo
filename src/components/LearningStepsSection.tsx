export default function LearningStepsSection() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            3ステップで確実にスキルアップ
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            迷わず進めるシンプルな学習ロードマップで、初心者でも着実に成長できます
          </p>
        </div>
        
        <div className="relative">
          {/* 接続線 */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-orange-200 via-cyan-200 to-orange-200 transform -translate-y-1/2 z-0"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 relative z-10">
            {/* STEP 1 */}
            <div className="text-center">
              <div className="relative mb-8">
                <div className="w-24 h-24 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto shadow-xl">
                  <span className="text-3xl font-bold text-white">1</span>
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-orange-200 rounded-full flex items-center justify-center">
                  <span className="text-sm">📚</span>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  基礎学習期間
                </h3>
                <div className="text-orange-600 font-bold text-lg mb-4">
                  1-2ヶ月目
                </div>
                
                <div className="text-left space-y-3 mb-6">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700">AI活用の基本をマスター</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700">ChatGPT・Claude等の使い方</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700">プロンプト作成スキル習得</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700">コンテンツ作成の基礎</p>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg p-4">
                  <p className="text-sm text-gray-600 font-medium">
                    💡 毎日15分の学習で基礎をしっかり固めます
                  </p>
                </div>
              </div>
            </div>
            
            {/* STEP 2 */}
            <div className="text-center">
              <div className="relative mb-8">
                <div className="w-24 h-24 bg-gradient-to-r from-cyan-500 to-cyan-600 rounded-full flex items-center justify-center mx-auto shadow-xl">
                  <span className="text-3xl font-bold text-white">2</span>
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-cyan-200 rounded-full flex items-center justify-center">
                  <span className="text-sm">🚀</span>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-cyan-50 to-cyan-100 rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  実践開始期間
                </h3>
                <div className="text-cyan-600 font-bold text-lg mb-4">
                  2-3ヶ月目
                </div>
                
                <div className="text-left space-y-3 mb-6">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-cyan-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700">初回コンテンツ作成・発信</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-cyan-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700">SNSでの情報発信開始</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-cyan-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700">コミュニティでフィードバック</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-cyan-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700">継続的なコンテンツ制作</p>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg p-4">
                  <p className="text-sm text-gray-600 font-medium">
                    🎯 小さな成功体験で自信をつけます
                  </p>
                </div>
              </div>
            </div>
            
            {/* STEP 3 */}
            <div className="text-center">
              <div className="relative mb-8">
                <div className="w-24 h-24 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto shadow-xl">
                  <span className="text-3xl font-bold text-white">3</span>
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-purple-200 rounded-full flex items-center justify-center">
                  <span className="text-sm">📈</span>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  拡大展開期間
                </h3>
                <div className="text-purple-600 font-bold text-lg mb-4">
                  3ヶ月目以降
                </div>
                
                <div className="text-left space-y-3 mb-6">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700">Kindle出版・講座作成</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700">オンライン講座・商品開発</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700">コンサルティング・指導</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700">信頼関係と影響力の構築</p>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg p-4">
                  <p className="text-sm text-gray-600 font-medium">
                    🎯 継続的な収入源を確立します
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* 成功の鍵 */}
        <div className="mt-20 text-center bg-gradient-to-r from-gray-50 to-gray-100 rounded-3xl p-12">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            成功の3つの鍵 🔑
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⏰</span>
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">継続可能な学習</h4>
              <p className="text-gray-600 text-sm">1日15分から始められる無理のないペース</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">👥</span>
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">コミュニティサポート</h4>
              <p className="text-gray-600 text-sm">仲間と励まし合いながら挫折を防止</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">実践重視のカリキュラム</h4>
              <p className="text-gray-600 text-sm">学んだことをすぐにスキルアップに繋げる仕組み</p>
            </div>
          </div>
          
          <div className="mt-8">
            <a href="https://nmo1.com/p/r/DfDZJpzk" target="_blank" rel="noopener noreferrer" 
               className="bg-gradient-to-r from-orange-500 to-cyan-500 hover:from-orange-600 hover:to-cyan-600 text-white font-bold py-4 px-8 rounded-full shadow-lg transform hover:scale-105 transition-all duration-200">
              今すぐロードマップを歩み始める
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}