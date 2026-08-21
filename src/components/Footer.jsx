import React from 'react';
import { Sparkles, Heart, ArrowUp, Phone, Mail, MapPin } from 'lucide-react';
import { resortConfig } from '../data/resortData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="resort-footer">
      <div className="container">
        
        <div className="footer-top">
          {/* Brand Info */}
          <div className="footer-brand-col">
            <h3 className="footer-brand-title">{resortConfig.name}</h3>
            <p className="footer-tagline">{resortConfig.tagline}</p>
            <p className="footer-about">
              A premier royal destination resort designed exclusively to transform wedding dreams into everlasting memories.
            </p>
          </div>

          {/* Quick Links */}
          <div className="footer-links-col">
            <h4 className="footer-col-heading">Quick Navigation</h4>
            <ul className="footer-links-list">
              <li><a href="#home">Home</a></li>
              <li><a href="#gallery">Resort Gallery & Carousel</a></li>
              <li><a href="#amenities">Venue Amenities & Hall Specs</a></li>
              <li><a href="#book-now">Booking Inquiry Form</a></li>
              <li><a href="#contact">Contact & Location</a></li>
            </ul>
          </div>

          {/* Direct Support */}
          <div className="footer-contact-col">
            <h4 className="footer-col-heading">Direct Helpline</h4>
            <p className="footer-contact-item">
              <Phone size={15} className="f-icon" /> {resortConfig.contact.primaryPhone}
            </p>
            <p className="footer-contact-item">
              <Mail size={15} className="f-icon" /> {resortConfig.contact.email}
            </p>
            <p className="footer-contact-item">
              <MapPin size={15} className="f-icon" /> {resortConfig.contact.address}
            </p>
          </div>
        </div>

        <div className="footer-divider"></div>

        <div className="footer-bottom">
          <p className="copyright-text">
            © {new Date().getFullYear()} <strong>{resortConfig.name}</strong>. All Rights Reserved. Crafted with <Heart size={13} className="heart-icon" /> for Perfect Weddings.
          </p>
          <button onClick={scrollToTop} className="back-to-top-btn" title="Back to top">
            <span>Back to top</span> <ArrowUp size={16} />
          </button>
        </div>

      </div>

      <style>{`
        .resort-footer {
          background: var(--regal-green-dark);
          color: #ffffff;
          padding: 4rem 0 5rem 0;
          border-top: 3px solid var(--primary-gold);
          position: relative;
        }

        .footer-top {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2.5rem;
          margin-bottom: 2.5rem;
        }

        .footer-brand-title {
          font-family: var(--font-serif-royal);
          font-size: 1.8rem;
          color: #ffffff;
          margin-bottom: 0.25rem;
        }
        .footer-tagline {
          font-family: var(--font-subheading);
          font-size: 1.15rem;
          color: var(--gold-light);
          font-style: italic;
          margin-bottom: 1rem;
        }
        .footer-about {
          font-size: 0.88rem;
          color: rgba(255, 255, 255, 0.7);
          line-height: 1.6;
          max-width: 380px;
        }

        .footer-col-heading {
          font-family: var(--font-serif-royal);
          font-size: 1.1rem;
          color: var(--gold-lighter);
          margin-bottom: 1.25rem;
          letter-spacing: 0.5px;
        }

        .footer-links-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.65rem;
        }
        .footer-links-list a {
          color: rgba(255, 255, 255, 0.75);
          text-decoration: none;
          font-size: 0.9rem;
          transition: var(--transition);
          display: inline-block;
        }
        .footer-links-list a:hover {
          color: var(--gold-light);
          transform: translateX(4px);
        }

        .footer-contact-item {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          color: rgba(255, 255, 255, 0.75);
          font-size: 0.88rem;
          margin-bottom: 0.75rem;
          line-height: 1.4;
        }
        .f-icon {
          color: var(--gold-light);
          flex-shrink: 0;
          margin-top: 3px;
        }

        .footer-divider {
          height: 1px;
          background: rgba(255, 255, 255, 0.1);
          margin-bottom: 1.5rem;
        }

        .footer-bottom {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
          text-align: center;
          font-size: 0.85rem;
          color: rgba(255, 255, 255, 0.6);
        }
        .heart-icon {
          color: #ff7675;
          display: inline-block;
          vertical-align: middle;
        }
        .back-to-top-btn {
          background: rgba(198, 146, 43, 0.15);
          border: 1px solid var(--border-gold);
          color: var(--gold-lighter);
          padding: 0.4rem 1rem;
          border-radius: 50px;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 0.8rem;
          font-family: var(--font-sans);
          transition: var(--transition);
        }
        .back-to-top-btn:hover {
          background: var(--primary-gold);
          color: var(--regal-green-dark);
        }

        @media (min-width: 768px) {
          .footer-top {
            grid-template-columns: 1.5fr 1fr 1fr;
          }
          .footer-bottom {
            flex-direction: row;
            justify-content: space-between;
          }
          .resort-footer {
            padding: 4rem 0 3rem 0;
          }
        }
      `}</style>
    </footer>
  );
}
