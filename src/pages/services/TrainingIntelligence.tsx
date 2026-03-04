import ServiceDetailLayout from '../../components/ui/ServiceDetailLayout'

export default function TrainingIntelligence() {
  return (
    <ServiceDetailLayout
      breadcrumbLabel="Training & Professional Development Intelligence"
      image="/assets/img/home-1/training.png"
      imageAlt="Training Intelligence"
      heading="Turn Staff Training Into a Scientific Process"
      intro={
        <p>
          Training is most effective when shaped by real performance data. Our AI evaluates staff
          behaviour, identifies skill gaps, and delivers personalized training recommendations that
          improve competence and consistency.
        </p>
      }
      featuresSectionTitle="KEY FEATURES"
      features={[
        { label: 'Skills gap detection' },
        { label: 'Personalized learning paths' },
        { label: 'Supervisor dashboard' },
        { label: 'Performance analytics' },
        { label: 'E-learning platform integration' },
        { label: 'Development pathway tracking' },
      ]}
      benefits={[
        'Improve training ROI',
        'Support staff growth with precision',
        'Reduce compliance risks',
        'Enhance supervision quality',
        'Build stronger internal capacity',
      ]}
      howItWorks={[
        { step: '01.', text: 'Staff activity is analyzed' },
        { step: '02.', text: 'AI identifies gaps' },
        { step: '03.', text: 'Training suggestions are delivered' },
        { step: '04.', text: 'Supervisors monitor development' },
        { step: '05.', text: 'Staff follow clear progression pathways' },
      ]}
      useCases={[
        { step: '01.', text: 'Training for care workers' },
        { step: '02.', text: 'Medical staff development' },
        { step: '03.', text: 'Corporate skill enhancement' },
      ]}
    />
  )
}
