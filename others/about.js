// JavaScript for About Page - Safari Adventures Kenya

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

// Intersection Observer for fade-in animations
function createObserver() {
    const options = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                // Add a small delay for staggered animations
                const delay = Array.from(entry.target.parentNode.children).indexOf(entry.target) * 100;
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, delay);
            }
        });
    }, options);

    return observer;
}

// Initialize animations when page loads
document.addEventListener('DOMContentLoaded', function() {
    // Add fade-in class and styles to animated elements
    const animatedElements = document.querySelectorAll(
        '.value-card, .team-member, .reason, .story-text, .story-image'
    );
    
    animatedElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });

    // Create and start observing
    const observer = createObserver();
    animatedElements.forEach(element => {
        observer.observe(element);
    });

    // Page loading animation
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// Add hover effects to interactive elements
document.querySelectorAll('.value-card, .team-member, .reason').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(-5px)';
    });
});

// Team member interaction
document.querySelectorAll('.team-member').forEach(member => {
    member.addEventListener('click', function() {
        // Add a subtle click effect
        this.style.transform = 'translateY(-8px) scale(1.02)';
        setTimeout(() => {
            this.style.transform = 'translateY(-5px) scale(1)';
        }, 150);
    });
});

// Value cards interactive effects
document.querySelectorAll('.value-card').forEach(card => {
    const icon = card.querySelector('i');
    
    card.addEventListener('mouseenter', function() {
        icon.style.transform = 'scale(1.1) rotate(5deg)';
        icon.style.transition = 'transform 0.3s ease';
    });
    
    card.addEventListener('mouseleave', function() {
        icon.style.transform = 'scale(1) rotate(0deg)';
    });
});

// Reason cards interactive effects
document.querySelectorAll('.reason').forEach(reason => {
    const icon = reason.querySelector('.reason-icon i');
    
    reason.addEventListener('mouseenter', function() {
        icon.style.color = '#8b4513';
        icon.style.transition = 'color 0.3s ease';
    });
    
    reason.addEventListener('mouseleave', function() {
        icon.style.color = '#2c5530';
    });
});

// Button hover effects
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-3px)';
        this.style.boxShadow = '0 5px 15px rgba(0,0,0,0.2)';
    });
    
    button.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
        this.style.boxShadow = 'none';
    });
});

// Story section scroll effect
window.addEventListener('scroll', function() {
    const storySection = document.querySelector('.our-story');
    const storyText = document.querySelector('.story-text');
    const storyImage = document.querySelector('.story-image');
    
    if (storySection && storyText && storyImage) {
        const sectionTop = storySection.offsetTop;
        const scrollPosition = window.pageYOffset;
        const windowHeight = window.innerHeight;
        
        if (scrollPosition > sectionTop - windowHeight + 200) {
            storyText.style.transform = 'translateX(0)';
            storyImage.style.transform = 'translateX(0)';
        }
    }
});

// Add some interactive feedback for links
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function() {
        // Remove active class from all links
        document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
        // Add active class to clicked link
        this.classList.add('active');
    });
});

// Simple parallax effect for hero section
window.addEventListener('scroll', function() {
    const hero = document.querySelector('.about-hero');
    const scrolled = window.pageYOffset;
    if (hero) {
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// Console message
console.log('Safari Adventures Kenya - About page loaded successfully!');

// Add a simple loading indicator
function showLoadingComplete() {
    console.log('All animations and interactions loaded successfully');
}

// Call after a short delay to ensure everything is loaded
setTimeout(showLoadingComplete, 1000);