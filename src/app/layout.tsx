import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import HeaderImproved from '@/components/HeaderImproved'
import FooterImproved from '@/components/FooterImproved'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'AI Contents Labo - 1日15分で100円noteから始める副収入',
  description: 'AI Contents Laboでは、忙しい会社員・主婦でもAIを活用して継続的な収入を得るためのノウハウを学べます。週1回の無料ウェビナーと実践コミュニティでサポートします。',
  keywords: 'AI, コンテンツ, 副業, 収入, ウェビナー, メルマガ, 100円note, スキマ時間, 初心者, 会社員, 主婦',
  openGraph: {
    title: 'AI Contents Labo - 1日15分で100円noteから始める副収入',
    description: 'AI Contents Laboでは、忙しい会社員・主婦でもAIを活用して継続的な収入を得るためのノウハウを学べます。',
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