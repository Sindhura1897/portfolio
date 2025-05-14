document.addEventListener('DOMContentLoaded', () => {
  // Dynamic Tagline Cycling
  const tagline = document.getElementById('dynamic-tagline');
  const titles = ['an Aspiring Data Professional', 'a Cloud Enthusiast', 'a Data Analyst', 'a Data Engineer', 'a Data Scientist'];
  let index = 0;

  setInterval(() => {
    index = (index + 1) % titles.length;
    tagline.textContent = titles[index];
  }, 2000);

  // Hamburger Menu Toggle
  const hamburger = document.querySelector('.hamburger');
  const navList = document.querySelector('.nav-list');
  hamburger.addEventListener('click', () => {
    const isExpanded = navList.classList.toggle('active');
    hamburger.setAttribute('aria-expanded', isExpanded);
  });

  // Smooth Scrolling
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      e.preventDefault();
      document.querySelector(anchor.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
      navList.classList.remove('active');
      hamburger.setAttribute('aria-expanded', 'false');
    });
  });

  // Active Section Highlight
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');
  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      if (scrollY >= sectionTop - 60) {
        current = section.getAttribute('id');
      }
    });
    navLinks.forEach(link => {
      link.removeAttribute('aria-current');
      if (link.getAttribute('href') === `#${current}`) {
        link.setAttribute('aria-current', 'page');
      }
    });
  });

  // Back to Top Button
  const backToTop = document.querySelector('#back-to-top');
  window.addEventListener('scroll', () => {
    backToTop.style.display = scrollY > 300 ? 'block' : 'none';
  });
  backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // Tab Switching
  document.querySelectorAll('.tab-button').forEach(button => {
    button.addEventListener('click', () => {
      const tab = button.getAttribute('data-tab');
      document.querySelectorAll('.tab-button').forEach(btn => btn.classList.remove('active'));
      document.querySelectorAll('.tab-pane').forEach(pane => pane.classList.remove('active'));
      button.classList.add('active');
      document.getElementById(tab).classList.add('active');
    });
  });
});
