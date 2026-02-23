'use client'

import { useEffect, useMemo, useState } from 'react'

interface AnimatedCounterProps {
  to: number
  duration?: number
}

export default function AnimatedCounter({
  to,
  duration = 1500,
}: AnimatedCounterProps) {
  // Decide step size
  const step = to >= 1000 ? 100 : 1

  // Generate numbers to render
  const values = useMemo(() => {
    const arr = []
    for (let i = 0; i <= to; i += step) {
      arr.push(i)
    }
    return arr
  }, [to, step])

  const [index, setIndex] = useState(0)

  const stepTime = duration / values.length

  useEffect(() => {
    if (index >= values.length - 1) return

    const timer = setTimeout(() => {
      setIndex((prev) => prev + 1)
    }, stepTime)

    return () => clearTimeout(timer)
  }, [index, values.length, stepTime])

  return (
    <div className="counter-mask">
      <div
        className="counter-track"
        style={{ transform: `translateY(-${index * 1.2}em)` }}
      >
        {values.map((value) => (
          <div key={value} className="counter-digit">
            {value}
          </div>
        ))}
      </div>
    </div>
  )
}
