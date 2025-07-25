import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'AI Contents Labo - 学習ポータル',
  description: 'ChatGPTからVibeコーディングまで、AI効率化の完全ロードマップを学習できる専用サイトです。',
  keywords: 'ChatGPT, AI, プログラミング, Vibeコーディング, 効率化, 学習',
  openGraph: {
    title: 'AI Contents Labo - 学習ポータル',
    description: 'ChatGPTからVibeコーディングまで、AI効率化の完全ロードマップ',
    type: 'website',
    locale: 'ja_JP',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Contents Labo - 学習ポータル',
    description: 'ChatGPTからVibeコーディングまで、AI効率化の完全ロードマップ',
  },
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja" className="scroll-smooth">
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
