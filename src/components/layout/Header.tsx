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

  // Prevent body scroll when sidebar open
  useEffect(() => {
    document.body.style.overflow = sidebarOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
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
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSidebarOpen(false)}
            />
            <motion.div
              className="fix-area"
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              style={{ display: 'block' }}
            >
              <div className="offcanvas__info">
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
                <div className="header-btn">
                  <h6>
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
                  <div className="header__hamburger d-xl-none my-auto">
                    <button
                      className="sidebar__toggle"
                      onClick={() => setSidebarOpen(true)}
                      aria-label="Open menu"
                      style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer' }}
                    >
                      <i className="fas fa-bars"></i>
                    </button>
                  </div>
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
