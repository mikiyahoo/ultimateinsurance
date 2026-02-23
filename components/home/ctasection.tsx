'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Phone } from 'lucide-react'

export default function CTASection() {
  const [email, setEmail] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle newsletter subscription
    console.log('Newsletter subscription:', email)
    setEmail('')
  }

  return (
    <section className="bg-gradient-primary py-16 md:py-20">
      <div className="container-custom text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-neutral-white mb-6">
          Ready to Secure Your Future?
        </h2>
        
        <p className="text-xl text-neutral-100 mb-8 max-w-2xl mx-auto">
          Insurance does not have to be complicated. Let Ultimate Insurance Brokers guide you with clarity, confidence, and care.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <Link href="/contact-get-quote" className="btn-secondary bg-neutral-white text-neutral-black hover:bg-neutral-100">
            Get a Free Insurance Quote
          </Link>
          <a href="tel:+251911234567" className="btn-outline border-2 border-neutral-white text-neutral-white hover:bg-neutral-white hover:text-neutral-black">
            <Phone className="inline-block mr-2 h-5 w-5" />
            Call +251 911 234 567
          </a>
        </div>
        
        {/* Newsletter Signup */}
        <div className="max-w-md mx-auto bg-neutral-white/10 backdrop-blur-sm rounded-xl p-6">
          <h3 className="text-lg font-bold text-neutral-white mb-3">Get Insurance Tips & Updates</h3>
          <form onSubmit={handleSubmit} className="flex gap-2">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="flex-1 px-4 py-3 rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
            <button type="submit" className="btn-primary">
              Subscribe
            </button>
          </form>
          <p className="text-sm text-neutral-200 mt-3">
            Stay informed about insurance trends, tips, and exclusive offers.
          </p>
        </div>
      </div>
    </section>
  )
}