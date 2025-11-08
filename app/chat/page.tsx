"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ChatInterface } from "@/components/chat-interface"

export default function ChatPage() {
  return (
    <main className="min-h-screen bg-background flex flex-col">
      <Header />
      <div className="flex-1 pt-20">
        <ChatInterface />
      </div>
      <Footer />
    </main>
  )
}
