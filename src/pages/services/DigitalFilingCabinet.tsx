import ServiceDetailLayout from '../../components/ui/ServiceDetailLayout'

export default function DigitalFilingCabinet() {
  return (
    <ServiceDetailLayout
      breadcrumbLabel="Digital Filing Cabinet for Children's Homes"
      image="/assets/img/home-1/digital-filing-cabinet.png"
      imageAlt="Digital Filing Cabinet"
      heading="Transform How Children's Homes Manage Records"
      intro={
        <>
          <p>
            Children's homes rely on accurate, timely, and compliant documentation. Our Digital
            Filing Cabinet replaces outdated paper folders with a secure, structured platform built
            specifically for child-centred organisations — one that supports therapeutic thinking,
            not just audit trails.
          </p>
          <p className="mt-2">
            From one-click Reg 44 &amp; Reg 45 evidence packs to PACE-informed reflective recording
            prompts, every feature is designed to reduce administrative burden while raising the
            quality of care and compliance.
          </p>
        </>
      }
      featuresSectionTitle="KEY FEATURES"
      features={[
        { label: 'One-Click Reg 44 & Reg 45 Evidence Packs:', desc: 'Automatically compile the evidence your Independent Visitor and Responsible Individual need — ready for every visit, every time.' },
        { label: 'Safeguarding Chronology Auto-Build:', desc: 'The system builds a real-time chronology of safeguarding events, incidents, and interventions — no manual collation required.' },
        { label: 'Risk Escalation Alerts:', desc: 'Automated alerts notify supervisors and RIs when risk thresholds are met, ensuring no concern is missed or delayed.' },
        { label: 'Pattern Mapping Across Incidents:', desc: 'Identify recurring themes in behaviour, incidents, and staff responses — enabling proactive rather than reactive management.' },
        { label: 'Internal Monitoring Dashboard for RIs:', desc: 'Give Responsible Individuals a live view of compliance, incident trends, staffing patterns, and key performance indicators.' },
        { label: 'Reflective Recording Prompts (PACE-Informed):', desc: 'Staff are guided beyond "describe incident" — prompts ask "What might the child have been communicating?" and "What helped regulate the situation?" — encouraging therapeutic reflection without adding time burden.' },
        { label: 'Complete Child Case File System:', desc: 'Store personal history, assessments, care plans, reports, and chronological updates in one structured record.' },
        { label: 'Health, Education & Wellbeing Records:', desc: 'Maintain ongoing medical history, school notes, and progress updates alongside daily logs.' },
        { label: 'Role-Based Access Control:', desc: 'Protect sensitive information — staff see only what their role permits, with full audit trails.' },
      ]}
      benefits={[
        'One-click generation of Reg 44 & Reg 45 evidence packs',
        'Automatic safeguarding chronology — always up to date',
        'Real-time risk escalation to supervisors and RIs',
        'Pattern recognition across incidents for early intervention',
        'PACE-informed prompts that improve the quality of recording',
        'GDPR compliant — UK-hosted, ISO-aligned, role-based access',
        'Reduce paperwork and administrative stress on staff',
        'Clean, structured data ready for Ofsted inspections',
      ]}
      howItWorks={[
        { step: '01.', text: 'Staff log into a secure, UK-hosted portal' },
        { step: '02.', text: 'Select the child and record type — guided prompts appear' },
        { step: '03.', text: 'PACE-informed prompts support reflective, therapeutic recording' },
        { step: '04.', text: 'Supervisor reviews, approves, and receives risk escalation alerts' },
        { step: '05.', text: 'AI builds chronologies, maps patterns, and auto-generates compliance packs' },
      ]}
      useCases={[
        { step: '01.', text: "Children's residential homes (Reg 44 / Reg 45 compliant)" },
        { step: '02.', text: 'Therapeutic residential care providers' },
        { step: '03.', text: "Independent children's home providers" },
        { step: '04.', text: 'Foster care organisations and family support services' },
      ]}
    />
  )
}
