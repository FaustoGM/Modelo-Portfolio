document.addEventListener('DOMContentLoaded', () => {
  const toggleTheme = document.getElementById('toggle-theme');
  const toggleIcon = document.getElementById('toggle-icon');
  const toggleText = document.getElementById('toggle-text');
  const body = document.body;

  if (toggleTheme) {
    toggleTheme.addEventListener('click', () => {
      body.classList.toggle('dark');
      
      const isDark = body.classList.contains('dark');
      toggleIcon.src = isDark ? 'assets/icons/sun.svg' : 'assets/icons/moon.svg';
      toggleText.textContent = isDark ? 'Light Mode' : 'Dark Mode';
    });
  }
});

// Script para cambiar la navbar al hacer scroll
window.addEventListener('scroll', function() {
  const navbar = document.getElementById('navbar');
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});
