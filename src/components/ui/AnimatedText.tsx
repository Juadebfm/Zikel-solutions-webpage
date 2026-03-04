import { motion } from 'framer-motion'

interface AnimatedTextProps {
  text: string
  className?: string
  delay?: number
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span'
}

const container = {
  hidden: {},
  visible: (delay: number = 0) => ({
    transition: { staggerChildren: 0.03, delayChildren: delay },
  }),
}

const charVariant = {
  hidden: { opacity: 0, x: 20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
      ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
    },
  },
}

/**
 * Splits text into individual animated characters.
 * Replaces GSAP SplitText + ScrollTrigger .text-anim pattern.
 */
export default function AnimatedText({
  text,
  className = '',
  delay = 0.1,
  as: Tag = 'span',
}: AnimatedTextProps) {
  return (
    <motion.span
      style={{ display: 'block' }}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      custom={delay}
    >
      <Tag className={className} style={{ display: 'block' }}>
        {text.split('').map((char, i) => (
          <motion.span
            key={i}
            variants={charVariant}
            style={{ display: 'inline-block', whiteSpace: char === ' ' ? 'pre' : 'normal' }}
          >
            {char}
          </motion.span>
        ))}
      </Tag>
    </motion.span>
  )
}
