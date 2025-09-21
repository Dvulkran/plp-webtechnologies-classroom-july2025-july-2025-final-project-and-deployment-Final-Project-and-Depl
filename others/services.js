// JavaScript for Services Page - Safari Adventures Kenya

// Smooth scrolling for anchor links
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

// Navbar scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.backdropFilter = 'blur(10px)';
    } else {
        navbar.style.background = '#fff';
        navbar.style.backdropFilter = 'none';
    }
});

// Package card interactions
document.querySelectorAll('.package-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        if (!this.classList.contains('featured')) {
            this.style.transform = 'translateY(-15px) scale(1.02)';
        }
    });
    
    card.addEventListener('mouseleave', function() {
        if (!this.classList.contains('featured')) {
            this.style.transform = 'translateY(-10px) scale(1)';
        }
    });
});

// Package booking buttons
document.querySelectorAll('.package-btn').forEach(button => {
    button.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Get the package name from the card
        const packageCard = this.closest('.package-card');
        const packageName = packageCard.querySelector('h3').textContent;
        
        // Scroll to booking form
        document.querySelector('.contact-booking').scrollIntoView({
            behavior: 'smooth'
        });
        
        // Pre-fill the package selection
        setTimeout(() => {
            const packageSelect = document.getElementById('package');
            if (packageName.includes('Classic')) {
                packageSelect.value = 'classic';
            } else if (packageName.includes('Cultural')) {
                packageSelect.value = 'cultural';
            } else if (packageName.includes('Adventure')) {
                packageSelect.value = 'adventure';
            }
            
            // Add a highlight effect to the form
            const form = document.querySelector('.booking-form');
            form.style.border = '3px solid #2c5530';
            form.style.transition = 'border 0.5s ease';
            
            setTimeout(() => {
                form.style.border = 'none';
            }, 2000);
            
        }, 800);
        
        // Button click effect
        this.style.transform = 'scale(0.95)';
        setTimeout(() => {
            this.style.transform = 'scale(1)';
        }, 150);
    });
});

// Service item hover effects
document.querySelectorAll('.service-item').forEach(item => {
    const icon = item.querySelector('i');
    
    item.addEventListener('mouseenter', function() {
        icon.style.transform = 'scale(1.2) rotate(10deg)';
        icon.style.color = '#8b4513';
        icon.style.transition = 'all 0.3s ease';
    });
    
    item.addEventListener('mouseleave', function() {
        icon.style.transform = 'scale(1) rotate(0deg)';
        icon.style.color = '#2c5530';
    });
});

// Destination item interactions
document.querySelectorAll('.destination-item').forEach(item => {
    item.addEventListener('click', function() {
        // Add a selection effect
        this.style.transform = 'translateY(-8px) scale(1.02)';
        this.style.boxShadow = '0 15px 30px rgba(44, 85, 48, 0.3)';
        
        setTimeout(() => {
            this.style.transform = 'translateY(-5px) scale(1)';
            this.style.boxShadow = '0 5px 15px rgba(0,0,0,0.1)';
        }, 300);
    });
});

// Form validation and handling
const bookingForm = document.getElementById('bookingForm');
if (bookingForm) {
    bookingForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Simple form validation
        const requiredFields = this.querySelectorAll('[required]');
        let isValid = true;
        
        requiredFields.forEach(field => {
            if (!field.value.trim()) {
                field.style.borderColor = '#ff4444';
                field.style.backgroundColor = '#fff5f5';
                isValid = false;
            } else {
                field.style.borderColor = '#2c5530';
                field.style.backgroundColor = '#f0f8f0';
            }
        });
        
        if (isValid) {
            // Show success message
            showSuccessMessage();
            
            // Reset form after a delay
            setTimeout(() => {
                this.reset();
                resetFormStyles();
            }, 2000);
        } else {
            showErrorMessage();
        }
    });
    
    // Real-time validation
    bookingForm.querySelectorAll('input, select, textarea').forEach(field => {
        field.addEventListener('input', function() {
            if (this.hasAttribute('required') && this.value.trim()) {
                this.style.borderColor = '#2c5530';
                this.style.backgroundColor = 'white';
            }
        });
        
        field.addEventListener('blur', function() {
            if (this.hasAttribute('required') && !this.value.trim()) {
                this.style.borderColor = '#ff4444';
            }
        });
    });
}

// Success and error message functions
function showSuccessMessage() {
    const form = document.querySelector('.booking-form');
    const successDiv = document.createElement('div');
    successDiv.innerHTML = `
        <div style="background: #d4edda; color: #155724; padding: 15px; border-radius: 8px; margin-bottom: 20px; text-align: center;">
            <i class="fas fa-check-circle"></i> 
            <strong>Success!</strong> Your booking request has been sent. We'll contact you within 24 hours.
        </div>
    `;
    form.insertBefore(successDiv, form.firstChild);
    
    setTimeout(() => {
        successDiv.remove();
    }, 5000);
}

function showErrorMessage() {
    const form = document.querySelector('.booking-form');
    const errorDiv = document.createElement('div');
    errorDiv.innerHTML = `
        <div style="background: #f8d7da; color: #721c24; padding: 15px; border-radius: 8px; margin-bottom: 20px; text-align: center;">
            <i class="fas fa-exclamation-triangle"></i> 
            <strong>Error:</strong> Please fill in all required fields.
        </div>
    `;
    form.insertBefore(errorDiv, form.firstChild);
    
    setTimeout(() => {
        errorDiv.remove();
    }, 5000);
}

function resetFormStyles() {
    const form = document.getElementById('bookingForm');
    form.querySelectorAll('input, select, textarea').forEach(field => {
        field.style.borderColor = '#e0e0e0';
        field.style.backgroundColor = 'white';
    });
}

// Intersection Observer for animations
function createScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                
                // Staggered animation for grids
                if (entry.target.classList.contains('packages-grid') || 
                    entry.target.classList.contains('services-grid') ||
                    entry.target.classList.contains('destinations-grid')) {
                    
                    const items = entry.target.children;
                    Array.from(items).forEach((item, index) => {
                        setTimeout(() => {
                            item.style.opacity = '1';
                            item.style.transform = 'translateY(0)';
                        }, index * 100);
                    });
                }
            }
        });
    }, observerOptions);

    return observer;
}

// Initialize animations on page load
document.addEventListener('DOMContentLoaded', function() {
    // Set initial styles for animated elements
    const animatedElements = document.querySelectorAll(
        '.package-card, .destination-item, .service-item, .step, .packages-grid, .destinations-grid, .services-grid'
    );
    
    animatedElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });
    
    // Start observing
    const observer = createScrollAnimations();
    animatedElements.forEach(element => {
        observer.observe(element);
    });

    // Page fade-in effect
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// Process steps animation
document.querySelectorAll('.step').forEach((step, index) => {
    step.addEventListener('mouseenter', function() {
        const stepNumber = this.querySelector('.step-number');
        stepNumber.style.transform = 'scale(1.1)';
        stepNumber.style.backgroundColor = '#8b4513';
        stepNumber.style.transition = 'all 0.3s ease';
    });
    
    step.addEventListener('mouseleave', function() {
        const stepNumber = this.querySelector('.step-number');
        stepNumber.style.transform = 'scale(1)';
        stepNumber.style.backgroundColor = '#2c5530';
    });
});

// Price hover effects for packages
document.querySelectorAll('.package-price').forEach(price => {
    price.addEventListener('mouseenter', function() {
        this.style.color = '#8b4513';
        this.style.transform = 'scale(1.1)';
        this.style.transition = 'all 0.3s ease';
    });
    
    price.addEventListener('mouseleave', function() {
        this.style.color = '#2c5530';
        this.style.transform = 'scale(1)';
    });
});

// Navigation active link management
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function() {
        document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
        this.classList.add('active');
    });
});

// Auto-scroll to sections on hash change
window.addEventListener('hashchange', function() {
    const hash = window.location.hash;
    if (hash) {
        const target = document.querySelector(hash);
        if (target) {
            setTimeout(() => {
                target.scrollIntoView({ behavior: 'smooth' });
            }, 100);
        }
    }
});

// Add loading state to form submission
function addLoadingState(button) {
    const originalText = button.innerHTML;
    button.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
    button.disabled = true;
    
    setTimeout(() => {
        button.innerHTML = originalText;
        button.disabled = false;
    }, 3000);
}

// Console messages
console.log('Safari Adventures Kenya - Services page loaded successfully!');
console.log('All interactive features and animations are ready.');

// Performance monitoring
window.addEventListener('load', function() {
    console.log('Page fully loaded. All images and resources ready.');
});