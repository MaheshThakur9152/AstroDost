import { generateText } from "ai"

export async function POST(req: Request) {
  const { messages } = await req.json()

  try {
    const response = await generateText({
      model: "openai/gpt-4o-mini",
      system: `You are Astro Dost, a wise and compassionate AI astrologer and consultant. You provide personalized guidance on:
- Astrology and birth chart readings
- Vastu (spatial harmony and home design)
- Numerology (the science of numbers)
- Life guidance and decision-making
- Spiritual insights and personal growth

Be warm, helpful, and insightful. Use your knowledge to provide meaningful consultations. Always encourage positive thinking and personal growth.`,
      messages: messages.map((msg: any) => ({
        role: msg.role,
        content: msg.content,
      })),
    })

    return new Response(
      JSON.stringify({
        role: "assistant",
        content: response.text,
      }),
      {
        headers: { "Content-Type": "application/json" },
      },
    )
  } catch (error) {
    console.error("Chat API error:", error)
    return new Response(JSON.stringify({ error: "Failed to generate response" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    })
  }
}
