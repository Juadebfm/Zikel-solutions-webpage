import { Link } from 'react-router-dom'
import FadeSection from '../components/ui/FadeSection'

interface ServiceCard {
  icon: string
  title: string
  to: string
  description: string
  listLabel?: string
  listItems?: string[]
  outro?: string
  ctaLabel: string
}

const SERVICE_CARDS: ServiceCard[] = [
  {
    icon: '/assets/img/home-1/icon/04.svg',
    title: 'General Corporate Management',
    to: '/services/corporate-management',
    description:
      'The systems, processes, and governance frameworks organisations need to operate effectively and stay compliant.',
    listLabel: 'What It Includes:',
    listItems: [
      'Corporate administration & governance',
      'Organisational structuring & policy development',
      'Corporate performance management',
      'Compliance & regulatory oversight',
      'Business process coordination',
      'Strategic corporate support to executives',
    ],
    outro:
      'Stronger organisational control, improved governance, and reduced operational risk.',
    ctaLabel: 'Explore Corporate Management',
  },
  {
    icon: '/assets/img/home-1/icon/01.svg',
    title: 'Supervision & Management',
    to: '/services/supervision-management',
    description:
      'Monitoring and oversight that keeps projects and operations on time, within budget, and to quality standards.',
    listLabel: 'Scope of Services:',
    listItems: [
      'Project supervision & oversight',
      'Operational management',
      'Performance monitoring & evaluation',
      'Risk identification & mitigation',
      'Resource & stakeholder coordination',
    ],
    outro:
      'Higher project success rates, fewer errors, and structured reporting for leadership.',
    ctaLabel: 'Explore Supervision & Management',
  },
  {
    icon: '/assets/img/home-1/icon/01.svg',
    title: 'AI-Powered Staff Guidance System',
    to: '/services/ai-staff-guidance',
    description:
      'A smart AI engine designed to track staff activity patterns and provide real-time guidance.',
    listLabel: 'AI Capabilities:',
    listItems: [
      'Prompts staff when documentation is incomplete',
      'Suggests timely supervision sessions',
      'Recommends training based on performance gaps',
      'Identifies workflow inconsistencies',
      'Helps supervisors monitor team wellbeing',
      'Enhances staff development and consistency',
    ],
    outro:
      'A more capable, confident, and supported workforce. Empower your team with real-time AI prompts, performance tracking, and automated supervision support.',
    ctaLabel: 'See AI Staff Guidance in Action',
  },
  {
    icon: '/assets/img/home-1/icon/03.svg',
    title: 'Training & Professional Development Intelligence',
    to: '/services/training-intelligence',
    description: 'Our AI understands how staff work, where they excel, and where they struggle.',
    listLabel: 'Tailored Interventions:',
    listItems: [
      'E-learning modules',
      'Supervision topics',
      'Refresher trainings',
      'Support resources',
      'Skills development pathways',
    ],
    outro:
      'This turns professional development into a data-driven process. Turn staff development into a smart, data-driven process tailored to every individual\'s strengths and gaps.',
    ctaLabel: 'Discover Training Intelligence',
  },
  {
    icon: '/assets/img/home-1/icon/04.svg',
    title: 'Healthcare Workflow Support Software',
    to: '/services/healthcare-workflow',
    description: 'For clinics, hospitals, and care centers.',
    listLabel: 'Features Include:',
    listItems: [
      'Documentation prompts',
      'Staff accountability tracking',
      'AI-enabled supervision support',
      'Task prioritization',
      'Shift-based performance insights',
    ],
    outro:
      'This enhances patient care quality through structured staff guidance. Streamline clinical workflows and strengthen patient care with AI-enabled staff accountability and documentation support.',
    ctaLabel: 'Explore Healthcare Software',
  },
  {
    icon: '/assets/img/home-1/icon/01.svg',
    title: 'Consulting',
    to: '/services/consulting',
    description:
      'End-to-end consulting that helps businesses operate efficiently, increase profitability, and work through organisational challenges.',
    listLabel: 'What We Cover:',
    listItems: [
      'Corporate strategy & business transformation',
      'Operational efficiency & performance improvement',
      'Organisational review & restructuring',
      'Market intelligence & feasibility studies',
      'Governance, risk & compliance',
      'Human capital & workforce advisory',
    ],
    outro:
      'Clear insights and actionable strategies, tailored to your organisation and backed by support after implementation.',
    ctaLabel: 'Explore Consulting',
  },
  {
    icon: '/assets/img/home-1/icon/03.svg',
    title: 'Corporate Strategy',
    to: '/services/corporate-strategy',
    description:
      'Define your long-term vision and build strategies that align operations, people, and resources with your corporate goals.',
    listLabel: 'Scope of Services:',
    listItems: [
      'Strategic planning & vision setting',
      'Market & competitive analysis',
      'Business model innovation',
      'Organisational alignment',
      'Performance measurement & KPIs',
      'Mergers, acquisitions & expansion advisory',
    ],
    outro:
      'Sustainable growth, better resource allocation, and data-driven decisions from strategy design through to execution.',
    ctaLabel: 'Explore Corporate Strategy',
  },
  {
    icon: '/assets/img/home-1/icon/03.svg',
    title: 'Executive Selection and Recruitment',
    to: '/services/executive-recruitment',
    description:
      'Confidential search and selection for leadership roles, matching candidates to your strategy, culture, and values.',
    listLabel: 'Scope of Services:',
    listItems: [
      'Executive search & headhunting',
      'Talent mapping & pipeline development',
      'Candidate screening & assessment',
      'Interview facilitation & selection support',
      'Onboarding assistance',
    ],
    outro:
      'Access to high-calibre leaders, faster hiring, and better retention of critical roles.',
    ctaLabel: 'Explore Executive Recruitment',
  },
  {
    icon: '/assets/img/home-1/icon/01.svg',
    title: 'Consultation & Organizational Needs Assessment',
    to: '/contact',
    description:
      "We assess organizational processes and help you implement the right technology for your goals.",
    ctaLabel: 'Get in Touch',
  },
]

export default function Services() {
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
                <h1 className="text-white">Our services</h1>
              </FadeSection>
            </div>
            <FadeSection delay={0.5}>
              <ul className="breadcrumb-items">
                <li>
                  <Link to="/"><i className="fa-solid fa-house"></i> Home</Link>
                </li>
                <li>/</li>
                <li>Services</li>
              </ul>
            </FadeSection>
          </div>
        </div>
      </div>

      {/* Service Cards Grid */}
      <section className="service-section-inner bg-white section-padding fix">
        <div className="container">
          <div className="row g-4">
            {SERVICE_CARDS.map((card, i) => (
              <div key={card.to} className="col-xl-4 col-lg-6 col-md-6">
                <FadeSection delay={0.1 + (i % 3) * 0.15}>
                  <div className="service-box-item mt-0">
                    <div className="icon">
                      <img src={card.icon} alt={card.title} />
                    </div>
                    <div className="content">
                      <h3>
                        <Link to={card.to}>{card.title}</Link>
                      </h3>
                      <p>{card.description}</p>
                      {card.listLabel && <strong>{card.listLabel}</strong>}
                      {card.listItems && (
                        <ul
                          className="text-start content"
                          style={{ listStyleType: 'decimal', marginLeft: 20, marginBottom: 20 }}
                        >
                          {card.listItems.map((item) => (
                            <li key={item} className="ps-3">{item}</li>
                          ))}
                        </ul>
                      )}
                      {card.outro && <p>{card.outro}</p>}
                      <Link to={card.to} className="theme-btn mt-5">
                        {card.ctaLabel} <i className="fa-solid fa-arrow-up-right"></i>
                      </Link>
                    </div>
                  </div>
                </FadeSection>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
