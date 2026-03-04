import { useState, useEffect, useMemo } from 'react'
import { motion } from 'framer-motion'

const SPRING = [0.34, 1.56, 0.64, 1] as [number, number, number, number]
const EASE_OUT = [0.76, 0, 0.24, 1] as [number, number, number, number]

const DIRECTIONS = ['up', 'down', 'left', 'right'] as const

function getExitTransform(dir: (typeof DIRECTIONS)[number]) {
  switch (dir) {
    case 'up': return { y: '-100%' }
    case 'down': return { y: '100%' }
    case 'left': return { x: '-100%' }
    case 'right': return { x: '100%' }
  }
}

export default function Preloader() {
  const [exiting, setExiting] = useState(false)
  const [done, setDone] = useState(false)

  const direction = useMemo(
    () => DIRECTIONS[Math.floor(Math.random() * DIRECTIONS.length)],
    [],
  )

  useEffect(() => {
    const t1 = setTimeout(() => setExiting(true), 2000)
    const t2 = setTimeout(() => setDone(true), 2900)
    return () => { clearTimeout(t1); clearTimeout(t2) }
  }, [])

  if (done) return null

  const exitTransform = getExitTransform(direction)

  return (
    <>
      {/* Centred content */}
      <motion.div
        style={{
          position: 'fixed', inset: 0,
          zIndex: 10000001,
          display: 'flex', flexDirection: 'column',
          alignItems: 'center', justifyContent: 'center',
          pointerEvents: 'none',
        }}
        animate={{ opacity: exiting ? 0 : 1 }}
        transition={{ duration: 0.25, ease: 'easeIn' }}
      >
        <motion.div
          initial={{ scale: 0.4, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.7, ease: SPRING }}
          style={{ marginBottom: 28 }}
        >
          <svg width="76" height="76" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="42" height="42" rx="4.2" fill="#F94D00"/>
            <g clipPath="url(#clip_pre)" transform="rotate(90, 21, 21)">
              <path d="M9.54541 10.1882H18.6592L24.9422 16.4732V23.2409L14.6903 13.0433L14.6583 31.8128H9.54541V10.1882Z" fill="white"/>
              <path d="M32.4547 31.8127H23.3428L17.0608 25.5268V18.7562L27.3127 28.9519L27.3438 10.1872H32.4547V31.8127Z" fill="white"/>
            </g>
            <defs>
              <clipPath id="clip_pre">
                <rect width="22.9091" height="22.9091" fill="white" transform="translate(9.54541 9.54546)"/>
              </clipPath>
            </defs>
          </svg>
        </motion.div>

        <motion.p
          initial={{ y: 22, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.55, delay: 0.4, ease: 'easeOut' }}
          style={{
            margin: 0,
            fontFamily: "'Space Grotesk', Arial, sans-serif",
            fontSize: '1.75rem',
            fontWeight: 700,
            color: '#ffffff',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
          }}
        >
          Zikel <span style={{ color: '#F94D00' }}>Solutions</span>
        </motion.p>

        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 0.55, delay: 0.65, ease: 'easeOut' }}
          style={{
            height: 2,
            width: 224,
            backgroundColor: '#F94D00',
            marginTop: 14,
            transformOrigin: 'left center',
          }}
        />
      </motion.div>

      {/* Curtain — single panel, random swipe direction */}
      <motion.div
        style={{
          position: 'fixed', inset: 0,
          zIndex: 10000000,
          pointerEvents: 'none',
          backgroundImage: 'url(/assets/img/home-1/hero/hero-bg.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        animate={exiting ? exitTransform : { x: 0, y: 0 }}
        transition={{ duration: 0.7, ease: EASE_OUT, delay: exiting ? 0.15 : 0 }}
      />
    </>
  )
}
