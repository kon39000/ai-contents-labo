import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import HeaderImproved from '@/components/HeaderImproved'
import FooterImproved from '@/components/FooterImproved'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'AI Contents Labo - 学ぶだけで終わらせない',
  description: 'AI Contents Laboでは、学び・実践・仲間づくりを通じて、あなたのコンテンツ力を育てるコミュニティです。今日の生徒が明日の講師。',
  keywords: 'AI, コンテンツ, 学習, コミュニティ, 実践, 講師, スキル, 成長',
  openGraph: {
    title: 'AI Contents Labo - 学ぶだけで終わらせない',
    description: 'AI Contents Laboでは、学び・実践・仲間づくりを通じて、あなたのコンテンツ力を育てるコミュニティです。',
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
        <HeaderImproved />
        <main className="min-h-screen">
          {children}
        </main>
        <FooterImproved />
      </body>
    </html>
  )
}