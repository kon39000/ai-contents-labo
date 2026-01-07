"use client"

import { useEffect, useRef, useState } from "react"

export function ConceptSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="relative py-24 px-4 bg-gradient-to-b from-[#0F172A] to-[#1E293B]">
      <div
        className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      >
        <div className="relative inline-block mb-8">
          <h2 className="text-4xl md:text-5xl font-bold text-[#F8FAFC] text-balance">
            "AIが使える"ではなく、
            <br />
            <span className="text-[#4FD1C5]">"AIで創れる"</span>人へ。
          </h2>
          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-[#F472B6] to-transparent" />
        </div>

        <p className="text-lg md:text-xl text-[#F8FAFC]/80 leading-relaxed max-w-3xl mx-auto mt-12 text-pretty">
          AIが当たり前になる時代。
          <br />
          これからは、AIを「使う」だけでなく「創る」力が求められます。
          <br />
          <br />
          人間にしかできない創造力を磨き、
          <br />
          AIと共に新しい表現を生み出す。
          <br />
          <br />
          それが、未来を切り拓く力になります。
        </p>
      </div>
    </section>
  )
}
