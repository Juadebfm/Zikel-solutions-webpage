import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

interface RevealImageProps {
  children: ReactNode
  className?: string
}

/**
 * Sliding reveal animation for images.
 * Replaces GSAP .reveal pattern (xPercent clip with overlay).
 */
export default function RevealImage({ children, className = '' }: RevealImageProps) {
  return (
    <div className={`reveal ${className}`} style={{ position: 'relative', overflow: 'hidden' }}>
      <motion.div
        initial={{ x: 0 }}
        whileInView={{ x: '100%' }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1.5, ease: [0.77, 0, 0.18, 1] }}
        style={{
          position: 'absolute',
          inset: 0,
          backgroundColor: 'var(--theme, #F94D00)',
          zIndex: 1,
        }}
      />
      <motion.div
        initial={{ scale: 1.3 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1.5, ease: [0.77, 0, 0.18, 1] }}
      >
        {children}
      </motion.div>
    </div>
  )
}
