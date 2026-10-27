import ServiceDetailLayout from '../../components/ui/ServiceDetailLayout'

export default function TaxConsultancy() {
  return (
    <ServiceDetailLayout
      breadcrumbLabel="Tax Consultancy & Advisory"
      image="/assets/img/home-1/tax-consultancy.png"
      imageAlt="Tax Consultancy & Advisory"
      heading="Clear, Compliant and Strategic Tax Advice"
      intro={
        <>
          <p>
            We provide comprehensive Tax Consultancy &amp; Advisory services for corporations,
            SMEs, and high-net-worth individuals. Our experts help you stay compliant with local
            and international tax laws, keep your tax liabilities as efficient as the law allows,
            and plan with confidence for the long term.
          </p>
          <p className="mt-2">
            Whether you need support with day-to-day filings, a cross-border structure, or
            preparation for an audit, our advice is tailored to your organisation and aligned with
            your wider financial goals.
          </p>
        </>
      }
      featuresSectionTitle="SCOPE OF SERVICES"
      features={[
        { label: 'Corporate Tax Advisory:', desc: 'Practical guidance on your tax obligations and the strategies that fit your business, from start-up through to established multinational.' },
        { label: 'Compliance Management:', desc: 'Support with filing, reporting, and regulatory adherence so deadlines are met and nothing is missed.' },
        { label: 'VAT & Indirect Tax Advisory:', desc: 'Clear advice on VAT and other indirect taxes, helping you charge, claim, and report correctly.' },
        { label: 'Cross-Border Tax Planning:', desc: 'Planning for organisations operating across multiple jurisdictions, including transfer pricing and international compliance.' },
        { label: 'Tax Risk Management & Audit Support:', desc: 'Guidance through audits and regulatory reviews, with proactive steps to reduce exposure to penalties.' },
        { label: 'Tax Optimisation & Efficiency Strategies:', desc: 'Identification of legitimate deductions, exemptions, and structuring opportunities to improve financial efficiency.' },
      ]}
      benefits={[
        'Compliance with laws, regulations, and statutory obligations',
        'Reduced tax liabilities through lawful optimisation',
        'Lower risk of penalties and audit complications',
        'Better financial forecasting and improved efficiency',
        'Tax strategy aligned with your corporate and growth goals',
        'Peace of mind with confidential, professional guidance',
      ]}
      howItWorks={[
        { step: '01.', text: 'Evaluate your current tax structure' },
        { step: '02.', text: 'Identify optimisation opportunities' },
        { step: '03.', text: 'Implement compliant strategies' },
        { step: '04.', text: 'Monitor regulatory changes' },
        { step: '05.', text: 'Provide ongoing advisory support' },
      ]}
      useCases={[
        { step: '01.', text: 'Corporations and growing SMEs' },
        { step: '02.', text: 'High-net-worth individuals' },
        { step: '03.', text: 'Finance, import/export, and multinational businesses' },
        { step: '04.', text: 'Organisations preparing for audits or regulatory reviews' },
      ]}
    />
  )
}
