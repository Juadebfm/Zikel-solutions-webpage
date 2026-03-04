import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import FadeSection from '../components/ui/FadeSection'
import RevealImage from '../components/ui/RevealImage'

interface ConsultationFormData {
  Full_Name: string
  Organization_Name: string
  Role_or_Position: string
  Email_Address: string
  Phone_Number: string
  Main_Area_Needing_Help: string
  Brief_Description_Of_Your_Organization: string
}

type SubmitStatus = 'idle' | 'loading' | 'success' | 'error'

const FEATURES = [
  'Workflow audit',
  'Staff activity analysis',
  'Documentation and supervision review',
  'AI readiness assessment',
  'Implementation roadmap',
  'Clear next steps for adoption',
]

export default function Consultation() {
  const [status, setStatus] = useState<SubmitStatus>('idle')
  const [statusMessage, setStatusMessage] = useState('')

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ConsultationFormData>()

  const onSubmit = async (data: ConsultationFormData) => {
    setStatus('loading')
    try {
      const response = await fetch('http://localhost/sender/send-email.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...data,
          source: 'Consultation & Organizational Needs Assessment',
        }),
      })
      const result = await response.json()
      if (result.error) {
        setStatus('error')
        setStatusMessage(result.message || 'Something went wrong. Please try again.')
      } else {
        setStatus('success')
        setStatusMessage('Request for Consultation & Organizational Needs Assessment received!')
        reset()
      }
    } catch {
      setStatus('error')
      setStatusMessage('Unable to send request. Please check your connection and try again.')
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
                <h1 className="text-white">Service details</h1>
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
                <li>Consultation &amp; Organizational Needs Assessment</li>
              </ul>
            </FadeSection>
          </div>
        </div>
      </div>

      {/* Service Details */}
      <section className="service-details-section fix section-padding">
        <div className="container">
          <div className="service-details-wrapper">
            <div className="service-top-img fix">
              <RevealImage>
                <img src="/assets/img/home-1/consultation.png" alt="Consultation" />
              </RevealImage>
            </div>
            <div className="row g-4">
              <div className="col-lg-12">
                <FadeSection delay={0.2}>
                  <div className="service-details-content">
                    <h2>Expert Guidance for Implementing AI in Your Organization</h2>
                    <p className="mt-3">
                      This consultation helps you analyze your current operations, identify
                      opportunities for automation, and determine the best AI solution for your
                      organization. We evaluate your workflows, challenges, and objectives to help you
                      adopt the right solution.
                    </p>
                    <h3>FEATURES</h3>
                    <div className="service-list-items">
                      <ul>
                        {FEATURES.map((feature) => (
                          <li key={feature}>
                            <i className="fa-solid fa-circle-check"></i>
                            <strong>{feature}</strong>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </FadeSection>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Consultation Form */}
      <section className="news-details-section mt-0">
        <div className="container">
          <div className="news-details-area">
            <div className="row g-4">
              <div className="col-12 col-lg-12">
                <div className="blog-post-details">
                  <div className="comment-form-wrap">
                    <FadeSection delay={0.2}>
                      <h5 className="pb-3">
                        Ready to get tailored recommendations for your organization?{' '}
                        <em>Fill the form below to Speak to Schedule Session</em>
                      </h5>
                    </FadeSection>

                    <form
                      id="serviceForm"
                      onSubmit={handleSubmit(onSubmit)}
                      noValidate
                    >
                      <div className="row g-4">

                        {/* Full Name */}
                        <div className="col-lg-4">
                          <div className="form-clt">
                            <input
                              type="text"
                              placeholder="Full Name"
                              {...register('Full_Name', { required: 'Full name is required' })}
                              aria-invalid={!!errors.Full_Name}
                            />
                            {errors.Full_Name && (
                              <span className="text-danger small">{errors.Full_Name.message}</span>
                            )}
                          </div>
                        </div>

                        {/* Organization Name */}
                        <div className="col-lg-4">
                          <div className="form-clt">
                            <input
                              type="text"
                              placeholder="Organization Name"
                              {...register('Organization_Name')}
                            />
                          </div>
                        </div>

                        {/* Role / Position */}
                        <div className="col-lg-4">
                          <div className="form-clt">
                            <input
                              type="text"
                              placeholder="Role/Position"
                              {...register('Role_or_Position')}
                            />
                          </div>
                        </div>

                        {/* Email */}
                        <div className="col-lg-4">
                          <div className="form-clt">
                            <input
                              type="email"
                              placeholder="Email Address"
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
                        </div>

                        {/* Phone */}
                        <div className="col-lg-4">
                          <div className="form-clt">
                            <input
                              type="tel"
                              placeholder="Phone Number"
                              {...register('Phone_Number')}
                            />
                          </div>
                        </div>

                        {/* Main area needing help */}
                        <div className="col-lg-4">
                          <div className="form-clt">
                            <input
                              type="text"
                              placeholder="Main areas needing help"
                              {...register('Main_Area_Needing_Help')}
                            />
                          </div>
                        </div>

                        {/* Description */}
                        <div className="col-lg-12">
                          <div className="form-clt">
                            <textarea
                              placeholder="Brief description of your organization"
                              {...register('Brief_Description_Of_Your_Organization')}
                            />
                          </div>
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
                        <div className="col-lg-6">
                          <button
                            type="submit"
                            className="theme-btn"
                            disabled={status === 'loading'}
                          >
                            {status === 'loading' ? (
                              <>Sending… <i className="fa-solid fa-spinner fa-spin"></i></>
                            ) : (
                              <>Start Assessment <i className="fa-solid fa-arrow-up-right"></i></>
                            )}
                          </button>
                        </div>

                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
