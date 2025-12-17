// ============================================
// NAVIGATION SCROLL EFFECT
// ============================================

const navbar = document.getElementById('navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;
  
  // Add scrolled class when scrolling down
  if (currentScroll > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
  
  lastScroll = currentScroll;
});

// ============================================
// SMOOTH SCROLL FOR NAVIGATION LINKS
// ============================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    
    if (target) {
      const offsetTop = target.offsetTop - 80; // Account for fixed navbar
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  });
});

// ============================================
// SCROLL ANIMATIONS
// ============================================

const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, observerOptions);

// Observe all fade-in elements
document.querySelectorAll('.fade-in').forEach(el => {
  observer.observe(el);
});

// ============================================
// DYNAMIC GRADIENT ANIMATION
// ============================================

const hero = document.querySelector('.hero');
let mouseX = 0;
let mouseY = 0;

document.addEventListener('mousemove', (e) => {
  mouseX = e.clientX / window.innerWidth;
  mouseY = e.clientY / window.innerHeight;
  
  if (hero) {
    const xOffset = (mouseX - 0.5) * 20;
    const yOffset = (mouseY - 0.5) * 20;
    
    hero.style.setProperty('--mouse-x', `${xOffset}px`);
    hero.style.setProperty('--mouse-y', `${yOffset}px`);
  }
});

// ============================================
// BUTTON RIPPLE EFFECT
// ============================================

document.querySelectorAll('.btn').forEach(button => {
  button.addEventListener('click', function(e) {
    const rect = this.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const ripple = document.createElement('span');
    ripple.style.cssText = `
      position: absolute;
      width: 20px;
      height: 20px;
      border-radius: 50%;
      background: rgba(255, 255, 255, 0.5);
      left: ${x}px;
      top: ${y}px;
      transform: translate(-50%, -50%) scale(0);
      animation: ripple 0.6s ease-out;
      pointer-events: none;
    `;
    
    this.style.position = 'relative';
    this.style.overflow = 'hidden';
    this.appendChild(ripple);
    
    setTimeout(() => ripple.remove(), 600);
  });
});

// Add ripple animation to CSS dynamically
const style = document.createElement('style');
style.textContent = `
  @keyframes ripple {
    to {
      transform: translate(-50%, -50%) scale(20);
      opacity: 0;
    }
  }
`;
document.head.appendChild(style);

// ============================================
// FEATURE CARDS STAGGER ANIMATION
// ============================================

const featureCards = document.querySelectorAll('.feature-card');
featureCards.forEach((card, index) => {
  card.style.animationDelay = `${index * 0.1}s`;
});

// ============================================
// PARALLAX EFFECT ON SCROLL
// ============================================

window.addEventListener('scroll', () => {
  const scrolled = window.pageYOffset;
  const parallaxElements = document.querySelectorAll('.hero-content');
  
  parallaxElements.forEach(el => {
    const speed = 0.5;
    el.style.transform = `translateY(${scrolled * speed}px)`;
  });
});

// ============================================
// LOADING ANIMATION
// ============================================

window.addEventListener('load', () => {
  document.body.style.opacity = '0';
  setTimeout(() => {
    document.body.style.transition = 'opacity 0.5s ease';
    document.body.style.opacity = '1';
  }, 100);
});

// ============================================
// CONSOLE MESSAGE
// ============================================

console.log('%c🎬 Legendas Pro', 'font-size: 24px; font-weight: bold; background: linear-gradient(135deg, #6366f1, #3b82f6); -webkit-background-clip: text; -webkit-text-fill-color: transparent;');
console.log('%cSite desenvolvido com tecnologias modernas', 'font-size: 12px; color: #06b6d4;');
