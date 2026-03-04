import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useForm, Controller } from 'react-hook-form'
import FadeSection from '../components/ui/FadeSection'
import AnimatedText from '../components/ui/AnimatedText'
import ServiceDropdown from '../components/ui/ServiceDropdown'

interface ContactFormData {
  fullName: string
  email: string
  phoneNumber: string
  serviceOfInterest: string
  message: string
}

type SubmitStatus = 'idle' | 'loading' | 'success' | 'error'

const INFO_CARDS = [
  {
    icon: 'fa-solid fa-phone-xmark',
    title: 'Contact Us',
    body: (
      <p>
        <a className="d-block" href="tel:+2348032819367">Mobile: +234 803 281 9367</a>
        <a href="mailto:contact@zikelsolutions.com">contact@zikelsolutions.com</a>
      </p>
    ),
    delay: 0.3,
  },
]

export default function Contact() {
  const [status, setStatus] = useState<SubmitStatus>('idle')
  const [statusMessage, setStatusMessage] = useState('')

  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm<ContactFormData>()

  const onSubmit = async (data: ContactFormData) => {
    setStatus('loading')
    try {
      const response = await fetch('https://zikel-solutions-be.fly.dev/api/v1/public/contact-us', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...data, source: 'Contact Us Page' }),
      })
      const result = await response.json()
      if (!response.ok || !result.success) {
        setStatus('error')
        setStatusMessage(result.error?.message || 'Something went wrong. Please try again.')
      } else {
        setStatus('success')
        setStatusMessage('Message sent successfully!')
        reset()
      }
    } catch {
      setStatus('error')
      setStatusMessage('Unable to send message. Please check your connection and try again.')
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
              <FadeSection delay={0.3}>
                <h1 className="text-white">Contact us</h1>
              </FadeSection>
            </div>
            <FadeSection delay={0.5}>
              <ul className="breadcrumb-items">
                <li>
                  <Link to="/">
                    <i className="fa-solid fa-house"></i> Home
                  </Link>
                </li>
                <li>/</li>
                <li>Contact us</li>
              </ul>
            </FadeSection>
          </div>
        </div>
      </div>

      {/* Contact Info Cards */}
      <section className="contact-info-section fix section-padding">
        <div className="container">
          <div className="row g-4">
            {INFO_CARDS.map((card) => (
              <div key={card.title} className="col-xl-4 col-lg-6 col-md-6">
                <FadeSection delay={card.delay}>
                  <div className="contact-info-box">
                    <div className="icon">
                      <i className={card.icon}></i>
                    </div>
                    <div className="content">
                      <h4>{card.title}</h4>
                      {card.body}
                    </div>
                  </div>
                </FadeSection>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="section-padding pt-0 fix">
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-10 mx-auto">
              <FadeSection>
                <div style={{ background: '#F5F4EF', borderRadius: '16px', padding: '40px' }}>
                  <AnimatedText text="Send Us A Message." as="h2" />
                  <p style={{ color: 'var(--text)', fontSize: '15px', marginBottom: '28px' }}>
                    Have a question or want to learn more? Fill in the form below and we'll get back to you.
                  </p>

                  <form onSubmit={handleSubmit(onSubmit)} noValidate>
                    <div className="row g-4">

                      <div className="col-lg-6"><div className="form-clt">
                        <input type="text" placeholder="Full Name *"
                          {...register('fullName', { required: 'Full name is required' })} />
                        {errors.fullName && <span className="text-danger small">{errors.fullName.message}</span>}
                      </div></div>

                      <div className="col-lg-6"><div className="form-clt">
                        <input type="email" placeholder="Email Address *"
                          {...register('email', {
                            required: 'Email is required',
                            pattern: { value: /^\S+@\S+\.\S+$/, message: 'Enter a valid email' },
                          })} />
                        {errors.email && <span className="text-danger small">{errors.email.message}</span>}
                      </div></div>

                      <div className="col-lg-6"><div className="form-clt">
                        <input type="tel" placeholder="Phone Number *"
                          {...register('phoneNumber', { required: 'Phone number is required' })} />
                        {errors.phoneNumber && <span className="text-danger small">{errors.phoneNumber.message}</span>}
                      </div></div>

                      <div className="col-lg-6">
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
                              placeholder="Choose a service *"
                            />
                          )}
                        />
                        {errors.serviceOfInterest && <span className="text-danger small">Please select a service</span>}
                      </div>

                      <div className="col-lg-12"><div className="form-clt">
                        <textarea placeholder="Type your message"
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
                            : <>Send Now <i className="fa-solid fa-arrow-up-right"></i></>}
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
