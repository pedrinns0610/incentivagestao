const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.main-nav');
if (menuToggle && nav) {
  menuToggle.addEventListener('click', () => nav.classList.toggle('open'));
}

const slides = [...document.querySelectorAll('.slide')];
const dots = [...document.querySelectorAll('.dot')];
let currentSlide = 0;
let timer;
function showSlide(index) {
  if (!slides.length) return;
  currentSlide = (index + slides.length) % slides.length;
  slides.forEach((slide, i) => slide.classList.toggle('active', i === currentSlide));
  dots.forEach((dot, i) => dot.classList.toggle('active', i === currentSlide));
}
function startSlider() {
  clearInterval(timer);
  timer = setInterval(() => showSlide(currentSlide + 1), 6200);
}
dots.forEach((dot, i) => dot.addEventListener('click', () => { showSlide(i); startSlider(); }));
showSlide(0);
startSlider();

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

const contactForm = document.querySelector('#contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const data = new FormData(contactForm);
    const nome = data.get('nome') || '';
    const empresa = data.get('empresa') || '';
    const email = data.get('email') || '';
    const telefone = data.get('telefone') || '';
    const servico = data.get('servico') || '';
    const mensagem = data.get('mensagem') || '';
    const subject = encodeURIComponent(`Contato pelo site - ${nome}`);
    const body = encodeURIComponent(`Nome: ${nome}\nEmpresa: ${empresa}\nE-mail: ${email}\nTelefone: ${telefone}\nInteresse: ${servico}\n\nMensagem:\n${mensagem}`);
    window.location.href = `mailto:contato@incentivagestao.com.br?subject=${subject}&body=${body}`;
  });
}
