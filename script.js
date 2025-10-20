// Product data
const products = [
    {
        id: 1,
        name: "Premium Dog Food",
        category: "dogs",
        price: 49.99,
        description: "High-quality nutrition for your dog",
        icon: "🦴"
    },
    {
        id: 2,
        name: "Dog Collar",
        category: "dogs",
        price: 19.99,
        description: "Comfortable and durable collar",
        icon: "🐕"
    },
    {
        id: 3,
        name: "Dog Toy Set",
        category: "dogs",
        price: 24.99,
        description: "Fun toys to keep your dog entertained",
        icon: "🎾"
    },
    {
        id: 4,
        name: "Premium Cat Food",
        category: "cats",
        price: 39.99,
        description: "Nutritious meals for your feline friend",
        icon: "🐟"
    },
    {
        id: 5,
        name: "Cat Scratching Post",
        category: "cats",
        price: 59.99,
        description: "Save your furniture with this sturdy post",
        icon: "🐱"
    },
    {
        id: 6,
        name: "Cat Litter Box",
        category: "cats",
        price: 34.99,
        description: "Easy to clean and odor-free",
        icon: "📦"
    },
    {
        id: 7,
        name: "Pet Grooming Kit",
        category: "accessories",
        price: 29.99,
        description: "Complete grooming tools for pets",
        icon: "✂️"
    },
    {
        id: 8,
        name: "Pet Bed",
        category: "accessories",
        price: 44.99,
        description: "Cozy and comfortable pet bed",
        icon: "🛏️"
    },
    {
        id: 9,
        name: "Water & Food Bowl Set",
        category: "accessories",
        price: 16.99,
        description: "Stainless steel bowls for pets",
        icon: "🥣"
    },
    {
        id: 10,
        name: "Pet Carrier",
        category: "accessories",
        price: 54.99,
        description: "Safe and comfortable travel carrier",
        icon: "🧳"
    },
    {
        id: 11,
        name: "Dog Leash",
        category: "dogs",
        price: 14.99,
        description: "Strong and reliable leash for walks",
        icon: "🦮"
    },
    {
        id: 12,
        name: "Cat Treats",
        category: "cats",
        price: 12.99,
        description: "Delicious treats your cat will love",
        icon: "🐈"
    }
];

// Shopping cart
let cart = [];

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    displayProducts(products);
    setupEventListeners();
    updateCartCount();
});

// Display products
function displayProducts(productsToShow) {
    const productsGrid = document.getElementById('productsGrid');
    productsGrid.innerHTML = '';
    
    productsToShow.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <div class="product-image">${product.icon}</div>
            <div class="product-info">
                <h3>${product.name}</h3>
                <span class="product-category">${product.category}</span>
                <p class="product-description">${product.description}</p>
                <div class="product-footer">
                    <span class="product-price">$${product.price.toFixed(2)}</span>
                    <button class="add-to-cart" onclick="addToCart(${product.id})">Add to Cart</button>
                </div>
            </div>
        `;
        productsGrid.appendChild(productCard);
    });
}

// Setup event listeners
function setupEventListeners() {
    // Category filter buttons
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            this.classList.add('active');
            
            const category = this.getAttribute('data-category');
            if (category === 'all') {
                displayProducts(products);
            } else {
                const filtered = products.filter(p => p.category === category);
                displayProducts(filtered);
            }
        });
    });
    
    // Cart icon click
    document.getElementById('cartIcon').addEventListener('click', openCart);
    
    // Close cart modal
    document.getElementById('closeCart').addEventListener('click', closeCart);
    
    // Close modal when clicking outside
    window.addEventListener('click', function(event) {
        const modal = document.getElementById('cartModal');
        if (event.target === modal) {
            closeCart();
        }
    });
    
    // Checkout button
    document.getElementById('checkoutBtn').addEventListener('click', checkout);
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Add to cart function
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        const existingItem = cart.find(item => item.id === productId);
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cart.push({
                ...product,
                quantity: 1
            });
        }
        updateCartCount();
        showNotification('Added to cart!');
    }
}

// Update cart count
function updateCartCount() {
    const count = cart.reduce((total, item) => total + item.quantity, 0);
    document.getElementById('cartCount').textContent = count;
}

// Open cart modal
function openCart() {
    displayCartItems();
    document.getElementById('cartModal').style.display = 'block';
}

// Close cart modal
function closeCart() {
    document.getElementById('cartModal').style.display = 'none';
}

// Display cart items
function displayCartItems() {
    const cartItemsContainer = document.getElementById('cartItems');
    
    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<div class="empty-cart">Your cart is empty</div>';
        document.getElementById('cartTotal').textContent = '0.00';
        return;
    }
    
    cartItemsContainer.innerHTML = '';
    let total = 0;
    
    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;
        
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <div class="cart-item-info">
                <h4>${item.name} ${item.icon}</h4>
                <p>Quantity: ${item.quantity}</p>
                <p class="cart-item-price">$${itemTotal.toFixed(2)}</p>
            </div>
            <button class="remove-item" onclick="removeFromCart(${item.id})">Remove</button>
        `;
        cartItemsContainer.appendChild(cartItem);
    });
    
    document.getElementById('cartTotal').textContent = total.toFixed(2);
}

// Remove from cart
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCartCount();
    displayCartItems();
}

// Checkout
function checkout() {
    if (cart.length === 0) {
        showNotification('Your cart is empty!');
        return;
    }
    
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    showNotification(`Thank you for your order! Total: $${total.toFixed(2)}`);
    cart = [];
    updateCartCount();
    closeCart();
}

// Show notification
function showNotification(message) {
    // Create notification element
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 80px;
        right: 20px;
        background: #27ae60;
        color: white;
        padding: 1rem 2rem;
        border-radius: 5px;
        box-shadow: 0 4px 6px rgba(0,0,0,0.1);
        z-index: 3000;
        animation: slideIn 0.3s ease-out;
    `;
    notification.textContent = message;
    
    // Add animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideIn {
            from {
                transform: translateX(400px);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
    `;
    document.head.appendChild(style);
    
    document.body.appendChild(notification);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'slideIn 0.3s ease-out reverse';
        setTimeout(() => {
            document.body.removeChild(notification);
            document.head.removeChild(style);
        }, 300);
    }, 3000);
}
