import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import HeaderLP from '@/components/HeaderLP'
import FooterLP from '@/components/FooterLP'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'AI Contents Labo - 今日の学びを、明日の力に。AIで"できる自分"を育てる実践ラボ',
  description: 'AI Contents Laboでは、学びをスキルに変える場所として、実践重視のコミュニティで質問・学習・成長を全力サポートします。',
  keywords: 'AI, コンテンツ, 学習, コミュニティ, 実践, スキル, 成長, 能力開発',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
  },
  openGraph: {
    title: 'AI Contents Labo - 今日の学びを、明日の力に。AIで"できる自分"を育てる実践ラボ',
    description: 'AI Contents Laboでは、学びをスキルに変える場所として、実践重視のコミュニティで質問・学習・成長を全力サポートします。',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body className={`${inter.className} bg-gray-50`}>
        <HeaderLP />
        <main className="min-h-screen">
          {children}
        </main>
        <FooterLP />
      </body>
    </html>
  )
}