import ServiceDetailLayout from '../../components/ui/ServiceDetailLayout'

export default function ConsultingServices() {
  return (
    <ServiceDetailLayout
      breadcrumbLabel="Consulting"
      image="/assets/img/home-1/consultation.png"
      imageAlt="Consulting"
      heading="End-to-End Consulting for Efficiency, Profitability and Growth"
      intro={
        <>
          <p>
            We provide end-to-end consulting solutions that help businesses operate efficiently,
            increase profitability, and work through organisational challenges. Whether you need
            restructuring, operational improvement, or strategic advice, our experts deliver clear
            insights and actionable strategies.
          </p>
          <p className="mt-2">
            With competition, regulation, customer expectations, and digital change all moving
            quickly, our consulting helps you improve productivity, reduce risk, strengthen
            governance, and make high-impact decisions with confidence.
          </p>
        </>
      }
      featuresSectionTitle="WHAT OUR CONSULTING SERVICES COVER"
      features={[
        { label: 'Corporate Strategy & Business Transformation:', desc: 'Strategic planning, competitive positioning, and vision setting.' },
        { label: 'Operational Efficiency & Performance Improvement:', desc: 'Process optimisation, workflow restructuring, and cost reduction.' },
        { label: 'Organisational Review & Restructuring:', desc: 'Structure design, role alignment, and change management.' },
        { label: 'Market Intelligence & Feasibility Studies:', desc: 'Market research, industry analysis, and investment assessment.' },
        { label: 'Governance, Risk & Compliance (GRC):', desc: 'Corporate governance frameworks, risk assessment, and compliance advisory.' },
        { label: 'Human Capital & Workforce Advisory:', desc: 'Workforce planning, culture transformation, and HR systems evaluation.' },
      ]}
      benefits={[
        'Improved operational efficiency',
        'Stronger corporate governance',
        'Cost savings through streamlined processes',
        'Better decision-making',
        'Increased organisational alignment',
        'Competitive advantage in your industry',
      ]}
      howItWorks={[
        { step: '01.', text: 'Diagnosis: assess the current state' },
        { step: '02.', text: 'Insight: analyse data and discover gaps' },
        { step: '03.', text: 'Design: create customised solutions' },
        { step: '04.', text: 'Implementation: support adoption and execution' },
        { step: '05.', text: 'Measurement: track improvements and KPIs' },
      ]}
      useCases={[
        { step: '01.', text: 'Businesses looking to improve efficiency and profitability' },
        { step: '02.', text: 'Organisations going through restructuring or change' },
        { step: '03.', text: 'Companies assessing a new market or investment' },
        { step: '04.', text: 'Teams strengthening governance, risk, and compliance' },
      ]}
    />
  )
}