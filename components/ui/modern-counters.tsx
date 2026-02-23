'use client'

import { useEffect, useState, useMemo, useRef } from 'react'

interface SplitFlapCounterProps {
  to: number
  duration?: number
  suffix?: string
  prefix?: string
  startOnView?: boolean
}

/**
 * Modern minimal counter that only animates changing digits
 * Features:
 * - Only the rightmost changing digits animate
 * - Smooth vertical slide with fade in/out
 * - Bold, large numbers
 * - Minimal, clean aesthetic
 */
export function SplitFlapCounter({
  to,
  duration = 2000,
  suffix = '',
  prefix = '',
  startOnView = false,
}: SplitFlapCounterProps) {
  const [displayValue, setDisplayValue] = useState(0)
  const containerRef = useRef<HTMLDivElement | null>(null)
  const [hasStarted, setHasStarted] = useState(!startOnView)

  useEffect(() => {
    if (!startOnView) return
    const node = containerRef.current
    if (!node) return

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0]
        if (entry.isIntersecting) {
          setHasStarted(true)
          observer.disconnect()
        }
      },
      { threshold: 0.4 }
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [startOnView])

  useEffect(() => {
    if (!hasStarted) return
    let startTime: number
    let animationFrame: number

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)

      // Easing function for smooth deceleration
      const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      const current = Math.floor(easeOutQuart * to)

      setDisplayValue(current)

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      } else {
        setDisplayValue(to)
      }
    }

    animationFrame = requestAnimationFrame(animate)

    return () => {
      if (animationFrame) cancelAnimationFrame(animationFrame)
    }
  }, [to, duration, hasStarted])

  // Split number into individual digits
  const digits = useMemo(() => {
    return displayValue.toString().split('').map(Number)
  }, [displayValue])

  const finalDigits = to.toString().split('').map(Number)

  return (
    <div ref={containerRef} className="inline-flex items-center gap-1">
      {prefix && (
        <span className="text-4xl md:text-5xl font-bold text-neutral-900">
          {prefix}
        </span>
      )}
      
      <div className="inline-flex items-baseline">
        {digits.map((digit, index) => {
          const isChanging = hasStarted && digit !== finalDigits[index]
          
          return (
            <DigitSlot
              key={index}
              digit={digit}
              isAnimating={isChanging}
            />
          )
        })}
      </div>

      {suffix && (
        <span className="text-4xl md:text-5xl font-bold text-neutral-900">
          {suffix}
        </span>
      )}
    </div>
  )
}

function DigitSlot({ 
  digit, 
  isAnimating 
}: { 
  digit: number
  isAnimating: boolean
}) {
  return (
    <div className="relative inline-block overflow-hidden h-[1.2em] w-[0.7em]">
      {/* The actual digit with fade animation */}
      <div
        className={`
          absolute inset-0 flex items-center justify-center
          text-4xl md:text-5xl font-bold text-neutral-900
          transition-all duration-300
          ${isAnimating ? 'animate-digit-slide-up' : ''}
        `}
      >
        {digit}
      </div>
    </div>
  )
}

/* ============================================ */
/* SMOOTH ROLLING COUNTER (Alternative Style)  */
/* ============================================ */

interface RollingCounterProps {
  to: number
  duration?: number
  suffix?: string
  prefix?: string
  startOnView?: boolean
}

/**
 * Smooth rolling counter with vertical slot machine effect
 * Each digit rolls independently through 0-9
 */
export function RollingCounter({
  to,
  duration = 2500,
  suffix = '',
  prefix = '',
  startOnView = false,
}: RollingCounterProps) {
  const [count, setCount] = useState(0)
  const digitHeightEm = 1.4
  const digitWidthEm = 0.8
  const containerRef = useRef<HTMLDivElement | null>(null)
  const [hasStarted, setHasStarted] = useState(!startOnView)

  useEffect(() => {
    if (!startOnView) return
    const node = containerRef.current
    if (!node) return

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0]
        if (entry.isIntersecting) {
          setHasStarted(true)
          observer.disconnect()
        }
      },
      { threshold: 0.4 }
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [startOnView])

  useEffect(() => {
    if (!hasStarted) return
    let startTime: number
    let animationFrame: number

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)

      // Smooth easing
      const easeOut = 1 - Math.pow(1 - progress, 3)
      const current = Math.floor(easeOut * to)

      setCount(current)

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      } else {
        // Snap to the final integer to avoid ending between digits
        setCount(to)
      }
    }

    animationFrame = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animationFrame)
  }, [to, duration, hasStarted])

  const targetDigits = to.toString().length
  const digits = count.toString().padStart(targetDigits, '0').split('')
  const showStaticLeading = targetDigits >= 4
  const isAnimating = count !== to

  return (
    <div ref={containerRef} className="inline-flex items-center gap-1">
      {prefix && (
        <span className="text-4xl md:text-5xl font-bold text-neutral-900">
          {prefix}
        </span>
      )}
      
      <div className="inline-flex">
        {!isAnimating ? (
          digits.map((digit, i) => (
            <span
              key={i}
              className="inline-flex items-center justify-center text-4xl md:text-5xl font-bold text-neutral-900 leading-none tabular-nums"
              style={{ height: `${digitHeightEm}em`, width: `${digitWidthEm}em` }}
            >
              {digit}
            </span>
          ))
        ) : showStaticLeading ? (
          <>
            <div
              className="inline-flex items-center justify-center text-4xl md:text-5xl font-bold text-neutral-900 leading-none opacity-80"
              style={{ height: `${digitHeightEm}em`, width: `${digitWidthEm}em` }}
            >
              {digits[0]}
            </div>
            {digits.slice(1).map((digit, i) => (
              <RollingDigit
                key={i + 1}
                digit={parseInt(digit)}
                index={i + 1}
                digitHeightEm={digitHeightEm}
                digitWidthEm={digitWidthEm}
                isAnimating={isAnimating}
              />
            ))}
          </>
        ) : (
          digits.map((digit, i) => (
            <RollingDigit
              key={i}
              digit={parseInt(digit)}
              index={i}
              digitHeightEm={digitHeightEm}
              digitWidthEm={digitWidthEm}
              isAnimating={isAnimating}
            />
          ))
        )}
      </div>

      {suffix && (
        <span className="text-4xl md:text-5xl font-bold text-neutral-900 ml-1">
          {suffix}
        </span>
      )}
    </div>
  )
}

function RollingDigit({
  digit,
  index,
  digitHeightEm,
  digitWidthEm,
  isAnimating,
}: {
  digit: number
  index: number
  digitHeightEm: number
  digitWidthEm: number
  isAnimating: boolean
}) {
  // Generate array of 0-9 digits
  const allDigits = Array.from({ length: 10 }, (_, i) => i)

  return (
    <div 
      className="relative inline-block overflow-hidden"
      style={{ 
        // Stagger the animation slightly for each digit
        animationDelay: `${index * 50}ms`,
        height: `${digitHeightEm}em`,
        width: `${digitWidthEm}em`,
      }}
    >
      {/* Vertical gradient masks for fade effect */}
      {isAnimating && (
        <>
          <div
            className="absolute inset-x-0 top-0 bg-gradient-to-b from-white to-transparent z-10 pointer-events-none"
            style={{ height: `${digitHeightEm * 0.25}em` }}
          />
          <div
            className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-white to-transparent z-10 pointer-events-none"
            style={{ height: `${digitHeightEm * 0.25}em` }}
          />
        </>
      )}
      
      {/* The rolling strip of digits */}
      <div
        className={`absolute inset-x-0 flex flex-col items-center transition-transform duration-700 ease-out ${
          isAnimating ? 'opacity-80' : 'opacity-100'
        }`}
        style={{
          transform: `translateY(-${digit * digitHeightEm}em)`,
          WebkitMaskImage: isAnimating
            ? 'linear-gradient(to bottom, transparent 0%, black 20%, black 80%, transparent 100%)'
            : 'none',
          maskImage: isAnimating
            ? 'linear-gradient(to bottom, transparent 0%, black 20%, black 80%, transparent 100%)'
            : 'none',
        }}
      >
        {allDigits.map((d) => (
          <div
            key={d}
            className="flex items-center justify-center text-4xl md:text-5xl font-bold text-neutral-900 leading-none"
            style={{ height: `${digitHeightEm}em` }}
          >
            {d}
          </div>
        ))}
      </div>
    </div>
  )
}

/* ============================================ */
/* FLIP COUNTER (Odometer Style)               */
/* ============================================ */

interface FlipCounterProps {
  to: number
  duration?: number
  suffix?: string
  prefix?: string
  startOnView?: boolean
}

/**
 * Odometer-style flip counter with smooth transitions
 * Numbers flip vertically with a slight 3D effect
 */
export function FlipCounter({
  to,
  duration = 2000,
  suffix = '',
  prefix = '',
  startOnView = false,
}: FlipCounterProps) {
  const [value, setValue] = useState(0)
  const containerRef = useRef<HTMLDivElement | null>(null)
  const [hasStarted, setHasStarted] = useState(!startOnView)

  useEffect(() => {
    if (!startOnView) return
    const node = containerRef.current
    if (!node) return

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0]
        if (entry.isIntersecting) {
          setHasStarted(true)
          observer.disconnect()
        }
      },
      { threshold: 0.4 }
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [startOnView])

  useEffect(() => {
    if (!hasStarted) return
    const step = Math.max(1, Math.floor(to / 50)) // Smooth increments
    const interval = duration / (to / step)

    let current = 0
    const timer = setInterval(() => {
      current += step
      if (current >= to) {
        setValue(to)
        clearInterval(timer)
      } else {
        setValue(current)
      }
    }, interval)

    return () => clearInterval(timer)
  }, [to, duration, hasStarted])

  const digits = value.toString().padStart(to.toString().length, '0').split('')

  return (
    <div ref={containerRef} className="inline-flex items-center gap-1">
      {prefix && (
        <span className="text-4xl md:text-5xl font-bold text-neutral-900">
          {prefix}
        </span>
      )}
      
      <div className="inline-flex gap-0.5">
        {digits.map((digit, i) => (
          <FlipDigit key={i} digit={digit} />
        ))}
      </div>

      {suffix && (
        <span className="text-4xl md:text-5xl font-bold text-neutral-900 ml-1">
          {suffix}
        </span>
      )}
    </div>
  )
}

function FlipDigit({ digit }: { digit: string }) {
  return (
    <div className="relative perspective-1000">
      <span className="inline-flex items-center justify-center h-[1.2em] w-[0.7em] text-4xl md:text-5xl font-bold text-neutral-900 leading-none">
        {digit}
      </span>
    </div>
  )
}

/* ============================================ */
/* SIMPLE SMOOTH COUNTER (Most Performant)     */
/* ============================================ */

interface SmoothCounterProps {
  to: number
  duration?: number
  suffix?: string
  prefix?: string
  decimals?: number
  startOnView?: boolean
}

/**
 * Ultra-smooth counter with no complex animations
 * Just smooth number counting - most performant option
 */
export function SmoothCounter({
  to,
  duration = 2000,
  suffix = '',
  prefix = '',
  decimals = 0,
  startOnView = false,
}: SmoothCounterProps) {
  const [count, setCount] = useState(0)
  const containerRef = useRef<HTMLDivElement | null>(null)
  const [hasStarted, setHasStarted] = useState(!startOnView)

  useEffect(() => {
    if (!startOnView) return
    const node = containerRef.current
    if (!node) return

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0]
        if (entry.isIntersecting) {
          setHasStarted(true)
          observer.disconnect()
        }
      },
      { threshold: 0.4 }
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [startOnView])

  useEffect(() => {
    if (!hasStarted) return
    let startTime: number
    let animationFrame: number

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)

      // Easing function
      const easeOutCubic = 1 - Math.pow(1 - progress, 3)
      const current = easeOutCubic * to

      setCount(current)

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      } else {
        setCount(to)
      }
    }

    animationFrame = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animationFrame)
  }, [to, duration, hasStarted])

  const displayValue = decimals > 0 
    ? count.toFixed(decimals) 
    : Math.floor(count).toString()

  return (
    <div ref={containerRef} className="inline-flex items-baseline gap-1 text-4xl md:text-5xl font-bold text-neutral-900 tabular-nums">
      {prefix && <span>{prefix}</span>}
      <span>{displayValue}</span>
      {suffix && <span>{suffix}</span>}
    </div>
  )
}
