import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

type Direction = 'bottom' | 'top' | 'left' | 'right'

interface FadeSectionProps {
  children: ReactNode
  className?: string
  delay?: number
  duration?: number
  offset?: number
  from?: Direction
  once?: boolean
}

function getInitial(from: Direction, offset: number) {
  switch (from) {
    case 'left': return { x: -offset, opacity: 0 }
    case 'right': return { x: offset, opacity: 0 }
    case 'top': return { y: -offset, opacity: 0 }
    case 'bottom':
    default: return { y: offset, opacity: 0 }
  }
}

/**
 * Directional fade-in on scroll.
 * Replaces GSAP .tp_fade_anim and WOW.js wow fadeInUp patterns.
 */
export default function FadeSection({
  children,
  className = '',
  delay = 0,
  duration = 0.75,
  offset = 40,
  from = 'bottom',
  once = true,
}: FadeSectionProps) {
  return (
    <motion.div
      className={className}
      initial={getInitial(from, offset)}
      whileInView={{ x: 0, y: 0, opacity: 1 }}
      viewport={{ once, amount: 0.15 }}
      transition={{ duration, delay, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  )
}
