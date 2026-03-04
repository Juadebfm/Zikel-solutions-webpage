import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useForm, Controller } from 'react-hook-form'
import FadeSection from '../components/ui/FadeSection'
import ServiceDropdown from '../components/ui/ServiceDropdown'
import { submitBookDemo, type SubmitStatus } from '../utils/submitServiceForm'

interface FormData {
  fullName: string
  organisationName: string
  rolePosition: string
  email: string
  phoneNumber: string
  serviceOfInterest: string
  numberOfStaffChildren: string
  keyChallenges: string
  message: string
}

export default function BookDemo() {
  const [status, setStatus] = useState<SubmitStatus>('idle')
  const [statusMessage, setStatusMessage] = useState('')
  const { register, handleSubmit, reset, control, formState: { errors } } = useForm<FormData>()

  const onSubmit = async (data: FormData) => {
    setStatus('loading')
    try {
      const result = await submitBookDemo({ ...data, source: 'Book a Demo Request' })
      if (result.ok) {
        setStatus('success')
        setStatusMessage("Thank you! We'll be in touch within 1 business day to confirm your demo.")
        reset()
      } else {
        setStatus('error')
        setStatusMessage(result.message)
      }
    } catch {
      setStatus('error')
      setStatusMessage('Unable to send your request. Please try again or email us at contact@zikelsolutions.com')
    }
  }

  return (
    <>
      {/* Breadcrumb */}
      <div
        className="breadcrumb-wrapper bg-cover"
        style={{ backgroundImage: "url('/assets/img/breadcrumb.jpg')" }}
      >
        <div className="container">
          <div className="page-heading">
            <div className="breadcrumb-sub-title">
              <FadeSection delay={0.3}><h1 className="text-white">Book a Demo</h1></FadeSection>
            </div>
            <FadeSection delay={0.5}>
              <ul className="breadcrumb-items">
                <li><Link to="/"><i className="fa-solid fa-house"></i> Home</Link></li>
                <li>/</li>
                <li>Book a Demo</li>
              </ul>
            </FadeSection>
          </div>
        </div>
      </div>

      {/* Content */}
      <section className="section-padding fix bg-white">
        <div className="container">
          <div className="row g-5 align-items-start">

            {/* Left — info panel */}
            <div className="col-lg-4">
              <FadeSection>
                <h2 style={{ marginBottom: '16px' }}>See Zikel in Action</h2>
                <p style={{ color: 'var(--text)', lineHeight: '28px', marginBottom: '32px' }}>
                  Book a personalised demo and see exactly how our platform can work for your
                  organisation. Whether you run a children's home, a healthcare facility, or a
                  corporate team — we'll walk you through the features most relevant to you.
                </p>

                <h6 style={{ color: 'var(--header)', fontWeight: 700, marginBottom: '16px' }}>What to expect:</h6>
                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 32px 0' }}>
                  {[
                    '30–45 minute live walkthrough',
                    'Tailored to your sector and team size',
                    'Q&A with our product team',
                    'No obligation — just clarity',
                  ].map((item) => (
                    <li key={item} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start', marginBottom: '12px' }}>
                      <i className="fa-solid fa-circle-check" style={{ color: 'var(--theme)', marginTop: '4px', flexShrink: 0 }}></i>
                      <span style={{ color: 'var(--text)', lineHeight: '24px' }}>{item}</span>
                    </li>
                  ))}
                </ul>

                <div style={{
                  background: '#F5F4EF',
                  borderRadius: '12px',
                  padding: '24px',
                  borderLeft: '4px solid var(--theme)',
                }}>
                  <p style={{ margin: 0, fontSize: '14px', color: 'var(--text)', lineHeight: '22px' }}>
                    <strong style={{ display: 'block', marginBottom: '6px', color: 'var(--header)' }}>Prefer to talk first?</strong>
                    Email us at{' '}
                    <a href="mailto:contact@zikelsolutions.com" style={{ color: 'var(--theme)' }}>contact@zikelsolutions.com</a>
                    {' '}or call <a href="tel:+2348032819367" style={{ color: 'var(--theme)' }}>+234 803 281 9367</a>
                    <br />Mon–Fri, 09:00 AM – 06:00 PM
                  </p>
                </div>
              </FadeSection>
            </div>

            {/* Right — form */}
            <div className="col-lg-8">
              <FadeSection delay={0.2}>
                <div style={{ background: '#F5F4EF', borderRadius: '16px', padding: '40px' }}>
                  <h4 style={{ marginBottom: '8px' }}>Request Your Demo</h4>
                  <p style={{ color: 'var(--text)', fontSize: '15px', marginBottom: '28px' }}>
                    Fill in the details below and we'll confirm a time that works for you.
                  </p>

                  <form onSubmit={handleSubmit(onSubmit)} noValidate>
                    <div className="row g-4">

                      <div className="col-lg-6"><div className="form-clt">
                        <input type="text" placeholder="Full Name *"
                          {...register('fullName', { required: true })} />
                        {errors.fullName && <span className="text-danger small">Required</span>}
                      </div></div>

                      <div className="col-lg-6"><div className="form-clt">
                        <input type="text" placeholder="Organisation Name"
                          {...register('organisationName')} />
                      </div></div>

                      <div className="col-lg-6"><div className="form-clt">
                        <input type="text" placeholder="Your Role / Position"
                          {...register('rolePosition')} />
                      </div></div>

                      <div className="col-lg-6"><div className="form-clt">
                        <input type="email" placeholder="Email Address *"
                          {...register('email', { required: true, pattern: /^\S+@\S+\.\S+$/ })} />
                        {errors.email && <span className="text-danger small">Valid email required</span>}
                      </div></div>

                      <div className="col-lg-6"><div className="form-clt">
                        <input type="tel" placeholder="Phone Number"
                          {...register('phoneNumber')} />
                      </div></div>

                      <div className="col-lg-6"><div className="form-clt">
                        <input type="text" placeholder="Number of Staff / Children in Care"
                          {...register('numberOfStaffChildren')} />
                      </div></div>

                      <div className="col-lg-12">
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
                              placeholder="Select the service you're interested in *"
                            />
                          )}
                        />
                        {errors.serviceOfInterest && <span className="text-danger small">Please select a service</span>}
                      </div>

                      <div className="col-lg-12"><div className="form-clt">
                        <textarea placeholder="Briefly describe your key challenges or what you're hoping to solve"
                          {...register('keyChallenges')} />
                      </div></div>

                      <div className="col-lg-12"><div className="form-clt">
                        <textarea placeholder="Anything else you'd like us to know? (optional)"
                          {...register('message')} />
                      </div></div>

                      {status === 'success' && (
                        <div className="col-12">
                          <div className="alert alert-success">
                            <i className="fa-solid fa-circle-check me-2"></i>{statusMessage}
                          </div>
                        </div>
                      )}
                      {status === 'error' && (
                        <div className="col-12">
                          <div className="alert alert-danger">
                            <i className="fa-solid fa-circle-xmark me-2"></i>{statusMessage}
                          </div>
                        </div>
                      )}

                      <div className="col-12">
                        <button type="submit" className="theme-btn" disabled={status === 'loading'}>
                          {status === 'loading'
                            ? <>Sending… <i className="fa-solid fa-spinner fa-spin"></i></>
                            : <>Book My Demo <i className="fa-solid fa-arrow-up-right"></i></>}
                        </button>
                      </div>

                    </div>
                  </form>
                </div>
              </FadeSection>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}
