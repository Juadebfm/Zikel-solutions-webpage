import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import FadeSection from './FadeSection'
import RevealImage from './RevealImage'

interface Feature {
  label: string
  desc?: string
}

interface StepBox {
  step: string
  text: string
}

interface ServiceDetailLayoutProps {
  breadcrumbLabel: string
  image: string
  imageAlt: string
  heading: string
  intro: ReactNode
  featuresSectionTitle?: string
  features: Feature[]
  benefits?: string[]
  howItWorks?: StepBox[]
  useCases?: StepBox[]
}

export default function ServiceDetailLayout({
  breadcrumbLabel,
  image,
  imageAlt,
  heading,
  intro,
  featuresSectionTitle = 'KEY FEATURES',
  features,
  benefits,
  howItWorks,
  useCases,
}: ServiceDetailLayoutProps) {
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
                <h1 className="text-white">Service Details</h1>
              </FadeSection>
            </div>
            <FadeSection delay={0.5}>
              <ul className="breadcrumb-items">
                <li><Link to="/"><i className="fa-solid fa-house"></i> Home</Link></li>
                <li>/</li>
                <li><Link to="/services">Services</Link></li>
                <li>/</li>
                <li>{breadcrumbLabel}</li>
              </ul>
            </FadeSection>
          </div>
        </div>
      </div>

      {/* ── HERO: Image left + Heading/Intro right ── */}
      <section className="section-padding fix bg-white">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-5">
              <RevealImage>
                <img
                  src={image}
                  alt={imageAlt}
                  style={{ width: '100%', borderRadius: '12px', objectFit: 'cover' }}
                />
              </RevealImage>
            </div>
            <div className="col-lg-7">
              <FadeSection delay={0.2}>
                <h2 style={{ marginBottom: '20px' }}>{heading}</h2>
                <div style={{ color: 'var(--text)', lineHeight: '28px' }}>{intro}</div>
                <div style={{ marginTop: '32px' }}>
                  <Link to="/book-demo" className="theme-btn">
                    Book a Demo <i className="fa-solid fa-arrow-up-right"></i>
                  </Link>
                </div>
              </FadeSection>
            </div>
          </div>
        </div>
      </section>

      {/* ── FEATURES: light grey bg, 2-col checklist ── */}
      <section className="fix section-padding" style={{ backgroundColor: '#F5F4EF' }}>
        <div className="container">
          <FadeSection>
            <h3 style={{ marginBottom: '32px', textTransform: 'uppercase', letterSpacing: '1px', fontSize: '14px', color: 'var(--theme)', fontWeight: 700 }}>
              {featuresSectionTitle}
            </h3>
          </FadeSection>
          <div className="row g-4">
            {features.map((f, i) => (
              <div key={f.label} className="col-lg-6">
                <FadeSection delay={0.05 * (i % 4)}>
                  <div style={{
                    background: '#fff',
                    borderRadius: '10px',
                    padding: '24px',
                    height: '100%',
                    borderLeft: '4px solid var(--theme)',
                  }}>
                    <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                      <i className="fa-solid fa-circle-check" style={{ color: 'var(--theme)', marginTop: '3px', flexShrink: 0 }}></i>
                      <div>
                        <strong style={{ display: 'block', marginBottom: f.desc ? '6px' : 0, color: 'var(--header)' }}>{f.label}</strong>
                        {f.desc && <p style={{ margin: 0, fontSize: '15px', color: 'var(--text)', lineHeight: '24px' }}>{f.desc}</p>}
                      </div>
                    </div>
                  </div>
                </FadeSection>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BENEFITS + HOW IT WORKS side-by-side (if both exist) ── */}
      {(benefits?.length || howItWorks?.length) && (
        <section className="fix section-padding bg-white">
          <div className="container">
            <div className="row g-5">
              {benefits && benefits.length > 0 && (
                <div className={howItWorks?.length ? 'col-lg-6' : 'col-lg-12'}>
                  <FadeSection>
                    <h3 style={{ marginBottom: '24px', textTransform: 'uppercase', letterSpacing: '1px', fontSize: '14px', color: 'var(--theme)', fontWeight: 700 }}>
                      BENEFITS
                    </h3>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                      {benefits.map((b) => (
                        <li key={b} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start', marginBottom: '14px' }}>
                          <i className="fa-solid fa-chevron-right" style={{ color: 'var(--theme)', marginTop: '4px', flexShrink: 0, fontSize: '12px' }}></i>
                          <span style={{ color: 'var(--text)', lineHeight: '24px' }}>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </FadeSection>
                </div>
              )}

              {howItWorks && howItWorks.length > 0 && (
                <div className={benefits?.length ? 'col-lg-6' : 'col-lg-12'}>
                  <FadeSection delay={0.1}>
                    <h3 style={{ marginBottom: '24px', textTransform: 'uppercase', letterSpacing: '1px', fontSize: '14px', color: 'var(--theme)', fontWeight: 700 }}>
                      HOW IT WORKS
                    </h3>
                    <ol style={{ listStyle: 'none', padding: 0, margin: 0, counterReset: 'steps' }}>
                      {howItWorks.map((item, i) => (
                        <li key={item.step} style={{ display: 'flex', gap: '16px', alignItems: 'flex-start', marginBottom: '16px' }}>
                          <span style={{
                            minWidth: '36px',
                            height: '36px',
                            borderRadius: '50%',
                            background: 'var(--theme)',
                            color: '#fff',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontWeight: 700,
                            fontSize: '13px',
                            flexShrink: 0,
                          }}>
                            {String(i + 1).padStart(2, '0')}
                          </span>
                          <span style={{ color: 'var(--text)', lineHeight: '24px', paddingTop: '6px' }}>{item.text}</span>
                        </li>
                      ))}
                    </ol>
                  </FadeSection>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* ── USE CASES ── */}
      {useCases && useCases.length > 0 && (
        <section className="fix section-padding" style={{ backgroundColor: '#0B0D17' }}>
          <div className="container">
            <FadeSection>
              <h3 style={{ marginBottom: '32px', textTransform: 'uppercase', letterSpacing: '1px', fontSize: '14px', color: 'var(--theme)', fontWeight: 700 }}>
                WHO IS THIS FOR?
              </h3>
            </FadeSection>
            <div className="row g-4">
              {useCases.map((item, i) => (
                <div key={item.step} className="col-lg-3 col-md-6">
                  <FadeSection delay={i * 0.1}>
                    <div style={{
                      border: '1px solid rgba(255,255,255,0.12)',
                      borderRadius: '10px',
                      padding: '28px 24px',
                      height: '100%',
                    }}>
                      <span style={{ display: 'block', fontSize: '28px', fontWeight: 700, color: 'var(--theme)', marginBottom: '12px' }}>
                        {item.step}
                      </span>
                      <p style={{ color: 'rgba(255,255,255,0.75)', margin: 0, lineHeight: '24px', fontSize: '15px' }}>{item.text}</p>
                    </div>
                  </FadeSection>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

    </>
  )
}
