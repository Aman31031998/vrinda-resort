import React, { useState, useEffect } from 'react';
import { Phone, Calendar, Menu, X, Sparkles, MessageCircle } from 'lucide-react';
import { resortConfig } from '../data/resortData';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Amenities', href: '#amenities' },
    { name: 'Book Venue', href: '#book-now' },
    { name: 'Contact Us', href: '#contact' },
  ];

  return (
    <>
      {/* Top Notification Bar */}
      <div className="top-banner">
        <div className="container banner-content">
          <span className="banner-badge">
            <Sparkles size={14} className="sparkle-icon" /> Wedding Season Bookings Open
          </span>
          <div className="banner-contact">
            <a href={`tel:${resortConfig.contact.primaryPhone.replace(/\s+/g, '')}`} className="banner-link">
              <Phone size={13} /> {resortConfig.contact.primaryPhone}
            </a>
            <span className="banner-divider">|</span>
            <a 
              href={`https://wa.me/${resortConfig.contact.whatsappNumber}?text=Hi%20Vrinda%20Resort,%20I%20would%20like%20to%20inquire%20about%20wedding%20venue%20availability`}
              target="_blank" 
              rel="noopener noreferrer"
              className="banner-link whatsapp-text"
            >
              <MessageCircle size={13} /> WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <header className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
        <div className="container nav-container">
          {/* Logo / Brand */}
          <a href="#home" className="brand-logo">
            <span className="brand-title">{resortConfig.name}</span>
            <span className="brand-subtitle">Wedding Resort & Banquets</span>
          </a>

          {/* Desktop Nav */}
          <nav className="desktop-nav">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="nav-link">
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action CTA */}
          <div className="nav-actions">
            <a href="#book-now" className="btn btn-gold nav-cta">
              <Calendar size={16} /> Book Date
            </a>
            
            {/* Mobile Menu Trigger */}
            <button 
              className="mobile-menu-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="mobile-dropdown">
            <div className="mobile-dropdown-links">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  className="mobile-nav-link"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <div className="mobile-dropdown-cta">
                <a 
                  href="#book-now" 
                  className="btn btn-gold btn-full"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Calendar size={18} /> Book Venue Now
                </a>
                <a 
                  href={`tel:${resortConfig.contact.primaryPhone.replace(/\s+/g, '')}`} 
                  className="btn btn-emerald btn-full"
                >
                  <Phone size={18} /> Call: {resortConfig.contact.primaryPhone}
                </a>
              </div>
            </div>
          </div>
        )}
      </header>

      <style>{`
        .top-banner {
          background: var(--regal-green-dark);
          color: var(--gold-lighter);
          font-size: 0.82rem;
          padding: 0.4rem 0;
          border-bottom: 1px solid rgba(198, 146, 43, 0.3);
        }
        .banner-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .banner-badge {
          display: flex;
          align-items: center;
          gap: 6px;
          color: var(--gold-light);
          font-weight: 500;
        }
        .sparkle-icon {
          color: var(--gold-light);
          animation: pulseGold 2s infinite;
        }
        .banner-contact {
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .banner-link {
          color: var(--gold-lighter);
          text-decoration: none;
          display: flex;
          align-items: center;
          gap: 5px;
          transition: var(--transition);
        }
        .banner-link:hover {
          color: var(--gold-light);
        }
        .banner-divider {
          opacity: 0.4;
        }
        .whatsapp-text {
          color: #55efc4;
        }

        /* Navbar */
        .navbar {
          position: sticky;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          background: rgba(250, 246, 240, 0.94);
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
          border-bottom: 1px solid var(--border-gold);
          transition: var(--transition);
        }
        .navbar-scrolled {
          background: rgba(255, 255, 255, 0.98);
          box-shadow: var(--shadow-md);
        }
        .nav-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 0.75rem;
          padding-bottom: 0.75rem;
        }
        .brand-logo {
          display: flex;
          flex-direction: column;
          text-decoration: none;
        }
        .brand-title {
          font-family: var(--font-serif-royal);
          font-size: 1.55rem;
          font-weight: 800;
          color: var(--regal-green);
          letter-spacing: 1px;
          line-height: 1.1;
        }
        .brand-subtitle {
          font-size: 0.68rem;
          text-transform: uppercase;
          letter-spacing: 1.8px;
          color: var(--primary-gold);
          font-weight: 600;
        }
        .desktop-nav {
          display: none;
          align-items: center;
          gap: 2rem;
        }
        .nav-link {
          text-decoration: none;
          color: var(--text-dark);
          font-size: 0.95rem;
          font-weight: 500;
          position: relative;
          transition: var(--transition);
          padding: 0.25rem 0;
        }
        .nav-link:hover {
          color: var(--primary-gold);
        }
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 2px;
          background: var(--primary-gold);
          transition: width 0.25s ease;
        }
        .nav-link:hover::after {
          width: 100%;
        }
        .nav-actions {
          display: flex;
          align-items: center;
          gap: 1rem;
        }
        .nav-cta {
          display: none;
          padding: 0.6rem 1.25rem;
          font-size: 0.88rem;
        }
        .mobile-menu-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          background: transparent;
          border: none;
          color: var(--regal-green);
          cursor: pointer;
          padding: 4px;
        }

        /* Mobile Dropdown */
        .mobile-dropdown {
          background: #ffffff;
          border-bottom: 2px solid var(--primary-gold);
          box-shadow: var(--shadow-lg);
          padding: 1.25rem;
          animation: fadeIn 0.25s ease;
        }
        .mobile-dropdown-links {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }
        .mobile-nav-link {
          text-decoration: none;
          color: var(--text-dark);
          font-size: 1.05rem;
          font-weight: 600;
          padding: 0.6rem 0.5rem;
          border-bottom: 1px solid rgba(0,0,0,0.05);
        }
        .mobile-nav-link:hover {
          color: var(--primary-gold);
          padding-left: 0.75rem;
        }
        .mobile-dropdown-cta {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          margin-top: 0.75rem;
          padding-top: 0.5rem;
        }
        .btn-full {
          width: 100%;
        }

        /* Media Queries */
        @media (min-width: 768px) {
          .desktop-nav {
            display: flex;
          }
          .nav-cta {
            display: inline-flex;
          }
          .mobile-menu-btn {
            display: none;
          }
          .brand-title {
            font-size: 1.85rem;
          }
        }
        @media (max-width: 480px) {
          .top-banner {
            font-size: 0.75rem;
          }
          .banner-contact {
            gap: 8px;
          }
          .brand-title {
            font-size: 1.35rem;
          }
        }
      `}</style>
    </>
  );
}
