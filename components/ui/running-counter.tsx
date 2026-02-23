'use client'

import { useEffect, useState } from 'react'

interface RunningCounterProps {
  to: number
  duration?: number
  suffix?: string
}

export function RunningCounter({
  to,
  duration = 2000,
  suffix = '',
}: RunningCounterProps) {
  const [value, setValue] = useState(0)

  useEffect(() => {
    let current = 0
    const stepTime = duration / to

    const timer = setInterval(() => {
      current++
      setValue(current)
      if (current >= to) clearInterval(timer)
    }, stepTime)

    return () => clearInterval(timer)
  }, [to, duration])

  return (
    <span>
      {value}
      {suffix}
    </span>
  )
}
