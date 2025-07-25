'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

interface Chapter {
  id: number
  title: string
  duration: string
  startTime: number
  description: string
  completed: boolean
}

const chapters: Chapter[] = [
  {
    id: 1,
    title: 'はじめに',
    duration: '3:00',
    startTime: 0,
    description: '自己紹介、講座の目的、事前準備',
    completed: false
  },
  {
    id: 2,
    title: 'ChatGPT登録・基本操作',
    duration: '3:00',
    startTime: 180,
    description: 'アカウント作成手順、基本画面の説明',
    completed: false
  },
  {
    id: 3,
    title: 'ビジネス活用実践',
    duration: '3:00',
    startTime: 360,
    description: 'メール作成、資料構成、スケジュール最適化',
    completed: false
  },
  {
    id: 4,
    title: '効率化テクニック',
    duration: '3:00',
    startTime: 540,
    description: '音声入力、プロンプトのコツ、機能の保存',
    completed: false
  },
  {
    id: 5,
    title: 'まとめ・次のステップ',
    duration: '3:00',
    startTime: 720,
    description: '学習内容の振り返り、明日から実践できること',
    completed: false
  }
]

export default function ChatGPTMasterCourse() {
  const [currentChapter, setCurrentChapter] = useState(1)
  const [videoProgress, setVideoProgress] = useState(0)
  const [chapterProgress, setChapterProgress] = useState<Chapter[]>(chapters)
  const [showPracticeArea, setShowPracticeArea] = useState(false)
  const [practicePrompt, setPracticePrompt] = useState('')
  const [practiceResult, setPracticeResult] = useState('')

  useEffect(() => {
    // ローカルストレージから進捗を読み込み
    const savedProgress = localStorage.getItem('chatgpt-master-progress')
    if (savedProgress) {
      const parsedProgress = JSON.parse(savedProgress)
      setChapterProgress(parsedProgress.chapters || chapters)
      setCurrentChapter(parsedProgress.currentChapter || 1)
      setVideoProgress(parsedProgress.videoProgress || 0)
    }
  }, [])

  const saveProgress = () => {
    const progressData = {
      chapters: chapterProgress,
      currentChapter,
      videoProgress,
      lastUpdated: new Date().toISOString()
    }
    localStorage.setItem('chatgpt-master-progress', JSON.stringify(progressData))
  }

  const markChapterCompleted = (chapterId: number) => {
    const updatedChapters = chapterProgress.map(chapter => 
      chapter.id === chapterId ? { ...chapter, completed: true } : chapter
    )
    setChapterProgress(updatedChapters)
    
    // 次の章に移動
    if (chapterId < chapters.length) {
      setCurrentChapter(chapterId + 1)
    }
    
    saveProgress()
  }

  const handlePractice = () => {
    // 簡単なシミュレーション（実際にはChatGPT APIを使用）
    const responses = {
      'メール': 'お世話になっております。\n\n件名：会議の日程調整について\n\nいつもお世話になっております。\n来週の会議の日程ですが、以下の日程でいかがでしょうか？\n\n• 7月20日（月） 14:00-15:00\n• 7月21日（火） 10:00-11:00\n\nご都合のよろしいお時間をお教えください。\n\nよろしくお願いいたします。',
      '資料': 'プロジェクト企画書の構成例\n\n1. プロジェクト概要\n   - プロジェクト名\n   - 目的・目標\n   - 期間・スケジュール\n\n2. ターゲット分析\n   - ターゲットユーザー\n   - ニーズ・課題\n\n3. ソリューション\n   - 提供価値\n   - 特徴・機能\n\n4. 実行計画\n   - タスク分解\n   - 担当者・リソース\n\n5. 予算・リスク管理',
      'スケジュール': '効率的な一日のスケジュール案\n\n【朝（6:00-9:00）】\n6:00 起床・モーニングルーティン\n6:30 運動・ストレッチ\n7:00 朝食・ニュースチェック\n8:00 重要タスク1（集中力高い時間）\n\n【昭間（9:00-17:00）】\n9:00 メールチェック・返信\n10:00 会議・ミーティング\n12:00 昼食・休憩\n13:00 重要タスク2\n15:00 事務作業・ルーチンワーク\n\n【夕方（17:00-22:00）】\n17:00 一日の振り返り・明日の準備\n18:00 夕食・リラックス\n19:00 個人的な時間（趣味・学習）\n21:00 就寝準備\n22:00 就寝'
    }
    
    const result = Object.entries(responses).find(([key]) => 
      practicePrompt.includes(key)
    )?.[1] || 'ChatGPTがこのような返答をします。具体的なプロンプトを試してみてください！'
    
    setPracticeResult(result)
  }

  const completedChapters = chapterProgress.filter(ch => ch.completed).length
  const progressPercentage = Math.round((completedChapters / chapters.length) * 100)

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      {/* ヘッダー */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <Link href="/" className="text-xl font-bold text-green-600 hover:text-green-700 transition-colors">
                ← メインサイト
              </Link>
              <span className="text-gray-400">|</span>
              <Link href="/learn" className="text-lg font-medium text-gray-700 hover:text-green-600 transition-colors">
                学習ポータル
              </Link>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="text-sm text-gray-600">
                進捗: <span className="font-semibold text-green-600">{progressPercentage}%</span>
              </div>
              <div className="w-24 bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-gradient-to-r from-green-400 to-green-600 h-2 rounded-full transition-all duration-500"
                  style={{ width: `${progressPercentage}%` }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          {/* コースタイトル */}
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              🤖 ChatGPT15分マスター講座
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              初心者でも安心！ChatGPTの基本操作から実践的な活用法までを学びましょう。
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* 動画プレイヤー */}
              <div className="lg:col-span-2">
                <div className="bg-white rounded-xl shadow-lg p-6">
                  <div className="aspect-video bg-gray-900 rounded-lg mb-4 flex items-center justify-center">
                    <div className="text-white text-center">
                      <div className="text-6xl mb-4">🎥</div>
                      <p className="text-lg mb-2">第{currentChapter}章: {chapters[currentChapter - 1]?.title}</p>
                      <p className="text-sm text-gray-300">動画プレイヤー（デモ版）</p>
                      <button 
                        onClick={() => setVideoProgress(videoProgress + 10)}
                        className="mt-4 bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg transition-colors"
                      >
                        再生シミュレーション
                      </button>
                    </div>
                  </div>
                  
                  {/* 動画コントロール */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-4">
                      <button className="bg-green-600 hover:bg-green-700 text-white p-2 rounded">
                        ▶️
                      </button>
                      <span className="text-sm text-gray-600">0:00 / 15:00</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <button className="text-sm bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded">
                        1x
                      </button>
                      <button className="text-sm bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded">
                        CC
                      </button>
                    </div>
                  </div>
                  
                  {/* 章完了ボタン */}
                  <button
                    onClick={() => markChapterCompleted(currentChapter)}
                    className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold py-3 rounded-lg transition-all duration-200"
                    disabled={chapterProgress[currentChapter - 1]?.completed}
                  >
                    {chapterProgress[currentChapter - 1]?.completed ? '✅ 完了済み' : 'この章を完了する'}
                  </button>
                </div>
              </div>
              
              {/* サイドバー */}
              <div className="space-y-6">
                {/* 章一覧 */}
                <div className="bg-white rounded-xl shadow-lg p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">📚 章一覧</h3>
                  <div className="space-y-3">
                    {chapterProgress.map((chapter) => (
                      <div 
                        key={chapter.id}
                        className={`p-3 rounded-lg border cursor-pointer transition-all duration-200 ${
                          currentChapter === chapter.id 
                            ? 'border-green-500 bg-green-50' 
                            : 'border-gray-200 hover:border-green-300'
                        }`}
                        onClick={() => setCurrentChapter(chapter.id)}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-medium text-gray-900">
                            {chapter.id}. {chapter.title}
                          </span>
                          {chapter.completed && (
                            <span className="text-green-600">✅</span>
                          )}
                        </div>
                        <div className="flex items-center justify-between text-sm text-gray-600">
                          <span>{chapter.duration}</span>
                        </div>
                        <p className="text-xs text-gray-500 mt-1">{chapter.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* 実践エリア */}
                <div className="bg-white rounded-xl shadow-lg p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">⚙️ 実践エリア</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    学んだ内容をすぐに試してみましょう！
                  </p>
                  
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        ChatGPTに質問してみよう
                      </label>
                      <textarea
                        value={practicePrompt}
                        onChange={(e) => setPracticePrompt(e.target.value)}
                        placeholder="例: 会議の日程調整メールを作って"
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent resize-none"
                        rows={3}
                      />
                    </div>
                    
                    <button
                      onClick={handlePractice}
                      disabled={!practicePrompt.trim()}
                      className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 disabled:from-gray-400 disabled:to-gray-500 text-white font-semibold py-2 rounded-lg transition-all duration-200"
                    >
                      試してみる
                    </button>
                    
                    {practiceResult && (
                      <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                        <h4 className="font-medium text-gray-900 mb-2">ChatGPTの結果:</h4>
                        <pre className="text-sm text-gray-700 whitespace-pre-wrap">{practiceResult}</pre>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* 次のステップ */}
          {completedChapters === chapters.length && (
            <div className="mt-12 text-center">
              <div className="bg-white rounded-xl shadow-lg p-8 max-w-2xl mx-auto">
                <div className="text-6xl mb-4">🎉</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  おめでとうございます！
                </h3>
                <p className="text-gray-600 mb-6">
                  ChatGPT15分マスター講座を完了しました。<br />
                  次はさらに高度なサイト制作の秘密を学んでみましょう！
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    href="/learn/site-creation"
                    className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-105"
                  >
                    次のコース: サイト制作の秘密
                  </Link>
                  <Link 
                    href="/learn"
                    className="bg-gradient-to-r from-gray-500 to-gray-600 hover:from-gray-600 hover:to-gray-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200"
                  >
                    学習ポータルに戻る
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  )
}
