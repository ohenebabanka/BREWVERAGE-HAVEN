// ========================================
// Brewverage Haven - Complete JavaScript
// MOBILE-FRIENDLY FUNCTIONS
// Coffee Website - IT245 Project
// Student: OHENEBA BANKA KWAME (2425400253)
// ========================================

// ========================================
// MOBILE MENU TOGGLE
// ========================================
function toggleMenu() {
    const menu = document.getElementById('nav-menu');
    if (menu) {
        menu.classList.toggle('show');
    }
}

// Close mobile menu when clicking outside
document.addEventListener('click', function(event) {
    const menu = document.getElementById('nav-menu');
    const toggle = document.querySelector('.nav-toggle');
    
    if (menu && toggle && menu.classList.contains('show')) {
        if (!menu.contains(event.target) && !toggle.contains(event.target)) {
            menu.classList.remove('show');
        }
    }
});

// ========================================
// CONTACT FORM VALIDATION
// ========================================
function validateContactForm(event) {
    event.preventDefault();
    
    // Get form values
    let name = document.getElementById('name')?.value.trim() || '';
    let email = document.getElementById('email')?.value.trim() || '';
    let message = document.getElementById('message')?.value.trim() || '';
    
    // Get feedback element
    let feedback = document.getElementById('form-feedback');
    if (!feedback) return false;
    
    // Validate name
    if (name === '') {
        feedback.style.display = 'block';
        feedback.style.color = 'red';
        feedback.innerHTML = 'Please enter your full name.';
        return false;
    }
    
    // Validate email
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        feedback.style.display = 'block';
        feedback.style.color = 'red';
        feedback.innerHTML = 'Please enter a valid email address.';
        return false;
    }
    
    // Validate message
    if (message === '') {
        feedback.style.display = 'block';
        feedback.style.color = 'red';
        feedback.innerHTML = 'Please enter your message.';
        return false;
    }
    
    // If all validation passes
    feedback.style.display = 'block';
    feedback.style.color = 'green';
    feedback.innerHTML = '✓ Message sent successfully! We will respond within 24 hours.';
    
    // Clear form
    let form = document.getElementById('contactForm');
    if (form) form.reset();
    
    return false;
}

// ========================================
// COFFEE CALCULATOR
// ========================================
function calculateCoffee() {
    let cups = document.getElementById('cups')?.value;
    let strength = document.getElementById('strength')?.value;
    let resultDiv = document.getElementById('calc-result');
    let coffeeAmount = document.getElementById('coffee-amount');
    let waterAmount = document.getElementById('water-amount');
    
    if (!cups || cups < 1) cups = 2;
    
    // Standard: 250ml water per cup
    let waterPerCup = 250;
    let totalWater = cups * waterPerCup;
    
    // Coffee in grams = water / ratio
    let ratio = parseInt(strength) || 16;
    let coffeeGrams = Math.round(totalWater / ratio);
    
    coffeeAmount.innerHTML = `Coffee: ${coffeeGrams}g (${(coffeeGrams/1000).toFixed(2)}kg)`;
    waterAmount.innerHTML = `Water: ${totalWater}ml (${totalWater/1000} liters)`;
    
    resultDiv.style.display = 'block';
}

// ========================================
// ADD TO CART FUNCTION
// ========================================
function addToCart(itemName) {
    let cartMessage = document.getElementById('cart-message');
    if (cartMessage) {
        cartMessage.style.display = 'block';
        cartMessage.innerHTML = `✓ ${itemName} added to cart!`;
        
        setTimeout(() => {
            cartMessage.style.display = 'none';
        }, 3000);
    }
}

// ========================================
// NEWSLETTER SUBSCRIPTION
// ========================================
function subscribeNewsletter(event) {
    event.preventDefault();
    let email = document.getElementById('newsletter-email')?.value.trim();
    let feedback = document.getElementById('newsletter-feedback');
    
    if (!feedback) return false;
    
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        feedback.style.display = 'block';
        feedback.style.color = 'red';
        feedback.innerHTML = 'Please enter a valid email address.';
        return false;
    }
    
    feedback.style.display = 'block';
    feedback.style.color = 'green';
    feedback.innerHTML = '✓ Subscribed successfully! Check your email for confirmation.';
    
    document.getElementById('newsletter-email').value = '';
    return false;
}

// ========================================
// SCROLL TO TOP
// ========================================
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Show/hide scroll button based on scroll position
window.addEventListener('scroll', function() {
    let btn = document.getElementById('scroll-top-btn');
    if (btn) {
        if (window.scrollY > 300) {
            btn.style.display = 'block';
        } else {
            btn.style.display = 'none';
        }
    }
});

// ========================================
// COPYRIGHT YEAR UPDATE
// ========================================
function updateCopyrightYear() {
    let copyright = document.querySelector('.copyright p');
    if (copyright) {
        let currentYear = new Date().getFullYear();
        copyright.innerHTML = `&copy; ${currentYear} Brewverage Haven | Student: OHENEBA BANKA KWAME (2425400253)`;
    }
}

// ========================================
// ACTIVE PAGE HIGHLIGHTING
// ========================================
function setActivePage() {
    let currentPage = window.location.pathname.split('/').pop() || 'index.html';
    let links = document.querySelectorAll('nav ul li a');
    
    links.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });
}

// ========================================
// EVENT REGISTRATION HELPER
// ========================================
function registerForEvent(eventName) {
    alert(`Thank you for your interest in ${eventName}! Please fill out the contact form and select 'Event Registration' as the subject.`);
}

// ========================================
// INITIALIZATION
// ========================================
document.addEventListener('DOMContentLoaded', function() {
    console.log('✓ Brewverage Haven loaded - Student: OHENEBA BANKA KWAME (2425400253)');
    
    // Update copyright year
    updateCopyrightYear();
    
    // Set active page in navigation
    setActivePage();
    
    // Initialize calculator if on brew guide page
    if (document.getElementById('calc-result')) {
        // Calculator exists, no action needed
    }
});
