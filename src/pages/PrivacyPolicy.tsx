import { Link } from 'react-router-dom'
import FadeSection from '../components/ui/FadeSection'

export default function PrivacyPolicy() {
  const year = new Date().getFullYear()

  return (
    <>
      {/* Breadcrumb */}
      <div
        className="breadcrumb-wrapper bg-cover"
        style={{ backgroundImage: "url('/assets/img/breadcrumb.jpg')" }}
      >
        <div className="container">
          <div className="page-heading">
            <div className="breadcrumb-sub-title">
              <FadeSection delay={0.3}><h1 className="text-white">Privacy Policy</h1></FadeSection>
            </div>
            <FadeSection delay={0.5}>
              <ul className="breadcrumb-items">
                <li><Link to="/"><i className="fa-solid fa-house"></i> Home</Link></li>
                <li>/</li>
                <li>Privacy Policy</li>
              </ul>
            </FadeSection>
          </div>
        </div>
      </div>

      {/* Content */}
      <section className="section-padding fix bg-white">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <FadeSection>
                <p className="text-muted mb-4">Last updated: 1 January {year}</p>
              </FadeSection>

              <FadeSection delay={0.1}>
                <h4>1. Who We Are</h4>
                <p>
                  Zikel Solutions ("we", "us", "our") is a software company registered in England and
                  Wales. We provide AI-enabled software platforms for children's residential homes,
                  healthcare organisations, and corporate teams. Our registered address and data
                  controller contact is: <a href="mailto:hello@zikel.com">hello@zikel.com</a>.
                </p>
                <p>
                  We are committed to protecting the privacy and security of all personal data we
                  process in accordance with the UK General Data Protection Regulation (UK GDPR) and
                  the Data Protection Act 2018.
                </p>
              </FadeSection>

              <FadeSection delay={0.15}>
                <h4 className="mt-4">2. Data We Collect</h4>
                <p>We may collect and process the following categories of personal data:</p>
                <ul>
                  <li><strong>Identity data:</strong> name, job title, role.</li>
                  <li><strong>Contact data:</strong> email address, telephone number, organisation name.</li>
                  <li><strong>Platform usage data:</strong> log activity, documentation records, timestamps, and workflow patterns generated through use of our software.</li>
                  <li><strong>Special category data (where applicable):</strong> data relating to children in care — including safeguarding records, health information, education records, and chronologies — processed on behalf of our client organisations as a data processor.</li>
                  <li><strong>Technical data:</strong> IP address, browser type, device information, and access logs.</li>
                  <li><strong>Marketing data:</strong> your preferences in receiving communications from us.</li>
                </ul>
              </FadeSection>

              <FadeSection delay={0.2}>
                <h4 className="mt-4">3. How We Use Your Data</h4>
                <p>We use personal data for the following purposes and on the following legal bases:</p>
                <ul>
                  <li><strong>To deliver our software services</strong> — contractual necessity (UK GDPR Art. 6(1)(b)).</li>
                  <li><strong>To process children's care records</strong> on behalf of registered children's home providers — as a data processor under a Data Processing Agreement, with the care provider acting as data controller.</li>
                  <li><strong>To comply with legal and regulatory obligations</strong> — including obligations under the Children Act 1989, the Care Standards Act 2000, and Ofsted regulations (UK GDPR Art. 6(1)(c)).</li>
                  <li><strong>To respond to enquiries and provide support</strong> — legitimate interests (UK GDPR Art. 6(1)(f)).</li>
                  <li><strong>To send marketing communications</strong> — only with your explicit consent (UK GDPR Art. 6(1)(a)); you may withdraw consent at any time.</li>
                  <li><strong>To improve and develop our platform</strong> — legitimate interests, using anonymised and aggregated data only.</li>
                </ul>
              </FadeSection>

              <FadeSection delay={0.25}>
                <h4 className="mt-4">4. Special Category Data — Children in Care</h4>
                <p>
                  Where our platform processes special category data relating to children in care
                  (including safeguarding chronologies, health records, and incident data), this is
                  carried out strictly:
                </p>
                <ul>
                  <li>Under a Data Processing Agreement with the registered children's home provider (the data controller).</li>
                  <li>In accordance with the explicit instructions of the data controller.</li>
                  <li>Subject to UK GDPR Article 9 safeguards for the processing of special category data.</li>
                  <li>On the basis of substantial public interest (UK GDPR Art. 9(2)(g)) and/or explicit consent where required.</li>
                </ul>
                <p>
                  Staff access to children's records is governed by strict role-based access controls.
                  All access is logged and fully auditable.
                </p>
              </FadeSection>

              <FadeSection delay={0.3}>
                <h4 className="mt-4">5. Data Storage and Security</h4>
                <p>
                  All data is stored on <strong>UK-hosted secure servers</strong>. We apply
                  ISO-aligned information security standards, including:
                </p>
                <ul>
                  <li>Encryption in transit (TLS) and at rest.</li>
                  <li>Role-based access control — staff see only the data their role permits.</li>
                  <li>Full audit trails on all data access and modifications.</li>
                  <li>Regular security reviews and vulnerability assessments.</li>
                  <li>Staff confidentiality obligations and data protection training.</li>
                </ul>
                <p>
                  We do not transfer personal data outside the United Kingdom without appropriate
                  safeguards in place.
                </p>
              </FadeSection>

              <FadeSection delay={0.35}>
                <h4 className="mt-4">6. Data Retention</h4>
                <p>
                  We retain personal data only for as long as necessary for the purposes for which it
                  was collected, or as required by law:
                </p>
                <ul>
                  <li>Children's care records: retained in line with the client organisation's statutory obligations (typically until the child's 25th birthday or longer as required by applicable regulations).</li>
                  <li>Contact and enquiry data: up to 2 years from last contact.</li>
                  <li>Platform usage and audit logs: up to 7 years for compliance purposes.</li>
                </ul>
                <p>On expiry of the retention period, data is securely deleted or anonymised.</p>
              </FadeSection>

              <FadeSection delay={0.4}>
                <h4 className="mt-4">7. Your Rights</h4>
                <p>Under UK GDPR, you have the following rights:</p>
                <ul>
                  <li><strong>Right of access</strong> — to obtain a copy of your personal data.</li>
                  <li><strong>Right to rectification</strong> — to correct inaccurate data.</li>
                  <li><strong>Right to erasure</strong> — to request deletion where there is no compelling reason for continued processing.</li>
                  <li><strong>Right to restriction</strong> — to limit how we use your data.</li>
                  <li><strong>Right to data portability</strong> — to receive your data in a structured, machine-readable format.</li>
                  <li><strong>Right to object</strong> — to processing based on legitimate interests.</li>
                  <li><strong>Rights related to automated decision-making</strong> — our AI provides guidance and alerts; it does not make binding automated decisions about individuals.</li>
                </ul>
                <p>
                  To exercise any of these rights, please contact us at{' '}
                  <a href="mailto:hello@zikel.com">hello@zikel.com</a>. We will respond within 30
                  days. If you are dissatisfied with our response, you have the right to lodge a
                  complaint with the Information Commissioner's Office (ICO) at{' '}
                  <a href="https://ico.org.uk" target="_blank" rel="noopener noreferrer">ico.org.uk</a>.
                </p>
              </FadeSection>

              <FadeSection delay={0.45}>
                <h4 className="mt-4">8. Cookies</h4>
                <p>
                  Our website uses essential cookies necessary for site functionality. We do not use
                  tracking or advertising cookies without your consent. You can manage cookie
                  preferences through your browser settings.
                </p>
              </FadeSection>

              <FadeSection delay={0.5}>
                <h4 className="mt-4">9. Third Parties</h4>
                <p>
                  We do not sell, rent, or share your personal data with third parties for marketing
                  purposes. We may share data with trusted service providers who support the delivery
                  of our platform (e.g. cloud infrastructure, email delivery), all of whom are bound
                  by appropriate data processing agreements and UK GDPR obligations.
                </p>
              </FadeSection>

              <FadeSection delay={0.55}>
                <h4 className="mt-4">10. Changes to This Policy</h4>
                <p>
                  We may update this Privacy Policy from time to time. The date at the top of this
                  page reflects the most recent revision. We encourage you to review this policy
                  periodically.
                </p>
              </FadeSection>

              <FadeSection delay={0.6}>
                <h4 className="mt-4">11. Contact Us</h4>
                <p>
                  For any privacy-related queries, please contact us at:<br />
                  <strong>Zikel Solutions</strong><br />
                  Email: <a href="mailto:hello@zikel.com">hello@zikel.com</a><br />
                  Hours: Monday–Friday, 09:00 AM – 06:00 PM
                </p>
              </FadeSection>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
