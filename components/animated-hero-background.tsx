"use client"

import { useEffect, useState } from "react"

const heroImages = [
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-x8c6Wij7fJiOJYw5KegudBZbl8YxCy.png",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-NIYV71yns5F21eiS4MznVeWuDRS9xb.png",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-iuTJOyUBTaZfeyGFCgqVCPmfj3WSuA.png",
]

export function AnimatedHeroBackground() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    // Preload all images
    heroImages.forEach((src) => {
      const img = new Image()
      img.src = src
    })
    setIsLoaded(true)

    // Auto-rotate images every 5 seconds
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroImages.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="absolute inset-0 w-full h-full">
      {heroImages.map((image, index) => (
        <div
          key={image}
          className="absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out"
          style={{
            opacity: currentIndex === index ? 1 : 0,
          }}
        >
          <div
            className="w-full h-full bg-cover bg-center animate-slow-zoom"
            style={{
              backgroundImage: `url(${image})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          />
        </div>
      ))}

      {/* Animated floating elements overlay */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-[#4FD1C5]/10 rounded-full blur-3xl animate-float-slow" />
        <div className="absolute top-1/3 right-1/4 w-40 h-40 bg-[#F472B6]/10 rounded-full blur-3xl animate-float-medium" />
        <div className="absolute bottom-1/4 left-1/3 w-36 h-36 bg-[#FACC15]/10 rounded-full blur-3xl animate-float-fast" />
      </div>

      {/* Navigation dots */}
      {isLoaded && (
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                currentIndex === index ? "bg-[#4FD1C5] w-8" : "bg-white/50 hover:bg-white/80"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  )
}
