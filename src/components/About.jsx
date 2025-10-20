import './About.css'
import { useState } from 'react'
import teamImg from '../assets/images/us.jpg'

const About = () => {
  const [isImageModalOpen, setIsImageModalOpen] = useState(false)

  const openImageModal = () => setIsImageModalOpen(true)
  const closeImageModal = () => setIsImageModalOpen(false)
  const team = [
    {
      id: 1,
      name: "Dr. Sarah Johnson",
      role: "Lead Veterinarian",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=300&h=300&fit=crop&crop=center",
      bio: "15+ years of experience in veterinary care"
    },
    {
      id: 2,
      name: "Mike Rodriguez",
      role: "Pet Grooming Specialist",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=center",
      bio: "Certified groomer with passion for pet care"
    },
    {
      id: 3,
      name: "Emily Chen",
      role: "Pet Training Expert",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=center",
      bio: "Specialized in behavioral training and obedience"
    }
  ]

  const testimonials = [
    {
      id: 1,
      name: "Jennifer Smith",
      rating: 5,
      text: "PetZVogue has been amazing! They take such great care of my Golden Retriever, Max. The grooming service is top-notch and the staff is incredibly professional.",
      petName: "Max",
      petImage: "https://images.unsplash.com/photo-1552053831-71594a27632d?w=80&h=80&fit=crop&crop=center"
    },
    {
      id: 2,
      name: "Robert Davis",
      rating: 5,
      text: "I trust PetZVogue completely with my cats. The veterinary care is excellent and they always explain everything clearly. Highly recommended!",
      petName: "Luna & Shadow",
      petImage: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?w=80&h=80&fit=crop&crop=center"
    },
    {
      id: 3,
      name: "Maria Garcia",
      rating: 5,
      text: "The pet sitting service is fantastic. I can travel knowing my pets are in loving, professional hands. The daily updates give me peace of mind.",
      petName: "Buddy",
      petImage: "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=80&h=80&fit=crop&crop=center"
    }
  ]

  return (
    <section id="about" className="about">
      <div className="container">
        {/* About Us Section */}
        <div className="about-content">
          <div className="about-text">
            <h2>About PetZVogue Imus</h2>
            <p className="about-intro">
              PetZVogue Imus is a premier pet care destination in Cavite, dedicated to providing 
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

        {/* Testimonials Section */}
        <div className="testimonials-section">
          <h3>What Pet Parents Say</h3>
          <div className="testimonials-grid">
            {testimonials.map(testimonial => (
              <div key={testimonial.id} className="testimonial-card">
                <div className="testimonial-header">
                  <div className="testimonial-pet">
                    <img src={testimonial.petImage} alt={testimonial.petName} />
                    <div>
                      <h5>{testimonial.name}</h5>
                      <p>Pet parent of {testimonial.petName}</p>
                    </div>
                  </div>
                  <div className="testimonial-rating">
                    {"★".repeat(testimonial.rating)}
                  </div>
                </div>
                <p className="testimonial-text">"{testimonial.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About