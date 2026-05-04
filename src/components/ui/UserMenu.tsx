import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { APP_DASHBOARD_URL, APP_LOGOUT_URL } from '../../constants/links'

interface Props {
  // light = white icon for transparent header over hero; dark = dark icon for sticky/white header
  variant?: 'light' | 'dark'
}

export default function UserMenu({ variant = 'dark' }: Props) {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  const iconColor = variant === 'light' ? '#fff' : '#1a1a2b'

  const itemStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    padding: '10px 12px',
    borderRadius: '7px',
    color: 'var(--header)',
    fontSize: '14px',
    textDecoration: 'none',
    transition: 'background 0.12s',
  }

  return (
    <div ref={ref} style={{ position: 'relative' }}>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-label="Account menu"
        aria-expanded={open}
        style={{
          background: 'none',
          border: 'none',
          padding: '6px',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: iconColor,
          fontSize: '30px',
          lineHeight: 1,
          transition: 'color 0.3s',
        }}
      >
        <i className="fa-solid fa-circle-user"></i>
      </button>

      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ opacity: 0, y: -8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.15 }}
            style={{
              position: 'absolute',
              top: 'calc(100% + 8px)',
              right: 0,
              background: '#fff',
              border: '1px solid #e8e8e8',
              borderRadius: '10px',
              boxShadow: '0 12px 40px rgba(0,0,0,0.13)',
              zIndex: 200,
              listStyle: 'none',
              padding: '8px',
              margin: 0,
              minWidth: '190px',
            }}
          >
            <li>
              <a
                href={APP_DASHBOARD_URL}
                style={itemStyle}
                onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = '#f5f5f5' }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = 'transparent' }}
              >
                <i className="fa-solid fa-gauge" style={{ color: 'var(--theme)', width: '16px' }}></i>
                Dashboard
              </a>
            </li>
            <li>
              <a
                href={APP_LOGOUT_URL}
                style={itemStyle}
                onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = '#f5f5f5' }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = 'transparent' }}
              >
                <i className="fa-solid fa-arrow-right-from-bracket" style={{ color: 'var(--theme)', width: '16px' }}></i>
                Logout
              </a>
            </li>
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  )
}
