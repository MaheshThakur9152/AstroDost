"use client"

export function About() {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Profile Section */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-gold/20 to-amber-600/20 rounded-2xl blur-2xl"></div>
            <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 border border-gold/20">
              <div className="w-full aspect-square bg-gradient-to-br from-gold/10 to-amber-600/10 rounded-xl mb-6 flex items-center justify-center">
                <div className="text-center">
                  <Sparkles className="w-24 h-24 text-gold/40 mx-auto mb-4" />
                  <p className="text-slate-400">Expert Astrologer</p>
                </div>
              </div>
              <h3 className="text-2xl font-serif font-bold text-white mb-2">Anil Tondak</h3>
              <p className="text-gold font-serif mb-4">Jyotish Acharya</p>
              <p className="text-slate-300 text-sm leading-relaxed">
                With 20+ years of experience in Vedic Astrology, Vastu Shastra, and Numerology. Certified practitioner
                dedicated to guiding individuals toward harmony and prosperity.
              </p>
            </div>
          </div>

          {/* Content Section */}
          <div>
            <p className="text-gold font-serif text-lg tracking-widest mb-4">ABOUT US</p>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
              Ancient Wisdom, Modern Guidance
            </h2>
            <div className="space-y-4 text-slate-300 leading-relaxed">
              <p>
                Our mission is to bridge the ancient wisdom of Vedic sciences with contemporary life challenges. Through
                accurate readings and personalized guidance, we help you understand your cosmic purpose and navigate
                life's journey with confidence.
              </p>
              <p>
                Drawing from thousands of years of accumulated knowledge, we provide authentic consultations rooted in
                traditional methodologies yet tailored to modern contexts.
              </p>
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div>
                  <p className="text-3xl font-bold text-gold">20+</p>
                  <p className="text-slate-400">Years Experience</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-gold">5000+</p>
                  <p className="text-slate-400">Satisfied Clients</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

import { Sparkles } from "lucide-react"
