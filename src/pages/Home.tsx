import { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import WaitlistModal from '../components/ui/WaitlistModal'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import type { Swiper as SwiperType } from 'swiper'
import FadeSection from '../components/ui/FadeSection'
import AnimatedText from '../components/ui/AnimatedText'
import RevealImage from '../components/ui/RevealImage'
import { FAQ_ITEMS } from './Faq'


const INDUSTRIES = [
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
    icon: '/assets/img/home-1/icon/02.svg',
    title: 'Corporate Organizations',
    items: [
      'Workflow guidance',
      'Staff development insights',
      'Smart reminders and operational accountability',
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
]

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
      '"As a startup, we required a development partner who could help us build a scalable AI-driven diagnostics tool. Their team exceeded every expectation: clear communication, deep technical knowledge, and a strategic approach to product design. Thanks to them, we launched on schedule and with immense confidence."',
    name: 'Jane Roberts',
    org: 'CEO, VitalCheck AI',
  },
]

const DIFFERENCE_ITEMS = [
  {
    title: 'Purpose-Built for Real-World Challenges',
    body: "We understand the daily pressures faced by children's homes, healthcare institutions, and corporate teams. Our solutions address real operational gaps, not theoretical ones.",
  },
  {
    title: 'AI With Integrity',
    body: 'Our AI empowers staff. It does not replace human judgment. It highlights training gaps, supervision needs, and workflow inconsistencies, supporting staff growth.',
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

export default function Home() {
  const [waitlistOpen, setWaitlistOpen] = useState(false)
  const [diffOpen, setDiffOpen] = useState<number | null>(0)
  const [faqOpen, setFaqOpen] = useState<number | null>(0)
  const serviceSwiperRef = useRef<SwiperType | null>(null)
  const testimonialSwiperRef = useRef<SwiperType | null>(null)

  const toggleDiff = (i: number) => setDiffOpen(diffOpen === i ? null : i)
  const toggleFaq = (i: number) => setFaqOpen(faqOpen === i ? null : i)

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
                  Intelligent Guidance for Smarter, More Accountable Teams.
                </h1>
                <p>
                  AI-enabled software for children's homes, healthcare institutions, and corporate
                  teams, built to strengthen accountability, staff performance, and care standards.
                </p>
                <div className="hero-btn">
                  <button className="theme-btn" onClick={() => setWaitlistOpen(true)}>
                    Join Waitlist <i className="fa-solid fa-arrow-up-right"></i>
                  </button>
                  <Link to="/services" className="theme-btn style-2">
                    Explore Our Services <i className="fa-solid fa-arrow-up-right"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="hero-image">
                <img src="/assets/img/home-1/hero/hero-1.png" alt="Zikel Solutions" />
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* About Section */}
      <section className="about-section section-padding fix">
        <div className="container">
          <div className="section-title">
            <FadeSection>
              <span className="sub-title mb-0">
                <img src="/assets/img/home-1/hero/setting.png" alt="" />
                WHO WE ARE
              </span>
            </FadeSection>
            <FadeSection delay={0.15}>
              <h2>AI-Driven Healthcare Software. <br />Built for Your Workflow.</h2>
            </FadeSection>
          </div>
          <div className="about-wrapper">
            <div className="row g-4">
              <div className="col-lg-4">
                <div className="about-image">
                  <RevealImage>
                    <img src="/assets/img/home-1/about.png" alt="About Zikel Solutions" />
                  </RevealImage>
                </div>
              </div>
              <div className="col-lg-8">
                <div className="about-content">
                  <div className="about-item">
                    <div className="about-count-spacer" aria-hidden="true" />
                    <div className="content-box">
                      <FadeSection delay={0.2}>
                        <p>
                          We design purpose-driven software solutions that help organizations work
                          smarter, faster, and more efficiently. Our journey began with a digital
                          filing cabinet built specifically for children's homes, simplifying
                          record-keeping, compliance, and child safeguarding processes.
                        </p>
                      </FadeSection>
                      <FadeSection delay={0.3}>
                        <p>
                          Now, we're building the next evolution:<br />
                          <strong>
                            AI-driven platforms that guide staff actions, suggest training
                            needs, and recommend timely supervision based on real-time staff
                            activity patterns.
                          </strong>
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
                  How
                </span>
              </FadeSection>
              <FadeSection delay={0.1}><h2>How Our AI Works</h2></FadeSection>
            </div>
            <FadeSection delay={0.2}>
              <p>
                Our AI tracks staff activity footprints (daily logs, documentation patterns, workflow
                behavior) and then intelligently:
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
                    <p className="mb-3">
                      Our AI tracks staff activity footprints (daily logs, documentation patterns,
                      incident records, and workflow behaviour) and then intelligently:
                    </p>
                    <ul className="text-start content" style={{ listStyleType: 'decimal', marginLeft: '20px', marginBottom: '20px' }}>
                      <li className="ps-3">Generates one-click Reg 44 &amp; Reg 45 evidence packs</li>
                      <li className="ps-3">Auto-builds safeguarding chronologies in real time</li>
                      <li className="ps-3">Sends risk escalation alerts to supervisors and Responsible Individuals</li>
                      <li className="ps-3">Maps patterns across incidents to enable early intervention</li>
                      <li className="ps-3">Provides an internal monitoring dashboard for RIs</li>
                      <li className="ps-3">Guides staff with PACE-informed reflective recording prompts</li>
                      <li className="ps-3">Recommends targeted training and supervision sessions</li>
                    </ul>
                    <p>
                      This is not just software.<br />
                      <strong>It is organisational intelligence, built for the children's homes sector, grounded in therapeutic values.</strong>
                    </p>
                  </div>
                </div>
              </FadeSection>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonial-section section-padding fix">
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
    <WaitlistModal open={waitlistOpen} onClose={() => setWaitlistOpen(false)} />
    </>
  )
}
