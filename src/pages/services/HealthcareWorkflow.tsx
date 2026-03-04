import ServiceDetailLayout from '../../components/ui/ServiceDetailLayout'

export default function HealthcareWorkflow() {
  return (
    <ServiceDetailLayout
      breadcrumbLabel="Healthcare Workflow Support Software"
      image="/assets/img/home-1/healthcare.png"
      imageAlt="Healthcare Workflow"
      heading="Elevate Care Delivery Through Smart Workflow Support"
      intro={
        <p>
          Healthcare professionals deal with high-volume documentation, inconsistent workflows, and
          time-sensitive tasks. Our platform provides AI-powered prompts, supervision triggers, and
          workflow insights designed to enhance patient care.
        </p>
      }
      featuresSectionTitle="FEATURES"
      features={[
        { label: 'Real-time documentation prompts' },
        { label: 'Staff accountability dashboards' },
        { label: 'Workflow performance analytics' },
        { label: 'Patient-focused task prioritization' },
        { label: 'Shift performance insights' },
        { label: 'Cross-department coordination tools' },
      ]}
      benefits={[
        'Reduce documentation errors',
        'Improve handover quality',
        'Enhance patient safety',
        'Streamline clinical workflows',
        'Improve staff competency and morale',
      ]}
    />
  )
}
