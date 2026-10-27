import type { ReactNode } from 'react'

interface FaqItem { q: string; a: ReactNode }

export const FAQ_ITEMS: FaqItem[] = [
  {
    q: 'What services does Zikel Solutions offer?',
    a: 'We offer consulting, corporate strategy, general corporate management, supervision and management, executive selection and recruitment, and tax consultancy and advisory.',
  },
  {
    q: 'Who do you work with?',
    a: 'Corporate organisations, SMEs, executives and boards, care groups, children’s homes, and healthcare providers.',
  },
  {
    q: 'Do you tailor your services to each client?',
    a: 'Yes. Every engagement starts with understanding your organisation and goals, and the scope is designed around them.',
  },
  {
    q: 'How do we get started?',
    a: 'Contact us or book a call. We’ll discuss your goals, recommend a scope, and agree next steps.',
  },

  {
    q: 'How long does an engagement take?',
    a: 'It depends on scope. Typical consulting projects run from a few weeks to several months, and some services, such as supervision or advisory, can run on an ongoing basis.',
  },

  {
    q: 'How do you protect confidential information?',
    a: 'We treat client information as confidential and limit access to the people who need it.',
  },

  {
    q: 'Do you provide support after delivery?',
    a: 'Yes. We offer follow-up support after implementation and ongoing advisory support where needed.',
  },

  {
    q: 'Do you also offer software?',
    a: 'Yes. For care and healthcare providers, we offer supporting tools for documentation, supervision, and compliance reporting. Contact us to find out more.',
  },
  // {
  //   q: 'Do you offer AI and automation features?',
  //   a: (
  //     <>
  //       <p>Absolutely. We provide:</p>
  //       <ul className="ms-3 text-start" style={{ listStyleType: 'disc' }}>
  //         <li className="ps-2">Symptom analysis and clinical decision support</li>
  //         <li className="ps-2">Predictive analytics</li>
  //         <li className="ps-2">Intelligent triage</li>
  //         <li className="ps-2">Automated documentation (speech-to-text, structured notes)</li>
  //         <li className="ps-2">Workflow automation for administrative tasks</li>
  //       </ul>
  //     </>
  //   ),
  // },
  {
    q: 'How long does it take to build a healthcare solution?',
    a: (
      <>
        <p>Timelines vary based on complexity. Typical durations:</p>
        <ul className="ms-3 text-start" style={{ listStyleType: 'disc' }}>
          <li className="ps-2">Small tools or modules: 4–6 weeks</li>
          <li className="ps-2">Mid-size telemedicine or EMR add-ons: 8–12 weeks</li>
          <li className="ps-2">Enterprise systems: 3–6 months</li>
        </ul>
        <p>We provide a detailed timeline after the discovery phase.</p>
      </>
    ),
  },
  {
    q: 'Do you provide ongoing maintenance and support?',
    a: 'Yes. We offer continuous support, including bug fixes, updates, security patches, server monitoring, performance optimization, and feature enhancements.',
  },
  {
    q: 'Can the system scale as our hospital or clinic grows?',
    a: (
      <>
        <p>Yes. All our solutions are built on scalable infrastructure that supports growth in:</p>
        <ul className="ms-3 text-start" style={{ listStyleType: 'disc' }}>
          <li className="ps-2">Users</li>
          <li className="ps-2">Patient records</li>
          <li className="ps-2">Facilities</li>
          <li className="ps-2">Workflows</li>
        </ul>
        <p>This ensures long-term reliability as your organization expands.</p>
      </>
    ),
  },
  {
    q: 'How do you ensure data security and compliance?',
    a: (
      <>
        <p>Our development process is compliance-first. We implement:</p>
        <ul className="ms-3 text-start" style={{ listStyleType: 'disc' }}>
          <li className="ps-2">Encryption (at rest and in transit)</li>
          <li className="ps-2">Role-based access control</li>
          <li className="ps-2">Audit trails</li>
          <li className="ps-2">Secure cloud architecture</li>
        </ul>
        <p>We also follow HIPAA, NDPR, GDPR, and ISO 27001 best practices based on your region and regulatory needs.</p>
      </>
    ),
  }
]
