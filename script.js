const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

// Fecha o menu ao clicar fora dele
document.addEventListener('click', (e) => {
  const isClickInsideNav = navLinks.contains(e.target) || hamburger.contains(e.target);
  if (!isClickInsideNav) {
    navLinks.classList.remove('show');
  }
});



