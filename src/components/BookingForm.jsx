import React, { useState } from 'react';
import {
  Calendar,
  Users,
  Phone,
  Mail,
  User,
  FileText,
  Send,
  Sparkles,
  CheckCircle2,
  MessageCircle,
  Clock,
  ShieldCheck,
  PartyPopper
} from 'lucide-react';
import { resortConfig } from '../data/resortData';

export default function BookingForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    eventType: 'Grand Wedding & Reception',
    eventDate: '',
    guestCount: '500 - 800 Guests',
    foodPreference: 'Pure Vegetarian & Live Counters',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);

  const guestRanges = [
    "Under 300 Guests",
    "300 - 500 Guests",
    "500 - 800 Guests",
    "800 - 1200 Guests",
    "1200 - 1500+ Guests"
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Please enter your full name';
    if (!formData.phone.trim()) {
      newErrors.phone = 'Please enter your phone number';
    } else if (!/^[0-9+-\s]{8,15}$/.test(formData.phone.trim())) {
      newErrors.phone = 'Please enter a valid phone number';
    }
    if (!formData.eventDate) newErrors.eventDate = 'Please select preferred event date';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // Save and show confirmation
    setSubmittedData({ ...formData });
    setIsSubmitted(true);
  };

  // WhatsApp quick format
  const generateWhatsAppMessage = () => {
    const text = `*New Wedding Venue Inquiry - Vrinda Resort*
*Name:* ${formData.name || 'Interested Guest'}
*Phone:* ${formData.phone || 'N/A'}
*Event Type:* ${formData.eventType}
*Event Date:* ${formData.eventDate || 'To be decided'}
*Estimated Guests:* ${formData.guestCount}
*Message:* ${formData.message || 'Please share availability and package quote.'}`;
    return encodeURIComponent(text);
  };

  const today = new Date().toISOString().split('T')[0];

  return (
    <></>
    // <section id="book-now" className="booking-section">
    //   <div className="container">

    //     {/* Section Title */}
    //     <div className="section-header">
    //       <span className="section-tag">
    //         <Sparkles size={14} className="tag-sparkle" /> Reserve Your Dates
    //       </span>
    //       <h2 className="section-title">Check Date Availability & Booking</h2>
    //       <p className="section-subtitle">
    //         Fill out the inquiry form below to lock your auspicious wedding dates and receive a tailored venue package
    //       </p>
    //       <div className="gold-divider">
    //         <div className="diamond"></div>
    //       </div>
    //     </div>

    //     <div className="booking-layout">

    //       {/* Left Feature Column */}
    //       <div className="booking-info-card">
    //         <div className="info-card-header">
    //           <span className="info-badge">Vrinda Hospitality Guarantee</span>
    //           <h3 className="info-title">Why Reserve Early With Us?</h3>
    //           <p className="info-desc">
    //             Wedding dates fill up fast during the muhurat seasons. Early booking ensures exclusive venue access and choice of premium decor setups.
    //           </p>
    //         </div>

    //         <div className="info-perks-list">
    //           <div className="perk-item">
    //             <div className="perk-icon-wrap">
    //               <Calendar size={20} className="perk-icon" />
    //             </div>
    //             <div>
    //               <h4 className="perk-heading">Guaranteed Muhurat Lock</h4>
    //               <p className="perk-sub">100% priority date reservation with flexible postponement support.</p>
    //             </div>
    //           </div>

    //           <div className="perk-item">
    //             <div className="perk-icon-wrap">
    //               <ShieldCheck size={20} className="perk-icon" />
    //             </div>
    //             <div>
    //               <h4 className="perk-heading">Complimentary Bridal Suite</h4>
    //               <p className="perk-sub">Included VIP air-conditioned suites for bride & groom preparations.</p>
    //             </div>
    //           </div>

    //         </div>
    //       </div>

    //       {/* Right Form Card */}
    //       <div className="booking-form-wrapper glass-card">

    //         {isSubmitted ? (
    //           /* Success State */
    //           <div className="submission-success">
    //             <div className="success-icon-wrap">
    //               <PartyPopper size={48} className="success-icon" />
    //             </div>
    //             <h3 className="success-title">Inquiry Received Successfully!</h3>
    //             <p className="success-msg">
    //               Thank you, <strong>{submittedData?.name}</strong>. We have received your booking inquiry for <strong>{submittedData?.eventType}</strong> on <strong>{submittedData?.eventDate}</strong>.
    //             </p>
    //             <div className="success-details-box">
    //               <p><strong>Estimated Guests:</strong> {submittedData?.guestCount}</p>
    //               <p><strong>Contact Phone:</strong> {submittedData?.phone}</p>
    //               {submittedData?.email && <p><strong>Email:</strong> {submittedData?.email}</p>}
    //             </div>
    //             <p className="success-footer-note">
    //               Our wedding coordinator will reach out to you within the hour to schedule a venue walk-through and share custom package pricing.
    //             </p>
    //             <div className="success-actions">
    //               <a
    //                 href={`https://wa.me/${resortConfig.contact.whatsappNumber}?text=${encodeURIComponent(`Hi Vrinda Resort, I just submitted an inquiry for ${submittedData?.name} (${submittedData?.eventType} on ${submittedData?.eventDate}). Please share more details.`)}`}
    //                 target="_blank"
    //                 rel="noopener noreferrer"
    //                 className="btn btn-whatsapp"
    //               >
    //                 <MessageCircle size={18} /> Confirm via WhatsApp
    //               </a>
    //               <button
    //                 className="btn btn-outline-gold"
    //                 onClick={() => {
    //                   setIsSubmitted(false);
    //                   setFormData({
    //                     name: '',
    //                     phone: '',
    //                     email: '',
    //                     eventType: 'Grand Wedding & Reception',
    //                     eventDate: '',
    //                     guestCount: '500 - 800 Guests',
    //                     foodPreference: 'Pure Vegetarian & Live Counters',
    //                     message: ''
    //                   });
    //                 }}
    //               >
    //                 Submit Another Inquiry
    //               </button>
    //             </div>
    //           </div>
    //         ) : (
    //           /* Actual Form */
    //           <form onSubmit={handleSubmit} className="booking-form" noValidate>
    //             <div className="form-head">
    //               <h3 className="form-main-heading">Wedding Booking Inquiry</h3>
    //               <p className="form-sub-heading">Please fill the details below. We guarantee confidential pricing.</p>
    //             </div>

    //             {/* Event Type Select */}
    //             <div className="form-group">
    //               <label className="form-label" htmlFor="eventType">
    //                 Event Type <span className="req">*</span>
    //               </label>
    //               <div className="select-wrapper">
    //                 <select
    //                   id="eventType"
    //                   name="eventType"
    //                   value={formData.eventType}
    //                   onChange={handleChange}
    //                   className="form-control form-select"
    //                 >
    //                   {resortConfig.eventTypes.map((type, i) => (
    //                     <option key={i} value={type}>{type}</option>
    //                   ))}
    //                 </select>
    //               </div>
    //             </div>

    //             {/* Date & Guest Count Row */}
    //             <div className="form-row">
    //               <div className="form-group flex-1">
    //                 <label className="form-label" htmlFor="eventDate">
    //                   Preferred Date <span className="req">*</span>
    //                 </label>
    //                 <div className="input-icon-group">
    //                   <Calendar size={18} className="input-icon" />
    //                   <input
    //                     type="date"
    //                     id="eventDate"
    //                     name="eventDate"
    //                     min={today}
    //                     value={formData.eventDate}
    //                     onChange={handleChange}
    //                     className={`form-control ${errors.eventDate ? 'input-error' : ''}`}
    //                   />
    //                 </div>
    //                 {errors.eventDate && <span className="error-text">{errors.eventDate}</span>}
    //               </div>

    //               <div className="form-group flex-1">
    //                 <label className="form-label" htmlFor="guestCount">
    //                   Estimated Guests <span className="req">*</span>
    //                 </label>
    //                 <div className="input-icon-group">
    //                   <Users size={18} className="input-icon" />
    //                   <select
    //                     id="guestCount"
    //                     name="guestCount"
    //                     value={formData.guestCount}
    //                     onChange={handleChange}
    //                     className="form-control form-select"
    //                   >
    //                     {guestRanges.map((range, idx) => (
    //                       <option key={idx} value={range}>{range}</option>
    //                     ))}
    //                   </select>
    //                 </div>
    //               </div>
    //             </div>

    //             {/* Full Name */}
    //             <div className="form-group">
    //               <label className="form-label" htmlFor="name">
    //                 Your Full Name <span className="req">*</span>
    //               </label>
    //               <div className="input-icon-group">
    //                 <User size={18} className="input-icon" />
    //                 <input
    //                   type="text"
    //                   id="name"
    //                   name="name"
    //                   placeholder="e.g. Rajesh Sharma"
    //                   value={formData.name}
    //                   onChange={handleChange}
    //                   className={`form-control ${errors.name ? 'input-error' : ''}`}
    //                 />
    //               </div>
    //               {errors.name && <span className="error-text">{errors.name}</span>}
    //             </div>

    //             {/* Phone & Email Row */}
    //             <div className="form-row">
    //               <div className="form-group flex-1">
    //                 <label className="form-label" htmlFor="phone">
    //                   Mobile Number <span className="req">*</span>
    //                 </label>
    //                 <div className="input-icon-group">
    //                   <Phone size={18} className="input-icon" />
    //                   <input
    //                     type="tel"
    //                     id="phone"
    //                     name="phone"
    //                     placeholder="e.g. 9876543210"
    //                     value={formData.phone}
    //                     onChange={handleChange}
    //                     className={`form-control ${errors.phone ? 'input-error' : ''}`}
    //                   />
    //                 </div>
    //                 {errors.phone && <span className="error-text">{errors.phone}</span>}
    //               </div>

    //               <div className="form-group flex-1">
    //                 <label className="form-label" htmlFor="email">
    //                   Email Address <span className="opt">(Optional)</span>
    //                 </label>
    //                 <div className="input-icon-group">
    //                   <Mail size={18} className="input-icon" />
    //                   <input
    //                     type="email"
    //                     id="email"
    //                     name="email"
    //                     placeholder="e.g. rajesh@example.com"
    //                     value={formData.email}
    //                     onChange={handleChange}
    //                     className="form-control"
    //                   />
    //                 </div>
    //               </div>
    //             </div>

    //             {/* Special Requests / Notes */}
    //             <div className="form-group">
    //               <label className="form-label" htmlFor="message">
    //                 Special Requirements or Questions <span className="opt">(Optional)</span>
    //               </label>
    //               <div className="input-icon-group textarea-group">
    //                 <FileText size={18} className="input-icon textarea-icon" />
    //                 <textarea
    //                   id="message"
    //                   name="message"
    //                   rows="3"
    //                   placeholder="Mention number of rooms needed, catering preference, decor themes, or specific dates..."
    //                   value={formData.message}
    //                   onChange={handleChange}
    //                   className="form-control form-textarea"
    //                 ></textarea>
    //               </div>
    //             </div>

    //             {/* Submit Action */}
    //             <button type="submit" className="btn btn-gold btn-submit">
    //               <Send size={18} /> Submit Booking Inquiry
    //             </button>

    //             <p className="form-privacy-note">
    //               🔒 We respect your privacy. Your contact details will only be used for this venue inquiry.
    //             </p>
    //           </form>
    //         )}

    //       </div>

    //     </div>

    //   </div>

    //   <style>{`
    //     .booking-section {
    //       padding: 4.5rem 0;
    //       background: linear-gradient(180deg, #faf6f0 0%, #f3ece1 100%);
    //       position: relative;
    //     }

    //     .tag-sparkle {
    //       color: var(--gold-light);
    //     }

    //     .booking-layout {
    //       display: grid;
    //       grid-template-columns: 1fr;
    //       gap: 2.5rem;
    //       max-width: 1100px;
    //       margin: 0 auto;
    //     }

    //     /* Left Info Card */
    //     .booking-info-card {
    //       display: flex;
    //       flex-direction: column;
    //       gap: 2rem;
    //       padding: 1rem 0;
    //     }
    //     .info-card-header {
    //       display: flex;
    //       flex-direction: column;
    //       gap: 0.5rem;
    //     }
    //     .info-badge {
    //       font-size: 0.75rem;
    //       font-weight: 700;
    //       text-transform: uppercase;
    //       letter-spacing: 1.8px;
    //       color: var(--primary-gold);
    //     }
    //     .info-title {
    //       font-family: var(--font-serif-royal);
    //       font-size: 1.85rem;
    //       color: var(--regal-green);
    //       line-height: 1.2;
    //     }
    //     .info-desc {
    //       font-size: 0.95rem;
    //       color: var(--text-body);
    //       line-height: 1.6;
    //     }

    //     .info-perks-list {
    //       display: flex;
    //       flex-direction: column;
    //       gap: 1.25rem;
    //     }
    //     .perk-item {
    //       display: flex;
    //       align-items: flex-start;
    //       gap: 1rem;
    //       background: #ffffff;
    //       padding: 1rem 1.25rem;
    //       border-radius: 14px;
    //       border: 1px solid var(--border-gold);
    //       box-shadow: var(--shadow-sm);
    //     }
    //     .perk-icon-wrap {
    //       width: 42px;
    //       height: 42px;
    //       border-radius: 10px;
    //       background: rgba(198, 146, 43, 0.15);
    //       display: flex;
    //       align-items: center;
    //       justify-content: center;
    //       flex-shrink: 0;
    //     }
    //     .perk-icon {
    //       color: var(--primary-gold);
    //     }
    //     .perk-heading {
    //       font-family: var(--font-serif-royal);
    //       font-size: 1rem;
    //       color: var(--regal-green);
    //       margin-bottom: 0.2rem;
    //     }
    //     .perk-sub {
    //       font-size: 0.82rem;
    //       color: var(--text-muted);
    //       line-height: 1.4;
    //     }

    //     /* WhatsApp Card */
    //     .whatsapp-box {
    //       background: linear-gradient(135deg, #0d3827 0%, #062016 100%);
    //       border-radius: 16px;
    //       padding: 1.5rem;
    //       border: 1px solid rgba(85, 239, 196, 0.3);
    //       color: #ffffff;
    //       display: flex;
    //       flex-direction: column;
    //       gap: 1rem;
    //     }
    //     .whatsapp-content {
    //       display: flex;
    //       align-items: center;
    //       gap: 1rem;
    //     }
    //     .wa-icon {
    //       color: #25d366;
    //       flex-shrink: 0;
    //     }
    //     .wa-title {
    //       font-size: 1.1rem;
    //       font-weight: 700;
    //       color: #ffffff;
    //     }
    //     .wa-desc {
    //       font-size: 0.82rem;
    //       color: rgba(255, 255, 255, 0.8);
    //     }
    //     .wa-btn {
    //       width: 100%;
    //       font-size: 0.95rem;
    //       padding: 0.75rem 1.25rem;
    //     }

    //     /* Right Form Card */
    //     .booking-form-wrapper {
    //       padding: 2rem;
    //       border: 2px solid var(--primary-gold);
    //     }
    //     .form-head {
    //       margin-bottom: 1.75rem;
    //       text-align: left;
    //     }
    //     .form-main-heading {
    //       font-family: var(--font-serif-royal);
    //       font-size: 1.6rem;
    //       color: var(--regal-green);
    //       margin-bottom: 0.25rem;
    //     }
    //     .form-sub-heading {
    //       font-size: 0.88rem;
    //       color: var(--text-muted);
    //     }

    //     .booking-form {
    //       display: flex;
    //       flex-direction: column;
    //       gap: 1.2rem;
    //     }
    //     .form-row {
    //       display: flex;
    //       flex-direction: column;
    //       gap: 1.2rem;
    //     }
    //     .form-group {
    //       display: flex;
    //       flex-direction: column;
    //       gap: 0.4rem;
    //     }
    //     .flex-1 {
    //       flex: 1;
    //     }
    //     .form-label {
    //       font-size: 0.88rem;
    //       font-weight: 600;
    //       color: var(--regal-green);
    //     }
    //     .req {
    //       color: #e74c3c;
    //     }
    //     .opt {
    //       font-size: 0.75rem;
    //       font-weight: normal;
    //       color: var(--text-muted);
    //     }

    //     .input-icon-group {
    //       position: relative;
    //       display: flex;
    //       align-items: center;
    //     }
    //     .input-icon {
    //       position: absolute;
    //       left: 14px;
    //       color: var(--primary-gold);
    //       pointer-events: none;
    //     }
    //     .textarea-icon {
    //       top: 14px;
    //     }
    //     .form-control {
    //       width: 100%;
    //       padding: 0.85rem 1rem 0.85rem 2.8rem;
    //       border-radius: 10px;
    //       border: 1.5px solid rgba(198, 146, 43, 0.35);
    //       background: #ffffff;
    //       font-family: var(--font-sans);
    //       font-size: 0.95rem;
    //       color: var(--text-dark);
    //       transition: var(--transition);
    //     }
    //     .form-control:focus {
    //       outline: none;
    //       border-color: var(--primary-gold);
    //       box-shadow: 0 0 0 4px var(--gold-glow);
    //     }
    //     .input-error {
    //       border-color: #e74c3c !important;
    //       background: #fff8f8;
    //     }
    //     .error-text {
    //       font-size: 0.75rem;
    //       color: #e74c3c;
    //       font-weight: 500;
    //     }
    //     .form-select {
    //       appearance: auto;
    //       cursor: pointer;
    //     }
    //     .form-textarea {
    //       resize: vertical;
    //       min-height: 85px;
    //     }

    //     .btn-submit {
    //       width: 100%;
    //       padding: 1rem;
    //       font-size: 1.05rem;
    //       margin-top: 0.5rem;
    //     }

    //     .form-privacy-note {
    //       font-size: 0.75rem;
    //       color: var(--text-muted);
    //       text-align: center;
    //       margin-top: 0.25rem;
    //     }

    //     /* Success Card */
    //     .submission-success {
    //       text-align: center;
    //       padding: 1.5rem 0.5rem;
    //       display: flex;
    //       flex-direction: column;
    //       align-items: center;
    //       gap: 1.25rem;
    //     }
    //     .success-icon-wrap {
    //       width: 80px;
    //       height: 80px;
    //       border-radius: 50%;
    //       background: rgba(198, 146, 43, 0.15);
    //       display: flex;
    //       align-items: center;
    //       justify-content: center;
    //       border: 2px solid var(--primary-gold);
    //     }
    //     .success-icon {
    //       color: var(--primary-gold);
    //     }
    //     .success-title {
    //       font-family: var(--font-serif-royal);
    //       font-size: 1.6rem;
    //       color: var(--regal-green);
    //     }
    //     .success-msg {
    //       font-size: 0.95rem;
    //       color: var(--text-body);
    //       max-width: 450px;
    //     }
    //     .success-details-box {
    //       background: var(--bg-cream);
    //       padding: 1rem 1.5rem;
    //       border-radius: 12px;
    //       border: 1px solid var(--border-gold);
    //       font-size: 0.88rem;
    //       text-align: left;
    //       width: 100%;
    //       max-width: 400px;
    //       display: flex;
    //       flex-direction: column;
    //       gap: 0.35rem;
    //     }
    //     .success-footer-note {
    //       font-size: 0.82rem;
    //       color: var(--text-muted);
    //       max-width: 420px;
    //     }
    //     .success-actions {
    //       display: flex;
    //       flex-direction: column;
    //       gap: 0.75rem;
    //       width: 100%;
    //       max-width: 350px;
    //     }

    //     /* Media Queries */
    //     @media (min-width: 640px) {
    //       .form-row {
    //         flex-direction: row;
    //       }
    //     }
    //     @media (min-width: 1024px) {
    //       .booking-layout {
    //         grid-template-columns: 1fr 1.2fr;
    //         align-items: start;
    //       }
    //       .booking-form-wrapper {
    //         padding: 2.5rem;
    //       }
    //     }
    //     @media (max-width: 480px) {
    //       .booking-section {
    //         padding: 3rem 0;
    //       }
    //       .booking-form-wrapper {
    //         padding: 1.25rem 1rem;
    //       }
    //       .info-title {
    //         font-size: 1.45rem;
    //       }
    //       .form-main-heading {
    //         font-size: 1.35rem;
    //       }
    //     }
    //   `}</style>
    // </section>
  );
}
