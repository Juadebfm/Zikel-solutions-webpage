import ServiceDetailLayout from '../../components/ui/ServiceDetailLayout'

export default function AiStaffGuidance() {
  return (
    <ServiceDetailLayout
      breadcrumbLabel="AI-Powered Staff Guidance & Support System"
      image="/assets/img/home-1/ai-powered.png"
      imageAlt="AI-Powered Staff Guidance"
      heading="A Smarter Way to Guide Staff Performance"
      intro={
        <p>
          Your staff generate activity patterns every day. Our AI analyses these patterns to deliver
          real-time prompts, risk escalation alerts, and supervision triggers — helping Responsible
          Individuals and managers maintain consistent professional standards and catch concerns
          before they escalate.
        </p>
      }
      featuresSectionTitle="AI CAPABILITIES"
      features={[
        { label: 'Risk Escalation Alerts:', desc: 'Automated alerts notify supervisors and Responsible Individuals when staff behaviour, documentation gaps, or incident patterns reach a risk threshold.' },
        { label: 'Pattern Mapping Across Incidents:', desc: 'Identifies recurring themes across incidents, staff responses, and child behaviour — enabling early intervention rather than reactive management.' },
        { label: 'Internal Monitoring Dashboard for RIs:', desc: 'Responsible Individuals get a live compliance and performance dashboard — incident trends, supervision completion, staff wellbeing indicators, and documentation quality at a glance.' },
        { label: 'Activity Monitoring:', desc: 'Tracks how and when staff complete documentation, flags delays, and identifies patterns of inconsistency.' },
        { label: 'Real-Time Guidance Prompts:', desc: 'Alerts staff when required logs or reports are incomplete, and suggests next steps.' },
        { label: 'Supervision Suggestions:', desc: 'Identifies when a staff member may require additional support or a supervision session based on their activity footprint.' },
        { label: 'Training Recommendations:', desc: 'Suggests targeted courses, refreshers, or development pathways based on identified gaps.' },
        { label: 'Wellbeing Indicators:', desc: 'Detects patterns that may indicate stress, disengagement, or burnout — before it affects children in care.' },
      ]}
      benefits={[
        'Risk escalation alerts keep supervisors and RIs informed in real time',
        'Pattern mapping enables proactive, not reactive, management',
        'RI dashboard provides the oversight needed for regulatory compliance',
        'Reduce cases of missed documentation and incomplete records',
        'Build a stronger, more supported and therapeutically aware workforce',
        'Strengthen accountability across all levels of the organisation',
      ]}
      howItWorks={[
        { step: '01.', text: 'AI continuously analyses staff activity, documentation, and incident logs' },
        { step: '02.', text: 'Patterns are mapped — strengths, gaps, and risk indicators identified' },
        { step: '03.', text: 'Real-time prompts and risk escalation alerts are delivered' },
        { step: '04.', text: 'Supervisors and RIs receive actionable insights via their dashboard' },
        { step: '05.', text: 'Staff performance and child safety outcomes improve — measurably' },
      ]}
      useCases={[
        { step: '01.', text: "Children's residential homes and therapeutic care providers" },
        { step: '02.', text: 'Responsible Individuals managing multiple homes' },
        { step: '03.', text: 'Registered Managers and senior leadership teams' },
      ]}
    />
  )
}
