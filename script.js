// Navigation mobile
const burger = document.getElementById('burger');
const navLinks = document.getElementById('navLinks');
const overlay = document.getElementById('overlay');

burger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    overlay.classList.toggle('active');
    document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
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

// Navigation fluide
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        window.scrollTo({
            top: targetElement.offsetTop - 80,
            behavior: 'smooth'
        });
        // Fermer la navigation mobile après clic
        navLinks.classList.remove('active');
        overlay.classList.remove('active');
        document.body.style.overflow = '';
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
