import './Services.css'

const Services = () => {
  const services = [
    {
      id: 1,
      icon: "🐕‍🦺",
      title: "Pet Sitting",
      description: "Professional pet sitting services in the comfort of your home. Your pets stay happy and stress-free.",
      price: "From ₱1,250/day",
      image: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=400&h=300&fit=crop&crop=center"
    },
    {
      id: 2,
      icon: "✂️",
      title: "Pet Grooming",
      description: "Complete grooming services including baths, haircuts, nail trimming, and dental care.",
      price: "From ₱2,250/session",
      image: "https://images.unsplash.com/photo-1559190394-df5a28aab5c5?w=400&h=300&fit=crop&crop=center"
    },
    {
      id: 3,
      icon: "🎓",
      title: "Pet Training",
      description: "Professional training programs for obedience, behavioral issues, and puppy training.",
      price: "From ₱3,000/session",
      image: "https://images.unsplash.com/photo-1552053831-71594a27632d?w=400&h=300&fit=crop&crop=center"
    },
    {
      id: 4,
      icon: "🏥",
      title: "Veterinary Care",
      description: "Comprehensive veterinary services including checkups, vaccinations, and emergency care.",
      price: "From ₱4,000/visit",
      image: "https://images.unsplash.com/photo-1576201836106-db1758fd1c97?w=400&h=300&fit=crop&crop=center"
    },
    {
      id: 5,
      icon: "🚶",
      title: "Dog Walking",
      description: "Daily dog walking services to keep your pets active and healthy while you're away.",
      price: "From ₱1,000/walk",
      image: "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=400&h=300&fit=crop&crop=center"
    },
    {
      id: 6,
      icon: "🏨",
      title: "Pet Boarding",
      description: "Safe and comfortable boarding facilities with 24/7 care and monitoring.",
      price: "From ₱2,000/night",
      image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=400&h=300&fit=crop&crop=center"
    }
  ]

  return (
    <section id="services" className="services">
      <div className="container">
        <div className="section-header">
          <h2>Our Premium Pet Services</h2>
          <p>Comprehensive care solutions for your beloved pets</p>
        </div>
        <div className="services-grid">
          {services.map(service => (
            <div key={service.id} className="service-card">
              <div className="service-image">
                <img src={service.image} alt={service.title} />
                <div className="service-icon">{service.icon}</div>
              </div>
              <div className="service-content">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <div className="service-price">{service.price}</div>
                <button className="btn-service">Learn More</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services