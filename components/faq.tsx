"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    question: "How do I prepare for an astrology consultation?",
    answer:
      "Prepare your birth details (date, time, and location). Have specific questions or life areas you want guidance on. Keep an open mind and take notes during the session.",
  },
  {
    question: "Can astrology predict the future?",
    answer:
      "Astrology provides insights into potential patterns and influences. It offers guidance and options rather than fixed predictions. Your free will always plays a crucial role in shaping your destiny.",
  },
  {
    question: "How does Vastu Shastra improve home energy?",
    answer:
      "Vastu principles align your living space with natural energies. By arranging elements according to these ancient guidelines, you create harmony that positively influences health, relationships, and prosperity.",
  },
  {
    question: "What is my destiny number?",
    answer:
      "Your destiny number is calculated from your birth date and represents your life purpose. It reveals your natural talents, challenges, and the journey you're meant to undertake.",
  },
]

export function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0)

  return (
    <section className="py-20 px-4 bg-slate-900/30">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-gold font-serif text-lg tracking-widest mb-4">FAQ</p>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white">Common Questions</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mt-4"></div>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-slate-800/40 to-slate-900/40 border border-gold/20 rounded-lg overflow-hidden"
            >
              <button
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-gold/5 transition-colors"
              >
                <span className="text-lg font-serif font-bold text-white text-left">{faq.question}</span>
                <ChevronDown
                  size={24}
                  className={`text-gold flex-shrink-0 transition-transform ${
                    activeIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              {activeIndex === index && (
                <div className="px-6 pb-4 text-slate-300 leading-relaxed border-t border-gold/10">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
