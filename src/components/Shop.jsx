import { useState } from 'react'
import './Shop.css'

const Shop = () => {
  const [activeFilter, setActiveFilter] = useState('All')
  
  const products = [
    {
      id: 1,
      name: "Premium Dog Food",
      category: "Food",
      price: "₱1,499",
      originalPrice: "₱1,749",
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1589924691995-400dc9ecc119?w=400&h=400&fit=crop&crop=center",
      badge: "Best Seller"
    },
    {
      id: 2,
      name: "Interactive Dog Toy",
      category: "Toys",
      price: "₱999",
      originalPrice: "₱1,249",
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=400&h=400&fit=crop&crop=center",
      badge: "New"
    },
    {
      id: 3,
      name: "Luxury Pet Bed",
      category: "Accessories",
      price: "₱3,999",
      originalPrice: "₱4,999",
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=400&h=400&fit=crop&crop=center",
      badge: "Sale"
    },
    {
      id: 4,
      name: "Cat Scratching Post",
      category: "Accessories",
      price: "₱2,299",
      originalPrice: "₱2,749",
      rating: 4.6,
      image: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?w=400&h=400&fit=crop&crop=center",
      badge: ""
    },
    {
      id: 5,
      name: "Pet Grooming Kit",
      category: "Grooming",
      price: "₱1,999",
      originalPrice: "₱2,499",
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1559190394-df5a28aab5c5?w=400&h=400&fit=crop&crop=center",
      badge: "Popular"
    },
    {
      id: 6,
      name: "Smart Pet Feeder",
      category: "Technology",
      price: "₱6,499",
      originalPrice: "₱7,999",
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1589924691995-400dc9ecc119?w=400&h=400&fit=crop&crop=center",
      badge: "Premium"
    }
  ]

  const categories = ["All", "Food", "Toys", "Accessories", "Grooming", "Technology"]
  
  const filteredProducts = activeFilter === 'All' 
    ? products 
    : products.filter(product => product.category === activeFilter)
  
  const handleFilterClick = (category) => {
    setActiveFilter(category)
  }

  return (
    <section id="shop" className="shop">
      <div className="container">
        <div className="section-header">
          <h2>Pet Shop & Supplies</h2>
          <p>Premium products for your furry friends</p>
        </div>
        
        <div className="shop-filters">
          {categories.map(category => (
            <button 
              key={category} 
              className={`filter-btn ${category === activeFilter ? 'active' : ''}`}
              onClick={() => handleFilterClick(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="products-grid">
          {filteredProducts.map(product => (
            <div key={product.id} className="product-card">
              {product.badge && <div className="product-badge">{product.badge}</div>}
              <div className="product-image">
                <img src={product.image} alt={product.name} />
                <div className="product-overlay">
                  <button className="btn-quick-view">Quick View</button>
                </div>
              </div>
              <div className="product-info">
                <div className="product-category">{product.category}</div>
                <h3 className="product-name">{product.name}</h3>
                <div className="product-rating">
                  <div className="stars">
                    {"★".repeat(Math.floor(product.rating))}
                    {"☆".repeat(5 - Math.floor(product.rating))}
                  </div>
                  <span className="rating-value">({product.rating})</span>
                </div>
                <div className="product-pricing">
                  <span className="price">{product.price}</span>
                  {product.originalPrice && (
                    <span className="original-price">{product.originalPrice}</span>
                  )}
                </div>
                <button className="btn-add-cart">Add to Cart</button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="shop-cta">
          <button className="btn-view-all">View All Products</button>
        </div>
      </div>
    </section>
  )
}

export default Shop