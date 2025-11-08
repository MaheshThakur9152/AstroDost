"use client"

import { Sparkles, Home, Calculator } from "lucide-react"
import { Card } from "@/components/ui/card"

const services = [
  {
    icon: Sparkles,
    title: "Astrology",
    description:
      "Explore your cosmic blueprint through the alignment of celestial bodies. Understand your personality, relationships, and life path.",
  },
  {
    icon: Home,
    title: "Vastu Shastra",
    description:
      "Harmonize your living space with ancient principles. Create positive energy flow in your home and workplace for prosperity.",
  },
  {
    icon: Calculator,
    title: "Numerology",
    description:
      "Unlock the hidden meanings of numbers in your life. Discover your destiny number and harness numerical wisdom.",
  },
]

export function Services() {
  return (
    <section id="services" className="py-20 px-4 bg-slate-900/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-gold font-serif text-lg tracking-widest mb-4">OUR SERVICES</p>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">Divine Wisdom in Three Forms</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Card
                key={index}
                className="bg-gradient-to-br from-slate-800/40 to-slate-900/40 border-gold/20 hover:border-gold/50 transition-all duration-300 p-8 group"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-gold/20 to-amber-600/20 rounded-lg flex items-center justify-center mb-6 group-hover:from-gold/30 group-hover:to-amber-600/30 transition-all">
                  <Icon size={32} className="text-gold" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-white mb-4">{service.title}</h3>
                <p className="text-slate-300 leading-relaxed">{service.description}</p>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
