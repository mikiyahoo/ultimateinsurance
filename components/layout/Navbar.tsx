'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, Phone, Search } from 'lucide-react'
import { cn } from '@/lib/utils'
import MegaMenu from './MegaMenu'
import MobileMegaMenu from './MobileMegaMenu'

const navItems = [
  { label: 'Home', href: '/' },
  { 
    label: 'Services', 
    type: 'mega',
    menu: 'services'
  },
  { 
    label: 'Why Ultimate?', 
    type: 'mega',
    menu: 'why-ultimate'
  },
  { 
    label: 'Partners', 
    type: 'mega',
    menu: 'partners'
  },
  { 
    label: 'Claims', 
    href: '/claims-assistance' 
  },
  { 
    label: 'Resources', 
    type: 'mega',
    menu: 'resources'
  },
]

export default function Navbar() {
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null)
  const [scrolled, setScrolled] = useState(false)
  
  // ✅ FIXED: Moved the useRef hook INSIDE the component
  const closeTimer = useRef<NodeJS.Timeout | null>(null)

  // ✅ FIXED: Add the timer handlers INSIDE the component
  const openMenu = (menu: string) => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current)
      closeTimer.current = null
    }
    setActiveMegaMenu(menu)
  }

  const scheduleClose = () => {
    closeTimer.current = setTimeout(() => {
      setActiveMegaMenu(null)
    }, 200)
  }

  const cancelClose = () => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current)
      closeTimer.current = null
    }
  }

  // Scroll effect for sticky header
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // ✅ REMOVED: Old handlers that were causing conflicts
  // const handleMouseEnter = (menu: string) => setActiveMegaMenu(menu)
  // const handleMouseLeave = () => setTimeout(() => setActiveMegaMenu(null), 100)

  const closeAllMenus = () => {
    setActiveMegaMenu(null)
    setIsMobileOpen(false)
  }

  return (
    <>
      <header className={cn(
        'sticky top-0 z-50 w-full transition-all duration-300',
        scrolled ? 'bg-neutral-black shadow-lg' : 'bg-neutral-black/95 backdrop-blur-sm'
      )}>
        <div className="container-custom">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3">
              <div className="relative h-14 w-40">
                <Image 
                  src="/images/uib color logo.png" 
                  alt="UIB Logo"
                  fill
                  className="object-contain brightness-0 invert opacity-95"
                  priority
                />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => (
                item.type === 'mega' ? (
                  <div
                    key={item.label}
                    className="relative"
                    onMouseEnter={() => openMenu(item.menu!)}
                    onMouseLeave={scheduleClose}
                  >
                    <button
                      className={cn(
                        "text-neutral-white hover:text-primary-light font-medium transition-colors py-2",
                        activeMegaMenu === item.menu && "text-primary-light"
                      )}
                      aria-label={`Open ${item.label} menu`} 
                    >
                      {item.label}
                    </button>
                    <div className={cn(
                      "absolute top-full left-0 w-4 h-2 transition-opacity",
                      activeMegaMenu === item.menu ? "opacity-100" : "opacity-0"
                    )}>
                      <div className="w-0 h-0 border-l-4 border-r-4 border-b-4 border-l-transparent border-r-transparent border-b-neutral-white mx-auto"></div>
                    </div>
                  </div>
                ) : (
                  <Link
                    key={item.label}
                    href={item.href!}
                    className="text-neutral-white hover:text-primary-light font-medium transition-colors"
                    onMouseEnter={cancelClose} // ✅ Optional: Cancel timer when hovering over regular links
                  >
                    {item.label}
                  </Link>
                )
              ))}
            </nav>

            {/* Desktop CTA & Search */}
            <div className="hidden lg:flex items-center space-x-6">
              <button 
                className="text-neutral-white hover:text-primary-light transition-colors"
                aria-label="Open search"
              >
                <Search className="h-5 w-5" />
              </button>

              <a
                href="tel:+251911234567"
                className="flex items-center space-x-2 text-neutral-white hover:text-primary-light transition-colors whitespace-nowrap"
              >
                <Phone className="h-4 w-4" />
                <span className="font-semibold">+251 911 234 567</span>
              </a>

              <Link
                href="/contact-get-quote"
                className="btn-primary whitespace-nowrap px-6"
              >
                Get Free Quote
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center space-x-4 lg:hidden">
              <button
                onClick={() => setIsMobileOpen(!isMobileOpen)}
                className="p-2 text-neutral-white"
                aria-label={isMobileOpen ? "Close menu" : "Open menu"}
                title={isMobileOpen ? "Close menu" : "Open menu"}
              >
                <Menu className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Desktop Mega Menu */}
      <MegaMenu
        isOpen={!!activeMegaMenu}
        activeMenu={activeMegaMenu}
        onClose={() => setActiveMegaMenu(null)}
        onMouseEnter={cancelClose}
        onMouseLeave={scheduleClose}
      />

      {/* Mobile Mega Menu */}
      <MobileMegaMenu
        isOpen={isMobileOpen}
        onClose={closeAllMenus}
      />
    </>
  )
}
