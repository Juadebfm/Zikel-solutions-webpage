import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import WaitlistModal from '../ui/WaitlistModal'

export default function Header() {
  const { pathname } = useLocation()
  const isHomePage = pathname === '/'
  const [scrolled, setScrolled] = useState(false)
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [waitlistOpen, setWaitlistOpen] = useState(false)

  // Transparent header only on home page hero; all other pages start sticky
  const isSticky = !isHomePage || scrolled

  // Sticky header on scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 250)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close sidebar on route change (e.g. browser back/forward)
  useEffect(() => {
    setSidebarOpen(false)
  }, [pathname])

  // Prevent body scroll when sidebar open
  useEffect(() => {
    document.body.style.overflowY = sidebarOpen ? 'hidden' : ''
    return () => { document.body.style.overflowY = '' }
  }, [sidebarOpen])

  const navLinks = [
    { to: '/', label: 'Home', end: true },
    { to: '/about', label: 'About Us' },
    { to: '/services', label: 'Our Services' },
    { to: '/contact', label: 'Contact Us' },
  ]

  return (
    <>
      {/* Header Top Bar */}
      <div className="header-top-section">
        <div className="container-fluid">
          <div className="header-top-wrapper">
            <div className="header-left">
              <ul className="list">
                <li>
                  <i className="fa-solid fa-location-dot"></i>
                  Riverside Park EU-1001
                </li>
                <li>।</li>
                <li>
                  <i className="fa-regular fa-envelope"></i>
                  <a href="mailto:contact@zikelsolutions.com">contact@zikelsolutions.com</a>
                </li>
              </ul>
            </div>
            <div className="header-right">
              <span>
                <i className="fa-regular fa-clock"></i> Mon–Fri 09:00 AM – 06:00 PM
              </span>
              <div className="social-icon">
                <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
                <a href="#"><i className="fa-brands fa-twitter"></i></a>
                <a href="#"><i className="fa-brands fa-linkedin"></i></a>
                <a href="#"><i className="fa-brands fa-instagram"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Offcanvas Sidebar */}
      <AnimatePresence>
        {sidebarOpen && (
          <>
            <motion.div
              className="offcanvas__overlay"
              style={{ visibility: 'visible', zIndex: 9999998 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSidebarOpen(false)}
            />
            <motion.div
              className="offcanvas__info"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
            >
              <div className="offcanvas__wrapper">
                  <div className="offcanvas__content">
                    <div className="offcanvas__top mb-5 d-flex justify-content-between align-items-center">
                      <div className="offcanvas__logo">
                        <Link to="/" onClick={() => setSidebarOpen(false)}>
                          <img src="/assets/img/logo/black-logo.svg" alt="Zikel Solutions" />
                        </Link>
                      </div>
                      <div className="offcanvas__close">
                        <button onClick={() => setSidebarOpen(false)} aria-label="Close menu">
                          <i className="fas fa-times"></i>
                        </button>
                      </div>
                    </div>
                    <div className="mobile-menu fix mb-3">
                      <nav>
                        <ul>
                          {navLinks.map((link) => (
                            <li key={link.to}>
                              <NavLink
                                to={link.to}
                                end={link.end}
                                onClick={() => setSidebarOpen(false)}
                                className={({ isActive }) => isActive ? 'active' : ''}
                              >
                                {link.label}
                              </NavLink>
                            </li>
                          ))}
                        </ul>
                      </nav>
                    </div>
                    <div className="offcanvas__contact d-xl-block">
                      <h4>Contact Info</h4>
                      <ul>
                        <li className="d-flex align-items-center">
                          <div className="offcanvas__contact-icon">
                            <i className="fal fa-map-marker-alt"></i>
                          </div>
                          <div className="offcanvas__contact-text">
                            <a href="#">Main Street, Melbourne, Australia</a>
                          </div>
                        </li>
                        <li className="d-flex align-items-center">
                          <div className="offcanvas__contact-icon mr-15">
                            <i className="fal fa-envelope"></i>
                          </div>
                          <div className="offcanvas__contact-text">
                            <a href="mailto:contact@zikelsolutions.com">contact@zikelsolutions.com</a>
                          </div>
                        </li>
                        <li className="d-flex align-items-center">
                          <div className="offcanvas__contact-icon mr-15">
                            <i className="fal fa-clock"></i>
                          </div>
                          <div className="offcanvas__contact-text">
                            <a href="#">Mon–Friday, 09am–05pm</a>
                          </div>
                        </li>
                        <li className="d-flex align-items-center">
                          <div className="offcanvas__contact-icon mr-15">
                            <i className="far fa-phone"></i>
                          </div>
                          <div className="offcanvas__contact-text">
                            <a href="tel:+2348032819367">+234 803 281 9367</a>
                          </div>
                        </li>
                      </ul>
                      <div className="social-icon d-flex align-items-center">
                        <a href="#"><i className="fab fa-facebook-f"></i></a>
                        <a href="#"><i className="fab fa-twitter"></i></a>
                        <a href="#"><i className="fab fa-youtube"></i></a>
                        <a href="#"><i className="fab fa-linkedin-in"></i></a>
                      </div>
                    </div>
                  </div>
                </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Main Header */}
      <header id="header-sticky" className={`header-1${isSticky ? ' sticky' : ''}`}>
        <div className="container-fluid">
          <div className="mega-menu-wrapper">
            <div className="header-main">
              <div className="header-left">
                <div className="logo">
                  <Link to="/" className="header-logo">
                    <img src="/assets/img/logo/white-logo.svg" alt="Zikel Solutions" />
                  </Link>
                  <Link to="/" className="header-logo-2">
                    <img src="/assets/img/logo/black-logo.svg" alt="Zikel Solutions" />
                  </Link>
                </div>
              </div>
              <div className="mean__menu-wrapper">
                <div className="main-menu">
                  <nav>
                    <ul>
                      {navLinks.map((link) => (
                        <li key={link.to}>
                          <NavLink
                            to={link.to}
                            end={link.end}
                            className={({ isActive }) => isActive ? 'active' : ''}
                          >
                            {link.label}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  </nav>
                </div>
              </div>
              <div className="header-right d-flex justify-content-end align-items-center">
                <div className="header-btn d-flex align-items-center">
                  <h6 className="d-none d-xl-block" style={{ margin: 0 }}>
                    <i className="fa-regular fa-phone-volume"></i>
                    <a href="tel:+2348032819367">+234 803 281 9367</a>
                  </h6>
                  <button
                    onClick={() => setWaitlistOpen(true)}
                    className="theme-btn d-none d-xl-inline-flex"
                    style={{ padding: '10px 22px', fontSize: '14px', marginLeft: '16px' }}
                  >
                    Join Waitlist
                  </button>
                  <button
                    className="d-xl-none"
                    onClick={() => setSidebarOpen(true)}
                    aria-label="Open menu"
                    style={{
                      background: 'none',
                      border: 'none',
                      padding: '12px',
                      cursor: 'pointer',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '5px',
                      marginLeft: '12px',
                      position: 'relative',
                      zIndex: 100,
                      minWidth: '44px',
                      minHeight: '44px',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <span style={{ width: '24px', height: '2.5px', background: isSticky ? '#1a1a2b' : '#fff', borderRadius: '2px', transition: 'background 0.3s' }} />
                    <span style={{ width: '18px', height: '2.5px', background: isSticky ? '#1a1a2b' : '#fff', borderRadius: '2px', transition: 'background 0.3s' }} />
                    <span style={{ width: '24px', height: '2.5px', background: isSticky ? '#1a1a2b' : '#fff', borderRadius: '2px', transition: 'background 0.3s' }} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <WaitlistModal open={waitlistOpen} onClose={() => setWaitlistOpen(false)} />
    </>
  )
}
