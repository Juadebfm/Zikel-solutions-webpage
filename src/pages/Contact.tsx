import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import FadeSection from '../components/ui/FadeSection'
import AnimatedText from '../components/ui/AnimatedText'

interface ContactFormData {
  Full_Name: string
  Email_Address: string
  Phone_Number: string
  Contact_Service: string
  message: string
}

type SubmitStatus = 'idle' | 'loading' | 'success' | 'error'

const SERVICES = [
  "Digital Filing Cabinet (Children's Homes)",
  'AI-Powered Staff Guidance System',
  'Training & Professional Development Intelligence',
  'Healthcare Workflow Support Software',
  'Corporate AI Staff Support System',
  'Software Customization & Integrations',
  'Consultation & Organizational Needs Assessment',
]

const INFO_CARDS = [
  {
    icon: 'fa-sharp fa-solid fa-location-dot',
    title: 'Our address',
    body: <p>374 William S Canning Blvd, Fall River MA 2721, USA</p>,
    delay: 0.3,
  },
  {
    icon: 'fa-solid fa-phone-xmark',
    title: 'Contact Us',
    body: (
      <p>
        <a className="d-block" href="tel:+2348032819367">Mobile: +234 803 281 9367</a>
        <a href="mailto:contact@zikelsolutions.com">contact@zikelsolutions.com</a>
      </p>
    ),
    delay: 0.5,
  },
  {
    icon: 'fa-regular fa-clock-two-thirty',
    title: 'Open hour',
    body: (
      <>
        <p>Mon - Sat: 9:00 - 6:00</p>
        <p>Sunday: Closed</p>
      </>
    ),
    delay: 0.7,
  },
]

export default function Contact() {
  const [status, setStatus] = useState<SubmitStatus>('idle')
  const [statusMessage, setStatusMessage] = useState('')

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>()

  const onSubmit = async (data: ContactFormData) => {
    setStatus('loading')
    try {
      const response = await fetch('http://localhost/sender/send-email.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...data, source: 'Contact Us Page' }),
      })
      const result = await response.json()
      if (result.error) {
        setStatus('error')
        setStatusMessage(result.message || 'Something went wrong. Please try again.')
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
      <section className="contact-section fix section-padding pt-0">
        <div className="container">
          <div className="contact-wrapper-inner">
            <div className="row g-4">
              <div className="col-lg-10 mx-auto">
                <div className="contact-box-items">
                  <AnimatedText text="Send Us A Message." as="h2" />

                  <form
                    id="serviceForm"
                    className="contact-form-box"
                    onSubmit={handleSubmit(onSubmit)}
                    noValidate
                  >
                    <div className="row g-4 align-items-center">

                      {/* Full Name */}
                      <div className="col-lg-6 col-md-6">
                        <FadeSection delay={0.3}>
                          <div className="form-clt">
                            <input
                              type="text"
                              placeholder="Full name *"
                              {...register('Full_Name', { required: 'Full name is required' })}
                              aria-invalid={!!errors.Full_Name}
                            />
                            {errors.Full_Name && (
                              <span className="text-danger small">{errors.Full_Name.message}</span>
                            )}
                          </div>
                        </FadeSection>
                      </div>

                      {/* Email */}
                      <div className="col-lg-6 col-md-6">
                        <FadeSection delay={0.5}>
                          <div className="form-clt">
                            <input
                              type="email"
                              placeholder="Email address *"
                              {...register('Email_Address', {
                                required: 'Email is required',
                                pattern: { value: /^\S+@\S+\.\S+$/, message: 'Enter a valid email' },
                              })}
                              aria-invalid={!!errors.Email_Address}
                            />
                            {errors.Email_Address && (
                              <span className="text-danger small">{errors.Email_Address.message}</span>
                            )}
                          </div>
                        </FadeSection>
                      </div>

                      {/* Phone */}
                      <div className="col-lg-6 col-md-6">
                        <FadeSection delay={0.3}>
                          <div className="form-clt">
                            <input
                              type="tel"
                              placeholder="Phone number *"
                              {...register('Phone_Number', { required: 'Phone number is required' })}
                              aria-invalid={!!errors.Phone_Number}
                            />
                            {errors.Phone_Number && (
                              <span className="text-danger small">{errors.Phone_Number.message}</span>
                            )}
                          </div>
                        </FadeSection>
                      </div>

                      {/* Service Select */}
                      <div className="col-lg-6 col-md-6">
                        <FadeSection delay={0.5}>
                          <div className="form-clt">
                            <select className="w-100" {...register('Contact_Service')}>
                              <option value="">Choose a service</option>
                              {SERVICES.map((s) => (
                                <option key={s} value={s}>{s}</option>
                              ))}
                            </select>
                          </div>
                        </FadeSection>
                      </div>

                      {/* Message */}
                      <div className="col-lg-12">
                        <FadeSection delay={0.3}>
                          <div className="form-clt">
                            <textarea
                              placeholder="Type your message"
                              {...register('message')}
                            />
                          </div>
                        </FadeSection>
                      </div>

                      {/* Status feedback */}
                      {status === 'success' && (
                        <div className="col-lg-12">
                          <div className="alert alert-success" role="alert">
                            <i className="fa-solid fa-circle-check me-2"></i>
                            {statusMessage}
                          </div>
                        </div>
                      )}
                      {status === 'error' && (
                        <div className="col-lg-12">
                          <div className="alert alert-danger" role="alert">
                            <i className="fa-solid fa-circle-xmark me-2"></i>
                            {statusMessage}
                          </div>
                        </div>
                      )}

                      {/* Submit */}
                      <div className="col-lg-12">
                        <FadeSection delay={0.5}>
                          <button
                            type="submit"
                            className="theme-btn"
                            disabled={status === 'loading'}
                          >
                            {status === 'loading' ? (
                              <>Sending… <i className="fa-solid fa-spinner fa-spin"></i></>
                            ) : (
                              <>Send now <i className="fa-solid fa-arrow-up-right"></i></>
                            )}
                          </button>
                        </FadeSection>
                      </div>

                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
