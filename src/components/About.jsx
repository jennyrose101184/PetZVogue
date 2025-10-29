import './About.css'
import { useState } from 'react'
import teamImg from '../assets/images/us.jpg'

const About = () => {
  const [isImageModalOpen, setIsImageModalOpen] = useState(false)

  const openImageModal = () => setIsImageModalOpen(true)
  const closeImageModal = () => setIsImageModalOpen(false)
  

  
  return (
    <section id="about" className="about">
      <div className="container">
        {/* About Us Section */}
        <div className="about-content">
          <div className="about-text">
            <h2>About PetZVogue</h2>
            <p className="about-intro">
              PetZVogue Grooming is a premier pet care destination in Cavite, dedicated to providing 
              comprehensive grooming, boarding, and wellness services for your beloved companions. 
              Located in the heart of Imus, we combine professional expertise with genuine love 
              for animals to ensure your pets receive the best care possible.
            </p>
            <div className="about-features">
              <div className="feature">
                <div className="feature-icon">🏆</div>
                <div>
                  <h4>Professional Excellence</h4>
                  <p>Our certified groomers and veterinary professionals ensure top-quality care</p>
                </div>
              </div>
              <div className="feature">
                <div className="feature-icon">🌟</div>
                <div>
                  <h4>Modern Facilities</h4>
                  <p>State-of-the-art equipment for optimal pet care and comfort</p>
                </div>
              </div>
              <div className="feature">
                <div className="feature-icon">❤️</div>
                <div>
                  <h4>Compassionate Care</h4>
                  <p>We treat every pet as family with gentle, loving attention</p>
                </div>
              </div>
            </div>
          </div>
          <div className="about-image">
            <img 
              src="https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=600&h=400&fit=crop&crop=center" 
              alt="Pet care facility"
            />
          </div>
        </div>

        {/* Team Section */}
        <div className="team-section">
          <h3>Meet Our Expert Team</h3>
          <div className="team-single-column">
            <div className="team-image-container">
              <img 
                src={teamImg} 
                alt="PetZVogue Team" 
                className="team-group-image clickable-image" 
                onClick={openImageModal}
                title="Click to enlarge"
              />
              <div className="zoom-hint">
                <span>🔍 Click to enlarge</span>
              </div>
            </div>
            <div className="team-description">
              <p>Our dedicated team of pet care professionals brings years of experience and genuine passion for animal welfare. We are committed to providing the highest quality grooming, boarding, and wellness services for your beloved pets.</p>
            </div>
          </div>
        </div>

        {/* Image Modal */}
        {isImageModalOpen && (
          <div className="image-modal-overlay" onClick={closeImageModal}>
            <div className="image-modal-content" onClick={(e) => e.stopPropagation()}>
              <button className="modal-close-btn" onClick={closeImageModal}>
                ✕
              </button>
              <img 
                src={teamImg} 
                alt="PetZVogue Team - Full View" 
                className="modal-image"
              />
            </div>
          </div>
        )}

       
      </div>
    </section>
  )
}

export default About