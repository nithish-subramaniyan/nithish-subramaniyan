document.addEventListener('DOMContentLoaded', function() {
// Loading screen
const loadingScreen = document.querySelector('.loading-screen');

setTimeout(() => {
loadingScreen.classList.add('hide');
}, 1500);

// Theme toggle
const toggleSwitch = document.querySelector('.toggle-switch');
const currentTheme = localStorage.getItem('theme') || 'dark';

if (currentTheme === 'light') {
document.documentElement.setAttribute('data-theme', 'light');
}

toggleSwitch.addEventListener('click', function() {
const currentTheme = document.documentElement.getAttribute('data-theme');
const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

document.documentElement.setAttribute('data-theme', newTheme);
localStorage.setItem('theme', newTheme);
});

// Mobile menu toggle
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const navList = document.querySelector('.nav-list');

mobileMenuToggle.addEventListener('click', function() {
navList.classList.toggle('active');
});

// Smooth scrolling for navigation links
const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(link => {
link.addEventListener('click', function(e) {
e.preventDefault();

const targetId = this.getAttribute('href');
const targetSection = document.querySelector(targetId);

if (targetSection) {
const offsetTop = targetSection.offsetTop - 80;

window.scrollTo({
top: offsetTop,
behavior: 'smooth'
});

// Close mobile menu if open
navList.classList.remove('active');
}
});
});

// Animate elements on load
const animateOnLoadElements = document.querySelectorAll('.animate-on-load');

setTimeout(() => {
animateOnLoadElements.forEach(element => {
element.classList.add('animated');
});
}, 500);

// Animate elements on scroll
const animateOnScrollElements = document.querySelectorAll('.animate-on-scroll');

function checkScroll() {
const triggerBottom = window.innerHeight * 0.8;

animateOnScrollElements.forEach(element => {
const elementTop = element.getBoundingClientRect().top;

if (elementTop < triggerBottom) {
element.classList.add('animated');
}
});
}

window.addEventListener('scroll', checkScroll);
checkScroll(); // Check on initial load

// Parallax effect for hero section
const hero = document.querySelector('.hero');
const heroVisual = document.querySelector('.hero-visual');

window.addEventListener('scroll', () => {
const scrollPosition = window.scrollY;

if (hero && heroVisual) {
heroVisual.style.transform = `translateY(${scrollPosition * 0.3}px)`;
}
});

// Form submission
const contactForm = document.querySelector('.contact-form form');

if (contactForm) {
contactForm.addEventListener('submit', function(e) {
e.preventDefault();

// Get form values
const name = this.querySelector('input[type="text"]').value;
const email = this.querySelector('input[type="email"]').value;
const message = this.querySelector('textarea').value;

// Here you would normally send the data to a server
// For this demo, we'll just show a success message
const formElements = this.querySelectorAll('input, textarea, button');

formElements.forEach(element => {
element.disabled = true;
});

const successMessage = document.createElement('div');
successMessage.className = 'success-message';
successMessage.textContent = 'Thank you for your message! I will get back to you soon.';
successMessage.style.color = 'var(--primary-color)';
successMessage.style.marginTop = '20px';
successMessage.style.fontWeight = '600';

this.appendChild(successMessage);

// Reset form after 3 seconds
setTimeout(() => {
this.reset();
formElements.forEach(element => {
element.disabled = false;
});
successMessage.remove();
}, 3000);
});
}

// Header background on scroll
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
if (window.scrollY > 50) {
header.style.backgroundColor = 'rgba(26, 32, 44, 0.95)';
document.documentElement.setAttribute('data-theme', document.documentElement.getAttribute('data-theme'));
} else {
header.style.backgroundColor = 'rgba(26, 32, 44, 0.9)';
}
});

// Typing effect for hero title
const heroTitle = document.querySelector('.hero-title');
if (heroTitle) {
const titleLines = heroTitle.querySelectorAll('.title-line');

titleLines.forEach((line, index) => {
const text = line.textContent;
line.textContent = '';
line.style.opacity = '1';

let charIndex = 0;

function typeText() {
if (charIndex < text.length) {
line.textContent += text.charAt(charIndex);
charIndex++;
setTimeout(typeText, 50 + (index * 500));
}
}

setTimeout(() => {
typeText();
}, 1000 + (index * 500));
});
}

// Skill items stagger animation
const skillCategories = document.querySelectorAll('.skill-category');

skillCategories.forEach((category, categoryIndex) => {
const skillItems = category.querySelectorAll('.skill-item');

skillItems.forEach((item, itemIndex) => {
item.style.animationDelay = `${(categoryIndex * 0.1) + (itemIndex * 0.05)}s`;
});
});

// Project cards hover effect
const projectCards = document.querySelectorAll('.project-card');

projectCards.forEach(card => {
card.addEventListener('mouseenter', function() {
this.style.transform = 'translateY(-10px) scale(1.02)';
});

card.addEventListener('mouseleave', function() {
this.style.transform = 'translateY(0) scale(1)';
});
});

// Timeline items stagger animation
const timelineItems = document.querySelectorAll('.timeline-item');

timelineItems.forEach((item, index) => {
item.style.animationDelay = `${index * 0.2}s`;
});
});
