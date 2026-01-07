"use client"

import { useEffect, useRef, useState } from "react"

const programs = [
  {
    title: "会員限定ボイスチャット",
    description: "最新のAI技術やクリエイティブ手法を学べる定期開催",
    icon: "📚",
  },
  {
    title: "Udemy無料クーポン",
    description: "厳選されたAI関連講座を無料で受講できる特典",
    icon: "🎓",
  },
  {
    title: "登壇チャンス",
    description: "あなたの作品や知見を発表できる機会を提供",
    icon: "🎤",
  },
  {
    title: "共創イベント",
    description: "メンバー同士でコラボレーションできるプロジェクト",
    icon: "🚀",
  },
]

export function ProgramSection() {
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
    <section ref={sectionRef} className="py-24 px-4 bg-[#0F172A]">
      <div className="max-w-5xl mx-auto">
        <h2
          className={`text-4xl md:text-5xl font-bold text-center mb-16 text-[#F8FAFC] transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <span className="text-[#FACC15]">挑戦し続けられる</span>環境が、
          <br />
          ここにある。
        </h2>

        <div className="relative">
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#4FD1C5] via-[#F472B6] to-[#FACC15]" />

          <div className="space-y-12">
            {programs.map((program, index) => (
              <div
                key={index}
                className={`relative flex items-start gap-8 transition-all duration-1000 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br from-[#4FD1C5] to-[#F472B6] flex items-center justify-center text-3xl shadow-lg shadow-[#4FD1C5]/50 z-10">
                  {program.icon}
                </div>

                <div className="flex-1 bg-[#1E293B] p-6 rounded-lg border border-[#334155] hover:border-[#4FD1C5] transition-colors duration-300">
                  <h3 className="text-2xl font-bold text-[#F8FAFC] mb-2">{program.title}</h3>
                  <p className="text-[#F8FAFC]/70 leading-relaxed">{program.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
