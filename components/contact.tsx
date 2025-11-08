"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin } from "lucide-react"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    setFormData({ name: "", email: "", phone: "", message: "" })
  }

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-gold font-serif text-lg tracking-widest mb-4">GET IN TOUCH</p>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">Begin Your Journey</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-gold/20 to-amber-600/20 flex items-center justify-center flex-shrink-0">
                <Phone size={24} className="text-gold" />
              </div>
              <div>
                <h3 className="text-lg font-serif font-bold text-white mb-1">Phone</h3>
                <p className="text-slate-300">+91 (555) 123-4567</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-gold/20 to-amber-600/20 flex items-center justify-center flex-shrink-0">
                <Mail size={24} className="text-gold" />
              </div>
              <div>
                <h3 className="text-lg font-serif font-bold text-white mb-1">Email</h3>
                <p className="text-slate-300">astrovastutips@gmail.com</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-gold/20 to-amber-600/20 flex items-center justify-center flex-shrink-0">
                <MapPin size={24} className="text-gold" />
              </div>
              <div>
                <h3 className="text-lg font-serif font-bold text-white mb-1">Location</h3>
                <p className="text-slate-300">India</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-slate-800/50 border border-gold/20 text-white placeholder-slate-400 focus:outline-none focus:border-gold/50 transition-colors"
                required
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-slate-800/50 border border-gold/20 text-white placeholder-slate-400 focus:outline-none focus:border-gold/50 transition-colors"
                required
              />
            </div>
            <div>
              <input
                type="tel"
                name="phone"
                placeholder="Your Phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-slate-800/50 border border-gold/20 text-white placeholder-slate-400 focus:outline-none focus:border-gold/50 transition-colors"
              />
            </div>
            <div>
              <textarea
                name="message"
                placeholder="Your Message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-slate-800/50 border border-gold/20 text-white placeholder-slate-400 focus:outline-none focus:border-gold/50 transition-colors resize-none"
                required
              ></textarea>
            </div>
            <Button type="submit" className="w-full bg-gold hover:bg-amber-600 text-black font-semibold py-3">
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}
