"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { useEffect, useRef, useState } from "react"

const benefits = [
  "アーカイブ見放題",
  "隔週セミナー参加",
  "Udemy特典クーポン",
  "Discord参加自由",
  "登壇チャンス",
  "共創イベント参加",
]

export function PricingSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-24 px-4 bg-gradient-to-b from-[#1E293B] to-[#0F172A]">
      <div className="max-w-4xl mx-auto">
        <h2
          className={`text-4xl md:text-5xl font-bold text-center mb-6 text-[#F8FAFC] transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          参加しやすく、<span className="text-[#F472B6]">続けやすい</span>
        </h2>

        <Card
          className={`mt-16 p-8 md:p-12 bg-gradient-to-br from-[#1E293B] to-[#0F172A] border-2 border-[#4FD1C5] shadow-2xl shadow-[#4FD1C5]/20 transition-all duration-1000 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
        >
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-[#F8FAFC] mb-4">AIコンテンツラボ会員</h3>
            <div className="flex items-end justify-center gap-2">
              <span className="text-6xl font-bold bg-gradient-to-r from-[#4FD1C5] to-[#F472B6] bg-clip-text text-transparent">
                2,980
              </span>
              <span className="text-2xl text-[#F8FAFC] mb-2">円/月</span>
            </div>
            <p className="text-[#F8FAFC]/60 mt-2">（税込）</p>
          </div>

          <div className="space-y-4 mb-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center gap-3 text-[#F8FAFC]">
                <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#4FD1C5] to-[#F472B6] flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-lg">{benefit}</span>
              </div>
            ))}
          </div>

          <Button
            asChild
            size="lg"
            className="w-full bg-gradient-to-r from-[#F472B6] to-[#4FD1C5] hover:opacity-90 text-white font-bold text-xl py-6 rounded-full shadow-lg shadow-[#F472B6]/50 hover:shadow-[#4FD1C5]/50 transition-all duration-300 hover:scale-105"
          >
            <a href="https://nmo1.com/p/r/jLJHIDSC" target="_blank" rel="noopener noreferrer">
              今すぐ参加する
            </a>
          </Button>

          <p className="text-center text-[#F8FAFC]/60 text-sm mt-6">
            いつでも入退会OK。Discordをインストールすればすぐ参加できます。
          </p>
        </Card>
      </div>
    </section>
  )
}
