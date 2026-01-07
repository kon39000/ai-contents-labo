import type React from "react"
import type { Metadata } from "next"
import { Inter, Noto_Sans_JP } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  variable: "--font-noto-sans-jp",
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://ai-contents-labo.com"),
  title: "AIコンテンツラボ | AIで創る、わたしの世界",
  description: 'AIを使うのは、もう当たり前。次に必要なのは、"AIで創る力"。学び・実践・発信がつながる、挑戦の場。',
  generator: "v0.app",
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    title: "AIコンテンツラボ | AIで創る、わたしの世界",
    description: 'AIを使うのは、もう当たり前。次に必要なのは、"AIで創る力"。学び・実践・発信がつながる、挑戦の場。',
    url: "https://ai-contents-labo.com",
    siteName: "AIコンテンツラボ",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "AIコンテンツラボ",
      },
    ],
    locale: "ja_JP",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ja">
      <body className={`${inter.variable} ${notoSansJP.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
