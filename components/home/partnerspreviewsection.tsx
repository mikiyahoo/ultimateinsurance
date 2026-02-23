'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import { cn } from '@/lib/utils'

interface LogoItem {
  name: string
  image: string
  type: 'partner' | 'insurer'
}

interface PartnersPreviewSectionProps {
  partners?: LogoItem[]
  insurers?: LogoItem[]
  maxItems?: number
}

export default function PartnersPreviewSection({
  partners = [
    { name: 'Habesha Breweries', image: 'habesha-breweries.webp', type: 'partner' as const },
    { name: 'CARE', image: 'care.webp', type: 'partner' as const },
    { name: 'Heineken', image: 'heineken.webp', type: 'partner' as const },
    { name: 'Marie Stopes Ethiopia', image: 'marie-stopes-ethiopia.webp', type: 'partner' as const },
    { name: 'Cambridge Academy', image: 'cambridge-academy.webp', type: 'partner' as const },
    { name: 'Plan International', image: 'plan-international.webp', type: 'partner' as const },
  ],
  insurers = [
    { name: 'Awash Insurance', image: 'awash-insurance.webp', type: 'insurer' as const },
    { name: 'Ethiopian Insurance Corporation', image: 'ethiopian-insurance-corporation.webp', type: 'insurer' as const },
    { name: 'United Insurance', image: 'united-insurance.webp', type: 'insurer' as const },
    { name: 'Nile Insurance', image: 'nile-insurance.webp', type: 'insurer' as const },
    { name: 'Zemen Insurance', image: 'zemen-insurance.webp', type: 'insurer' as const },
    { name: 'Lucy Insurance', image: 'lucy-insurance.webp', type: 'insurer' as const },
  ],
  maxItems = 6
}: PartnersPreviewSectionProps) {
  const [activeType, setActiveType] = useState<'partners' | 'insurers'>('insurers')
  
  const displayedPartners = partners.slice(0, maxItems)
  const displayedInsurers = insurers.slice(0, maxItems)

  return (
    <section className="section-padding bg-gradient-light">
      <div className="container-custom">
        {/* Header with tabs */}
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-black mb-4">
            Trusted by Ethiopia&apos;s Leading Organizations
          </h2>
          <p className="text-neutral-600 max-w-2xl mx-auto mb-6">
            Partnering with top companies and licensed insurers to deliver exceptional insurance solutions.
          </p>
          
          {/* Tabs */}
          <div className="inline-flex bg-neutral-100 rounded-full p-1 mb-8">
            <button
              onClick={() => setActiveType('insurers')}
              className={cn(
                "px-6 py-2 rounded-full font-semibold transition-all duration-300",
                activeType === 'insurers' 
                  ? "bg-primary text-neutral-white" 
                  : "text-neutral-600 hover:text-neutral-black"
              )}
            >
              Insurance Companies ({insurers.length})
            </button>
            <button
              onClick={() => setActiveType('partners')}
              className={cn(
                "px-6 py-2 rounded-full font-semibold transition-all duration-300",
                activeType === 'partners' 
                  ? "bg-primary text-neutral-white" 
                  : "text-neutral-600 hover:text-neutral-black"
              )}
            >
              Partner Organizations ({partners.length})
            </button>
          </div>
        </div>

        {/* Logo Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 md:gap-6">
          {(activeType === 'insurers' ? displayedInsurers : displayedPartners).map((logo, index) => (
            <div 
              key={`${logo.type}-${index}`}
              className="group relative"
            >
              <div className="aspect-square bg-gradient-light rounded-xl border border-neutral-200 p-4 md:p-6 flex items-center justify-center group-hover:border-primary/30 transition-all duration-300">
                <div className="relative w-full h-full">
                  <Image
                    src={`/images/partners/${logo.type}-logos/${logo.image}`}
                    alt={`${logo.name} logo`}
                    fill
                    className="object-contain transition-all duration-500 filter grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110"
                    sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 16vw"
                    loading="lazy"
                  />
                </div>
              </div>
              
              {/* Name Tooltip */}
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 translate-y-full opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 pointer-events-none z-10">
                <div className="bg-neutral-900 text-neutral-white text-xs font-medium py-1 px-3 rounded whitespace-nowrap">
                  {logo.name}
                </div>
                <div className="w-2 h-2 bg-neutral-900 rotate-45 absolute -top-1 left-1/2 -translate-x-1/2"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center p-6 bg-gradient-light rounded-xl">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">17</div>
            <div className="text-neutral-700 font-medium">Licensed Insurance Companies</div>
            <div className="text-sm text-neutral-500 mt-1">Compare & choose the best</div>
          </div>
          <div className="text-center p-6 bg-gradient-light rounded-xl">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">40+</div>
            <div className="text-neutral-700 font-medium">Partner Organizations</div>
            <div className="text-sm text-neutral-500 mt-1">Trusted by leading businesses</div>
          </div>
          <div className="text-center p-6 bg-gradient-light rounded-xl">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">1000+</div>
            <div className="text-neutral-700 font-medium">Happy Clients</div>
            <div className="text-sm text-neutral-500 mt-1">Serving since 2006</div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-10">
          <Link 
            href="/partners-insurers" 
            className="inline-flex items-center text-primary hover:text-primary-light font-semibold text-lg"
          >
            View All Partners & Insurance Companies
            <ChevronRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  )
}