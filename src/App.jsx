import React from 'react';
import Navbar from './components/Navbar';
import HeaderHero from './components/HeaderHero';
import Amenities from './components/Amenities';
import BookingForm from './components/BookingForm';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import FloatingActions from './components/FloatingActions';

function App() {
  return (
    <div className="app-root">
      {/* Top Navigation */}
      <Navbar />

      {/* Main Content Area */}
      <main>
        {/* Requirement 3 & 4: Top Heading & Hero Carousel */}
        <HeaderHero />

        {/* Resort Highlights & Venue Details */}
        <Amenities />

        {/* Requirement 5: Booking Inquiry Form */}
        <BookingForm />

        {/* Requirement 6: Contact Information */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Requirement 7: Mobile Floating Action Bar */}
      <FloatingActions />
    </div>
  );
}

export default App;
