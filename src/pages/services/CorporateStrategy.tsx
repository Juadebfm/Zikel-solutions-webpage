import ServiceDetailLayout from '../../components/ui/ServiceDetailLayout'

export default function CorporateStrategy() {
  return (
    <ServiceDetailLayout
      breadcrumbLabel="Corporate Strategy"
      image="/assets/img/home-1/corporate-strategy.png"
      imageAlt="Corporate Strategy"
      heading="Long-Term Direction That Drives Sustainable Growth"
      intro={
        <>
          <p>
            We provide Corporate Strategy services that help organisations define their long-term
            vision, grow sustainably, and keep a competitive edge. Our team works with executives
            to build strategies that align operations, people, and resources with overarching
            corporate goals.
          </p>
          <p className="mt-2">
            From market analysis to execution support, we help you respond early to market trends,
            reduce risk through strategic foresight, and create value for shareholders and
            stakeholders.
          </p>
        </>
      }
      featuresSectionTitle="SCOPE OF SERVICES"
      features={[
        { label: 'Strategic Planning & Vision Setting:', desc: 'Defining long-term direction and objectives.' },
        { label: 'Market & Competitive Analysis:', desc: 'Insights to guide strategic decisions.' },
        { label: 'Business Model Innovation:', desc: 'Optimising how your organisation creates value and generates revenue.' },
        { label: 'Organisational Alignment:', desc: 'Making sure departments and teams support corporate goals.' },
        { label: 'Performance Measurement & KPIs:', desc: 'Tracking strategic execution and outcomes.' },
        { label: 'Mergers, Acquisitions & Expansion Advisory:', desc: 'Guidance on growth through acquisition, partnership, or expansion.' },
      ]}
      benefits={[
        'Sustainable growth and market competitiveness',
        'Better resource allocation',
        'Enhanced organisational focus',
        'Data-driven decision-making',
        'Stronger shareholder confidence',
      ]}
      howItWorks={[
        { step: '01.', text: 'Assessment: evaluate current performance and market position' },
        { step: '02.', text: 'Analysis: identify opportunities, risks, and gaps' },
        { step: '03.', text: 'Strategy design: develop actionable plans' },
        { step: '04.', text: 'Implementation support: guide execution' },
        { step: '05.', text: 'Performance monitoring: measure results and refine strategy' },
      ]}
      useCases={[
        { step: '01.', text: 'Leadership teams setting long-term direction' },
        { step: '02.', text: 'Companies planning growth, expansion, or acquisitions' },
        { step: '03.', text: 'Organisations aligning departments behind shared goals' },
        { step: '04.', text: 'Businesses responding to shifting markets' },
      ]}
    />
  )
}