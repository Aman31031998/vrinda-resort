import React, { useState, useEffect, useRef } from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  Sparkles, 
  Calendar, 
  Phone, 
  Maximize2, 
  X, 
  Image as ImageIcon,
  CheckCircle2,
  Heart
} from 'lucide-react';
import { resortConfig } from '../data/resortData';

export default function HeaderHero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const images = resortConfig.carouselImages;
  const timerRef = useRef(null);

  // Minimum swipe distance in px
  const minSwipeDistance = 50;

  // Auto-play timer
  useEffect(() => {
    if (isAutoPlaying && !lightboxOpen) {
      timerRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
      }, 4500);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isAutoPlaying, images.length, lightboxOpen]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  // Touch Swipe handlers for mobile
  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    if (isLeftSwipe) {
      handleNext();
    } else if (isRightSwipe) {
      handlePrev();
    }
  };

  const currentSlide = images[currentIndex];

  return (
    <section id="home" className="hero-section">
      <div className="container">
        
        {/* Requirement 3: Beautiful Header & Subtitle */}
        <div className="hero-brand-header animate-fade-in">
          <div className="royal-crest">
            <span className="crest-line"></span>
            <span className="crest-badge">
              <Sparkles size={16} className="sparkle-gold" /> LUXURY WEDDING RESORT & BANQUETS
            </span>
            <span className="crest-line"></span>
          </div>

          <h1 className="hero-main-title">
            <span className="title-ornament">✦</span>
            {resortConfig.name}
            <span className="title-ornament">✦</span>
          </h1>

          <p className="hero-sub-title">
            "{resortConfig.tagline}"
          </p>

          <div className="gold-divider">
            <div className="diamond"></div>
          </div>

          <p className="hero-description">
            {resortConfig.shortAbout}
          </p>

          <div className="hero-cta-group">
            <a href="#book-now" className="btn btn-gold hero-btn">
              <Calendar size={18} /> Book Your Wedding Date
            </a>
            <a 
              href={`tel:${resortConfig.contact.primaryPhone.replace(/\s+/g, '')}`} 
              className="btn btn-outline-gold hero-btn"
            >
              <Phone size={18} /> Call for Venue Visit
            </a>
          </div>
        </div>

        {/* Requirement 4: Carousel Hero Section */}
        <div 
          id="gallery" 
          className="carousel-wrapper"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          {/* Main Slide Card */}
          <div className="carousel-inner">
            {images.map((slide, index) => {
              const isActive = index === currentIndex;
              return (
                <div 
                  key={slide.id} 
                  className={`carousel-slide ${isActive ? 'slide-active' : ''}`}
                >
                  <img 
                    src={slide.image} 
                    alt={slide.title} 
                    className="slide-img"
                    loading={index === 0 ? "eager" : "lazy"}
                  />
                  <div className="slide-overlay">
                    <div className="slide-tag">
                      <Heart size={14} className="tag-icon" /> {slide.tag}
                    </div>
                    <h3 className="slide-title">{slide.title}</h3>
                    <p className="slide-subtitle">{slide.subtitle}</p>
                  </div>
                </div>
              );
            })}

            {/* Carousel Navigation Arrows */}
            <button 
              className="carousel-btn prev-btn" 
              onClick={handlePrev}
              aria-label="Previous Slide"
            >
              <ChevronLeft size={28} />
            </button>

            <button 
              className="carousel-btn next-btn" 
              onClick={handleNext}
              aria-label="Next Slide"
            >
              <ChevronRight size={28} />
            </button>

            {/* Lightbox Trigger */}
            <button 
              className="lightbox-trigger"
              onClick={() => setLightboxOpen(true)}
              title="View full screen"
              aria-label="Expand image"
            >
              <Maximize2 size={18} />
            </button>

            {/* Slide Counter Badge */}
            <div className="slide-counter">
              <ImageIcon size={14} />
              <span>{currentIndex + 1} / {images.length}</span>
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="carousel-dots">
            {images.map((_, index) => (
              <button
                key={index}
                className={`dot-btn ${index === currentIndex ? 'dot-active' : ''}`}
                onClick={() => setCurrentIndex(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* User Image Replacement Note / Helper */}
          <div className="carousel-note">
            <CheckCircle2 size={15} className="note-icon" />
            <span>Swipe left/right to explore venue • Pre-configured high-definition views</span>
          </div>
        </div>

      </div>

      {/* Fullscreen Lightbox Modal */}
      {lightboxOpen && (
        <div className="lightbox-modal" onClick={() => setLightboxOpen(false)}>
          <button className="lightbox-close" onClick={() => setLightboxOpen(false)} aria-label="Close fullscreen preview">
            <X size={28} />
          </button>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <img src={currentSlide.image} alt={currentSlide.title} className="lightbox-image" />
            <div className="lightbox-caption">
              <h3>{currentSlide.title}</h3>
              <p>{currentSlide.subtitle}</p>
            </div>
          </div>
        </div>
      )}

      <style>{`
        .hero-section {
          padding: 3rem 0 2rem 0;
          background: linear-gradient(180deg, rgba(243, 236, 225, 0.4) 0%, rgba(250, 246, 240, 1) 100%);
          position: relative;
        }

        /* Hero Brand Header (Req 3) */
        .hero-brand-header {
          text-align: center;
          max-width: 900px;
          margin: 0 auto 2.5rem auto;
        }
        .royal-crest {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          margin-bottom: 0.75rem;
        }
        .crest-line {
          height: 1px;
          width: 40px;
          background: var(--primary-gold);
          opacity: 0.5;
        }
        .crest-badge {
          font-size: 0.78rem;
          text-transform: uppercase;
          letter-spacing: 2.5px;
          color: var(--primary-gold);
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 6px;
        }
        .sparkle-gold {
          color: var(--gold-light);
        }

        .hero-main-title {
          font-family: var(--font-serif-royal);
          font-size: 2.75rem;
          font-weight: 900;
          color: var(--regal-green);
          letter-spacing: 1.5px;
          margin: 0.2rem 0;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          text-shadow: 0 2px 10px rgba(198, 146, 43, 0.15);
        }
        .title-ornament {
          color: var(--primary-gold);
          font-size: 1.5rem;
          opacity: 0.8;
        }

        .hero-sub-title {
          font-family: var(--font-subheading);
          font-size: 1.75rem;
          font-weight: 600;
          color: var(--gold-dark);
          letter-spacing: 0.5px;
          font-style: italic;
          margin-top: 0.25rem;
        }

        .hero-description {
          font-size: 1.05rem;
          color: var(--text-body);
          line-height: 1.7;
          max-width: 720px;
          margin: 0 auto 1.75rem auto;
        }

        .hero-cta-group {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1rem;
          flex-wrap: wrap;
        }
        .hero-btn {
          padding: 0.9rem 1.85rem;
          font-size: 1rem;
        }

        /* Carousel Styles (Req 4) */
        .carousel-wrapper {
          position: relative;
          max-width: 1100px;
          margin: 0 auto;
          background: #ffffff;
          padding: 10px;
          border-radius: 24px;
          box-shadow: 0 20px 45px rgba(14, 43, 31, 0.12), 0 0 0 1px rgba(198, 146, 43, 0.25);
        }
        .carousel-inner {
          position: relative;
          width: 100%;
          height: 320px;
          border-radius: 18px;
          overflow: hidden;
          background: #000;
        }
        .carousel-slide {
          position: absolute;
          inset: 0;
          opacity: 0;
          transition: opacity 0.8s ease-in-out, transform 0.8s ease-out;
          transform: scale(1.02);
          pointer-events: none;
        }
        .carousel-slide.slide-active {
          opacity: 1;
          transform: scale(1);
          pointer-events: auto;
        }
        .slide-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
        }
        .slide-overlay {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          padding: 3rem 1.5rem 1.5rem 1.5rem;
          background: linear-gradient(0deg, rgba(7, 25, 18, 0.95) 0%, rgba(7, 25, 18, 0.6) 50%, transparent 100%);
          color: #ffffff;
        }
        .slide-tag {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 1.5px;
          color: var(--gold-lighter);
          background: rgba(198, 146, 43, 0.35);
          backdrop-filter: blur(8px);
          border: 1px solid var(--gold-light);
          padding: 0.25rem 0.75rem;
          border-radius: 50px;
          margin-bottom: 0.5rem;
          font-weight: 600;
        }
        .tag-icon {
          color: #ff7675;
        }
        .slide-title {
          font-family: var(--font-serif-royal);
          font-size: 1.4rem;
          color: #ffffff;
          margin-bottom: 0.25rem;
          text-shadow: 0 2px 4px rgba(0,0,0,0.6);
        }
        .slide-subtitle {
          font-size: 0.92rem;
          color: rgba(255, 255, 255, 0.85);
          max-width: 650px;
          line-height: 1.4;
        }

        /* Carousel Buttons */
        .carousel-btn {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 46px;
          height: 46px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.85);
          backdrop-filter: blur(8px);
          color: var(--regal-green);
          border: 1px solid var(--border-gold);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: var(--transition);
          z-index: 10;
          box-shadow: 0 4px 15px rgba(0,0,0,0.2);
        }
        .carousel-btn:hover {
          background: #ffffff;
          color: var(--primary-gold);
          transform: translateY(-50%) scale(1.1);
        }
        .prev-btn { left: 14px; }
        .next-btn { right: 14px; }

        .lightbox-trigger {
          position: absolute;
          top: 14px;
          right: 14px;
          background: rgba(14, 43, 31, 0.75);
          backdrop-filter: blur(8px);
          color: #ffffff;
          border: 1px solid rgba(255, 255, 255, 0.3);
          border-radius: 8px;
          width: 36px;
          height: 36px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: var(--transition);
          z-index: 10;
        }
        .lightbox-trigger:hover {
          background: var(--primary-gold);
          color: var(--regal-green-dark);
        }

        .slide-counter {
          position: absolute;
          top: 14px;
          left: 14px;
          background: rgba(14, 43, 31, 0.75);
          backdrop-filter: blur(8px);
          color: var(--gold-lighter);
          border: 1px solid rgba(198, 146, 43, 0.3);
          border-radius: 50px;
          padding: 0.3rem 0.8rem;
          font-size: 0.78rem;
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 6px;
          z-index: 10;
        }

        /* Dots */
        .carousel-dots {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 0.85rem 0 0.35rem 0;
        }
        .dot-btn {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: rgba(198, 146, 43, 0.25);
          border: 1px solid var(--primary-gold);
          cursor: pointer;
          transition: var(--transition);
          padding: 0;
        }
        .dot-btn.dot-active {
          width: 28px;
          border-radius: 12px;
          background: var(--primary-gold);
          box-shadow: 0 0 8px var(--primary-gold);
        }

        .carousel-note {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          font-size: 0.8rem;
          color: var(--text-muted);
          margin-top: 0.35rem;
          text-align: center;
        }
        .note-icon {
          color: #10b981;
        }

        /* Fullscreen Lightbox */
        .lightbox-modal {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.94);
          z-index: 2000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1.5rem;
          animation: fadeIn 0.3s ease;
        }
        .lightbox-close {
          position: absolute;
          top: 20px;
          right: 20px;
          background: transparent;
          border: none;
          color: #ffffff;
          cursor: pointer;
          transition: var(--transition);
        }
        .lightbox-close:hover {
          color: var(--primary-gold);
          transform: scale(1.15);
        }
        .lightbox-content {
          max-width: 1000px;
          width: 100%;
          text-align: center;
        }
        .lightbox-image {
          width: 100%;
          max-height: 75vh;
          object-fit: contain;
          border-radius: 12px;
          border: 1px solid rgba(198, 146, 43, 0.4);
        }
        .lightbox-caption {
          color: #ffffff;
          margin-top: 1rem;
        }
        .lightbox-caption h3 {
          color: var(--gold-light);
          font-family: var(--font-serif-royal);
          margin-bottom: 0.25rem;
        }

        /* Responsive Media Queries */
        @media (min-width: 640px) {
          .carousel-inner {
            height: 420px;
          }
          .slide-title {
            font-size: 1.75rem;
          }
          .slide-subtitle {
            font-size: 1rem;
          }
        }
        @media (min-width: 1024px) {
          .carousel-inner {
            height: 520px;
          }
          .slide-title {
            font-size: 2.1rem;
          }
          .hero-main-title {
            font-size: 3.5rem;
          }
          .hero-sub-title {
            font-size: 2.1rem;
          }
        }
        @media (max-width: 480px) {
          .hero-section {
            padding: 2rem 0 1.5rem 0;
          }
          .hero-main-title {
            font-size: 2.1rem;
          }
          .title-ornament {
            font-size: 1.1rem;
          }
          .hero-sub-title {
            font-size: 1.35rem;
          }
          .hero-description {
            font-size: 0.95rem;
          }
          .carousel-inner {
            height: 280px;
          }
          .slide-overlay {
            padding: 1.5rem 1rem 1rem 1rem;
          }
          .slide-title {
            font-size: 1.15rem;
          }
          .slide-subtitle {
            font-size: 0.8rem;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }
          .carousel-btn {
            width: 36px;
            height: 36px;
          }
          .hero-btn {
            width: 100%;
          }
        }
      `}</style>
    </section>
  );
}
