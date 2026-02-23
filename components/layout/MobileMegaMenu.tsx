'use client'

import { useState } from 'react'
import Link from 'next/link'
import { 
  Car, Stethoscope, Heart, Home, Ship, Tractor, Shield,
  ChevronRight, Search, Award, Users, FileText, Phone
} from 'lucide-react'
import { cn } from '@/lib/utils'

// ------------------------------
// Menu Item Type
// ------------------------------
interface MenuItem {
  title?: string      // Display title
  name?: string       // Fallback display name
  icon?: React.ComponentType<{ className?: string }>
  href?: string
  children?: MenuItem[]
}

// ------------------------------
// Mobile Menu Items
// ------------------------------
const mobileMenuItems: MenuItem[] = [
  {
    title: 'Insurance Services',
    children: [
      {
        title: 'Motor Insurance',
        icon: Car,
        children: [
          { title: '3rd Party Insurance', href: '/insurance-services/motor-insurance-ethiopia/3rd-party-insurance-ethiopia' },
          { title: '3rd Party Cost Calculator', href: '/insurance-services/motor-insurance-ethiopia/3rd-party-insurance-cost-ethiopia' },
          { title: 'Comprehensive Motor', href: '/insurance-services/motor-insurance-ethiopia/comprehensive-motor-insurance' },
        ]
      },
      {
        title: 'Health Insurance',
        icon: Stethoscope,
        children: [
          { title: 'Private Health Insurance', href: '/insurance-services/health-insurance-ethiopia/private-health-insurance-ethiopia' },
          { title: 'Group Medical Insurance', href: '/insurance-services/health-insurance-ethiopia/group-medical-insurance' },
        ]
      },
      {
        title: 'Life Insurance',
        icon: Heart,
        children: [
          { title: 'Term Life Insurance', href: '/insurance-services/life-insurance-ethiopia/term-life' },
          { title: 'Whole Life Insurance', href: '/insurance-services/life-insurance-ethiopia/whole-life' },
        ]
      },
      {
        title: 'Property & Fire',
        icon: Home,
        children: [
          { title: 'Home Insurance', href: '/insurance-services/property-fire-insurance/home-insurance' },
          { title: 'Fire Insurance', href: '/insurance-services/property-fire-insurance/fire-insurance' },
        ]
      },
      {
        title: 'Marine Insurance',
        icon: Ship,
        children: [
          { title: 'Cargo Insurance', href: '/insurance-services/marine-insurance/cargo-insurance' },
          { title: 'Hull Insurance', href: '/insurance-services/marine-insurance/hull-insurance' },
        ]
      },
      {
        title: 'Agricultural',
        icon: Tractor,
        children: [
          { title: 'Crop Insurance', href: '/insurance-services/agricultural-insurance/crop-insurance' },
          { title: 'Livestock Insurance', href: '/insurance-services/agricultural-insurance/livestock-insurance' },
        ]
      },
      {
        title: 'Liability',
        icon: Shield,
        children: [
          { title: 'Professional Liability', href: '/insurance-services/liability-insurance/professional-liability' },
          { title: 'Public Liability', href: '/insurance-services/liability-insurance/public-liability' },
        ]
      }
    ]
  },
  { title: 'Why Ultimate?', icon: Award, href: '/why-ultimate' },
  { title: 'Partners & Insurers', icon: Users, href: '/partners-insurers' },
  { title: 'Claims Assistance', icon: Shield, href: '/claims-assistance' },
  {
    title: 'Resources',
    icon: FileText,
    children: [
      {
        title: 'Guides',
        children: [
          { title: 'Insurance Cost Guides', href: '/resources/insurance-cost-guides' },
          { title: 'Buying Guide', href: '/resources/buying-guide' },
        ]
      },
      {
        title: 'FAQs',
        children: [
          { title: 'General FAQs', href: '/resources/insurance-faqs-ethiopia' },
          { title: 'Motor Insurance FAQs', href: '/resources/motor-insurance-faqs' },
        ]
      },
      {
        title: 'Blog',
        children: [
          { title: 'Latest Articles', href: '/resources/blog' },
          { title: 'Insurance Tips', href: '/resources/blog/category/tips' },
        ]
      }
    ]
  },
  { title: 'About UIB', href: '/about-uib' }
]

// ------------------------------
// Props
// ------------------------------
interface MobileMegaMenuProps {
  isOpen: boolean
  onClose: () => void
}

// ------------------------------
// Mobile Mega Menu Component
// ------------------------------
export default function MobileMegaMenu({ isOpen, onClose }: MobileMegaMenuProps) {
  const [expandedItems, setExpandedItems] = useState<string[]>([])

  const toggleItem = (title: string) => {
    setExpandedItems(prev =>
      prev.includes(title)
        ? prev.filter(item => item !== title)
        : [...prev, title]
    )
  }

  const isExpanded = (title: string) => expandedItems.includes(title)

  const handleItemClick = (item: MenuItem) => {
    if (item.children) toggleItem(item.title!)
    else if (item.href) onClose()
  }

  const renderMenuItems = (items: MenuItem[], level = 0) => {
    return items.map((item) => {
      const hasChildren = item.children && item.children.length > 0
      const Icon = item.icon

      return (
        <div key={`${item.title}-${level}`} className={cn("border-b border-neutral-200", level > 0 && "ml-4")}>
          <button
            onClick={() => handleItemClick(item)}
            className={cn(
              "flex items-center justify-between w-full py-4 text-left",
              level === 0 ? "font-medium" : "font-normal"
            )}
          >
            <div className="flex items-center">
              {Icon && <Icon className="h-5 w-5 text-primary mr-3" />}
              <span className={cn(
                level === 0 ? "text-neutral-black" : "text-neutral-700",
                !item.children && item.href ? "hover:text-primary" : ""
              )}>
                {item.title || item.name}
              </span>
            </div>
            {hasChildren && (
              <ChevronRight className={cn(
                "h-5 w-5 text-neutral-400 transition-transform",
                isExpanded(item.title!) && "rotate-90"
              )} />
            )}
          </button>

          {hasChildren && isExpanded(item.title!) && (
            <div className="pb-2">
              {renderMenuItems(item.children!, level + 1)}
            </div>
          )}

          {/* Direct links for leaf nodes */}
          {!hasChildren && item.href && (
            <Link
              href={item.href}
              className="block py-2 text-neutral-600 hover:text-primary transition-colors ml-8"
              onClick={onClose}
            >
              {item.title || item.name}
            </Link>
          )}
        </div>
      )
    })
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 bg-neutral-white pt-20 animate-fade-in overflow-y-auto">
      {/* Search Bar */}
      <div className="container-custom py-4 border-b border-neutral-200">
        <div className="flex items-center bg-neutral-50 rounded-lg px-4 py-3">
          <Search className="h-5 w-5 text-neutral-400" />
          <input
            type="text"
            placeholder="Search insurance..."
            className="bg-transparent border-none outline-none px-3 w-full text-neutral-700 placeholder-neutral-400"
          />
        </div>
      </div>

      {/* Menu Items */}
      <div className="container-custom py-4">
        {renderMenuItems(mobileMenuItems)}
      </div>

      {/* CTA Buttons */}
      <div className="container-custom py-6 border-t border-neutral-200">
        <div className="grid grid-cols-2 gap-4">
          <Link
            href="/contact-get-quote"
            className="btn-primary text-center"
            onClick={onClose}
          >
            Get Free Quote
          </Link>
          <a
            href="tel:+251911234567"
            className="btn-secondary flex items-center justify-center"
            onClick={onClose}
          >
            <Phone className="h-5 w-5 mr-2" />
            Call Now
          </a>
        </div>
      </div>
    </div>
  )
}
