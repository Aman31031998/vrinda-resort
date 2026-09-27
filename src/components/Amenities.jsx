import React from 'react';
import { 
  Crown, 
  Trees, 
  BedDouble, 
  UtensilsCrossed, 
  Sparkles, 
  Car, 
  ShieldCheck, 
  Music,
  Users,
  Maximize,
  CheckCircle
} from 'lucide-react';
import { resortConfig } from '../data/resortData';

// Icon Map
const iconMap = {
  Crown: Crown,
  Trees: Trees,
  BedDouble: BedDouble,
  UtensilsCrossed: UtensilsCrossed,
  Sparkles: Sparkles,
  Car: Car,
  ShieldCheck: ShieldCheck,
  Music: Music,
};

const statIcons = [Users, Maximize, UtensilsCrossed, Car];

export default function Amenities() {
  return (
    <section id="amenities" className="amenities-section">
      <div className="container">
        
        {/* Stats Strip */}
        <div className="stats-strip-container">
          <div className="stats-grid">
            {resortConfig.stats.map((stat, idx) => {
              const StatIcon = statIcons[idx % statIcons.length];
              return (
                <div key={idx} className="stat-card">
                  <div className="stat-icon-wrap">
                    <StatIcon size={24} className="stat-icon" />
                  </div>
                  <div className="stat-info">
                    <span className="stat-value">{stat.value}</span>
                    <span className="stat-label">{stat.label}</span>
                    <span className="stat-desc">{stat.desc}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">Grand Infrastructure</span>
          <h2 className="section-title">Every corner of Vrinda Resort is sculpted to host magnificent Indian weddings and cherished festivities</h2>
          <div className="gold-divider">
            <div className="diamond"></div>
          </div>
        </div>

        {/* Amenities Cards Grid */}
        <div className="amenities-grid">
          {resortConfig.amenities.map((item, index) => {
            const IconComponent = iconMap[item.icon] || Sparkles;
            return (
              <div key={index} className="amenity-card">
                <div className="amenity-icon-box">
                  <IconComponent size={28} className="amenity-icon" />
                </div>
                <div className="amenity-body">
                  <h3 className="amenity-title">{item.title}</h3>
                  <p className="amenity-text">{item.description}</p>
                  <div className="amenity-badge">
                    <CheckCircle size={13} /> Included with venue
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Event Types Strip */}
        <div className="events-banner">
          <div className="events-banner-content">
            <div className="events-text">
              <h3 className="events-title">Celebrations We Host</h3>
              <p className="events-sub">From intimate rituals to mega destination weddings</p>
            </div>
            <div className="events-pills">
              {resortConfig.eventTypes.map((type, i) => (
                <span key={i} className="event-pill">
                  ✦ {type}
                </span>
              ))}
            </div>
          </div>
        </div>

      </div>

      <style>{`
        .amenities-section {
          padding: 4rem 0;
          background: #ffffff;
          position: relative;
        }

        /* Stats Strip */
        .stats-strip-container {
          margin-top: -5.5rem;
          margin-bottom: 4.5rem;
          position: relative;
          z-index: 20;
        }
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1rem;
          background: var(--regal-green);
          padding: 1.75rem 1.25rem;
          border-radius: 20px;
          border: 2px solid var(--primary-gold);
          box-shadow: 0 15px 35px rgba(14, 43, 31, 0.25);
        }
        .stat-card {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 0.5rem;
        }
        .stat-icon-wrap {
          width: 50px;
          height: 50px;
          border-radius: 14px;
          background: rgba(198, 146, 43, 0.2);
          border: 1px solid var(--gold-light);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .stat-icon {
          color: var(--gold-light);
        }
        .stat-info {
          display: flex;
          flex-direction: column;
        }
        .stat-value {
          font-family: var(--font-serif-royal);
          font-size: 1.6rem;
          font-weight: 800;
          color: #ffffff;
          line-height: 1.1;
        }
        .stat-label {
          font-size: 0.88rem;
          font-weight: 600;
          color: var(--gold-lighter);
        }
        .stat-desc {
          font-size: 0.75rem;
          color: rgba(255, 255, 255, 0.65);
        }

        /* Amenities Grid */
        .amenities-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.5rem;
          margin-bottom: 3.5rem;
        }
        .amenity-card {
          background: var(--bg-cream);
          border: 1px solid rgba(198, 146, 43, 0.2);
          border-radius: 16px;
          padding: 1.75rem;
          transition: var(--transition);
          display: flex;
          flex-direction: column;
          gap: 1rem;
          position: relative;
          overflow: hidden;
        }
        .amenity-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 3px;
          background: linear-gradient(90deg, transparent, var(--primary-gold), transparent);
          opacity: 0;
          transition: var(--transition);
        }
        .amenity-card:hover {
          transform: translateY(-5px);
          box-shadow: var(--shadow-lg);
          border-color: var(--primary-gold);
          background: #ffffff;
        }
        .amenity-card:hover::before {
          opacity: 1;
        }
        .amenity-icon-box {
          width: 56px;
          height: 56px;
          border-radius: 14px;
          background: rgba(14, 43, 31, 0.06);
          border: 1px solid rgba(198, 146, 43, 0.3);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: var(--transition);
        }
        .amenity-card:hover .amenity-icon-box {
          background: var(--regal-green);
        }
        .amenity-icon {
          color: var(--primary-gold);
          transition: var(--transition);
        }
        .amenity-card:hover .amenity-icon {
          color: var(--gold-light);
          transform: scale(1.1);
        }
        .amenity-title {
          font-family: var(--font-serif-royal);
          font-size: 1.2rem;
          color: var(--regal-green);
          margin-bottom: 0.5rem;
        }
        .amenity-text {
          font-size: 0.92rem;
          color: var(--text-body);
          line-height: 1.6;
          margin-bottom: 0.75rem;
        }
        .amenity-badge {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          font-size: 0.78rem;
          color: var(--primary-gold);
          font-weight: 600;
        }

        /* Events Strip */
        .events-banner {
          background: linear-gradient(135deg, #fdfbf7 0%, #f4eee2 100%);
          border: 1px solid var(--border-gold);
          border-radius: 18px;
          padding: 2rem 1.5rem;
        }
        .events-banner-content {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
          align-items: center;
          text-align: center;
        }
        .events-title {
          font-family: var(--font-serif-royal);
          font-size: 1.4rem;
          color: var(--regal-green);
        }
        .events-sub {
          font-size: 0.92rem;
          color: var(--text-muted);
        }
        .events-pills {
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
          justify-content: center;
        }
        .event-pill {
          background: #ffffff;
          color: var(--regal-green);
          font-size: 0.85rem;
          font-weight: 600;
          padding: 0.5rem 1.1rem;
          border-radius: 50px;
          border: 1px solid rgba(198, 146, 43, 0.35);
          box-shadow: var(--shadow-sm);
        }

        /* Media Queries */
        @media (min-width: 640px) {
          .amenities-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (min-width: 1024px) {
          .stats-grid {
            grid-template-columns: repeat(4, 1fr);
            padding: 2rem;
          }
          .amenities-grid {
            grid-template-columns: repeat(4, 1fr);
          }
          .events-banner-content {
            flex-direction: row;
            text-align: left;
            justify-content: space-between;
          }
          .events-pills {
            justify-content: flex-end;
            max-width: 60%;
          }
        }
        @media (max-width: 480px) {
          .stats-strip-container {
            margin-top: -3.5rem;
            margin-bottom: 3rem;
          }
          .stats-grid {
            grid-template-columns: 1fr;
            gap: 1.25rem;
          }
          .stat-card {
            border-bottom: 1px solid rgba(255,255,255,0.1);
            padding-bottom: 0.75rem;
          }
          .stat-card:last-child {
            border-bottom: none;
            padding-bottom: 0;
          }
          .amenities-section {
            padding: 2.5rem 0;
          }
          .amenity-card {
            padding: 1.25rem;
          }
        }
      `}</style>
    </section>
  );
}
