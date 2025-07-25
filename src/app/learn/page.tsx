'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

interface CourseProgress {
  id: string
  title: string
  description: string
  duration: string
  completed: boolean
  progress: number
  icon: string
  difficulty: 'beginner' | 'intermediate' | 'advanced'
  url: string
}

const courses: CourseProgress[] = [
  {
    id: 'chatgpt-master',
    title: 'ChatGPT15分マスター講座',
    description: '初心者でもすぐに使える！ChatGPTの基本操作から実践的な活用法まで',
    duration: '15分',
    completed: false,
    progress: 0,
    icon: '🤖',
    difficulty: 'beginner',
    url: '/learn/chatgpt-master'
  },
  {
    id: 'site-creation',
    title: 'サイト制作の秘密',
    description: '驚き！このサイトがプログラミング知識ゼロで作られた理由',
    duration: '12分',
    completed: false,
    progress: 0,
    icon: '🛠️',
    difficulty: 'intermediate',
    url: '/learn/site-creation'
  },
  {
    id: 'vibecoding-demo',
    title: 'Vibeコーディング体験',
    description: 'AIとの対話だけでWebページが完成！実際の制作過程を体験',
    duration: '10分',
    completed: false,
    progress: 0,
    icon: '🚀',
    difficulty: 'advanced',
    url: '/learn/vibecoding-demo'
  }
]

export default function LearningPortal() {
  const [userProgress, setUserProgress] = useState<CourseProgress[]>(courses)
  const [overallProgress, setOverallProgress] = useState(0)

  useEffect(() => {
    // ローカルストレージから進捗を読み込み
    const savedProgress = localStorage.getItem('acl-learning-progress')
    if (savedProgress) {
      const parsedProgress = JSON.parse(savedProgress)
      setUserProgress(parsedProgress)
      
      // 全体進捗を計算
      const totalProgress = parsedProgress.reduce((sum: number, course: CourseProgress) => sum + course.progress, 0)
      setOverallProgress(Math.round(totalProgress / parsedProgress.length))
    }
  }, [])

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner': return 'bg-green-100 text-green-800'
      case 'intermediate': return 'bg-yellow-100 text-yellow-800'
      case 'advanced': return 'bg-red-100 text-red-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const getDifficultyText = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner': return '初級'
      case 'intermediate': return '中級'
      case 'advanced': return '上級'
      default: return ''
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-cyan-50">
      {/* ヘッダー */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <Link href="/" className="text-2xl font-bold text-orange-600 hover:text-orange-700 transition-colors">
                AI Contents Labo
              </Link>
              <span className="text-gray-400">|</span>
              <span className="text-lg font-medium text-gray-700">学習ポータル</span>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="text-sm text-gray-600">
                進捗: <span className="font-semibold text-orange-600">{overallProgress}%</span>
              </div>
              <div className="w-24 bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-gradient-to-r from-orange-400 to-orange-600 h-2 rounded-full transition-all duration-500"
                  style={{ width: `${overallProgress}%` }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* メインコンテンツ */}
      <main className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          {/* ヒーロセクション */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              <span className="text-orange-600">ChatGPT</span>から
              <span className="text-cyan-600">Vibeコーディング</span>まで
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              AI効率化の完全ロードマップを体験してみませんか？<br />
              初心者から上級者まで、あなたのペースで学習できます。
            </p>
            
            {overallProgress > 0 && (
              <div className="bg-white rounded-xl shadow-lg p-6 max-w-md mx-auto mb-8">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">おかえりなさい！</h3>
                <p className="text-gray-600">
                  前回の続きから学習を再開できます。
                </p>
              </div>
            )}
          </div>

          {/* コース一覧 */}
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              🎓 学習コース
            </h2>
            
            <div className="space-y-6">
              {userProgress.map((course, index) => (
                <div key={course.id} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300">
                  <div className="flex items-start space-x-6">
                    {/* コース番号とアイコン */}
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-gradient-to-br from-orange-100 to-cyan-100 rounded-xl flex items-center justify-center text-2xl mb-2">
                        {course.icon}
                      </div>
                      <div className="text-center">
                        <span className="text-sm font-medium text-gray-500">コース {index + 1}</span>
                      </div>
                    </div>
                    
                    {/* コース情報 */}
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h3 className="text-xl font-bold text-gray-900 mb-2">{course.title}</h3>
                          <p className="text-gray-600 mb-3">{course.description}</p>
                          
                          <div className="flex items-center space-x-4 text-sm">
                            <span className="flex items-center text-gray-500">
                              🕰️ {course.duration}
                            </span>
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(course.difficulty)}`}>
                              {getDifficultyText(course.difficulty)}
                            </span>
                            {course.completed && (
                              <span className="flex items-center text-green-600 font-medium">
                                ✅ 完了
                              </span>
                            )}
                          </div>
                        </div>
                        
                        <Link 
                          href={course.url}
                          className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg ml-4 flex-shrink-0"
                        >
                          {course.progress > 0 ? '続きから' : '学習開始'}
                        </Link>
                      </div>
                      
                      {/* 進捗バー */}
                      {course.progress > 0 && (
                        <div className="mt-4">
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-sm text-gray-600">進捗</span>
                            <span className="text-sm font-medium text-gray-800">{course.progress}%</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div 
                              className="bg-gradient-to-r from-green-400 to-green-600 h-2 rounded-full transition-all duration-500"
                              style={{ width: `${course.progress}%` }}
                            ></div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 次のステップ案内 */}
          <div className="mt-16 text-center">
            <div className="bg-white rounded-xl shadow-lg p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                🎆 学習後のステップ
              </h3>
              <p className="text-gray-600 mb-6">
                すべてのコースを完了すると、さらに深い学習機会をご用意しています。
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Link 
                  href="/#newsletter"
                  className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-105"
                >
                  📧 無料ウェビナー参加
                </Link>
                <Link 
                  href="/about"
                  className="bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-105"
                >
                  🌟 コミュニティ参加
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      {/* フッター */}
      <footer className="bg-white border-t border-gray-200 mt-16">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-8">
          <div className="text-center text-gray-600">
            <p>&copy; 2025 AI Contents Labo. All rights reserved.</p>
            <Link href="/" className="text-orange-600 hover:text-orange-700 mt-2 inline-block">
              メインサイトに戻る
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
