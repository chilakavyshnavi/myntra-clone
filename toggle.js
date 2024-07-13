document.getElementById('menu_toggle').addEventListener('click', function() {
  document.getElementById('nav_bar').classList.toggle('active');
});

// Highlight active section
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('#nav_bar li a');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (pageYOffset >= sectionTop - sectionHeight / 3) {
          current = section.getAttribute('id');
      }
  });

  navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href').includes(current)) {
          link.classList.add('active');
      }
  });

  // Show/Hide Back to Top button
  const backToTopButton = document.getElementById('back_to_top');
  if (window.scrollY > 300) {
      backToTopButton.classList.add('show');
  } else {
      backToTopButton.classList.remove('show');
  }
});

// Dark mode toggle
const darkModeToggle = document.getElementById('dark_mode_toggle');
darkModeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  document.querySelector('header').classList.toggle('dark-mode');
  document.getElementById('nav_bar').classList.toggle('dark-mode');
});

// Scroll to top functionality
const backToTopButton = document.getElementById('back_to_top');
backToTopButton.addEventListener('click', () => {
  window.scrollTo({
      top: 0,
      behavior: 'smooth'
  });
});