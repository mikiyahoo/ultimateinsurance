'use client'

import { useState } from 'react'
import Image from 'next/image'
import { cn } from '@/lib/utils'

interface LogoItem {
  name: string
  image: string
  url?: string
}

interface LogoGridProps {
  title: string
  logos: LogoItem[]
  type?: 'partner' | 'insurer'
  columns?: {
    base: number
    sm: number
    md: number
    lg: number
    xl: number
  }
  className?: string
}

export default function LogoGrid({
  title,
  logos,
  type = 'partner',
  columns = { base: 2, sm: 3, md: 4, lg: 5, xl: 6 },
  className = ''
}: LogoGridProps) {
  const [flipped, setFlipped] = useState<string | null>(null)

  // Generate responsive grid classes
  const gridClasses = cn(
    "grid gap-6 md:gap-8",
    `grid-cols-${columns.base}`,
    `sm:grid-cols-${columns.sm}`,
    `md:grid-cols-${columns.md}`,
    `lg:grid-cols-${columns.lg}`,
    `xl:grid-cols-${columns.xl}`
  )

  return (
    <div className={cn("py-12 md:py-16", className)}>
      <div className="container-custom">
        <div className="text-center mb-10 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-black mb-4">
            {title}
          </h2>
          {type === 'insurer' && (
            <p className="text-neutral-600 max-w-2xl mx-auto">
              Licensed and regulated insurance partners providing comprehensive coverage across Ethiopia
            </p>
          )}
        </div>

        <div className={gridClasses}>
          {logos.map((logo) => (
            <div 
              key={logo.name}
              className="relative group"
              onMouseEnter={() => type === 'insurer' && setFlipped(logo.name)}
              onMouseLeave={() => type === 'insurer' && setFlipped(null)}
            >
              {type === 'insurer' ? (
                // Flip Card for Insurance Companies
                <div className="relative w-full h-32 md:h-36 [perspective:1000px]">
                  <div className={cn(
                    "relative w-full h-full transition-all duration-500 [transform-style:preserve-3d]",
                    flipped === logo.name ? "[transform:rotateY(180deg)]" : ""
                  )}>
                    {/* Front - Logo */}
                    <div className="absolute inset-0 w-full h-full [backface-visibility:hidden]">
                      <div className="h-full w-full bg-gradient-light rounded-xl border border-neutral-200 p-4 md:p-6 flex items-center justify-center">
                        <div className="relative w-full h-full">
                          <Image
                            src={`/images/partners/insurer-logos/${logo.image}`}
                            alt={`${logo.name} logo`}
                            fill
                            className="object-contain transition-all duration-500"
                            sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 20vw"
                          />
                        </div>
                      </div>
                    </div>
                    
                    {/* Back - Name */}
                    <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)]">
                      <div className="h-full w-full bg-primary/5 border-2 border-primary/20 rounded-xl p-4 flex items-center justify-center">
                        <div className="text-center">
                          <h3 className="font-bold text-neutral-black text-sm md:text-base">
                            {logo.name}
                          </h3>
                          <div className="mt-2 w-10 h-1 bg-primary mx-auto rounded-full"></div>
                          <p className="text-xs text-neutral-600 mt-2">Licensed Insurer</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                // Regular Card for Partners
                <div className="h-32 md:h-36 bg-gradient-light rounded-xl border border-neutral-200 p-4 md:p-6 flex items-center justify-center group-hover:border-primary/30 transition-all duration-300">
                  <div className="relative w-full h-full">
                    <Image
                      src={`/images/partners/partner-logos/${logo.image}`}
                      alt={`${logo.name} logo`}
                      fill
                      className="object-contain transition-all duration-500 filter grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105"
                      sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 20vw"
                    />
                  </div>
                </div>
              )}
              
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

        {/* Stats Bar */}
        <div className="mt-12 pt-8 border-t border-neutral-200">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary">40+</div>
              <div className="text-neutral-600">Partner Organizations</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary">17</div>
              <div className="text-neutral-600">Licensed Insurers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary">1000+</div>
              <div className="text-neutral-600">Happy Clients</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}