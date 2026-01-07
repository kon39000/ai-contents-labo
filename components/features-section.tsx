"use client"

import { Card } from "@/components/ui/card"
import { useEffect, useRef, useState } from "react"

const features = [
  {
    icon: "🧠",
    title: "学ぶ",
    description: "ChatGPT・AI講座・アーカイブ視聴",
    details: "基礎から応用まで、実践的なAI活用スキルを体系的に学べます。",
  },
  {
    icon: "✨",
    title: "創る",
    description: "画像・動画・音楽など自分の作品づくり",
    details: "AIツールを使って、あなただけのオリジナル作品を生み出せます。",
  },
  {
    icon: "🤝",
    title: "つながる",
    description: "Discordコミュニティで質問・交流・コラボ",
    details: "同じ志を持つ仲間と出会い、共に成長できる環境があります。",
  },
]

export function FeaturesSection() {
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
    <section ref={sectionRef} className="py-24 px-4 bg-gradient-to-b from-[#0F172A] to-[#1E293B]">
      <div className="max-w-6xl mx-auto">
        <h2
          className={`text-4xl md:text-5xl font-bold text-center mb-6 text-[#F8FAFC] transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          AIで<span className="text-[#4FD1C5]">"学ぶ・創る・つながる"</span>
          <br />
          が全部できる
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {features.map((feature, index) => (
            <Card
              key={index}
              className={`group p-8 bg-[#1E293B] border-[#334155] hover:border-[#F472B6] transition-all duration-500 hover:scale-105 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold text-[#F8FAFC] mb-3">{feature.title}</h3>
              <p className="text-[#4FD1C5] font-semibold mb-4">{feature.description}</p>
              <p className="text-[#F8FAFC]/70 text-sm leading-relaxed">{feature.details}</p>
            </Card>
          ))}
        </div>

        <p className="text-center text-[#F8FAFC]/60 mt-12 text-sm md:text-base">
          💡 Discordは無料アプリ。スマホ・PCどちらでも簡単に参加できます。
        </p>
      </div>
    </section>
  )
}
