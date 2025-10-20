import './Hero.css'

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="hero">
      <div className="hero-background">
        <img 
          src="https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=1920&h=1080&fit=crop&crop=center" 
          alt="Happy pets background"
          className="hero-bg-image"
        />
        <div className="hero-overlay"></div>
      </div>
      <div className="hero-content">
        <div className="container">
          <div className="hero-text">
            <h1 className="hero-title">
              Premium Pet Care & <br />
              <span className="highlight">Grooming Services</span>
            </h1>
            <p className="hero-subtitle">
              Professional pet care services that treat your furry friends like family. 
              From grooming to sitting, we provide the love and attention your pets deserve.
            </p>
            <div className="hero-actions">
              <button className="btn-hero-primary" onClick={() => scrollToSection('booking')}>Book Service</button>
              <button className="btn-hero-secondary" onClick={() => scrollToSection('services')}>View Services</button>
            </div>
          </div>
          <div className="hero-stats">
            <div className="stat">
              <h3>500+</h3>
              <p>Happy Pets</p>
            </div>
            <div className="stat">
              <h3>5+</h3>
              <p>Years Experience</p>
            </div>
            <div className="stat">
              <h3>24/7</h3>
              <p>Pet Care</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero