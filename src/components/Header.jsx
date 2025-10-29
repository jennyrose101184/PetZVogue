// ...existing code...
import { useState } from 'react'
import './Header.css'
import logoImg from '../assets/images/logo.jpg'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    closeMenu()
  }

  return (
    <header className="header">
      <div className="container">
        <div className="nav-brand">
          <img 
            src={logoImg} 
            alt="PetZVogue Logo" 
            className="logo"
          />
          <h2>PetZVogue</h2>
        </div>
        <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
          <ul className="nav-menu">
            <li><a href="#home" onClick={closeMenu}>Home</a></li>
            <li><a href="#services" onClick={closeMenu}>Services</a></li>
            <li><a href="#shop" onClick={closeMenu}>Shop</a></li>
            <li><a href="#about" onClick={closeMenu}>About</a></li>
            <li><a href="#reviews" onClick={closeMenu}>Reviews</a></li>
            <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
          </ul>
        </nav>
        <div className="nav-actions">
          <button className="btn-primary" onClick={() => scrollToSection('contact')}>Book Now</button>
          <button 
            className={`mobile-menu-btn ${isMenuOpen ? 'active' : ''}`}
            onClick={toggleMenu}
            aria-label="Toggle mobile menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
      {isMenuOpen && <div className="nav-overlay" onClick={closeMenu}></div>}
    </header>
  )
}

export default Header