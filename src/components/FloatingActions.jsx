import React from 'react';
import { Phone, MessageCircle, Calendar } from 'lucide-react';
import { resortConfig } from '../data/resortData';

export default function FloatingActions() {
  return (
    <div className="floating-bar-mobile">
      <a 
        href={`tel:${resortConfig.contact.primaryPhone.replace(/\s+/g, '')}`} 
        className="floating-btn float-call"
        aria-label="Call Vrinda Resort"
      >
        <Phone size={18} />
        <span>Call Now</span>
      </a>

      <a 
        href={`https://wa.me/${resortConfig.contact.whatsappNumber}?text=Hi%20Vrinda%20Resort,%20I%20would%20like%20to%20inquire%20about%20booking%20my%20wedding%20event.`} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="floating-btn float-whatsapp"
        aria-label="Chat on WhatsApp with Vrinda Resort"
      >
        <MessageCircle size={18} />
        <span>WhatsApp</span>
      </a>

      <a 
        href="#book-now" 
        className="floating-btn float-book"
        aria-label="Book wedding date"
      >
        <Calendar size={18} />
        <span>Book Date</span>
      </a>

      <style>{`
        .floating-bar-mobile {
          position: fixed;
          bottom: 0;
          left: 0;
          right: 0;
          z-index: 999;
          background: rgba(14, 43, 31, 0.96);
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
          border-top: 1.5px solid var(--primary-gold);
          display: flex;
          padding: 8px 12px;
          gap: 8px;
          box-shadow: 0 -4px 20px rgba(0,0,0,0.25);
        }

        .floating-btn {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          padding: 10px 4px;
          border-radius: 8px;
          font-size: 0.85rem;
          font-weight: 600;
          text-decoration: none;
          transition: var(--transition);
        }

        .float-call {
          background: #ffffff;
          color: var(--regal-green);
          border: 1px solid var(--border-gold);
        }

        .float-whatsapp {
          background: #25d366;
          color: #ffffff;
        }

        .float-book {
          background: linear-gradient(135deg, var(--gold-light) 0%, var(--primary-gold) 100%);
          color: var(--regal-green-dark);
          border: 1px solid var(--gold-light);
        }

        /* Only show on mobile / tablet */
        @media (min-width: 769px) {
          .floating-bar-mobile {
            display: none;
          }
        }
      `}</style>
    </div>
  );
}
