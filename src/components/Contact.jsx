import React, { useEffect, useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [showBookingPopup, setShowBookingPopup] = useState(false);

  useEffect(() => {
    // SuperSaaS widget logic
    const script = document.createElement('script');
    script.src = 'https://cdn.supersaas.net/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      const scripts = document.querySelectorAll('script[src*="supersaas"]');
      scripts.forEach(script => script.remove());
      const widgetDiv = document.getElementById('supersaas-widget-container');
      if (widgetDiv) widgetDiv.innerHTML = '';
    };
  }, []);

  const handleBookNow = () => {
    setShowBookingPopup(true);
  };

  // Removed obsolete local booking widget logic

  return (
    <>
      <section id="contact" className="contact">
        <div className="container">
          <div className="section-header">
            <h2 style={{ color: '#2563eb', fontWeight: 800, fontSize: '2.5rem', textAlign: 'center', marginBottom: '0.5rem' }}>Contact PetZVogue</h2>
            <p style={{ textAlign: 'center', fontSize: '1.25rem', color: '#64748b', marginBottom: '2rem' }}>Ready to give your pet the best care? Contact us today!</p>
          </div>
          <div className="contact-content">
            {/* Left: Facility Info */}
            <div className="facility-info">
              <h3 className="facility-title">Visit Our Facility</h3>
              <div className="contact-item">
                <span className="contact-icon">📍</span>
                <div>
                  <div className="contact-label">Address</div>
                  <div>Unit 2 Blk 15 Lot 9 Ph.8 Avenida St.<br />Brgy. Magdalo Bahayang Pag-Asa Subdivision<br />Imus, Cavite, Philippines</div>
                </div>
              </div>
              <div className="contact-item">
                <span className="contact-icon">📞</span>
                <div>
                  <div className="contact-label">Phone</div>
                  <div>+63 908 084 8189<br />(046) 434 4068</div>
                </div>
              </div>
              <div className="contact-item">
                <span className="contact-icon">✉️</span>
                <div>
                  <div className="contact-label">Email</div>
                  <div>petzvogue@gmail.com</div>
                </div>
              </div>
              <div className="contact-item">
                <span className="contact-icon">🕐</span>
                <div>
                  <div className="contact-label">Hours</div>
                  <div>Mon-Fri: 7:00 AM - 8:00 PM<br />Sat-Sun: 8:00 AM - 6:00 PM</div>
                </div>
              </div>
            </div>
            {/* Right: Booking Appointment */}
            <div className="booking-appointment">
              <h3 className="booking-title">Book Your Appointment</h3>
              <p className="booking-desc">Ready to schedule your pet's care? Click the button below to book online!</p>
              <button className="book-now" onClick={handleBookNow}>Book now</button>
              <div className="booking-info">
                <div className="booking-label">What to expect:</div>
                <ul>
                  <li>✓ <span>Choose your preferred service</span></li>
                  <li>✓ <span>Select date and time</span></li>
                  <li>✓ <span>Provide pet information</span></li>
                  <li>✓ <span>Confirm your appointment</span></li>
                </ul>
              </div>
            </div>
          </div>
          {/* End contact-content */}
          {showBookingPopup && (
            <div className="modal-overlay" style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', background: 'rgba(0,0,0,0.35)', zIndex: 9999, display: 'flex', alignItems: 'center', justifyContent: 'center' }} onClick={() => setShowBookingPopup(false)}>
              <div className="modal-content" style={{ background: '#fff', borderRadius: '16px', boxShadow: '0 2px 24px rgba(0,0,0,0.18)', maxWidth: '900px', width: '90vw', height: '650px', padding: 0, position: 'relative', display: 'flex', flexDirection: 'column' }} onClick={e => e.stopPropagation()}>
                <button className="close-btn" style={{ position: 'absolute', top: 10, right: 16, fontSize: '2rem', background: 'none', border: 'none', cursor: 'pointer', zIndex: 2 }} onClick={() => setShowBookingPopup(false)}>&times;</button>
                <iframe
                  src="https://jaehubservices.com/bookingsystem/"
                  title="Booking Popup"
                  width="100%"
                  height="100%"
                  style={{ border: 'none', borderRadius: '12px', flex: 1 }}
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Large Map Section */}
      <section id="find-us" style={{ background: '#f8fafc', padding: '1.5rem 0 0.5rem 0' }}>
        <div className="container">
          <h2 style={{ color: '#2563eb', fontWeight: 800, fontSize: '2rem', textAlign: 'center', marginBottom: '1.25rem' }}>Find Us</h2>
          <div style={{ position: 'relative', borderRadius: '20px', overflow: 'hidden', boxShadow: '0 2px 24px rgba(59,130,246,0.08)', background: '#fff', marginBottom: '0' }}>
            <iframe
              title="Petzvogue Grooming Boutique and Spa Map"
              src="https://www.google.com/maps?q=Petzvogue+Grooming+Boutique+and+Spa+Unit+2+Blk+15+Lot+9+Ph.8+Avenida+St.+Brgy.+Magdalo+Bahayang+Pag-Asa+Subdivision+Imus+Cavite+Philippines&output=embed"
              width="100%"
              height="400"
              style={{ border: 0, borderRadius: '20px', marginBottom: '0' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            <a href="https://www.google.com/maps/search/?api=1&query=Petzvogue+Grooming+Boutique+and+Spa+Unit+2+Blk+15+Lot+9+Ph.8+Avenida+St.+Brgy.+Magdalo+Bahayang+Pag-Asa+Subdivision+Imus+Cavite+Philippines" target="_blank" rel="noopener noreferrer"
              style={{ position: 'absolute', top: '24px', right: '24px', background: '#f97316', color: '#fff', fontWeight: 600, fontSize: '1rem', borderRadius: '8px', padding: '0.75rem 1.5rem', textDecoration: 'none', boxShadow: '0 2px 8px rgba(249,115,22,0.12)', display: 'flex', alignItems: 'center', gap: '8px', zIndex: 2 }}>
              <span role="img" aria-label="map">🗺️</span> Open in Google Maps
            </a>
            <div style={{ position: 'absolute', left: 0, bottom: 0, width: '100%', background: 'rgba(59,130,246,0.85)', color: '#fff', padding: '1rem 2rem', fontWeight: 700, fontSize: '1.15rem', textAlign: 'center', letterSpacing: '0.5px' }}>
              Unit 2 Blk 15 Lot 9 Ph.8 Avenida St.<br />Brgy. Magdalo Bahayang Pag-Asa Subdivision<br />Imus, Cavite, Philippines
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;

