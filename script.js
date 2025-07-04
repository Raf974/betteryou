// Smooth scroll pour la navigation
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

// Animation au scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-fadeIn');
        }
    });
}, observerOptions);

// Observer tous les éléments avec animation
document.querySelectorAll('.card-hover').forEach(el => {
    observer.observe(el);
});

// Menu mobile
const mobileMenuButton = document.querySelector('.md\\:hidden button');
mobileMenuButton?.addEventListener('click', function() {
    // Logique menu mobile
    console.log('Menu mobile cliqué');
});

document.addEventListener("DOMContentLoaded", function() {
    const calendlyLink = document.getElementById('calendly-link');

    if (!calendlyLink) {
        return;
    }

    const now = new Date();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    calendlyLink.href = `https://calendly.com/agencebetteryou/60min?month=${now.getFullYear()}-${month}`;
});
