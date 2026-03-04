import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const SERVICES = [
{ label: 'AI Staff Guidance & Support System', icon: 'fa-robot', value: 'ai_staff_guidance' },
  { label: 'Training & Professional Development Intelligence', icon: 'fa-graduation-cap', value: 'training_development' },
  { label: 'Healthcare Workflow Support Software', icon: 'fa-hospital', value: 'healthcare_workflow' },
  { label: 'General Enquiry / Not Sure Yet', icon: 'fa-circle-question', value: 'general_enquiry' },
]

export { SERVICES }

interface Props {
  value: string
  onChange: (v: string) => void
  error?: boolean
  placeholder?: string
}

export default function ServiceDropdown({ value, onChange, error = false, placeholder = 'Service of Interest *' }: Props) {
  const [isOpen, setIsOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setIsOpen(false)
      }
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  const selected = SERVICES.find(s => s.value === value)

  return (
    <div ref={ref} style={{ position: 'relative' }}>
      <button
        type="button"
        onClick={() => setIsOpen((o) => !o)}
        style={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '14px 16px',
          border: `1px solid ${error ? '#dc3545' : isOpen ? 'var(--theme)' : '#e0e0e0'}`,
          borderRadius: '6px',
          background: '#fff',
          color: value ? 'var(--header)' : '#aaa',
          fontSize: '15px',
          fontFamily: 'inherit',
          cursor: 'pointer',
          textAlign: 'left',
          transition: 'border-color 0.2s',
        }}
      >
        {selected ? (
          <span style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span style={{
              width: '24px',
              height: '24px',
              borderRadius: '6px',
              background: '#F94D00',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
            }}>
              <i className={`fa-solid ${selected.icon}`} style={{ fontSize: '11px', color: '#fff' }}></i>
            </span>
            <span style={{ color: 'var(--header)', fontSize: '14px' }}>{selected.label}</span>
          </span>
        ) : (
          <span>{placeholder}</span>
        )}
        <i
          className="fa-solid fa-chevron-down"
          style={{
            fontSize: '12px',
            color: '#999',
            marginLeft: '8px',
            flexShrink: 0,
            transition: 'transform 0.2s',
            transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
          }}
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.ul
            initial={{ opacity: 0, y: -8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.15 }}
            style={{
              position: 'absolute',
              top: 'calc(100% + 6px)',
              left: 0,
              right: 0,
              background: '#fff',
              border: '1px solid #e8e8e8',
              borderRadius: '10px',
              boxShadow: '0 12px 40px rgba(0,0,0,0.13)',
              zIndex: 200,
              listStyle: 'none',
              padding: '8px',
              margin: 0,
              maxHeight: '220px',
              overflowY: 'auto',
            }}
          >
            {SERVICES.map(({ label, icon, value: enumValue }) => {
              const isSelected = value === enumValue
              return (
                <li
                  key={enumValue}
                  onClick={() => { onChange(enumValue); setIsOpen(false) }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    padding: '8px 12px',
                    borderRadius: '7px',
                    fontSize: '14px',
                    color: isSelected ? 'var(--theme)' : 'var(--header)',
                    background: isSelected ? '#FFF4F0' : 'transparent',
                    fontWeight: isSelected ? 600 : 400,
                    cursor: 'pointer',
                    transition: 'background 0.12s',
                    userSelect: 'none',
                  }}
                  onMouseEnter={(e) => {
                    if (!isSelected) (e.currentTarget as HTMLLIElement).style.background = '#f5f5f5'
                  }}
                  onMouseLeave={(e) => {
                    if (!isSelected) (e.currentTarget as HTMLLIElement).style.background = 'transparent'
                  }}
                >
                  <span style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '8px',
                    background: isSelected ? '#F94D00' : '#f0f0f0',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    transition: 'background 0.12s',
                  }}>
                    <i className={`fa-solid ${icon}`} style={{ fontSize: '13px', color: isSelected ? '#fff' : '#666' }}></i>
                  </span>
                  <span style={{ flex: 1, lineHeight: '20px' }}>{label}</span>
                  {isSelected && (
                    <i className="fa-solid fa-check" style={{ fontSize: '12px', color: 'var(--theme)', flexShrink: 0 }}></i>
                  )}
                </li>
              )
            })}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  )
}
