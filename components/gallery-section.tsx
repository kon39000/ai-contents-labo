"use client"

import { Card } from "@/components/ui/card"
import { useEffect, useRef, useState } from "react"

const creativeExamples = [
  {
    title: "画像生成×コピーライティング",
    result: "魅せるサムネイル",
    icon: "🎨",
    gradient: "from-[#4FD1C5] to-[#F472B6]",
  },
  {
    title: "動画生成×ストーリー",
    result: "ブランド動画",
    icon: "🎬",
    gradient: "from-[#F472B6] to-[#FACC15]",
  },
  {
    title: "音楽生成×キャラクター",
    result: "キャラソングMV",
    icon: "🎵",
    gradient: "from-[#FACC15] to-[#4FD1C5]",
  },
  {
    title: "テキスト生成×発信",
    result: "note記事・Kindle出版",
    icon: "📝",
    gradient: "from-[#4FD1C5] to-[#FACC15]",
  },
]

export function GallerySection() {
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
      <div className="max-w-6xl mx-auto">
        <h2
          className={`text-4xl md:text-5xl font-bold text-center mb-16 text-[#F8FAFC] transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          AIで広がる<span className="text-[#F472B6]">創作の世界</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {creativeExamples.map((example, index) => (
            <Card
              key={index}
              className={`group relative p-8 bg-[#1E293B] border-[#334155] hover:border-[#4FD1C5] transition-all duration-500 cursor-pointer overflow-hidden ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${example.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
              />

              <div className="relative z-10">
                <div className="text-5xl mb-4">{example.icon}</div>
                <h3 className="text-xl font-bold text-[#F8FAFC] mb-2">{example.title}</h3>
                <div className="flex items-center gap-2 mt-4">
                  <div className="w-8 h-0.5 bg-gradient-to-r from-[#4FD1C5] to-transparent" />
                  <p className="text-lg text-[#4FD1C5] font-semibold">{example.result}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
