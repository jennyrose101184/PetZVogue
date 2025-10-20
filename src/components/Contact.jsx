import './Contact.css'

const Contact = () => {
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
                <p>+63 919 123 4567<br />+63 917 987 6543</p>
              </div>
            </div>
            
            <div className="contact-item">
              <div className="contact-icon">✉️</div>
              <div>
                <h4>Email</h4>
                                <p>info@petzvogue.ph<br />bookings@petzvogue.ph</p>
              </div>
            </div>
            
            <div className="contact-item">
              <div className="contact-icon">🕐</div>
              <div>
                <h4>Hours</h4>
                <p>Mon-Fri: 7:00 AM - 8:00 PM<br />
                   Sat-Sun: 8:00 AM - 6:00 PM<br />
                   Emergency: 24/7</p>
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
          
          <div className="contact-form-container">
            <form className="contact-form">
              <h3>Send Us a Message</h3>
              
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="firstName">First Name *</label>
                  <input type="text" id="firstName" name="firstName" required />
                </div>
                <div className="form-group">
                  <label htmlFor="lastName">Last Name *</label>
                  <input type="text" id="lastName" name="lastName" required />
                </div>
              </div>
              
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <input type="email" id="email" name="email" required />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone</label>
                  <input type="tel" id="phone" name="phone" />
                </div>
              </div>
              
              <div className="form-group">
                <label htmlFor="petName">Pet Name</label>
                <input type="text" id="petName" name="petName" />
              </div>
              
              <div className="form-group">
                <label htmlFor="service">Service Interested In</label>
                <select id="service" name="service">
                  <option value="">Select a service</option>
                  <option value="grooming">Pet Grooming</option>
                  <option value="sitting">Pet Sitting</option>
                  <option value="training">Pet Training</option>
                  <option value="veterinary">Veterinary Care</option>
                  <option value="walking">Dog Walking</option>
                  <option value="boarding">Pet Boarding</option>
                </select>
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea id="message" name="message" rows="5" required></textarea>
              </div>
              
              <button type="submit" className="btn-submit">Send Message</button>
            </form>
          </div>
        </div>
        
        <div className="map-section">
          <h3>Find Us</h3>
          <div className="map-placeholder">
            <img 
              src="https://images.unsplash.com/photo-1516738901171-8eb4fc13bd20?w=800&h=400&fit=crop&crop=center" 
              alt="Location map" 
            />
            <div className="map-overlay">
              <p>📍 123 Pet Care Lane, Happy Valley, CA 90210</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact