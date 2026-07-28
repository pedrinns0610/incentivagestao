const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.main-nav');
if (menuToggle && nav) {
  menuToggle.addEventListener('click', () => nav.classList.toggle('open'));
}

const page = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.main-nav a').forEach(link => {
  const href = link.getAttribute('href');
  if (href === page || (page === '' && href === 'index.html')) {
    link.classList.add('active');
  }
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.16 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

const filterButtons = [...document.querySelectorAll('[data-filter]')];
const serviceCards = [...document.querySelectorAll('[data-service-category]')];
filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    const filter = button.dataset.filter;
    filterButtons.forEach(btn => btn.classList.toggle('active', btn === button));
    serviceCards.forEach(card => {
      const show = filter === 'todos' || card.dataset.serviceCategory.includes(filter);
      card.style.display = show ? '' : 'none';
    });
  });
});


const decisionCanvas = document.querySelector('#decisionCanvas');
if (decisionCanvas && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const stage = decisionCanvas.closest('.decision-stage');
  stage.addEventListener('pointermove', (event) => {
    const rect = stage.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    decisionCanvas.style.setProperty('--ry', `${x * 5}deg`);
    decisionCanvas.style.setProperty('--rx', `${y * -5}deg`);
  });
  stage.addEventListener('pointerleave', () => {
    decisionCanvas.style.setProperty('--ry', '0deg');
    decisionCanvas.style.setProperty('--rx', '0deg');
  });
}
