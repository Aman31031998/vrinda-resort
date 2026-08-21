import React, { useState } from 'react';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  User,
  Copy,
  Check,
  Navigation,
  ExternalLink,
  PhoneCall
} from 'lucide-react';
import { resortConfig } from '../data/resortData';

export default function ContactSection() {
  const [copiedText, setCopiedText] = useState(null);

  const handleCopy = (text, label) => {
    navigator.clipboard.writeText(text);
    setCopiedText(label);
    setTimeout(() => setCopiedText(null), 2500);
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">

        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">Get In Touch</span>
          <h2 className="section-title">Contact & Location Information</h2>
          <p className="section-subtitle">
            Reach out to our event management team for personalized venue visits, customized catering menus, and wedding package inquiries
          </p>
          <div className="gold-divider">
            <div className="diamond"></div>
          </div>
        </div>

        <div className="contact-grid">

          {/* Contact Persons Cards */}
          <div className="contact-column team-column">
            <h3 className="column-title">
              <User size={20} className="col-icon" /> Direct Manager Contacts
            </h3>

            <div className="team-cards-list">
              {resortConfig.contact.team.map((person, index) => (
                <div key={index} className="person-card glass-card">
                  <div className="person-avatar">
                    <User size={24} className="avatar-icon" />
                  </div>
                  <div className="person-info">
                    <span className="person-role">{person.role}</span>
                    <h4 className="person-name">{person.name}</h4>
                    <a
                      href={`tel:${person.phone.replace(/\s+/g, '')}`}
                      className="person-phone-link"
                    >
                      <PhoneCall size={15} /> {person.phone}
                    </a>
                  </div>
                  <div className="person-actions">
                    <a
                      href={`tel:${person.phone.replace(/\s+/g, '')}`}
                      className="btn btn-emerald btn-call-sm"
                      title="Call Now"
                    >
                      <Phone size={15} /> Call
                    </a>
                    <button
                      className="btn btn-outline-gold btn-copy-sm"
                      onClick={() => handleCopy(person.phone, `person-${index}`)}
                      title="Copy Number"
                    >
                      {copiedText === `person-${index}` ? <Check size={15} className="text-green" /> : <Copy size={15} />}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Resort Info & Address Column */}
          <div className="contact-column info-column">
            <h3 className="column-title">
              <MapPin size={20} className="col-icon" /> Resort Address & Visit Hours
            </h3>

            <div className="venue-details-card glass-card">

              {/* Address Item */}
              <div className="detail-item">
                <div className="detail-icon-box">
                  <MapPin size={22} className="detail-icon" />
                </div>
                <div className="detail-content">
                  <h4 className="detail-title">Resort Address</h4>
                  <p className="detail-text">{resortConfig.contact.address}</p>
                  <p className="detail-sub">{resortConfig.contact.landmark}</p>
                </div>
              </div>

              {/* Operating Hours */}
              <div className="detail-item">
                <div className="detail-icon-box">
                  <Clock size={22} className="detail-icon" />
                </div>
                <div className="detail-content">
                  <h4 className="detail-title">Visiting & Office Hours</h4>
                  <p className="detail-text">{resortConfig.contact.operatingHours}</p>
                </div>
              </div>

              {/* Email Address */}
              <div className="detail-item">
                <div className="detail-icon-box">
                  <Mail size={22} className="detail-icon" />
                </div>
                <div className="detail-content">
                  <h4 className="detail-title">Official Email</h4>
                  <a href={`mailto:${resortConfig.contact.email}`} className="detail-link">
                    {resortConfig.contact.email}
                  </a>
                </div>
              </div>

              {/* Map Preview Placeholder / Directions */}
              <div className="map-embed-wrapper">
                <div className="map-placeholder">
                  <Navigation size={32} className="map-pin-pulse" />
                  <span className="map-title">{resortConfig.name} - Location Map</span>
                  <span className="map-sub">Easy connectivity from major highways & city center</span>
                  <a
                    href={resortConfig.contact.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline-gold map-link-btn"
                  >
                    <Navigation size={15} /> Open in Google Maps
                  </a>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>

      <style>{`
        .contact-section {
          padding: 4.5rem 0 5rem 0;
          background: #ffffff;
          position: relative;
        }

        .contact-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2.5rem;
          max-width: 1100px;
          margin: 0 auto;
        }

        .column-title {
          font-family: var(--font-serif-royal);
          font-size: 1.35rem;
          color: var(--regal-green);
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 1.5rem;
        }
        .col-icon {
          color: var(--primary-gold);
        }

        /* Team Column */
        .team-cards-list {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
          margin-bottom: 2rem;
        }
        .person-card {
          padding: 1.25rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
          border: 1.5px solid rgba(198, 146, 43, 0.25);
          transition: var(--transition);
        }
        .person-card:hover {
          border-color: var(--primary-gold);
          transform: translateY(-3px);
          box-shadow: var(--shadow-md);
        }
        .person-avatar {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background: var(--regal-green);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .avatar-icon {
          color: var(--gold-light);
        }
        .person-info {
          flex: 1;
        }
        .person-role {
          font-size: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 1.2px;
          color: var(--primary-gold);
          font-weight: 700;
        }
        .person-name {
          font-family: var(--font-serif-royal);
          font-size: 1.15rem;
          color: var(--regal-green);
          margin: 0.1rem 0;
        }
        .person-phone-link {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          font-size: 0.95rem;
          color: var(--text-dark);
          text-decoration: none;
          font-weight: 600;
          transition: var(--transition);
        }
        .person-phone-link:hover {
          color: var(--primary-gold);
        }
        .person-actions {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        .btn-call-sm {
          padding: 0.5rem 1rem;
          font-size: 0.85rem;
          border-radius: 6px;
        }
        .btn-copy-sm {
          padding: 0.5rem;
          border-radius: 6px;
        }
        .text-green {
          color: #10b981;
        }

        /* Quick Connect */
        .quick-connect-banner {
          background: linear-gradient(135deg, var(--regal-green) 0%, var(--regal-green-dark) 100%);
          border: 1px solid var(--border-gold);
          border-radius: 16px;
          padding: 1.5rem;
          color: #ffffff;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        .quick-badge {
          font-size: 0.72rem;
          text-transform: uppercase;
          letter-spacing: 1.5px;
          color: var(--gold-light);
          font-weight: 700;
        }
        .quick-text h4 {
          color: #ffffff;
          font-size: 1.1rem;
          margin: 0.2rem 0;
        }
        .quick-text p {
          font-size: 0.85rem;
          color: rgba(255, 255, 255, 0.75);
        }
        .quick-btn {
          width: 100%;
        }

        /* Venue Details Card */
        .venue-details-card {
          padding: 1.75rem;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        .detail-item {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
          padding-bottom: 1.25rem;
          border-bottom: 1px solid rgba(0,0,0,0.06);
        }
        .detail-item:last-of-type {
          border-bottom: none;
          padding-bottom: 0;
        }
        .detail-icon-box {
          width: 44px;
          height: 44px;
          border-radius: 12px;
          background: rgba(198, 146, 43, 0.12);
          border: 1px solid rgba(198, 146, 43, 0.25);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .detail-icon {
          color: var(--primary-gold);
        }
        .wa-bg {
          background: rgba(37, 211, 102, 0.15);
          border-color: rgba(37, 211, 102, 0.3);
        }
        .wa-detail-icon {
          color: #25d366;
        }
        .detail-content {
          flex: 1;
        }
        .detail-title {
          font-family: var(--font-serif-royal);
          font-size: 1rem;
          color: var(--regal-green);
          margin-bottom: 0.2rem;
        }
        .detail-text {
          font-size: 0.92rem;
          color: var(--text-body);
          line-height: 1.5;
        }
        .detail-sub {
          font-size: 0.78rem;
          color: var(--text-muted);
          margin-top: 0.2rem;
        }
        .detail-link {
          font-size: 0.92rem;
          color: var(--primary-gold);
          text-decoration: none;
          font-weight: 600;
          display: inline-flex;
          align-items: center;
          gap: 5px;
        }
        .detail-link:hover {
          text-decoration: underline;
        }
        .wa-color {
          color: #10b981;
        }

        /* Map Preview */
        .map-embed-wrapper {
          border-radius: 12px;
          overflow: hidden;
          background: var(--bg-cream);
          border: 1px solid var(--border-gold);
          margin-top: 0.5rem;
        }
        .map-placeholder {
          padding: 2rem 1.5rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 0.6rem;
        }
        .map-pin-pulse {
          color: var(--primary-gold);
          animation: pulseGold 2s infinite;
        }
        .map-title {
          font-family: var(--font-serif-royal);
          font-size: 1.05rem;
          font-weight: 700;
          color: var(--regal-green);
        }
        .map-sub {
          font-size: 0.82rem;
          color: var(--text-muted);
          margin-bottom: 0.5rem;
        }
        .map-link-btn {
          font-size: 0.85rem;
          padding: 0.6rem 1.2rem;
        }

        /* Media Queries */
        @media (min-width: 1024px) {
          .contact-grid {
            grid-template-columns: 1fr 1fr;
            align-items: start;
          }
        }
        @media (max-width: 480px) {
          .contact-section {
            padding: 3rem 0 4rem 0;
          }
          .person-card {
            flex-direction: column;
            text-align: center;
            gap: 0.75rem;
          }
          .person-actions {
            width: 100%;
            justify-content: center;
          }
          .btn-call-sm {
            flex: 1;
          }
        }
      `}</style>
    </section>
  );
}
