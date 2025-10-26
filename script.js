// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// Scroll animations
const fadeElements = document.querySelectorAll('.fade-in');

const appearOnScroll = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            appearOnScroll.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });

fadeElements.forEach(element => {
    appearOnScroll.observe(element);
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Handle profile image fallback
document.addEventListener('DOMContentLoaded', function() {
    const profileImg = document.querySelector('.profile-img img');
    const fallbackIcon = document.querySelector('.profile-img .fa-user');
    
    if (profileImg && profileImg.complete && profileImg.naturalHeight === 0) {
        // Image failed to load
        profileImg.style.display = 'none';
        fallbackIcon.style.display = 'flex';
    }
    
    profileImg.addEventListener('error', function() {
        this.style.display = 'none';
        fallbackIcon.style.display = 'flex';
    });
});