'use client'

import { useState } from 'react'
import { MessageCircle, Phone, X } from 'lucide-react'
import { cn } from '@/lib/utils'

export default function StickyCTA() {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) return null

  return (
    <div className="sticky-cta fixed bottom-0 left-0 right-0 z-40 bg-neutral-white/95 backdrop-blur-sm border-t border-neutral-200 py-4 shadow-2xl">
      <div className="container-custom">
        <div className="flex items-center justify-between">
          <div className="hidden md:block">
            <h3 className="text-lg font-bold text-neutral-black">
              Get Your Insurance Quote Today!
            </h3>
            <p className="text-neutral-600">
              Compare prices from top Ethiopian insurers
            </p>
          </div>
          
          <div className="flex items-center space-x-4">
            <a
              href="https://wa.me/251911234567?text=Hi,%20I'm%20interested%20in%20insurance%20services%20from%20UIB"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 btn-primary"
            >
              <MessageCircle className="h-4 w-4" />
              <span>Chat on WhatsApp</span>
            </a>
            
            <a
              href="tel:+251911234567"
              className="btn-secondary flex items-center space-x-2"
            >
              <Phone className="h-4 w-4" />
              <span className="hidden sm:inline">Call Now</span>
              <span className="sm:hidden">Call</span>
            </a>
            
            <button
              onClick={() => setIsVisible(false)}
              className="p-2 text-neutral-400 hover:text-neutral-600 transition-colors"
              aria-label="Close"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}