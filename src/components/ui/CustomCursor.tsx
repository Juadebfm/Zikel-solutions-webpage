import { useEffect } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function CustomCursor() {
  const mouseX = useMotionValue(-100)
  const mouseY = useMotionValue(-100)

  // Outer cursor: springy, lagged
  const outerX = useSpring(mouseX, { stiffness: 80, damping: 20 })
  const outerY = useSpring(mouseY, { stiffness: 80, damping: 20 })

  // Inner cursor: snappy
  const innerX = useSpring(mouseX, { stiffness: 200, damping: 30 })
  const innerY = useSpring(mouseY, { stiffness: 200, damping: 30 })

  useEffect(() => {
    const move = (e: MouseEvent) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
    }
    window.addEventListener('mousemove', move)
    return () => window.removeEventListener('mousemove', move)
  }, [mouseX, mouseY])

  return (
    <>
      <motion.div
        className="mouseCursor cursor-outer"
        style={{ x: outerX, y: outerY }}
      />
      <motion.div
        className="mouseCursor cursor-inner"
        style={{ x: innerX, y: innerY }}
      />
    </>
  )
}
