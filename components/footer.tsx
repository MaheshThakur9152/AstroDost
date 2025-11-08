export function Footer() {
  return (
    <footer className="bg-slate-900/60 border-t border-gold/20 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-gold to-amber-600 flex items-center justify-center">
                <span className="text-white font-bold">◆</span>
              </div>
              <span className="font-serif font-bold text-gold">Astro Dost</span>
            </div>
            <p className="text-slate-400 text-sm">Your personal AI astrology consultant.</p>
          </div>

          <div>
            <h4 className="text-white font-serif font-bold mb-4">Services</h4>
            <ul className="space-y-2 text-slate-400 text-sm">
              <li>
                <a href="#" className="hover:text-gold transition-colors">
                  Astrology
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gold transition-colors">
                  Vastu Shastra
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gold transition-colors">
                  Numerology
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-serif font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-slate-400 text-sm">
              <li>
                <a href="#" className="hover:text-gold transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="/chat" className="hover:text-gold transition-colors">
                  Chat Now
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gold transition-colors">
                  FAQs
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-serif font-bold mb-4">Connect</h4>
            <ul className="space-y-2 text-slate-400 text-sm">
              <li>
                <a href="#" className="hover:text-gold transition-colors">
                  Facebook
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gold transition-colors">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gold transition-colors">
                  Twitter
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gold/10 pt-8 text-center text-slate-400 text-sm">
          <p>© 2025 Astro Dost. All rights reserved. Your Personal AI Astrology Consultant.</p>
        </div>
      </div>
    </footer>
  )
}
