const navToggle = document.getElementById('navToggle');
const primaryNav = document.getElementById('primaryNav');
const yearTarget = document.getElementById('year');

if (navToggle && primaryNav) {
  navToggle.addEventListener('click', () => {
    const expanded = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', String(!expanded));
    primaryNav.classList.toggle('open');
  });
}

if (yearTarget) {
  yearTarget.textContent = new Date().getFullYear();
}

const header = document.querySelector('.site-header');
if (header) {
  const observer = new IntersectionObserver(
    ([entry]) => header.classList.toggle('is-floating', !entry.isIntersecting),
    { threshold: 1 }
  );
  observer.observe(header);
}
