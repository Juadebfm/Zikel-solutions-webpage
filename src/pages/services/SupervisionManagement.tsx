import ServiceDetailLayout from '../../components/ui/ServiceDetailLayout'

export default function SupervisionManagement() {
  return (
    <ServiceDetailLayout
      breadcrumbLabel="Supervision & Management"
      image="/assets/img/home-1/supervision-management.png"
      imageAlt="Supervision & Management"
      heading="Projects and Operations Delivered on Time, on Budget, to Standard"
      intro={
        <>
          <p>
            We provide Supervision &amp; Management solutions that make sure projects, operations,
            and organisational initiatives are carried out efficiently and effectively. Our team
            monitors processes, identifies risks, and keeps objectives on track for time, budget,
            and quality.
          </p>
          <p className="mt-2">
            With structured reporting and real-time monitoring, leadership gets a clear view of
            progress, accountability improves across teams, and problems are caught early.
          </p>
        </>
      }
      featuresSectionTitle="SCOPE OF SERVICES"
      features={[
        { label: 'Project Supervision & Oversight:', desc: 'Making sure milestones are achieved and quality standards are met.' },
        { label: 'Operational Management:', desc: 'Streamlining processes, coordinating teams, and resolving bottlenecks.' },
        { label: 'Performance Monitoring & Evaluation:', desc: 'KPIs, reports, and dashboards for executive review.' },
        { label: 'Risk Identification & Mitigation:', desc: 'Proactive strategies to reduce operational risk.' },
        { label: 'Resource & Stakeholder Coordination:', desc: 'Aligning human, financial, and material resources.' },
      ]}
      benefits={[
        'Increased operational efficiency',
        'Higher success rate for projects',
        'Reduced risk and errors',
        'Improved decision-making',
        'Enhanced stakeholder satisfaction',
      ]}
      howItWorks={[
        { step: '01.', text: 'Assess project or operational requirements' },
        { step: '02.', text: 'Develop a supervision plan and KPIs' },
        { step: '03.', text: 'Execute monitoring and reporting' },
        { step: '04.', text: 'Analyse performance gaps' },
        { step: '05.', text: 'Recommend corrective actions and improvements' },
      ]}
      useCases={[
        { step: '01.', text: 'Organisations running complex projects with tight deadlines' },
        { step: '02.', text: 'Operations teams looking to remove bottlenecks' },
        { step: '03.', text: 'Leadership that needs structured KPI reporting' },
        { step: '04.', text: 'Businesses that want stronger team accountability' },
      ]}
    />
  )
}