'use client'

import Link from 'next/link'
import Image from 'next/image'
import {
  Car, Stethoscope, Heart, Home, Ship, Tractor, Shield,
  X, Award, Users, FileText, Building, Star, BookOpen, HelpCircle,
  TrendingUp, Users as UsersIcon, Globe, BarChart, ArrowRight, Sparkles,
  CheckCircle2, Phone
} from 'lucide-react'
import { useState } from 'react'

interface MegaMenuProps {
  isOpen: boolean
  activeMenu: string | null
  onClose: () => void
  onMouseEnter: () => void
  onMouseLeave: () => void
}

export default function MegaMenuEnhanced({ isOpen, activeMenu, onClose, onMouseEnter, onMouseLeave }: MegaMenuProps) {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null)

  if (!isOpen || !activeMenu) return null

  // Render different content based on which menu is active
  const renderContent = () => {
    switch (activeMenu) {
      case 'services':
        return (
          <>
            {/* LEFT CONTENT */}
            <div className="col-span-8 p-10">
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-neutral-900 mb-1">Insurance Services</h2>
                  <p className="text-sm text-neutral-500">Comprehensive coverage for all your needs</p>
                </div>
                <Link 
                  href="/insurance-services"
                  className="group flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all"
                >
                  View All Services
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>

              <div className="grid grid-cols-3 gap-6">
                {[
                  {
                    title: 'Motor Insurance',
                    icon: Car,
                    badge: 'Popular',
                    links: [
                      ['3rd Party Insurance', '/insurance-services/motor-insurance-ethiopia/3rd-party-insurance-ethiopia', 'Most affordable option'],
                      ['Cost Calculator', '/insurance-services/motor-insurance-ethiopia/3rd-party-insurance-cost-ethiopia', 'Get instant quotes'],
                      ['Comprehensive Motor', '/insurance-services/motor-insurance-ethiopia/comprehensive-motor-insurance', 'Full protection']
                    ]
                  },
                  {
                    title: 'Health Insurance',
                    icon: Stethoscope,
                    badge: 'Essential',
                    links: [
                      ['Private Health', '/insurance-services/health-insurance-ethiopia/private-health-insurance-ethiopia', 'Individual plans'],
                      ['Group Medical', '/insurance-services/health-insurance-ethiopia/group-medical-insurance', 'For businesses'],
                      ['Family Plans', '/insurance-services/health-insurance-ethiopia/family-health-plans', 'Whole family coverage']
                    ]
                  },
                  {
                    title: 'Life Insurance',
                    icon: Heart,
                    badge: 'New',
                    links: [
                      ['Term Life', '/insurance-services/life-insurance-ethiopia/term-life', 'Affordable coverage'],
                      ['Whole Life', '/insurance-services/life-insurance-ethiopia/whole-life', 'Lifetime protection'],
                      ['Endowment', '/insurance-services/life-insurance-ethiopia/endowment', 'Savings + insurance']
                    ]
                  },
                  {
                    title: 'Property Insurance',
                    icon: Home,
                    links: [
                      ['Home Insurance', '/insurance-services/property/home', 'Protect your home'],
                      ['Commercial Property', '/insurance-services/property/commercial', 'Business premises'],
                      ['Fire & Burglary', '/insurance-services/property/fire-burglary', 'Comprehensive coverage']
                    ]
                  },
                  {
                    title: 'Marine Insurance',
                    icon: Ship,
                    links: [
                      ['Cargo Insurance', '/insurance-services/marine/cargo', 'Goods in transit'],
                      ['Hull Insurance', '/insurance-services/marine/hull', 'Vessel protection'],
                      ['Freight Insurance', '/insurance-services/marine/freight', 'Transportation coverage']
                    ]
                  },
                  {
                    title: 'Agricultural Insurance',
                    icon: Tractor,
                    links: [
                      ['Crop Insurance', '/insurance-services/agricultural/crop', 'Harvest protection'],
                      ['Livestock Insurance', '/insurance-services/agricultural/livestock', 'Animal coverage'],
                      ['Equipment Insurance', '/insurance-services/agricultural/equipment', 'Farm machinery']
                    ]
                  }
                ].map(({ title, icon: Icon, badge, links }) => (
                  <div
                    key={title}
                    className="group relative rounded-2xl border border-neutral-200/60 bg-white hover:border-primary/30 hover:bg-gradient-to-br hover:from-primary/5 hover:to-transparent p-6 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1"
                    onMouseEnter={() => setHoveredItem(title)}
                    onMouseLeave={() => setHoveredItem(null)}
                  >
                    {/* Badge */}
                    {badge && (
                      <div className="absolute -top-2 -right-2 bg-gradient-to-r from-primary to-primary/80 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg animate-pulse-subtle">
                        {badge}
                      </div>
                    )}

                    {/* Header */}
                    <div className="flex items-center gap-3 mb-5">
                      <div className="relative">
                        <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <div className="relative bg-gradient-to-br from-primary/10 to-primary/5 p-3 rounded-xl group-hover:scale-110 transition-transform duration-300">
                          <Icon className="h-5 w-5 text-primary group-hover:rotate-6 transition-transform duration-300" />
                        </div>
                      </div>
                      <h4 className="font-bold text-neutral-900 group-hover:text-primary transition-colors">
                        {title}
                      </h4>
                    </div>

                    {/* Links */}
                    <ul className="space-y-2.5">
                      {links.map(([label, href, desc]) => (
                        <li key={label}>
                          <Link
                            href={href}
                            className="group/link block rounded-lg px-3 py-2.5 text-sm text-neutral-600 hover:text-primary hover:bg-primary/5 transition-all duration-200 border border-transparent hover:border-primary/20"
                          >
                            <div className="flex items-center justify-between">
                              <span className="font-medium">{label}</span>
                              <ArrowRight className="h-3.5 w-3.5 opacity-0 -translate-x-2 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all duration-200" />
                            </div>
                            {desc && (
                              <span className="text-xs text-neutral-400 mt-0.5 block">{desc}</span>
                            )}
                          </Link>
                        </li>
                      ))}
                    </ul>

                    {/* Hover indicator */}
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-primary/60 rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT PROMO PANEL */}
            <div className="col-span-4 bg-gradient-to-br from-neutral-50 via-white to-neutral-50 border-l border-neutral-200/60 p-8 flex flex-col justify-between relative overflow-hidden">
              {/* Decorative background elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
              
              <div className="relative z-10">
                {/* Logo */}
                <div className="mb-8 inline-flex items-center justify-center rounded-2xl border border-neutral-200/60 bg-white shadow-lg shadow-primary/10 p-5 hover:shadow-xl hover:shadow-primary/20 transition-all duration-300 hover:scale-105">
                  <Image
                    src="/images/ulimate-am-logo.png"
                    alt="Ultimate Insurance"
                    width={220}
                    height={70}
                    priority
                    className="w-auto h-16"
                  />
                </div>

                {/* Headline */}
                <div className="mb-3">
                  <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-neutral-900 to-neutral-700 bg-clip-text text-transparent">
                    Insurance, simplified
                  </h3>
                  <div className="flex items-center gap-2 text-primary">
                    <Sparkles className="h-4 w-4 animate-pulse" />
                    <span className="text-sm font-semibold">Trusted by 1000+ clients</span>
                  </div>
                </div>

                <p className="text-sm text-neutral-600 mb-8 leading-relaxed">
                  Compare and purchase insurance from Ethiopia's most trusted insurers — all in one place.
                </p>

                {/* Stats */}
                <div className="space-y-4 mb-6">
                  {[
                    { icon: Shield, text: '1000+ trusted clients', color: 'text-emerald-600', bgColor: 'bg-emerald-50' },
                    { icon: Award, text: '17 verified partners', color: 'text-amber-600', bgColor: 'bg-amber-50' },
                    { icon: Users, text: 'Expert claims support', color: 'text-blue-600', bgColor: 'bg-blue-50' },
                    { icon: CheckCircle2, text: 'Same-day approvals', color: 'text-primary', bgColor: 'bg-primary/5' }
                  ].map(({ icon: Icon, text, color, bgColor }, idx) => (
                    <div 
                      key={text}
                      className="flex items-center gap-3 group/stat hover:translate-x-2 transition-transform duration-200"
                      style={{ animationDelay: `${idx * 100}ms` }}
                    >
                      <div className={`${bgColor} p-2.5 rounded-lg group-hover/stat:scale-110 transition-transform duration-200`}>
                        <Icon className={`h-4 w-4 ${color}`} />
                      </div>
                      <span className="text-sm font-medium text-neutral-700">{text}</span>
                    </div>
                  ))}
                </div>

                {/* Testimonial snippet */}
                <div className="bg-white/80 backdrop-blur-sm border border-neutral-200/60 rounded-xl p-4 mb-6">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center text-white font-bold text-sm">
                        AM
                      </div>
                    </div>
                    <div>
                      <p className="text-xs text-neutral-600 italic mb-2">
                        "Quick, reliable, and saved me 30% on my car insurance!"
                      </p>
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-3 w-3 fill-amber-400 text-amber-400" />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <div className="relative z-10 space-y-3">
                <Link
                  href="/contact-get-quote"
                  className="group/cta relative block w-full bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-white font-bold py-4 px-6 rounded-xl shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 transition-all duration-300 hover:-translate-y-1 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-white/20 translate-y-full group-hover/cta:translate-y-0 transition-transform duration-300" />
                  <div className="relative flex items-center justify-center gap-2">
                    <span>Get a Free Quote</span>
                    <ArrowRight className="h-5 w-5 group-hover/cta:translate-x-1 transition-transform duration-200" />
                  </div>
                </Link>
                
                <button className="w-full flex items-center justify-center gap-2 text-sm text-neutral-600 hover:text-primary font-medium py-2 transition-colors">
                  <Phone className="h-4 w-4" />
                  Or call us: +251 91 152 7050
                </button>
              </div>
            </div>
          </>
        )

      case 'why-ultimate':
        return (
          <>
            <div className="col-span-12 p-10">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold mb-2 bg-gradient-to-r from-neutral-900 to-neutral-600 bg-clip-text text-transparent">
                  Why Choose Ultimate Insurance
                </h2>
                <p className="text-neutral-500">Ethiopia's leading insurance broker with 15+ years of excellence</p>
              </div>

              <div className="grid grid-cols-3 gap-8 mb-8">
                {[
                  {
                    icon: Star,
                    title: 'Why Choose Us',
                    desc: 'We are Ethiopia\'s leading insurance broker with 15+ years of experience serving thousands of satisfied clients.',
                    color: 'text-amber-600',
                    bgColor: 'bg-amber-50',
                    borderColor: 'border-amber-200'
                  },
                  {
                    icon: TrendingUp,
                    title: 'Best Prices',
                    desc: 'Get the best rates from multiple insurers in one place. Our platform compares quotes instantly to save you money.',
                    color: 'text-emerald-600',
                    bgColor: 'bg-emerald-50',
                    borderColor: 'border-emerald-200'
                  },
                  {
                    icon: UsersIcon,
                    title: 'Expert Support',
                    desc: 'Our team of certified insurance experts will guide you through every step, from selection to claims.',
                    color: 'text-blue-600',
                    bgColor: 'bg-blue-50',
                    borderColor: 'border-blue-200'
                  }
                ].map(({ icon: Icon, title, desc, color, bgColor, borderColor }, idx) => (
                  <div 
                    key={title}
                    className={`group relative rounded-2xl border ${borderColor} bg-white hover:shadow-2xl transition-all duration-500 p-8 hover:-translate-y-2`}
                    style={{ animationDelay: `${idx * 150}ms` }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-neutral-50/50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    <div className="relative">
                      <div className={`${bgColor} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                        <Icon className={`h-8 w-8 ${color}`} />
                      </div>
                      
                      <h3 className="text-xl font-bold mb-3 text-neutral-900">{title}</h3>
                      <p className="text-neutral-600 leading-relaxed">{desc}</p>

                      <div className={`absolute bottom-0 left-0 right-0 h-1 ${bgColor} rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                    </div>
                  </div>
                ))}
              </div>

              {/* Additional trust indicators */}
              <div className="grid grid-cols-4 gap-4 pt-8 border-t border-neutral-200">
                {[
                  { label: 'Years of Experience', value: '15+', icon: Building },
                  { label: 'Happy Clients', value: '1000+', icon: Users },
                  { label: 'Insurance Partners', value: '17', icon: Shield },
                  { label: 'Claims Processed', value: '500+', icon: CheckCircle2 }
                ].map(({ label, value, icon: Icon }) => (
                  <div key={label} className="text-center group hover:scale-105 transition-transform duration-200">
                    <Icon className="h-6 w-6 text-primary mx-auto mb-2 group-hover:animate-bounce" />
                    <div className="text-2xl font-bold text-neutral-900 mb-1">{value}</div>
                    <div className="text-xs text-neutral-500">{label}</div>
                  </div>
                ))}
              </div>
            </div>
          </>
        )

      case 'partners':
        return (
          <>
            <div className="col-span-12 p-10">
              <div className="text-center mb-10">
                <h2 className="text-3xl font-bold mb-2 bg-gradient-to-r from-neutral-900 to-neutral-600 bg-clip-text text-transparent">
                  Our Trusted Partners
                </h2>
                <p className="text-neutral-500">Working with Ethiopia's top insurance providers</p>
              </div>

              <div className="grid grid-cols-4 gap-8">
                {[
                  { name: 'Nyala Insurance', logo: '/logos/nyala.png', rating: 4.8, clients: '250K+' },
                  { name: 'Awash Insurance', logo: '/logos/awash.png', rating: 4.7, clients: '180K+' },
                  { name: 'Nib Insurance', logo: '/logos/nib.png', rating: 4.9, clients: '200K+' },
                  { name: 'Africa Insurance', logo: '/logos/africa.png', rating: 4.6, clients: '150K+' }
                ].map((partner, idx) => (
                  <div 
                    key={partner.name}
                    className="group relative rounded-2xl border border-neutral-200 bg-white hover:border-primary/30 hover:shadow-2xl transition-all duration-500 p-6 hover:-translate-y-2"
                    style={{ animationDelay: `${idx * 100}ms` }}
                  >
                    {/* Logo area */}
                    <div className="h-32 flex items-center justify-center mb-4 relative overflow-hidden rounded-xl bg-gradient-to-br from-neutral-50 to-white">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <div className="relative text-3xl font-bold text-neutral-300 group-hover:text-primary/30 transition-colors duration-300">
                        {partner.name.split(' ')[0]}
                      </div>
                    </div>
                    
                    {/* Partner info */}
                    <h4 className="font-bold text-center mb-3 text-neutral-900 group-hover:text-primary transition-colors">
                      {partner.name}
                    </h4>
                    
                    {/* Stats */}
                    <div className="flex items-center justify-between text-xs text-neutral-500 pt-3 border-t border-neutral-100">
                      <div className="flex items-center gap-1">
                        <Star className="h-3 w-3 fill-amber-400 text-amber-400" />
                        <span className="font-semibold">{partner.rating}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="h-3 w-3" />
                        <span>{partner.clients}</span>
                      </div>
                    </div>

                    {/* Hover accent */}
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-primary/60 rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="text-center mt-10 pt-8 border-t border-neutral-200">
                <p className="text-sm text-neutral-600 mb-4">Want to become a partner?</p>
                <Link 
                  href="/partners/join"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-white font-semibold px-6 py-3 rounded-xl shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 transition-all duration-300 hover:-translate-y-0.5"
                >
                  Partner With Us
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </>
        )

      case 'resources':
        return (
          <>
            <div className="col-span-12 p-10">
              <div className="text-center mb-10">
                <h2 className="text-3xl font-bold mb-2 bg-gradient-to-r from-neutral-900 to-neutral-600 bg-clip-text text-transparent">
                  Resources & Support
                </h2>
                <p className="text-neutral-500">Everything you need to make informed insurance decisions</p>
              </div>

              <div className="grid grid-cols-4 gap-6">
                {[
                  {
                    title: 'Blog & Articles',
                    icon: BookOpen,
                    desc: 'Insurance tips and expert guides',
                    color: 'text-purple-600',
                    bgColor: 'bg-purple-50',
                    borderColor: 'border-purple-200',
                    link: '/resources/blog'
                  },
                  {
                    title: 'FAQ',
                    icon: HelpCircle,
                    desc: 'Common questions answered',
                    color: 'text-blue-600',
                    bgColor: 'bg-blue-50',
                    borderColor: 'border-blue-200',
                    link: '/resources/faq'
                  },
                  {
                    title: 'Calculators',
                    icon: BarChart,
                    desc: 'Plan your insurance costs',
                    color: 'text-emerald-600',
                    bgColor: 'bg-emerald-50',
                    borderColor: 'border-emerald-200',
                    link: '/resources/calculators'
                  },
                  {
                    title: 'Contact Us',
                    icon: Phone,
                    desc: 'Get personalized advice',
                    color: 'text-primary',
                    bgColor: 'bg-primary/5',
                    borderColor: 'border-primary/20',
                    link: '/contact'
                  }
                ].map(({ title, icon: Icon, desc, color, bgColor, borderColor, link }, idx) => (
                  <Link
                    key={title}
                    href={link}
                    className={`group relative block rounded-2xl border ${borderColor} bg-white hover:shadow-2xl transition-all duration-500 p-8 hover:-translate-y-2`}
                    style={{ animationDelay: `${idx * 100}ms` }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-neutral-50/50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    <div className="relative text-center">
                      <div className={`${bgColor} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                        <Icon className={`h-8 w-8 ${color}`} />
                      </div>
                      
                      <h4 className="font-bold mb-2 text-neutral-900 group-hover:text-primary transition-colors">
                        {title}
                      </h4>
                      <p className="text-sm text-neutral-600">{desc}</p>

                      <div className="mt-4 flex items-center justify-center gap-2 text-sm font-semibold text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        Learn More
                        <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </div>

                      <div className={`absolute bottom-0 left-0 right-0 h-1 ${bgColor} rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </>
        )

      default:
        return null
    }
  }

  return (
    <>
      {/* Enhanced Backdrop with blur */}
      <div 
        className="fixed inset-0 bg-black/30 z-40 backdrop-blur-md transition-opacity duration-300" 
        onClick={onClose}
      />

      {/* Mega Menu with entrance animation */}
      <div
        className="fixed top-20 left-0 right-0 z-50 animate-menu-slide-down"
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        <div className="container-custom">
          <div className="grid grid-cols-12 bg-white rounded-2xl shadow-2xl border border-neutral-200/60 overflow-hidden backdrop-blur-xl">
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-neutral-100 hover:bg-neutral-200 text-neutral-600 hover:text-neutral-900 transition-all duration-200 hover:rotate-90 hover:scale-110"
              aria-label="Close menu"
            >
              <X className="h-5 w-5" />
            </button>

            {renderContent()}
          </div>
        </div>
      </div>
    </>
  )
}