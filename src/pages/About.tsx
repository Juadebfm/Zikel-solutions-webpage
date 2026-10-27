import { useState } from 'react'
import { Link } from 'react-router-dom'
// import { Swiper, SwiperSlide } from 'swiper/react'
// import { Pagination } from 'swiper/modules'
// import type { Swiper as SwiperType } from 'swiper'
import FadeSection from '../components/ui/FadeSection'
import AnimatedText from '../components/ui/AnimatedText'
import RevealImage from '../components/ui/RevealImage'
import CounterUp from '../components/ui/CounterUp'
import { FAQ_ITEMS } from '../constants/faqItems'

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

export default function About() {
  const [diffOpen, setDiffOpen] = useState<number | null>(0)
  const [faqOpen, setFaqOpen] = useState<number | null>(0)
  // const swiperRef = useRef<SwiperType | null>(null)

  const toggleDiff = (i: number) => setDiffOpen(diffOpen === i ? null : i)
  const toggleFaq = (i: number) => setFaqOpen(faqOpen === i ? null : i)

  return (
    <main>
      {/* Breadcrumb */}
      <div className="breadcrumb-wrapper bg-cover" style={{ backgroundImage: "url('/assets/img/breadcrumb.jpg')" }}>
        <div className="container">
          <div className="page-heading">
            <div className="breadcrumb-sub-title">
              <FadeSection delay={0.3}><h1 className="text-white">About us</h1></FadeSection>
            </div>
            <FadeSection delay={0.5}>
              <ul className="breadcrumb-items">
                <li><Link to="/"><i className="fa-solid fa-house"></i> Home</Link></li>
                <li>/</li>
                <li>About us</li>
              </ul>
            </FadeSection>
          </div>
        </div>
      </div>

      {/* About Section */}
      <section className="about-section section-padding fix">
        <div className="container">
          <div className="section-title">
            <FadeSection>
              <span className="sub-title mb-0">
                <img src="/assets/img/home-1/hero/setting.png" alt="" />
                About Our Company
              </span>
            </FadeSection>
            <AnimatedText text="Our Story" as="h2" />
          </div>
          <div className="about-wrapper">
            <div className="row g-4">
              <div className="col-lg-4">
                <div className="about-image">
                  <RevealImage>
                    <img src="/assets/img/home-1/about-01.jpg" alt="About Zikel Solutions" />
                  </RevealImage>
                </div>
              </div>
              <div className="col-lg-8">
                <div className="about-content">
                  <div className="about-item">
                    <FadeSection>
                      <div className="count-item">
                        <h2><CounterUp target={3} /><sup>+</sup></h2>
                        <h5>Years of Experience <br /> Supporting Organisations</h5>
                      </div>
                    </FadeSection>
                    <div className="content-box">
                      <FadeSection delay={0.2}>
                        <p>
                          Zikel Solutions started inside children's homes, where documentation, supervision, staff
                          development, and safeguarding are critical and often overwhelming. We built practical tools
                          that brought order, accuracy, and accountability to everyday operations.
                        </p>
                      </FadeSection>
                      <FadeSection delay={0.3}>
                        <p>
                            Working closely with teams, supervisors, and leaders, one thing became clear:
                        </p>
                        <p>
                          <strong>Good systems are not enough. Organisations also need strong management, clear strategy, and the right people.</strong>
                        </p>
                      </FadeSection>
                      <FadeSection delay={0.4}>
                        <p>
                          That led us to build what we offer today: consulting, corporate strategy, corporate
                          management, supervision, executive recruitment, and tax advisory, delivered to organisations
                          across sectors, and supported by software for care and healthcare providers.
                        </p>
                        <Link to="/contact" className="theme-btn">
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

      {/* Mission and Vision */}
      <section
        className="about-section-4 section-padding fix bg-cover"
        style={{ backgroundImage: 'url(/assets/img/home-4/about-bg.jpg)' }}
      >
        <div className="container">
          <div className="section-title">
            <FadeSection>
              <span className="sub-title style-2 text-white">
                <img src="/assets/img/home-1/hero/setting.png" alt="" />
                Mission
              </span>
            </FadeSection>
            <AnimatedText text="Our Mission and Vision" as="h2" className="text-white" />
          </div>
          <div className="about-wrapper-4">
            <div className="row g-4 align-items-center">
              <div className="col-xl-4 col-lg-3">
                <FadeSection>
                  <div className="count-item">
                    <h2><CounterUp target={3} /><sup>+</sup></h2>
                    <h5>Years of Experience of <br /> Supporting Organisations</h5>
                  </div>
                </FadeSection>
              </div>
              <div className="col-xl-8 col-lg-9">
                <div className="about-right-item">
                  <FadeSection from="right">
                    <div className="about-image">
                      <img src="/assets/img/home-4/about.jpg" alt="About" />
                    </div>
                  </FadeSection>
                  <div className="content">
                    <FadeSection delay={0.2}>
                      <h3 className="mb-2 text-white">Mission</h3>
                      <p className="mb-2">To help organisations perform better by providing advice, management support, and tools that:</p>
                      <ul className="text-start text-white mb-4" style={{ listStyleType: 'decimal', marginLeft: 20 }}>
                        <li className="ps-3">Promote accountability</li>
                        <li className="ps-3">Strengthen leadership and staff capacity</li>
                        <li className="ps-3">Improve decision-making</li>
                        <li className="ps-3">Support compliance and governance</li>
                        <li className="ps-3">Deliver better outcomes for the people organisations serve</li>
                      </ul>
                    </FadeSection>
                    <FadeSection delay={0.4}>
                      <div className="content-box bg-white text-dark py-3 px-2">
                        <h3 className="mb-2 border-bottom pb-2 ps-3">Vision</h3>
                        <p className="text-dark py-1 px-3 mb-2">
                          To be a trusted partner to organisations that want to lead well, govern responsibly, and grow
                          sustainably, with practical expertise and technology that supports human performance and
                          improves care, governance, and operational effectiveness.
                        </p>
                      </div>
                    </FadeSection>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      {/* <section className="testimonial-section section-padding fix">
        <div className="array-button">
          <button className="array-prev" onClick={() => swiperRef.current?.slidePrev()}>
            <i className="fa-solid fa-chevron-left"></i>
          </button>
          <button className="array-next" onClick={() => swiperRef.current?.slideNext()}>
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
            modules={[Pagination]}
            slidesPerView={1}
            loop={true}
            pagination={{ el: '.about-testimonial-dot', clickable: true }}
            onSwiper={(swiper) => { swiperRef.current = swiper }}
          >
            {TESTIMONIALS.map((t, i) => (
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
            <div className="about-testimonial-dot"></div>
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
                    <AnimatedText text="FAQ" as="h2" />
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
  )
}
