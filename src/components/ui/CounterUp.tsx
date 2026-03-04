import { useState, useEffect, useRef } from 'react'
import { useInView } from 'framer-motion'

interface CounterUpProps {
  target: number
  suffix?: string
  duration?: number
  className?: string
}

/**
 * Animated number counter that runs when scrolled into view.
 * Replaces jQuery counterUp plugin.
 */
export default function CounterUp({
  target,
  suffix = '',
  duration = 2000,
  className = '',
}: CounterUpProps) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })

  useEffect(() => {
    if (!isInView) return

    const startTime = performance.now()
    const step = (currentTime: number) => {
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * target))

      if (progress < 1) requestAnimationFrame(step)
      else setCount(target)
    }

    requestAnimationFrame(step)
  }, [isInView, target, duration])

  return (
    <span ref={ref} className={className}>
      {count}{suffix}
    </span>
  )
}
