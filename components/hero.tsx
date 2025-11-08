"use client"

import { ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      {/* Background video */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
      >
        <source src="/hero1.mp4" type="video/mp4" />
      </video>

      {/* Background gradient with cosmic theme */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-800 to-background opacity-60 z-5"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl z-5"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl z-5"></div>

      {/* Zodiac wheel illustration */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-20 pointer-events-none z-5">
        <div className="w-96 h-96 border-4 border-gold/30 rounded-full relative">
          <div className="absolute inset-8 border-2 border-gold/20 rounded-full"></div>
          <div className="absolute inset-16 border-2 border-gold/10 rounded-full"></div>
        </div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <div className="mb-6">
          <p className="text-gold font-serif text-lg tracking-widest">DIVINE GUIDANCE</p>
        </div>
        <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 leading-tight">
          Cosmic Wisdom for Your Journey
        </h1>
        <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed">
          Discover the celestial secrets that guide your life. Expert guidance in Astrology, Vastu, and Numerology for
          harmony and prosperity.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-gold hover:bg-amber-600 text-black font-semibold">
            Get Your Reading
          </Button>
          <Button size="lg" variant="outline" className="border-gold/50 text-gold hover:bg-gold/10 bg-transparent">
            Learn More
          </Button>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown size={32} className="text-gold/60" />
      </div>
    </section>
  )
}
