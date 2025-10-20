import './Contact.css'
import { useEffect } from 'react'

const Contact = () => {
  useEffect(() => {
    // Load SuperSaaS widget script
    const script1 = document.createElement('script');
    script1.src = 'https://cdn.supersaas.net/widget.js';
    document.head.appendChild(script1);

    script1.onload = () => {
      // Initialize SuperSaaS widget with correct account and schedule configuration
      const script2 = document.createElement('script');
      script2.className = 'supersaas-widget';
      script2.innerHTML = 'var supersaas_800340 = new SuperSaaS("603494:JAEHub","800340:petzvogue",{"view":"week"})';
      document.head.appendChild(script2);
    };

    return () => {
      // Cleanup scripts on unmount
      const scripts = document.querySelectorAll('script[src*="supersaas"], script[class="supersaas-widget"]');
      scripts.forEach(script => script.remove());
    };
  }, []);

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
                <p>+63 908 084 8189</p>
              </div>
            </div>
            
            <div className="contact-item">
              <div className="contact-icon">✉️</div>
              <div>
                <h4>Email</h4>
                                <p>petzvogue@gmail.com </p>
              </div>
            </div>
            
            <div className="contact-item">
              <div className="contact-icon">🕐</div>
              <div>
                <h4>Hours</h4>
                <p>Mon-Fri: 7:00 AM - 8:00 PM<br />
                   Sat-Sun: 8:00 AM - 6:00 PM<br />
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
                onClick={handleBookNow} 
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
                onMouseOver={(e) => e.target.style.backgroundColor = '#0056b3'}
                onMouseOut={(e) => e.target.style.backgroundColor = '#0078cc'}
              >
                Book now
              </button>
              
              <div className="booking-info">
                <p><strong>What to expect:</strong></p>
                <ul>
                  <li>Choose your preferred service</li>
                  <li>Select date and time</li>
                  <li>Provide pet information</li>
                  <li>Confirm your appointment</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        <div className="map-section">
          <h3>Find Us</h3>
          <div className="map-placeholder">
            <iframe
              src="https://www.google.com/maps?q=Petzvogue+Grooming+Boutique+and+Spa+Unit+2+Blk+15+Lot+9+Ph.8+Avenida+St.+Brgy.+Magdalo+Bahayang+Pag-Asa+Subdivision+Imus+Cavite+Philippines&output=embed"
              width="100%"
              height="400"
              style={{ border: 0, borderRadius: '20px' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Petzvogue Grooming Boutique and Spa - Imus, Cavite"
            />
            <div className="map-overlay">
              <p>📍 Unit 2 Blk 15 Lot 9 Ph.8 Avenida St.<br />
                 Brgy. Magdalo Bahayang Pag-Asa Subdivision<br />
                 Imus, Cavite, Philippines</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact