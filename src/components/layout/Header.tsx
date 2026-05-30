import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import {
  APP_LOGIN_URL,
  APP_REGISTER_URL,
  SOCIAL_LINKS,
} from '../../constants/links'

export default function Header() {
  const { pathname } = useLocation()
  const isHomePage = pathname === '/'
  const [scrolled, setScrolled] = useState(false)
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [sidebarPathname, setSidebarPathname] = useState(pathname)
  const isSidebarVisible = sidebarOpen && sidebarPathname === pathname

  const openSidebar = () => {
    setSidebarPathname(pathname)
    setSidebarOpen(true)
  }

  const closeSidebar = () => setSidebarOpen(false)

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
    document.body.style.overflowY = isSidebarVisible ? 'hidden' : ''
    return () => { document.body.style.overflowY = '' }
  }, [isSidebarVisible])

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
                  <i className="fa-solid fa-phone"></i>
                  <a href="tel:+2348032819367">+234 803 281 9367</a>
                </li>
                <li>।</li>
                <li>
                  <i className="fa-regular fa-envelope"></i>
                  <a href="mailto:contact@zikelsolutions.com">contact@zikelsolutions.com</a>
                </li>
              </ul>
            </div>
            <div className="header-right">
              <div className="social-icon">
                {SOCIAL_LINKS.map(({ label, href, icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={label}
                  >
                    <i className={`fa-brands ${icon}`}></i>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Offcanvas Sidebar */}
      <AnimatePresence>
        {isSidebarVisible && (
          <>
            <motion.div
              className="offcanvas__overlay"
              style={{ visibility: 'visible', zIndex: 9999998 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.45 }}
              exit={{ opacity: 0 }}
              onClick={closeSidebar}
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
                  {/* Logo + close */}
                  <div className="offcanvas__top mb-4 d-flex justify-content-between align-items-center">
                    <div className="offcanvas__logo">
                      <Link to="/" onClick={closeSidebar}>
                        <img src="/assets/img/logo/black-logo.svg" alt="Zikel Solutions" />
                      </Link>
                    </div>
                    <div className="offcanvas__close">
                      <button onClick={closeSidebar} aria-label="Close menu">
                        <i className="fas fa-times"></i>
                      </button>
                    </div>
                  </div>

                  {/* Nav links */}
                  <nav style={{ marginBottom: '24px' }}>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                      {navLinks.map((link) => (
                        <li key={link.to} style={{ borderBottom: '1px solid #efefef' }}>
                          <NavLink
                            to={link.to}
                            end={link.end}
                            onClick={closeSidebar}
                            className={({ isActive }) => isActive ? 'active' : ''}
                            style={{ display: 'block', fontSize: '19px', fontWeight: 600, padding: '15px 4px', color: 'var(--header)', textDecoration: 'none' }}
                          >
                            {link.label}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  </nav>

                  {/* Get Started CTA */}
                  <a
                    href={APP_REGISTER_URL}
                    className="theme-btn"
                    style={{ width: '100%', justifyContent: 'center', fontSize: '15px', marginBottom: '28px' }}
                    onClick={closeSidebar}
                  >
                    Get Started <i className="fa-solid fa-arrow-up-right"></i>
                  </a>

                  {/* Contact info */}
                  <div className="offcanvas__contact">
                    <h4 style={{ marginBottom: '16px', fontSize: '16px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Contact</h4>
                    <ul>
                      <li className="d-flex align-items-center" style={{ marginBottom: '10px' }}>
                        <div className="offcanvas__contact-icon mr-15">
                          <i className="fal fa-envelope"></i>
                        </div>
                        <div className="offcanvas__contact-text">
                          <a href="mailto:contact@zikelsolutions.com">contact@zikelsolutions.com</a>
                        </div>
                      </li>
                      <li className="d-flex align-items-center" style={{ marginBottom: '10px' }}>
                        <div className="offcanvas__contact-icon mr-15">
                          <i className="far fa-phone"></i>
                        </div>
                        <div className="offcanvas__contact-text">
                          <a href="tel:+2348032819367">+234 803 281 9367</a>
                        </div>
                      </li>
                    </ul>
                    <div className="social-icon d-flex align-items-center" style={{ marginTop: '16px' }}>
                      {SOCIAL_LINKS.map(({ label, href, icon }) => (
                        <a
                          key={label}
                          href={href}
                          target="_blank"
                          rel="noreferrer"
                          aria-label={label}
                        >
                          <i className={`fa-brands ${icon}`}></i>
                        </a>
                      ))}
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
                  <div className="header-desktop-cta-group d-none d-xl-flex align-items-center">
                    <a href={APP_LOGIN_URL} className="header-login-btn">
                      Login
                    </a>
                    <a
                      href={APP_REGISTER_URL}
                      className="theme-btn"
                      style={{ padding: '10px 22px', fontSize: '14px' }}
                    >
                      Get Started
                    </a>
                  </div>
                  <button
                    className="d-xl-none"
                    onClick={openSidebar}
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
    </>
  )
}
