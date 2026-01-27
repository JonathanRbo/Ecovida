/**
 * EDUPRO - CUSTOM JAVASCRIPT
 * Plataforma de Cursos Online
 */

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    console.log('EduPro Platform Loaded! 🚀');

    // Initialize animations if WOW is available
    if (typeof WOW !== 'undefined') {
        new WOW({
            offset: 50,
            mobile: true,
            live: true
        }).init();
    }

    // Smooth scroll for anchor links
    initSmoothScroll();

    // Initialize countdown timer
    initCountdown();

    // Add active class to navigation
    updateActiveNav();
});

/**
 * Smooth scroll for anchor links
 */
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');

            // Skip if href is just "#"
            if (href === '#') {
                e.preventDefault();
                return;
            }

            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

/**
 * Initialize countdown timer
 */
function initCountdown() {
    const countdownElements = document.querySelectorAll('.countdown-timer');

    countdownElements.forEach(element => {
        // Set target time (24 hours from now)
        const targetTime = new Date().getTime() + (24 * 60 * 60 * 1000);

        // Update countdown every second
        setInterval(() => {
            const now = new Date().getTime();
            const distance = targetTime - now;

            // Calculate time units
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            // Update display
            const items = element.querySelectorAll('.countdown-item div.more-40');
            if (items.length >= 3) {
                items[0].textContent = hours.toString().padStart(2, '0');
                items[1].textContent = minutes.toString().padStart(2, '0');
                items[2].textContent = seconds.toString().padStart(2, '0');
            }
        }, 1000);
    });
}

/**
 * Update active navigation link based on scroll position
 */
function updateActiveNav() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    if (sections.length === 0 || navLinks.length === 0) return;

    window.addEventListener('scroll', () => {
        let current = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;

            if (scrollY >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + current) {
                link.classList.add('active');
            }
        });
    });
}

/**
 * Show toast notification
 */
function showToast(message, type = 'success') {
    // Create toast element
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 16px 24px;
        background: ${type === 'success' ? '#10b981' : '#ef4444'};
        color: white;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        z-index: 9999;
        animation: slideInRight 0.3s ease;
        max-width: 300px;
    `;
    toast.textContent = message;

    // Add animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideInRight {
            from {
                transform: translateX(400px);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
        @keyframes slideOutRight {
            from {
                transform: translateX(0);
                opacity: 1;
            }
            to {
                transform: translateX(400px);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);

    // Add to page
    document.body.appendChild(toast);

    // Remove after 3 seconds
    setTimeout(() => {
        toast.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => {
            document.body.removeChild(toast);
        }, 300);
    }, 3000);
}

/**
 * Validate email format
 */
function isValidEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

/**
 * Format date to Brazilian format
 */
function formatDate(date) {
    return new Intl.DateTimeFormat('pt-BR', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
    }).format(date);
}

/**
 * Get course progress from localStorage
 */
function getCourseProgress(courseId) {
    const key = `course_${courseId}_progress`;
    return localStorage.getItem(key) || '0';
}

/**
 * Set course progress in localStorage
 */
function setCourseProgress(courseId, progress) {
    const key = `course_${courseId}_progress`;
    localStorage.setItem(key, progress);
}

/**
 * Get completed courses count
 */
function getCompletedCoursesCount() {
    let count = 0;
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key && key.includes('course_') && key.includes('_completed')) {
            if (localStorage.getItem(key) === 'true') {
                count++;
            }
        }
    }
    return count;
}

/**
 * Get total courses count
 */
function getTotalCoursesCount() {
    return 5; // We have 5 courses
}

/**
 * Update dashboard stats
 */
function updateDashboardStats() {
    const completedCount = getCompletedCoursesCount();
    const totalCount = getTotalCoursesCount();

    // Update stats if elements exist
    const statsElements = document.querySelectorAll('.stats-card .more-40');
    if (statsElements.length >= 3) {
        statsElements[0].textContent = totalCount;
        statsElements[1].textContent = completedCount;
        statsElements[2].textContent = completedCount;
    }
}

/**
 * Load user preferences
 */
function loadUserPreferences() {
    const theme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', theme);
}

/**
 * Save user preferences
 */
function saveUserPreferences(key, value) {
    localStorage.setItem(key, value);
}

/**
 * Debounce function for performance
 */
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

/**
 * Check if user is on mobile device
 */
function isMobile() {
    return window.innerWidth <= 768;
}

/**
 * Lazy load images
 */
function lazyLoadImages() {
    const images = document.querySelectorAll('img[data-src]');

    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                observer.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));
}

/**
 * Analytics tracking (placeholder)
 */
function trackEvent(eventName, eventData = {}) {
    console.log('Event tracked:', eventName, eventData);
    // In production, integrate with Google Analytics, Mixpanel, etc.
}

// Export functions for use in other scripts
window.EduPro = {
    showToast,
    isValidEmail,
    formatDate,
    getCourseProgress,
    setCourseProgress,
    getCompletedCoursesCount,
    getTotalCoursesCount,
    updateDashboardStats,
    loadUserPreferences,
    saveUserPreferences,
    isMobile,
    trackEvent
};

// Initialize user preferences
loadUserPreferences();

// Update dashboard stats if on dashboard page
if (window.location.pathname.includes('dashboard')) {
    updateDashboardStats();
}

console.log('✅ EduPro JavaScript initialized successfully!');
