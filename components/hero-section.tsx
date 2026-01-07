"use client"

import { Button } from "@/components/ui/button"
import { AnimatedHeroBackground } from "@/components/animated-hero-background"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
      <AnimatedHeroBackground />

      <div className="absolute inset-0 bg-[#0F172A]/40 backdrop-blur-[2px] z-[1]" />

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance">
          <span className="bg-gradient-to-r from-[#4FD1C5] via-[#F472B6] to-[#4FD1C5] bg-clip-text text-transparent animate-gradient">
            AIで創る、あなたの世界。
          </span>
        </h1>

        <p className="text-2xl md:text-3xl font-bold text-[#F8FAFC] mb-8 text-balance">
          創造する楽しさが、未来を変えていく。
        </p>

        <p className="text-lg md:text-xl text-[#F8FAFC]/80 mb-12 max-w-3xl mx-auto leading-relaxed text-pretty">
          AIを使うのは、もう当たり前。次に必要なのは、"AIで創る力"。
          <br />
          学び・実践・発信がつながる、挑戦の場。
        </p>

        <Button
          size="lg"
          className="bg-gradient-to-r from-[#F472B6] to-[#4FD1C5] hover:opacity-90 text-white font-bold text-lg px-8 py-6 rounded-full shadow-lg shadow-[#F472B6]/50 hover:shadow-[#4FD1C5]/50 transition-all duration-300 hover:scale-105"
          asChild
        >
          <a href="https://nmo1.com/p/r/jLJHIDSC" target="_blank" rel="noopener noreferrer">
            今すぐ参加する
          </a>
        </Button>

        <div className="mt-8 flex flex-col items-center gap-2 text-[#F8FAFC]/70">
          <p className="text-sm md:text-base flex items-center gap-2">
            💬 オンラインコミュニティ（一部無料コンテンツあり）
          </p>
          <p className="text-xs md:text-sm text-[#F8FAFC]/50">※Discordを使用したコミュニティです。</p>
        </div>
      </div>
    </section>
  )
}
