// ===========================
// Mobile Menu Toggle
// ===========================

const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
}

// ===========================
// Active Navigation Link
// ===========================

function setActiveNav() {
    const currentLocation = location.pathname.split('/').pop() || 'index.html';
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentLocation || (currentLocation === '' && href === 'index.html')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

document.addEventListener('DOMContentLoaded', setActiveNav);

// ===========================
// Smooth Scroll for Anchor Links
// ===========================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && document.querySelector(href)) {
            e.preventDefault();
            const target = document.querySelector(href);
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ===========================
// Parallax Effect on Scroll
// ===========================

window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    
    // Apply parallax to hero section
    const hero = document.querySelector('.hero');
    if (hero) {
        hero.style.backgroundPosition = `center ${scrollPosition * 0.5}px`;
    }

    // Add scroll-based opacity effect
    const navBar = document.querySelector('.navbar');
    if (scrollPosition > 0) {
        navBar.style.boxShadow = `0 0 30px rgba(0, 255, 136, ${Math.min(0.5, scrollPosition / 1000)})`;
    }
});

// ===========================
// Intersection Observer for Animations
// ===========================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe cards for animation
document.querySelectorAll('.feature-card, .skill-category, .education-card, .project-card, .resume-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = '0.6s ease-out';
    observer.observe(el);
});

// ===========================
// Text Glitch Effect (Optional)
// ===========================

function addGlitchEffect() {
    const glitchElements = document.querySelectorAll('.hero-title, .section-title');
    
    glitchElements.forEach(element => {
        element.addEventListener('mouseenter', function() {
            this.style.animation = 'glitch 0.3s ease-in-out';
            setTimeout(() => {
                this.style.animation = '';
            }, 300);
        });
    });
}

// Add glitch animation to CSS dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes glitch {
        0% { text-shadow: 2px 0 var(--accent-neon), -2px 0 var(--accent-cyan); }
        10% { text-shadow: -2px -2px var(--accent-neon), 2px 2px var(--accent-cyan); }
        20% { text-shadow: 2px 2px var(--accent-neon), -2px -2px var(--accent-cyan); }
        30% { text-shadow: -2px 2px var(--accent-neon), 2px -2px var(--accent-cyan); }
        40% { text-shadow: 2px -2px var(--accent-neon), -2px 2px var(--accent-cyan); }
        50% { text-shadow: 0 0 var(--accent-neon), 0 0 var(--accent-cyan); }
        60% { text-shadow: -2px -2px var(--accent-neon), 2px 2px var(--accent-cyan); }
        70% { text-shadow: 2px 2px var(--accent-neon), -2px -2px var(--accent-cyan); }
        80% { text-shadow: -2px 2px var(--accent-neon), 2px -2px var(--accent-cyan); }
        90% { text-shadow: 2px -2px var(--accent-neon), -2px 2px var(--accent-cyan); }
        100% { text-shadow: 0 0 0 transparent; }
    }
`;
document.head.appendChild(style);

document.addEventListener('DOMContentLoaded', addGlitchEffect);

// ===========================
// Scroll Progress Bar
// ===========================

window.addEventListener('scroll', () => {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height);
    
    // Optional: Add a progress indicator via navbar glow
    const navbar = document.querySelector('.navbar');
    if (navbar && scrolled > 0.05) {
        navbar.style.borderBottomWidth = '3px';
    }
});

// ===========================
// Cursor Glow Effect (Optional)
// ===========================

let mouseX = 0;
let mouseY = 0;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

// ===========================
// Form Validation (if needed)
// ===========================

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// ===========================
// Copy to Clipboard for Contact Info
// ===========================

function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        alert('Copied to clipboard!');
    }).catch(err => {
        console.error('Failed to copy: ', err);
    });
}

// ===========================
// Lazy Loading for Images
// ===========================

if ('IntersectionObserver' in window) {
    let imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                let img = entry.target;
                img.src = img.dataset.src;
                img.classList.add('loaded');
                imageObserver.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => imageObserver.observe(img));
}

// ===========================
// Keyboard Navigation
// ===========================

document.addEventListener('keydown', (e) => {
    // Close mobile menu on Escape
    if (e.key === 'Escape') {
        hamburger?.classList.remove('active');
        navMenu?.classList.remove('active');
    }
});

// ===========================
// Loading Animation
// ===========================

window.addEventListener('load', () => {
    document.body.style.opacity = '1';
    
    // Animate elements on load
    const elements = document.querySelectorAll('h1, h2, .feature-card, .project-card');
    elements.forEach((el, index) => {
        el.style.animationDelay = `${index * 0.1}s`;
    });
});

// ===========================
// Page Visibility API
// ===========================

document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        console.log('Page hidden');
    } else {
        console.log('Page visible');
    }
});

// ===========================
// Local Storage for Theme (Optional)
// ===========================

function saveUserPreference(key, value) {
    localStorage.setItem(key, value);
}

function getUserPreference(key) {
    return localStorage.getItem(key);
}

// ===========================
// Console Easter Egg
// ===========================

console.log('%c🚀 Welcome to Dev Portal!', 'color: #00ff88; font-size: 20px; font-weight: bold; text-shadow: 0 0 10px #00ff88;');
console.log('%cYou\'re looking at the source code? Respect.', 'color: #00d9ff; font-size: 14px; font-style: italic;');
console.log('%cFeel free to explore, learn, and build something awesome.', 'color: #9d00ff; font-size: 14px;');
console.log('%cBut hey, go check out the projects page. That\'s where the real magic is.', 'color: #ff0080; font-size: 14px; font-weight: bold;');

// ===========================
// Performance Monitoring
// ===========================

if (window.performance && window.performance.timing) {
    window.addEventListener('load', function() {
        setTimeout(function() {
            const timing = window.performance.timing;
            const loadTime = timing.loadEventEnd - timing.navigationStart;
            console.log(`%cPage loaded in ${loadTime}ms`, 'color: #00ff88; font-weight: bold;');
        }, 0);
    });
}

// ===========================
// Enhanced Mobile Menu
// ===========================

function setupMobileMenu() {
    const navItems = document.querySelectorAll('.nav-item');
    
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            navItems.forEach(i => i.classList.remove('active'));
            item.classList.add('active');
        });
    });
}

document.addEventListener('DOMContentLoaded', setupMobileMenu);

// ===========================
// Scroll To Top Button (Optional)
// ===========================

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Show scroll to top button when scrolled down
window.addEventListener('scroll', () => {
    const scrollButton = document.querySelector('.scroll-to-top');
    if (scrollButton) {
        if (window.scrollY > 300) {
            scrollButton.style.display = 'block';
        } else {
            scrollButton.style.display = 'none';
        }
    }
});

console.log('%c✨ Built with raw talent and exceptional coffee ✨', 'color: #ffaa00; font-size: 12px; font-style: italic;');
