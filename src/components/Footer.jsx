import './Footer.css'
import logoImg from '../assets/images/logo.jpg'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const openFacebookChat = () => {
    window.open('https://m.me/petzvogue', '_blank');
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-brand">
              <img 
                src={logoImg} 
                alt="PetZVogue Logo" 
                className="footer-logo"
              />
              <h3>PetZVogue Imus</h3>
            </div>
            <p className="footer-description">
              Professional pet care services that treat your furry friends like family. From grooming to sitting, we provide the love and attention your pets deserve.
            </p>
            <div className="footer-social">
              <a href="#" className="social-link">📘</a>
              <a href="#" className="social-link">📷</a>
              <a href="#" className="social-link">🐦</a>
              <a href="#" className="social-link">💼</a>
            </div>
          </div>
          
          <div className="footer-section">
            <h4>Services</h4>
            <ul className="footer-links">
              <li><a href="#services">Pet Sitting</a></li>
              <li><a href="#services">Pet Grooming</a></li>
              <li><a href="#services">Pet Training</a></li>
              <li><a href="#services">Veterinary Care</a></li>
              <li><a href="#services">Dog Walking</a></li>
              <li><a href="#services">Pet Boarding</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#shop">Pet Shop</a></li>
              <li><a href="#contact">Contact</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Careers</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Contact Info</h4>
            <div className="footer-contact">
              <div className="contact-detail">
                <span className="contact-icon">📍</span>
                <span>Unit 2 Blk 15 Lot 9 Ph.8 Avenida St.<br />Brgy. Magdalo Bahayang Pag-Asa Subdivision<br />Imus, Cavite, Philippines</span>
              </div>
              <div className="contact-detail">
                <span className="contact-icon">📞</span>
                <span>+63 908 084 8189<br />
                (046) 434 4068</span>
              </div>
              <div className="contact-detail">
                <span className="contact-icon">✉️</span>
                <span>petzvogue@gmail.com</span>
              </div>
              <div className="contact-detail">
                <span className="contact-icon">🕐</span>
                <span>Open Daily 8AM-6PM</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="footer-divider"></div>
          <div className="footer-bottom-content">
            <p>&copy; 2025 PetZVogue. All rights reserved.</p>
            <div className="footer-legal">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
              <a href="#">Cookie Policy</a>
            </div>
          </div>
          <div className="footer-powered">
            <p>Powered by <a href="https://jaehubservices.com" target="_blank" rel="noopener noreferrer">JAE Hub Services</a></p>
          </div>
        </div>
      </div>
      
      {/* Back to Top Button */}
      <button className="back-to-top-btn" onClick={scrollToTop} aria-label="Back to top">
        ↑
      </button>
      
      {/* Facebook Chat Button */}
      <button className="chat-btn" onClick={openFacebookChat} aria-label="Chat with us on Facebook">
        💬 Chat Me
      </button>
    </footer>
  )
}

export default Footer