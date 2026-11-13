const intro = document.getElementById('intro');
const introCard = document.getElementById('introCard');
const enterBtn = document.getElementById('enterBtn');
const nav = document.getElementById('nav');
const menuToggle = document.getElementById('menuToggle');

// Flip from the coding image to the welcome message after a short pause.
window.addEventListener('load', () => {
  setTimeout(() => introCard.classList.add('flipped'), 2200);
});
enterBtn.addEventListener('click', () => {
  intro.classList.add('hide');
  document.body.classList.remove('intro-active');
});
menuToggle.addEventListener('click', () => nav.classList.toggle('open'));
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => nav.classList.remove('open')));
document.getElementById('year').textContent = new Date().getFullYear();
