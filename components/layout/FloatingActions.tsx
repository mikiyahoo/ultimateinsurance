'use client'

import { useState, useEffect } from 'react'
import { MessageCircle, Phone, X } from 'lucide-react' // Removed WhatsApp import
import Link from 'next/link'
import { cn } from '@/lib/utils'
import CustomWhatsAppIcon from '@/components/ui/CustomWhatsAppIcon'

export default function FloatingActions() {
  const [isOpen, setIsOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      
      // Hide on scroll down, show on scroll up
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false)
      } else {
        setIsVisible(true)
      }
      
      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  const whatsappNumber = '+251911234567'
  const whatsappMessage = encodeURIComponent('Hello! I would like to get an insurance quote from Ultimate Insurance Brokers.')
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`

  const telegramUrl = 'https://t.me/ultimateinsurance'

  return (
    <>
      {/* Main Floating Button */}
      <div className={cn(
        "fixed bottom-6 right-6 z-50 transition-all duration-300",
        isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
      )}>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={cn(
            "bg-primary hover:bg-primary-light text-neutral-white p-4 rounded-full shadow-2xl transition-all duration-300",
            isOpen ? "rotate-45" : "rotate-0"
          )}
          aria-label="Contact options"
        >
          {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
        </button>
      </div>

      {/* Expanded Actions */}
      <div className={cn(
        "fixed bottom-24 right-6 z-50 flex flex-col gap-4 transition-all duration-300",
        isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"
      )}>
        {/* WhatsApp */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center bg-accent-whatsapp hover:bg-[#1da851] text-neutral-white p-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110"
          aria-label="Chat on WhatsApp"
        >
          <CustomWhatsAppIcon size={22} /> {/* Using custom icon */}
        </a>

        {/* Telegram */}
        <a
          href={telegramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center bg-[#0088cc] hover:bg-[#0077b5] text-neutral-white p-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110"
          aria-label="Chat on Telegram"
        >
          <MessageCircle size={22} />
        </a>

        {/* Phone */}
        <a
          href="tel:+251911234567"
          className="flex items-center justify-center bg-neutral-800 hover:bg-neutral-900 text-neutral-white p-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110"
          aria-label="Call us"
        >
          <Phone size={22} />
        </a>
      </div>

      {/* Quick Quote Button (Always visible) */}
      <div className={cn(
        "fixed bottom-6 left-6 z-50 transition-all duration-300",
        isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
      )}>
        <Link
          href="/contact-get-quote"
          className="btn-primary px-4 sm:px-6 py-3 rounded-full flex items-center gap-2 hover:scale-105"
        >
          <span className="hidden sm:inline">Get Free Quote</span>
          <span className="sm:hidden">Quote</span>
          <div className="w-2 h-2 bg-neutral-white rounded-full animate-pulse"></div>
        </Link>
      </div>
    </>
  )
}