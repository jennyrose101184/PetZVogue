

import React, { useEffect, useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [showBooking2, setShowBooking2] = useState(false);

  useEffect(() => {
    // SuperSaaS widget logic
    const script1 = document.createElement('script');
    script1.src = 'https://cdn.supersaas.net/widget.js';
    document.head.appendChild(script1);

    script1.onload = () => {
      const script2 = document.createElement('script');
      script2.className = 'supersaas-widget';
      script2.innerHTML = 'var supersaas_800340 = new SuperSaaS("603494:JAEHub","800340:petzvogue",{"view":"week"})';
      document.head.appendChild(script2);
    };

    return () => {
      const scripts = document.querySelectorAll('script[src*="supersaas"], script[class="supersaas-widget"]');
      scripts.forEach(script => script.remove());
    };
  }, []);

  useEffect(() => {
    // Local booking widget logic
    if (showBooking2) {
      if (!document.getElementById('booking-widget-css')) {
        const css = document.createElement('link');
        css.rel = 'stylesheet';
        css.href = 'http://localhost:5174/booking-widget.css';
        css.id = 'booking-widget-css';
        document.head.appendChild(css);
      }
      if (!document.getElementById('booking-widget-js')) {
        const script = document.createElement('script');
        script.src = 'http://localhost:5174/booking-widget.js';
        script.id = 'booking-widget-js';
        document.body.appendChild(script);
      }
    }
    return () => {
      const widgetDiv = document.getElementById('pet-booking-widget');
      if (widgetDiv) widgetDiv.remove();
    };
  }, [showBooking2]);

  const handleBookNow = () => {
    if (window.supersaas_800340) {
      window.supersaas_800340.show();
    }
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-header">
          <h2>Contact PetZVogue Imus</h2>
          <p>Ready to give your pet the best care? Contact us today!</p>
        </div>
        <div className="contact-content">
          <div className="contact-info">
            <h3>Visit Our Facility</h3>
            <div className="contact-item">
              <div className="contact-icon">📍</div>
              <div>
                <h4>Address</h4>
                <p>Unit 2 Blk 15 Lot 9 Ph.8 Avenida St.<br />Brgy. Magdalo Bahayang Pag-Asa Subdivision<br />Imus, Cavite, Philippines</p>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon">📞</div>
              <div>
                <h4>Phone</h4>
                <p>+63 908 084 8189<br />(046) 434 4068</p>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon">✉️</div>
              <div>
                <h4>Email</h4>
                <p>petzvogue@gmail.com</p>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon">�</div>
              <div>
                <h4>Hours</h4>
                <p>Mon-Fri: 7:00 AM - 8:00 PM<br />Sat-Sun: 8:00 AM - 6:00 PM</p>
              </div>
            </div>
            <div className="social-links">
              <h4>Follow Us</h4>
              <div className="social-icons">
                <a href="#" className="social-icon">📘</a>
                <a href="#" className="social-icon">📷</a>
                <a href="#" className="social-icon">🐦</a>
                <a href="#" className="social-icon">💼</a>
              </div>
            </div>
          </div>
          <div className="booking-container">
            <div id="booking" className="booking-section">
              <h3>Book Your Appointment</h3>
              <p>Ready to schedule your pet's care? Click the button below to book online!</p>
              <button 
                className="book-now-btn"
                style={{
                  padding: '9px 27px',
                  fontSize: '18px',
                  fontFamily: 'Arial, sans-serif',
                  fontWeight: 'bold',
                  color: '#ffffff',
                  backgroundColor: '#0078cc',
                  borderRadius: '9px',
                  border: 'solid 1px #0078cc',
                  cursor: 'pointer',
                  transition: 'background-color 0.3s ease'
                }}
                onMouseOver={e => e.target.style.backgroundColor = '#0056b3'}
                onMouseOut={e => e.target.style.backgroundColor = '#0078cc'}
                onClick={handleBookNow}
              >
                Book Now
              </button>
              <button
                className="book-now-btn"
                style={{
                  padding: '9px 27px',
                  fontSize: '18px',
                  fontFamily: 'Arial, sans-serif',
                  fontWeight: 'bold',
                  color: '#fff',
                  backgroundColor: '#f97316',
                  borderRadius: '9px',
                  border: 'solid 1px #f97316',
                  cursor: 'pointer',
                  marginLeft: '1rem',
                  transition: 'background-color 0.3s ease'
                }}
                onMouseOver={e => e.target.style.backgroundColor = '#ea580c'}
                onMouseOut={e => e.target.style.backgroundColor = '#f97316'}
                onClick={() => setShowBooking2(true)}
              >
                Booking 2
              </button>
              {showBooking2 && (
                <div style={{
                  position: 'fixed',
                  top: 0,
                  left: 0,
                  width: '100vw',
                  height: '100vh',
                  background: 'rgba(0,0,0,0.7)',
                  zIndex: 2000,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
                  onClick={() => setShowBooking2(false)}
                >
                  <div style={{
                    background: '#fff',
                    borderRadius: '16px',
                    padding: '32px',
                    minWidth: '340px',
                    maxWidth: '95vw',
                    maxHeight: '90vh',
                    overflowY: 'auto',
                    position: 'relative'
                  }}
                    onClick={e => e.stopPropagation()}
                  >
                    <button style={{
                      position: 'absolute',
                      top: 12,
                      right: 12,
                      background: '#f97316',
                      color: '#fff',
                      border: 'none',
                      borderRadius: '50%',
                      width: 32,
                      height: 32,
                      fontSize: 20,
                      cursor: 'pointer'
                    }}
                      onClick={() => setShowBooking2(false)}
                      aria-label="Close booking widget"
                    >✕</button>
                    <div id="pet-booking-widget"></div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="map-section">
          <h3>Find Us</h3>
          <div className="map-placeholder">
            <div className="map-container">
              <iframe
                src="https://maps.google.com/maps?q=14.4297,120.9365&hl=en&z=16&output=embed"
                width="100%"
                height="400"
                style={{ border: 0, borderRadius: '20px' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Petzvogue Grooming Boutique and Spa - Imus, Cavite"
              />
              <div className="map-fallback">
                <a 
                  href="https://www.google.com/maps/search/Petzvogue+Grooming+Boutique+and+Spa+Unit+2+Blk+15+Lot+9+Ph.8+Avenida+St.+Brgy.+Magdalo+Bahayang+Pag-Asa+Subdivision+Imus+Cavite+Philippines"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="map-link"
                >
                  🗺️ Open in Google Maps
                </a>
              </div>
            </div>
            <div className="map-overlay">
              <p>📍 Unit 2 Blk 15 Lot 9 Ph.8 Avenida St.<br />Brgy. Magdalo Bahayang Pag-Asa Subdivision<br />Imus, Cavite, Philippines</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

