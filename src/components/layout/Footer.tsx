import { Link } from 'react-router-dom'

const QUICK_LINKS = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About Us' },
  { to: '/services', label: 'Our Services' },
  { to: '/contact', label: 'Contact Us' },
  { to: '/faq', label: 'FAQ' },
]

const SERVICE_LINKS = [
  { to: '/services/digital-filing-cabinet', label: 'Digital Filing Cabinet' },
  { to: '/services/ai-staff-guidance', label: 'AI Staff Guidance' },
  { to: '/services/healthcare-workflow', label: 'Healthcare Workflow' },
  { to: '/services/training-intelligence', label: 'Training Intelligence' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer id="it-footer" style={{ backgroundImage: 'url(/assets/img/home-1/hero/hero-bg.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
      {/* Main footer content */}
      <div className="container" style={{ paddingTop: '80px', paddingBottom: '60px' }}>
        <div className="row g-5">

          {/* Col 1 — Brand */}
          <div className="col-lg-3 col-md-6">
            <div style={{ marginBottom: '24px' }}>
              <Link to="/">
                <img
                  src="/assets/img/logo/white-logo.svg"
                  alt="Zikel Solutions"
                  style={{ height: '40px' }}
                />
              </Link>
            </div>
            <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '15px', lineHeight: '26px', marginBottom: '28px' }}>
              Intelligent guidance software for children's homes, healthcare institutions, and corporate teams — built to strengthen accountability and care standards.
            </p>
            <div style={{ display: 'flex', gap: '12px' }}>
              {[
                { icon: 'fa-facebook-f', href: '#' },
                { icon: 'fa-twitter', href: '#' },
                { icon: 'fa-linkedin-in', href: '#' },
                { icon: 'fa-instagram', href: '#' },
              ].map(({ icon, href }) => (
                <a
                  key={icon}
                  href={href}
                  style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '50%',
                    border: '1px solid rgba(255,255,255,0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'rgba(255,255,255,0.65)',
                    fontSize: '13px',
                    transition: 'all 0.3s',
                  }}
                  onMouseEnter={e => {
                    const el = e.currentTarget as HTMLAnchorElement
                    el.style.backgroundColor = '#F94D00'
                    el.style.borderColor = '#F94D00'
                    el.style.color = '#fff'
                  }}
                  onMouseLeave={e => {
                    const el = e.currentTarget as HTMLAnchorElement
                    el.style.backgroundColor = 'transparent'
                    el.style.borderColor = 'rgba(255,255,255,0.2)'
                    el.style.color = 'rgba(255,255,255,0.65)'
                  }}
                >
                  <i className={`fa-brands ${icon}`}></i>
                </a>
              ))}
            </div>
          </div>

          {/* Col 2 — Quick Links */}
          <div className="col-lg-2 col-md-6" style={{ paddingLeft: '40px' }}>
            <h6 style={{ color: '#fff', fontWeight: 600, fontSize: '16px', marginBottom: '24px', letterSpacing: '0.5px' }}>
              Quick Links
            </h6>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {QUICK_LINKS.map(({ to, label }) => (
                <li key={to} style={{ marginBottom: '12px' }}>
                  <Link
                    to={to}
                    style={{ color: 'rgba(255,255,255,0.65)', fontSize: '15px', textDecoration: 'none', transition: 'color 0.2s' }}
                    onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.color = '#F94D00' }}
                    onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.color = 'rgba(255,255,255,0.65)' }}
                  >
                    <i className="fa-solid fa-chevron-right" style={{ fontSize: '10px', marginRight: '8px', color: '#F94D00' }}></i>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Services */}
          <div className="col-lg-3 col-md-6">
            <h6 style={{ color: '#fff', fontWeight: 600, fontSize: '16px', marginBottom: '24px', letterSpacing: '0.5px' }}>
              Our Services
            </h6>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {SERVICE_LINKS.map(({ to, label }) => (
                <li key={to} style={{ marginBottom: '12px' }}>
                  <Link
                    to={to}
                    style={{ color: 'rgba(255,255,255,0.65)', fontSize: '15px', textDecoration: 'none', transition: 'color 0.2s' }}
                    onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.color = '#F94D00' }}
                    onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.color = 'rgba(255,255,255,0.65)' }}
                  >
                    <i className="fa-solid fa-chevron-right" style={{ fontSize: '10px', marginRight: '8px', color: '#F94D00' }}></i>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 — Contact */}
          <div className="col-lg-4 col-md-6">
            <h6 style={{ color: '#fff', fontWeight: 600, fontSize: '16px', marginBottom: '24px', letterSpacing: '0.5px' }}>
              Contact Info
            </h6>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {[
                { icon: 'fa-location-dot', text: 'Riverside Park EU-1001' },
                { icon: 'fa-envelope', text: 'contact@zikelsolutions.com', href: 'mailto:contact@zikelsolutions.com' },
                { icon: 'fa-phone', text: '+234 803 281 9367', href: 'tel:+2348032819367' },
                { icon: 'fa-clock', text: 'Mon–Fri, 09:00 AM – 06:00 PM' },
              ].map(({ icon, text, href }) => (
                <li key={icon} style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '18px' }}>
                  <span style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '50%',
                    backgroundColor: '#F94D00',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    fontSize: '13px',
                    color: '#fff',
                  }}>
                    <i className={`fa-solid ${icon}`}></i>
                  </span>
                  {href ? (
                    <a href={href} style={{ color: 'rgba(255,255,255,0.65)', fontSize: '15px', lineHeight: '22px', textDecoration: 'none' }}
                      onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.color = '#F94D00' }}
                      onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.color = 'rgba(255,255,255,0.65)' }}
                    >{text}</a>
                  ) : (
                    <span style={{ color: 'rgba(255,255,255,0.65)', fontSize: '15px', lineHeight: '22px' }}>{text}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }}>
        <div className="container" style={{ paddingTop: '20px', paddingBottom: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
          <p style={{ margin: 0, color: 'rgba(255,255,255,0.45)', fontSize: '14px' }}>
            &copy;{year} <span style={{ color: '#F94D00' }}>Zikel Solutions</span>. All rights reserved.
          </p>
          <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
            <Link
              to="/privacy-policy"
              style={{ color: 'rgba(255,255,255,0.45)', fontSize: '14px', textDecoration: 'none' }}
              onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.color = '#F94D00' }}
              onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.color = 'rgba(255,255,255,0.45)' }}
            >
              Privacy Policy
            </Link>
            <span style={{ color: 'rgba(255,255,255,0.2)' }}>|</span>
            <Link
              to="/terms-and-conditions"
              style={{ color: 'rgba(255,255,255,0.45)', fontSize: '14px', textDecoration: 'none' }}
              onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.color = '#F94D00' }}
              onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.color = 'rgba(255,255,255,0.45)' }}
            >
              Terms &amp; Conditions
            </Link>
          </div>
          <p style={{ margin: 0, color: 'rgba(255,255,255,0.45)', fontSize: '14px' }}>
            Designed &amp; built by <span style={{ color: '#F94D00' }}>Zikel</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
