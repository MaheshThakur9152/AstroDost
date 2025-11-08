"use client"

import { useRef, useEffect } from "react"
import { useChat } from "ai/react"
import { Button } from "@/components/ui/button"
import { Send, Loader2 } from "lucide-react"

export function ChatInterface() {
  const { messages, input, handleInputChange, handleSubmit, isLoading } = useChat({
    api: "/api/chat",
    system: `You are Astro Dost, a wise and compassionate AI astrologer and consultant. You provide personalized guidance on:
- Astrology and birth chart readings
- Vastu (spatial harmony and home design)
- Numerology (the science of numbers)
- Life guidance and decision-making
- Spiritual insights and personal growth

Be warm, helpful, and insightful. Use your knowledge to provide meaningful consultations. Always encourage positive thinking and personal growth.`,
  })

  const messagesEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  return (
    <div className="max-w-4xl mx-auto h-[calc(100vh-120px)] flex flex-col bg-background rounded-lg border border-gold/20 shadow-xl overflow-hidden">
      {/* Chat Header */}
      <div className="bg-gradient-to-r from-slate-900 to-slate-800 border-b border-gold/20 p-6">
        <h2 className="text-2xl font-serif text-gold">Chat with Astro Dost</h2>
        <p className="text-foreground/70 text-sm mt-1">Get personalized astrology consultancy</p>
      </div>

      {/* Messages Container */}
      <div className="flex-1 overflow-y-auto p-6 space-y-4">
        {messages.length === 0 ? (
          <div className="h-full flex items-center justify-center flex-col gap-4">
            <div className="text-5xl">🌟</div>
            <h3 className="text-xl font-serif text-gold">Welcome to Astro Dost</h3>
            <p className="text-foreground/70 text-center max-w-md">
              Ask me anything about astrology, vastu, numerology, or your life path. I'm here to help guide you.
            </p>
          </div>
        ) : (
          messages.map((message) => (
            <div key={message.id} className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}>
              <div
                className={`max-w-xs lg:max-w-md xl:max-w-lg px-4 py-3 rounded-lg ${
                  message.role === "user"
                    ? "bg-gold text-white rounded-br-none"
                    : "bg-accent/20 text-foreground border border-gold/20 rounded-bl-none"
                }`}
              >
                <p className="text-sm leading-relaxed">{message.content}</p>
              </div>
            </div>
          ))
        )}
        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-accent/20 border border-gold/20 px-4 py-3 rounded-lg rounded-bl-none">
              <div className="flex items-center gap-2">
                <Loader2 className="w-4 h-4 animate-spin text-gold" />
                <span className="text-sm text-foreground/70">Astro Dost is thinking...</span>
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <div className="border-t border-gold/20 p-4 bg-background/50 backdrop-blur">
        <form onSubmit={handleSubmit} className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={handleInputChange}
            placeholder="Ask Astro Dost anything..."
            disabled={isLoading}
            className="flex-1 px-4 py-3 bg-accent/10 border border-gold/20 rounded-lg text-foreground placeholder:text-foreground/50 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/50 disabled:opacity-50"
          />
          <Button
            type="submit"
            disabled={isLoading || !input.trim()}
            className="bg-gold hover:bg-amber-600 text-white px-6 py-3 rounded-lg"
          >
            {isLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
          </Button>
        </form>
      </div>
    </div>
  )
}
