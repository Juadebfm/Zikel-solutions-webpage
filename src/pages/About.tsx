import { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'
import type { Swiper as SwiperType } from 'swiper'
import FadeSection from '../components/ui/FadeSection'
import AnimatedText from '../components/ui/AnimatedText'
import RevealImage from '../components/ui/RevealImage'
import CounterUp from '../components/ui/CounterUp'
import { FAQ_ITEMS } from './Faq'

const TESTIMONIALS = [
  {
    quote:
      '"We partnered with this team to modernize our patient management and clinical documentation systems. The improvement has been remarkable. Administrative workload reduced significantly, and our staff now completes tasks faster with fewer errors. Their understanding of healthcare workflows is outstanding, and their support has been consistently reliable."',
    name: 'Amara Okoye, Chief Medical Administrator',
    org: 'Reliance General Hospital',
  },
  {
    quote:
      '"We needed a custom telemedicine platform built with strong security and compliance standards. Not only did they deliver exactly what we envisioned, but they also ensured the system met all HIPAA and NDPR guidelines. Our patients love the convenience, and our clinicians appreciate the intuitive interface."',
    name: 'Dr. Samuel Adeyemi, Founder',
    org: 'MedLink Care Clinic',
  },
  {
    quote:
      '"As a startup, we required a development partner who could help us build a scalable AI-driven diagnostics tool. Their team exceeded every expectation—clear communication, deep technical knowledge, and a strategic approach to product design. Thanks to them, we launched on schedule and with immense confidence."',
    name: 'Jane Roberts',
    org: 'CEO, VitalCheck AI',
  },
]

const DIFFERENCE_ITEMS = [
  {
    title: 'Purpose-Built for Real-World Challenges',
    body: "We understand the daily pressures faced by children's homes, healthcare institutions, and corporate teams. Our solutions address real operational gaps—not theoretical ones.",
  },
  {
    title: 'AI With Integrity',
    body: 'Our AI empowers staff. It does not replace human judgment. It highlights training gaps, supervision needs, and workflow inconsistencies—supporting staff growth.',
  },
  {
    title: 'User-Centered Design',
    body: 'Every feature is built to be intuitive, secure, and accessible to teams at all levels.',
  },
  {
    title: 'Scalable Technology',
    body: 'From small teams to enterprise organizations, our systems are built to grow with your needs.',
  },
]

export default function About() {
  const [diffOpen, setDiffOpen] = useState<number | null>(0)
  const [faqOpen, setFaqOpen] = useState<number | null>(0)
  const swiperRef = useRef<SwiperType | null>(null)

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
                        <h5>Personalization at seems <br /> ultimate scale.</h5>
                      </div>
                    </FadeSection>
                    <div className="content-box">
                      <FadeSection delay={0.2}>
                        <p>
                          Our work began inside the walls of children's homes—where documentation,
                          supervision, staff training, and child safeguarding are mission-critical
                          yet often overwhelming. We created a digital filing cabinet designed to
                          bring order, accuracy, and accessibility to everyday record-keeping.
                        </p>
                      </FadeSection>
                      <FadeSection delay={0.3}>
                        <p>
                          As we worked closely with teams, supervisors, and caregivers, one
                          reality became clear:
                        </p>
                        <p>
                          <strong>
                            Documentation alone is not enough—staff also need guidance, prompts,
                            and support.
                          </strong>
                        </p>
                      </FadeSection>
                      <FadeSection delay={0.4}>
                        <p>
                          This inspired our next milestone:<br />
                          <strong>
                            An AI-powered system that watches organizational patterns and
                            intelligently supports staff in real time.
                          </strong>
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
                    <h5>Years of Experience of <br /> AI Industries</h5>
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
                      <p className="mb-2">To build intelligent software that:</p>
                      <ul className="text-start text-white mb-4" style={{ listStyleType: 'decimal', marginLeft: '20px' }}>
                        <li className="ps-3">Promotes accountability</li>
                        <li className="ps-3">Strengthens staff capacity</li>
                        <li className="ps-3">Enhances decision-making</li>
                        <li className="ps-3">Supports compliance and governance</li>
                        <li className="ps-3">Improves outcomes for children, patients, and people</li>
                      </ul>
                    </FadeSection>
                    <FadeSection delay={0.4}>
                      <div className="content-box bg-white text-dark py-3 px-2">
                        <h3 className="mb-2 border-bottom pb-2 ps-3">Vision</h3>
                        <p className="text-dark py-1 px-3 mb-2">
                          To empower organizations with smart, compassionate, and reliable
                          technology that enhances human performance and improves care,
                          governance, and operational effectiveness.
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
      <section className="testimonial-section section-padding fix">
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
      </section>

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
