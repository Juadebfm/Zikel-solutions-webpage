import ServiceDetailLayout from '../../components/ui/ServiceDetailLayout'

export default function CorporateManagement() {
  return (
    <ServiceDetailLayout
      breadcrumbLabel="General Corporate Management"
      image="/assets/img/home-1/corporate-management.png"
      imageAlt="General Corporate Management"
      heading="The Systems and Governance Your Organisation Runs On"
      intro={
        <>
          <p>
            We offer full-spectrum General Corporate Management services to help organisations
            operate effectively, stay compliant, and reach their strategic objectives. We support
            executives and management teams with the systems, processes, and governance frameworks
            they need to run their organisations well.
          </p>
          <p className="mt-2">
            From board support and record keeping to KPI reporting and policy development, we keep
            the foundations of your organisation strong so leadership can focus on direction and
            growth.
          </p>
        </>
      }
      featuresSectionTitle="WHAT CORPORATE MANAGEMENT INCLUDES"
      features={[
        { label: 'Corporate Administration & Governance:', desc: 'Board support, compliance documentation, and record keeping.' },
        { label: 'Organisational Structuring & Policy Development:', desc: 'Clear structures, roles, and written policies that give your organisation consistency.' },
        { label: 'Corporate Performance Management:', desc: 'KPI tracking, scorecards, and reporting systems that show how the organisation is performing.' },
        { label: 'Compliance & Regulatory Oversight:', desc: 'Ongoing monitoring so the organisation stays aligned with applicable laws and standards.' },
        { label: 'Business Process Coordination:', desc: 'Joining up departments and workflows so day-to-day operations run smoothly.' },
        { label: 'Strategic Corporate Support to Executives:', desc: 'Hands-on support for leadership with planning, reporting, and decision-making.' },
      ]}
      benefits={[
        'Better decision-making',
        'Strong organisational control',
        'Improved governance and accountability',
        'Reduced operational risks',
        'Increased efficiency and professionalism',
      ]}
      howItWorks={[
        { step: '01.', text: 'Efficient internal coordination' },
        { step: '02.', text: 'Effective reporting and documentation' },
        { step: '03.', text: 'Compliance with laws and standards' },
        { step: '04.', text: 'Alignment with executive strategy' },
        { step: '05.', text: 'Continuous improvement' },
      ]}
      useCases={[
        { step: '01.', text: 'Boards and executive teams' },
        { step: '02.', text: 'Growing organisations that need stronger governance' },
        { step: '03.', text: 'Organisations preparing for audits or regulatory review' },
        { step: '04.', text: 'Businesses formalising their policies and structures' },
      ]}
    />
  )
}