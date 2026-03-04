import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'  // still needed for backdrop + card animations
import { useForm, Controller } from 'react-hook-form'
import { submitWaitlist, type SubmitStatus } from '../../utils/submitServiceForm'
import ServiceDropdown from './ServiceDropdown'

interface FormData {
  fullName: string
  email: string
  organisation: string
  serviceOfInterest: string
}

interface Props {
  open: boolean
  onClose: () => void
}

export default function WaitlistModal({ open, onClose }: Props) {
  const [status, setStatus] = useState<SubmitStatus>('idle')
  const [statusMessage, setStatusMessage] = useState('')
  const { register, handleSubmit, reset, control, formState: { errors } } = useForm<FormData>()

  // Body scroll lock
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  // Reset form when modal closes
  useEffect(() => {
    if (!open) {
      setTimeout(() => { reset(); setStatus('idle'); setStatusMessage('') }, 300)
    }
  }, [open, reset])

  const onSubmit = async (data: FormData) => {
    setStatus('loading')
    try {
      const result = await submitWaitlist({ ...data, source: 'Waitlist' })
      if (result.ok) {
        setStatus('success')
        setStatusMessage("You're on the list! We'll be in touch when we launch.")
      } else {
        setStatus('error')
        setStatusMessage(result.message)
      }
    } catch {
      setStatus('error')
      setStatusMessage('Unable to submit. Please email us at hello@zikel.com')
    }
  }

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            style={{
              position: 'fixed',
              inset: 0,
              background: 'rgba(0, 0, 0, 0.65)',
              zIndex: 10000,
            }}
          />

          {/* Centering container */}
          <div style={{
            position: 'fixed',
            inset: 0,
            zIndex: 10001,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '16px',
            pointerEvents: 'none',
          }}>
            {/* Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              style={{
                width: '100%',
                maxWidth: '520px',
                pointerEvents: 'auto',
              }}
            >
              <div style={{
                background: '#fff',
                borderRadius: '16px',
                boxShadow: '0 24px 64px rgba(0,0,0,0.18)',
              }}>
                {/* Orange top accent */}
                <div style={{ height: '4px', background: 'var(--theme)', borderRadius: '16px 16px 0 0' }} />

                <div style={{ padding: '36px 40px 40px' }}>
                  {/* Header row */}
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px' }}>
                    <div>
                      <h4 style={{ margin: 0, color: 'var(--header)', fontWeight: 700 }}>Join Our Waitlist</h4>
                      <p style={{ margin: '6px 0 0', color: 'var(--text)', fontSize: '15px' }}>
                        Be first to know when we launch.
                      </p>
                    </div>
                    <button
                      onClick={onClose}
                      aria-label="Close"
                      style={{
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        fontSize: '20px',
                        color: 'var(--text)',
                        lineHeight: 1,
                        padding: '4px',
                        marginLeft: '16px',
                        flexShrink: 0,
                      }}
                    >
                      <i className="fa-solid fa-xmark"></i>
                    </button>
                  </div>

                  {/* Divider */}
                  <div style={{ height: '1px', background: '#e8e8e8', margin: '20px 0 24px' }} />

                  {status === 'success' ? (
                    <div style={{ textAlign: 'center', padding: '16px 0 8px' }}>
                      <div style={{
                        width: '64px',
                        height: '64px',
                        borderRadius: '50%',
                        background: '#eef7ee',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        margin: '0 auto 20px',
                      }}>
                        <i className="fa-solid fa-circle-check" style={{ fontSize: '28px', color: '#2e7d32' }}></i>
                      </div>
                      <h5 style={{ color: 'var(--header)', marginBottom: '10px' }}>You're on the list!</h5>
                      <p style={{ color: 'var(--text)', lineHeight: '26px', fontSize: '15px', margin: '0 0 24px' }}>
                        {statusMessage}
                      </p>
                      <button onClick={onClose} className="theme-btn" style={{ fontSize: '14px', padding: '10px 28px' }}>
                        Close <i className="fa-solid fa-xmark"></i>
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit(onSubmit)} noValidate>
                      <div className="row g-3">

                        <div className="col-12"><div className="form-clt">
                          <input
                            type="text"
                            placeholder="Full Name *"
                            {...register('fullName', { required: true })}
                          />
                          {errors.fullName && <span className="text-danger small">Required</span>}
                        </div></div>

                        <div className="col-12"><div className="form-clt">
                          <input
                            type="email"
                            placeholder="Email Address *"
                            {...register('email', { required: true, pattern: /^\S+@\S+\.\S+$/ })}
                          />
                          {errors.email && <span className="text-danger small">Valid email required</span>}
                        </div></div>

                        <div className="col-12"><div className="form-clt">
                          <input
                            type="text"
                            placeholder="Organisation / Company"
                            {...register('organisation')}
                          />
                        </div></div>

                        <div className="col-12">
                          <Controller
                            name="serviceOfInterest"
                            control={control}
                            rules={{ required: true }}
                            defaultValue=""
                            render={({ field }) => (
                              <ServiceDropdown
                                value={field.value}
                                onChange={field.onChange}
                                error={!!errors.serviceOfInterest}
                              />
                            )}
                          />
                          {errors.serviceOfInterest && (
                            <span className="text-danger small">Please select a service</span>
                          )}
                        </div>

                        {status === 'error' && (
                          <div className="col-12">
                            <div className="alert alert-danger" style={{ fontSize: '14px', padding: '10px 14px' }}>
                              <i className="fa-solid fa-circle-xmark me-2"></i>{statusMessage}
                            </div>
                          </div>
                        )}

                        <div className="col-12" style={{ marginTop: '20px' }}>
                          <button type="submit" className="theme-btn" disabled={status === 'loading'} style={{ width: '100%', justifyContent: 'center' }}>
                            {status === 'loading'
                              ? <><span>Joining…</span> <i className="fa-solid fa-spinner fa-spin"></i></>
                              : <><span>Join Waitlist</span> <i className="fa-solid fa-arrow-up-right"></i></>}
                          </button>
                        </div>

                      </div>
                    </form>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  )
}
