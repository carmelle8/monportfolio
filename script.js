// Navigation mobile
const burger = document.getElementById('burger');
const navLinks = document.getElementById('navLinks');
const overlay = document.getElementById('overlay');

// Animation pour la navigation mobile
burger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    overlay.classList.toggle('active');
    document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';

    // Animation des liens
    const links = document.querySelectorAll('.nav-links a');
    links.forEach((link, index) => {
        if (link.style.animation) {
            link.style.animation = '';
        } else {
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
        }
    });
});

// Fermer la navigation mobile en cliquant sur l'overlay
overlay.addEventListener('click', () => {
    navLinks.classList.remove('active');
    overlay.classList.remove('active');
    document.body.style.overflow = '';
});

// Effet de scroll pour la barre de navigation
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

// Navigation fluide avec animation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        // Fermer la navigation mobile si ouverte
        navLinks.classList.remove('active');
        overlay.classList.remove('active');
        document.body.style.overflow = '';

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        // Animation de scroll
        window.scrollTo({
            top: targetElement.offsetTop - 80,
            behavior: 'smooth'
        });
    });
});

// Gestion du thème sombre/clair
const themeToggle = document.getElementById('themeToggle');
const themeIcon = document.getElementById('themeIcon');
const body = document.body;

// Vérifier le thème préféré de l'utilisateur
const preferredTheme = localStorage.getItem('theme');
if (preferredTheme === 'dark') {
    body.setAttribute('data-theme', 'dark');
    themeIcon.classList.replace('fa-moon', 'fa-sun');
}

// Changement de thème
themeToggle.addEventListener('click', () => {
    const currentTheme = body.getAttribute('data-theme');

    if (currentTheme === 'dark') {
        body.removeAttribute('data-theme');
        themeIcon.classList.replace('fa-sun', 'fa-moon');
        localStorage.setItem('theme', 'light');
    } else {
        body.setAttribute('data-theme', 'dark');
        themeIcon.classList.replace('fa-moon', 'fa-sun');
        localStorage.setItem('theme', 'dark');
    }
});

// Animation pour le lien GitHub
const githubLink = document.querySelector('.github-lk');
if (githubLink) {
    githubLink.addEventListener('mouseover', () => {
        githubLink.style.boxShadow = '0 6px 12px rgba(0, 0, 0, 0.2)';
    });

    githubLink.addEventListener('mouseout', () => {
        githubLink.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.2)';
    });
}

// Carrousel pour les projets
document.querySelectorAll('.project-carousel').forEach(carousel => {
    const images = carousel.querySelectorAll('img');
    let currentIndex = 0;

    // Animation du carrousel
    setInterval(() => {
        currentIndex = (currentIndex + 1) % images.length;
        carousel.style.transition = 'transform 0.5s ease';
        carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
    }, 3000);
});
