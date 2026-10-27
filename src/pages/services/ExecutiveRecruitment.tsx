import ServiceDetailLayout from '../../components/ui/ServiceDetailLayout'

export default function ExecutiveRecruitment() {
  return (
    <ServiceDetailLayout
      breadcrumbLabel="Executive Selection and Recruitment"
      image="/assets/img/home-1/executive-recruitment.png"
      imageAlt="Executive Selection and Recruitment"
      heading="Leadership Talent That Fits Your Strategy and Culture"
      intro={
        <>
          <p>
            We connect organisations with high-calibre talent. We specialise in leadership roles
            and strategic positions, making sure candidates meet the technical requirements and
            also align with your corporate culture and values.
          </p>
          <p className="mt-2">
            Hiring the right leadership drives organisational growth, sound strategic decisions,
            and team alignment while minimising hiring risk and turnover. Our search process is
            confidential, discreet, and supported from first brief to onboarding.
          </p>
        </>
      }
      featuresSectionTitle="SCOPE OF SERVICES"
      features={[
        { label: 'Executive Search & Headhunting:', desc: 'Targeted recruitment for senior leadership roles.' },
        { label: 'Talent Mapping & Pipeline Development:', desc: 'Identifying potential candidates in the market and building a pipeline ahead of need.' },
        { label: 'Candidate Screening & Assessment:', desc: 'Skills evaluation and psychometric testing to assess aptitude and suitability for the role.' },
        { label: 'Interview Facilitation & Selection Support:', desc: 'Structured interviews and support through to the final selection decision.' },
        { label: 'Onboarding Assistance:', desc: 'Support for a smooth integration of new leaders into the organisation.' },
      ]}
      benefits={[
        'Access to high-quality candidates',
        'Reduced time-to-hire',
        'Improved leadership alignment',
        'Better retention of critical roles',
        'Strategic advantage through top talent',
      ]}
      howItWorks={[
        { step: '01.', text: 'Understand your organisational needs and role requirements' },
        { step: '02.', text: 'Conduct market research and talent mapping' },
        { step: '03.', text: 'Identify and screen top candidates' },
        { step: '04.', text: 'Facilitate interviews and assessments' },
        { step: '05.', text: 'Support selection and onboarding' },
      ]}
      useCases={[
        { step: '01.', text: 'Organisations hiring senior leaders and executives' },
        { step: '02.', text: 'Boards replacing or adding key executives' },
        { step: '03.', text: 'Growing companies building out a leadership team' },
        { step: '04.', text: 'Businesses that need a confidential, discreet search' },
      ]}
    />
  )
}