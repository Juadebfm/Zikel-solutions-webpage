import { Link } from 'react-router-dom'
import FadeSection from '../components/ui/FadeSection'

export default function TermsAndConditions() {
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
              <FadeSection delay={0.3}><h1 className="text-white">Terms &amp; Conditions</h1></FadeSection>
            </div>
            <FadeSection delay={0.5}>
              <ul className="breadcrumb-items">
                <li><Link to="/"><i className="fa-solid fa-house"></i> Home</Link></li>
                <li>/</li>
                <li>Terms &amp; Conditions</li>
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
                <h4>1. About These Terms</h4>
                <p>
                  These Terms and Conditions ("Terms") govern your access to and use of the software
                  platforms, websites, and services provided by <strong>Zikel Solutions</strong>
                  ("we", "us", "our"), a company registered in England and Wales. By accessing or
                  using our services, you agree to be bound by these Terms.
                </p>
                <p>
                  Please read these Terms carefully. If you do not agree with any part of them, you
                  must not use our services.
                </p>
              </FadeSection>

              <FadeSection delay={0.15}>
                <h4 className="mt-4">2. Our Services</h4>
                <p>
                  Zikel Solutions provides AI-enabled software platforms designed for children's
                  residential homes, healthcare organisations, and corporate teams. Our services
                  include but are not limited to:
                </p>
                <ul>
                  <li>Digital Filing Cabinet for Children's Homes — including Reg 44 &amp; Reg 45 evidence pack generation, safeguarding chronology auto-build, risk escalation alerts, and PACE-informed reflective recording prompts.</li>
                  <li>AI Staff Guidance &amp; Monitoring System — including pattern mapping, RI dashboards, and supervision triggers.</li>
                  <li>Training &amp; Professional Development Intelligence.</li>
                  <li>Healthcare Workflow Support Software.</li>
                  <li>Consultation and organisational needs assessment.</li>
                </ul>
                <p>
                  We reserve the right to modify, suspend, or discontinue any part of our services
                  at any time with reasonable notice.
                </p>
              </FadeSection>

              <FadeSection delay={0.2}>
                <h4 className="mt-4">3. Client Responsibilities</h4>
                <p>As a client or user of our platform, you agree to:</p>
                <ul>
                  <li>Provide accurate and complete information when registering or submitting enquiries.</li>
                  <li>Use our platform only for lawful purposes and in accordance with applicable legislation, including the Children Act 1989, the Care Standards Act 2000, the Health and Social Care Act 2008, and UK GDPR.</li>
                  <li>Ensure that all staff granted access to the platform are appropriately trained, DBS-checked where required, and authorised to access the data within their role.</li>
                  <li>Act as the data controller for all personal and special category data relating to children or service users entered into our platform, and maintain a lawful basis for such processing.</li>
                  <li>Not share login credentials or access the platform on behalf of any unauthorised third party.</li>
                  <li>Notify us promptly of any suspected data breach, unauthorised access, or security incident.</li>
                </ul>
              </FadeSection>

              <FadeSection delay={0.25}>
                <h4 className="mt-4">4. Data Processing</h4>
                <p>
                  Where you use our platform to process personal data (including special category
                  data relating to children in care), Zikel Solutions acts as a <strong>data
                  processor</strong> on your behalf, and you act as the <strong>data
                  controller</strong>. This relationship is governed by a separate Data Processing
                  Agreement (DPA), which forms part of your service agreement with us.
                </p>
                <p>
                  All data is stored on UK-hosted secure servers. We apply ISO-aligned information
                  security standards and are fully GDPR compliant. For full details, please refer to
                  our <Link to="/privacy-policy">Privacy Policy</Link>.
                </p>
              </FadeSection>

              <FadeSection delay={0.3}>
                <h4 className="mt-4">5. Intellectual Property</h4>
                <p>
                  All intellectual property rights in our platform, software, content, algorithms,
                  and documentation are owned by Zikel Solutions or our licensors. Nothing in these
                  Terms grants you ownership of any intellectual property.
                </p>
                <p>
                  You are granted a limited, non-exclusive, non-transferable licence to use our
                  platform for the purposes described in your service agreement. You must not:
                </p>
                <ul>
                  <li>Copy, reproduce, or distribute any part of our software or content.</li>
                  <li>Reverse engineer, decompile, or attempt to extract source code from our platform.</li>
                  <li>Use our platform to build a competing product or service.</li>
                </ul>
              </FadeSection>

              <FadeSection delay={0.35}>
                <h4 className="mt-4">6. Payment and Subscription</h4>
                <p>
                  Access to our software platforms is provided on a subscription or licence basis.
                  Specific pricing, payment terms, and contract duration are set out in your
                  individual service agreement. Unless otherwise stated:
                </p>
                <ul>
                  <li>Fees are invoiced in advance and are non-refundable except where required by law.</li>
                  <li>We reserve the right to adjust pricing with 30 days' written notice.</li>
                  <li>Late payment may result in suspension of access to the platform.</li>
                </ul>
              </FadeSection>

              <FadeSection delay={0.4}>
                <h4 className="mt-4">7. Limitation of Liability</h4>
                <p>
                  To the maximum extent permitted by law, Zikel Solutions shall not be liable for:
                </p>
                <ul>
                  <li>Any indirect, incidental, special, or consequential loss or damage.</li>
                  <li>Loss of data, revenue, profit, or business opportunity.</li>
                  <li>Any failure or delay caused by circumstances beyond our reasonable control.</li>
                </ul>
                <p>
                  Our total aggregate liability to you in respect of any claim shall not exceed the
                  total fees paid by you to us in the 12 months preceding the claim.
                </p>
                <p>
                  Nothing in these Terms excludes or limits our liability for death or personal
                  injury caused by negligence, fraud, or any other liability that cannot be excluded
                  by law.
                </p>
              </FadeSection>

              <FadeSection delay={0.45}>
                <h4 className="mt-4">8. Regulatory Compliance</h4>
                <p>
                  Our platform is designed to support compliance with applicable regulations,
                  including Regulation 44 and Regulation 45 of the Children's Homes (England)
                  Regulations 2015. However, ultimate responsibility for regulatory compliance
                  rests with the registered provider and Responsible Individual of each children's
                  home. Our software is a tool to support — not to replace — professional judgement,
                  supervision, and leadership.
                </p>
                <p>
                  We make no warranty that use of our platform will guarantee a specific Ofsted
                  inspection outcome or regulatory compliance status.
                </p>
              </FadeSection>

              <FadeSection delay={0.5}>
                <h4 className="mt-4">9. Confidentiality</h4>
                <p>
                  Both parties agree to maintain the confidentiality of information shared in
                  connection with the provision of our services and not to disclose such information
                  to any third party without prior written consent, except as required by law.
                </p>
              </FadeSection>

              <FadeSection delay={0.55}>
                <h4 className="mt-4">10. Termination</h4>
                <p>
                  Either party may terminate the service agreement with written notice as specified
                  in the agreement. We may terminate or suspend access immediately where:
                </p>
                <ul>
                  <li>You breach these Terms or your service agreement.</li>
                  <li>We reasonably believe your use of the platform is unlawful or poses a risk to data security.</li>
                  <li>Payment obligations have not been met.</li>
                </ul>
                <p>
                  On termination, we will provide a data export in an agreed format within 30 days,
                  after which all your data will be securely deleted from our systems.
                </p>
              </FadeSection>

              <FadeSection delay={0.6}>
                <h4 className="mt-4">11. Governing Law</h4>
                <p>
                  These Terms and any dispute or claim arising out of or in connection with them
                  shall be governed by and construed in accordance with the laws of England and
                  Wales. You and we both agree to submit to the exclusive jurisdiction of the courts
                  of England and Wales.
                </p>
              </FadeSection>

              <FadeSection delay={0.65}>
                <h4 className="mt-4">12. Changes to These Terms</h4>
                <p>
                  We may update these Terms from time to time. We will notify you of any material
                  changes with at least 14 days' notice. Continued use of our services after the
                  effective date of changes constitutes acceptance of the revised Terms.
                </p>
              </FadeSection>

              <FadeSection delay={0.7}>
                <h4 className="mt-4">13. Contact</h4>
                <p>
                  For any questions regarding these Terms, please contact:<br />
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
