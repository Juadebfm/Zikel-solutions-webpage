import type { ReactNode } from 'react'

interface FaqItem { q: string; a: ReactNode }

export const FAQ_ITEMS: FaqItem[] = [
  {
    q: 'What types of healthcare software do you build?',
    a: 'We develop a wide range of healthcare solutions, including EMR/EHR systems, AI-driven decision support tools, telemedicine platforms, workflow automation software, patient portals, medical inventory systems, and custom applications tailored to clinical needs.',
  },
  {
    q: 'Do you create fully custom solutions or use pre-built templates?',
    a: 'We specialize in fully custom solutions built around your operations, workflow, and compliance requirements. All systems are designed to match your exact specifications, not generic one-size-fits-all templates.',
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
  },
  {
    q: 'Can your software integrate with our existing hospital systems?',
    a: 'Yes. We perform integrations using industry standards such as HL7, FHIR, REST APIs, and other interoperability protocols. Whether you use an existing EMR, billing system, or scheduling platform, we can connect and synchronize your data securely.',
  },
  {
    q: 'Do you offer AI and automation features?',
    a: (
      <>
        <p>Absolutely. We provide:</p>
        <ul className="ms-3 text-start" style={{ listStyleType: 'disc' }}>
          <li className="ps-2">Symptom analysis and clinical decision support</li>
          <li className="ps-2">Predictive analytics</li>
          <li className="ps-2">Intelligent triage</li>
          <li className="ps-2">Automated documentation (speech-to-text, structured notes)</li>
          <li className="ps-2">Workflow automation for administrative tasks</li>
        </ul>
      </>
    ),
  },
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
    q: 'Do you work with startups or only hospitals?',
    a: (
      <>
        <p>We work with:</p>
        <ol className="text-start">
          <li className="ps-1">Hospitals</li>
          <li className="ps-1">Clinics</li>
          <li className="ps-1">Diagnostic centers</li>
          <li className="ps-1">HealthTech startups</li>
          <li className="ps-1">Telemedicine providers</li>
          <li className="ps-1">NGOs and research organizations</li>
        </ol>
        <p>Our services scale to fit any size or stage.</p>
      </>
    ),
  },
  {
    q: 'How can we get started?',
    a: (
      <>
        <p>Simply contact us through the form or join our waitlist. We will:</p>
        <ol className="text-start">
          <li className="ps-1">Discuss your goals</li>
          <li className="ps-1">Review your current workflows</li>
          <li className="ps-1">Create a plan, timeline, and budget</li>
          <li className="ps-1">Begin the development process</li>
        </ol>
      </>
    ),
  },
]
