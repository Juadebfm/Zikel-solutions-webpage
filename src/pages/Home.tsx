import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import type { Swiper as SwiperType } from 'swiper'
import FadeSection from '../components/ui/FadeSection'
import AnimatedText from '../components/ui/AnimatedText'
import RevealImage from '../components/ui/RevealImage'
import { FAQ_ITEMS } from '../constants/faqItems'
import { APP_REGISTER_URL } from '../constants/links'


const INDUSTRIES = [
    {
    icon: '/assets/img/home-1/icon/02.svg',
    title: 'Care Groups & Home Leaders',
    items: [
      'Multi-home oversight across Tasks and Daily Logs',
      'Role-aware approvals, comments, and ownership tracking',
      'Evidence-linked reporting for Reg 44 / Reg 45 readiness',
    ],
  },
  {
    icon: '/assets/img/home-1/icon/03.svg',
    title: 'Healthcare',
    items: [
      'AI-driven staff support',
      'Documentation accuracy prompts',
      'Performance monitoring & capacity building',
    ],
  },
  {
    icon: '/assets/img/home-1/icon/01.svg',
    title: "Children's Homes & Social Care",
    items: [
      'Staff guidance engine',
      'Training recommendations',
      'Safeguarding alerts & compliance support',
    ],
  },
  {
    icon: '/assets/img/home-1/icon/04.svg',
    title: 'Corporate Organisations & SMEs',
    items: [
      'Consulting, corporate strategy & business transformation',
      'Corporate management, governance & compliance systems',
      'Tax consultancy, advisory & audit support',
    ],
  },
  {
    icon: '/assets/img/home-1/icon/03.svg',
    title: 'Executives & Boards',
    items: [
      'Executive selection, recruitment & onboarding',
      'Supervision, KPI tracking & performance monitoring',
      'Strategic planning & board-ready reporting',
    ],
  },
]

// const TESTIMONIALS = [
//   {
//     quote:
//       '"We partnered with this team to modernize our patient management and clinical documentation systems. The improvement has been remarkable. Administrative workload reduced significantly, and our staff now completes tasks faster with fewer errors. Their understanding of healthcare workflows is outstanding, and their support has been consistently reliable."',
//     name: 'Amara Okoye, Chief Medical Administrator',
//     org: 'Reliance General Hospital',
//   },
//   {
//     quote:
//       '"We needed a custom telemedicine platform built with strong security and compliance standards. Not only did they deliver exactly what we envisioned, but they also ensured the system met all HIPAA and NDPR guidelines. Our patients love the convenience, and our clinicians appreciate the intuitive interface."',
//     name: 'Dr. Samuel Adeyemi, Founder',
//     org: 'MedLink Care Clinic',
//   },
//   {
//     quote:
//       '"As a startup, we required a development partner who could help us build a scalable AI-driven diagnostics tool. Their team exceeded every expectation: clear communication, deep technical knowledge, and a strategic approach to product design. Thanks to them, we launched on schedule and with immense confidence."',
//     name: 'Jane Roberts',
//     org: 'CEO, VitalCheck AI',
//   },
// ]

// const DIFFERENCE_ITEMS = [
//   {
//     title: 'Purpose-Built for Real-World Challenges',
//     body: "We understand the daily pressures faced by children's homes, healthcare institutions, and corporate teams. Our solutions address real operational gaps, not theoretical ones.",
//   },
//   {
//     title: 'AI With Integrity',
//     body: 'Our AI empowers staff. It does not replace human judgment. It highlights training gaps, supervision needs, and workflow inconsistencies, supporting staff growth.',
//   },
//   {
//     title: 'User-Centered Design',
//     body: 'Every feature is built to be intuitive, secure, and accessible to teams at all levels.',
//   },
//   {
//     title: 'Scalable Technology',
//     body: 'From small teams to enterprise organizations, our systems are built to grow with your needs.',
//   },
// ]

const DIFFERENCE_ITEMS = [
  { title: 'Practical, Results-Driven Advice',
    body: 'We focus on recommendations you can act on. Every engagement is shaped around your goals, constraints, and context, not a generic template.' },
  { title: 'Integrity and Confidentiality',
    body: 'We handle sensitive matters, from executive searches to governance and tax questions, with discretion and professionalism.' },
  { title: 'Experience Across Sectors',
    body: 'We support corporate organisations, SMEs, care providers, and healthcare institutions, bringing lessons from one sector to the next.' },
  { title: 'End-to-End Support',
    body: 'From diagnosis and strategy through to implementation and follow-up, one team stays with you.' },
]

export default function Home() {
  const [diffOpen, setDiffOpen] = useState<number | null>(0)
  const [faqOpen, setFaqOpen] = useState<number | null>(0)
  const [showScrollCue, setShowScrollCue] = useState(true)
  const serviceSwiperRef = useRef<SwiperType | null>(null)
  // const testimonialSwiperRef = useRef<SwiperType | null>(null)

  const toggleDiff = (i: number) => setDiffOpen(diffOpen === i ? null : i)
  const toggleFaq = (i: number) => setFaqOpen(faqOpen === i ? null : i)

  useEffect(() => {
    const updateScrollCueVisibility = () => {
      setShowScrollCue(window.scrollY < 40)
    }

    updateScrollCueVisibility()
    window.addEventListener('scroll', updateScrollCueVisibility, { passive: true })

    return () => {
      window.removeEventListener('scroll', updateScrollCueVisibility)
    }
  }, [])

  const handleScrollCueClick = () => {
    const nextSection = document.getElementById('home-about')

    if (!nextSection) {
      return
    }

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    nextSection.scrollIntoView({
      behavior: prefersReducedMotion ? 'auto' : 'smooth',
      block: 'start',
    })
  }

  return (
    <>
    <main>
      {/* Hero Section */}
      <section
        className="hero-section hero-1 fix bg-cover"
        style={{ backgroundImage: 'url(/assets/img/home-1/hero/hero-bg.jpg)' }}
      >
        <div className="container custom-container">
          <div className="row g-4">
            <div className="col-lg-6">
              <div className="hero-content">
                <h1>
                  Expert Advisory, Management and Technology for Organisations That Need to Perform.
                  {/* Intelligent Guidance for Smarter, More Accountable Teams. */}
                </h1>
                <p>
                  {/* AI-enabled software for children's homes, healthcare institutions, and corporate
                  teams, built to strengthen accountability, staff performance, and care standards. */}
                  Consulting, corporate strategy, governance, and recruitment supported by 
                  purpose-built software for children's homes, healthcare providers, and corporate teams.

                </p>
                <div className="hero-btn">
                  <a href={APP_REGISTER_URL} className="theme-btn">
                    Get Started <i className="fa-solid fa-arrow-up-right"></i>
                  </a>
                  <Link to="/services" className="theme-btn style-2">
                    Explore Our Services <i className="fa-solid fa-arrow-up-right"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="hero-image">
                <img src="/assets/img/home-1/corporate-strategy.png" alt="Zikel Solutions" />
              </div>
            </div>
          </div>
        </div>
        {showScrollCue && (
          <button
            type="button"
            className="hero-scroll-cue"
            onClick={handleScrollCueClick}
            aria-label="Scroll to the next section"
          >
            <span className="hero-scroll-cue__mouse" aria-hidden="true">
              <span className="hero-scroll-cue__wheel" />
            </span>
            <span className="hero-scroll-cue__text">Scroll</span>
          </button>
        )}
      </section>


      {/* About Section */}
      <section id="home-about" className="about-section section-padding fix">
        <div className="container">
          <div className="section-title">
            <FadeSection>
              <span className="sub-title mb-0">
                <img src="/assets/img/home-1/hero/setting.png" alt="" />
                WHO WE ARE
              </span>
            </FadeSection>
            <FadeSection delay={0.15}>
              <h2>Practical Expertise. <br />Built Around Your Organisation.</h2>
            </FadeSection>
          </div>
          <div className="about-wrapper">
            <div className="row g-4">
              <div className="col-lg-5">
                <div className="about-image">
                  <RevealImage>
                    <img src="/assets/img/home-1/who-we-are.png" alt="About Zikel Solutions" />
                  </RevealImage>
                </div>
              </div>
              <div className="col-lg-7">
                <div className="about-content">
                  <div className="about-item">
                    <div className="about-count-spacer" aria-hidden="true" />
                    <div className="content-box">
                      <FadeSection delay={0.2}>
                        <p>
                          {/* We design purpose-driven software solutions that help organizations work
                          smarter, faster, and more efficiently. Our journey began with a digital
                          filing cabinet built specifically for children's homes, simplifying
                          record-keeping, compliance, and child safeguarding processes. */}
                          We help organisations work smarter, stay compliant, and grow with confidence. Our team
  delivers consulting, corporate strategy, management support, executive recruitment, and tax
  advisory, shaped around your goals rather than a generic template.
                        </p>
                      </FadeSection>
                      <FadeSection delay={0.3}>
                        <p>
                          Alongside our advisory work, we build purpose-driven software for the care and healthcare
  sectors. It began with a digital filing cabinet for children's homes, and it now supports
  staff guidance, training, and compliance.

                        </p>
                        <Link to="/about" className="theme-btn">
                          Know more us <i className="fa-solid fa-arrow-up-right"></i>
                        </Link>
                      </FadeSection>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="service-section section-padding fix">
        <div className="container">
          <div className="section-title-area">
            <div className="section-title">
              <FadeSection>
                <span className="sub-title style-3">
                  <img src="/assets/img/home-1/hero/setting.png" alt="" />
                  Service Industries
                </span>
              </FadeSection>
              <FadeSection delay={0.1}><h2>Industries We Serve</h2></FadeSection>
            </div>
            <FadeSection delay={0.5}>
              <div className="array-button">
                <button className="array-prev" onClick={() => serviceSwiperRef.current?.slidePrev()}>
                  <i className="fa-solid fa-chevron-left"></i>
                </button>
                <button className="array-next" onClick={() => serviceSwiperRef.current?.slideNext()}>
                  <i className="fa-solid fa-chevron-right"></i>
                </button>
              </div>
            </FadeSection>
          </div>
        </div>
        <Swiper
          className="service-slider"
          modules={[Autoplay, Pagination]}
          slidesPerView={1}
          spaceBetween={30}
          speed={1300}
          loop={true}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          pagination={{ el: '.service-dot', clickable: true }}
          onSwiper={(swiper) => { serviceSwiperRef.current = swiper }}
          breakpoints={{
            575: { slidesPerView: 1 },
            767: { slidesPerView: 2 },
            991: { slidesPerView: 3 },
            1199: { slidesPerView: 4 },
            1399: { slidesPerView: 5 },
          }}
        >
          {[...INDUSTRIES, ...INDUSTRIES].map((ind, i) => (
            <SwiperSlide key={i}>
              <div className="service-box-item">
                <div className="icon">
                  <img src={ind.icon} alt="" />
                </div>
                <div className="content">
                  <h3><Link to="/services">{ind.title}</Link></h3>
                  <ul className="text-start" style={{ listStyleType: 'decimal', marginLeft: '20px' }}>
                    {ind.items.map((item, j) => (
                      <li key={j} className="ps-3">{item}</li>
                    ))}
                  </ul>
                  <Link to="/services" className="theme-btn">
                    Learn more <i className="fa-solid fa-arrow-up-right"></i>
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="swiper-dot">
          <div className="service-dot"></div>
        </div>
      </section>

      {/* How Our AI Works */}
      <section className="feature-section-3 section-padding fix">
        <div className="container">
          <div className="section-title-area">
            <div className="section-title mb-0">
              <FadeSection>
                <span className="sub-title">
                  <img src="/assets/img/home-1/hero/setting.png" alt="" />
                  Our Approach
                </span>
              </FadeSection>
              <FadeSection delay={0.1}><h2>How We Work</h2></FadeSection>
            </div>
            <FadeSection delay={0.2}>
              <p>
                Every engagement follows a clear, structured process so you always know where you stand.
              </p>
            </FadeSection>
          </div>
          <div className="row">
            <div className="col-lg-12 col-md-12">
              <FadeSection delay={0.3}>
                <div className="feature-card-items-3">
                  <div className="icon">
                    <img src="/assets/img/home-3/icon/02.svg" alt="" />
                  </div>
                  <div className="content">
                    <ul className="text-start content" style={{ listStyleType: 'decimal', marginLeft: 20, marginBottom: 20 }}>
                      <li className="ps-3"><strong>Understand:</strong> we learn your organisation, goals, and constraints</li>
                      <li className="ps-3"><strong>Diagnose:</strong> we assess the current state and identify gaps and risks</li>
                      <li className="ps-3"><strong>Design:</strong> we build a customised plan with clear priorities and KPIs</li>
                      <li className="ps-3"><strong>Implement:</strong> we support adoption and execution alongside your team</li>
                      <li className="ps-3"><strong>Measure:</strong> we track results and refine the approach over time</li>
                    </ul>

                    <p>
                      Practical advice, delivered with discipline. <br />
                      <strong>Strategy and management support that your team can act on.</strong>
                    </p>
                  </div>
                </div>
              </FadeSection>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      {/* <section className="testimonial-section section-padding fix">
        <div className="array-button">
          <button className="array-prev" onClick={() => testimonialSwiperRef.current?.slidePrev()}>
            <i className="fa-solid fa-chevron-left"></i>
          </button>
          <button className="array-next" onClick={() => testimonialSwiperRef.current?.slideNext()}>
            <i className="fa-solid fa-chevron-right"></i>
          </button>
        </div>
        <div className="container">
          <div className="section-title text-center">
            <FadeSection>
              <span className="sub-title">
                <img src="/assets/img/home-1/hero/setting.png" alt="" />
                CLIENT TESTIMONIALS
              </span>
            </FadeSection>
            <FadeSection delay={0.2}>
              <h2>
                Client Experiences Inspire <br />
                Business Trust.
              </h2>
            </FadeSection>
          </div>
          <Swiper
            className="testimonial-slider"
            modules={[Autoplay, Pagination]}
            spaceBetween={30}
            speed={1300}
            loop={true}
            autoplay={{ delay: 2000, disableOnInteraction: false }}
            pagination={{ el: '.home-testimonial-dot', clickable: true }}
            onSwiper={(swiper) => { testimonialSwiperRef.current = swiper }}
            breakpoints={{
              991: { slidesPerView: 2 },
            }}
          >
            {[...TESTIMONIALS, ...TESTIMONIALS].map((t, i) => (
              <SwiperSlide key={i}>
                <div className="testimonial-box-item">
                  <p>{t.quote}</p>
                  <div className="client-info-item">
                    <div className="info-item">
                      <div className="content">
                        <h4>{t.name}</h4>
                        <span>{t.org}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="swiper-dot">
            <div className="home-testimonial-dot"></div>
          </div>
        </div>
      </section> */}

      {/* What Makes Us Different */}
      <section className="faq-section fix section-padding">
        <div className="container">
          <div className="section-title text-center">
            <FadeSection>
              <span className="sub-title">
                <img src="/assets/img/home-1/hero/setting.png" alt="" />
                Our Difference
              </span>
            </FadeSection>
            <AnimatedText text="What Makes Us Different" as="h2" />
          </div>
          <div className="row justify-content-center">
            <div className="col-xl-10">
              <div className="faq-items">
                <div className="accordion">
                  {DIFFERENCE_ITEMS.map((item, i) => (
                    <FadeSection key={i} delay={i * 0.15}>
                      <div className="accordion-item">
                        <h2 className="accordion-header">
                          <button
                            className={`accordion-button${diffOpen === i ? '' : ' collapsed'}`}
                            type="button"
                            onClick={() => toggleDiff(i)}
                          >
                            {item.title}
                          </button>
                        </h2>
                        {diffOpen === i && (
                          <div className="accordion-collapse collapse show">
                            <div className="accordion-body">
                              <p>{item.body}</p>
                            </div>
                          </div>
                        )}
                      </div>
                    </FadeSection>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section section-padding fix">
        <div className="container">
          <div className="faq-wrapper-3">
            <div className="row g-4">
              <div className="col-lg-4">
                <div className="faq-content">
                  <div className="section-title mb-0">
                    <FadeSection>
                      <span className="sub-title">
                        <img src="/assets/img/home-1/hero/setting.png" alt="" />
                        Our Faq
                      </span>
                    </FadeSection>
                    <FadeSection delay={0.1}><h2>FAQ</h2></FadeSection>
                  </div>
                  <FadeSection delay={0.3}>
                    <p className="text">
                      We are a results-driven IT team that is healthcare-focused and help in unlocking efficiency.
                    </p>
                  </FadeSection>
                  <FadeSection delay={0.5}>
                    <Link to="/contact" className="link-btn">
                      Contact us <i className="fa-solid fa-arrow-up-right"></i>
                    </Link>
                  </FadeSection>
                </div>
              </div>
              <div className="col-lg-8">
                <div className="faq-items-3">
                  <div className="accordion">
                    {FAQ_ITEMS.map((item, i) => (
                      <FadeSection key={i} delay={Math.min(i * 0.1, 0.7)}>
                        <div className="accordion-item">
                          <h2 className="accordion-header">
                            <button
                              className={`accordion-button${faqOpen === i ? '' : ' collapsed'}`}
                              type="button"
                              onClick={() => toggleFaq(i)}
                            >
                              {i + 1}. {item.q}
                            </button>
                          </h2>
                          {faqOpen === i && (
                            <div className="accordion-collapse collapse show">
                              <div className="accordion-body">
                                {typeof item.a === 'string' ? <p>{item.a}</p> : item.a}
                              </div>
                            </div>
                          )}
                        </div>
                      </FadeSection>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
    </>
  )
}
