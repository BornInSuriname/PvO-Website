// Navigation Module
const Navigation = (() => {
  const init = () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    const toggleMenu = () => {
      const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
      menuToggle.setAttribute('aria-expanded', !isExpanded);
      navLinks.classList.toggle('active');
    };

    menuToggle.addEventListener('click', toggleMenu);
  };

  return { init };
})();

// Form Handler
const FormHandler = (() => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    // Simuleer verzending
    setTimeout(() => {
      form.reset();
      showSuccessMessage(form);
    }, 1000);
  };

  const showSuccessMessage = (form) => {
    const successDiv = document.createElement('div');
    successDiv.className = 'success-message';
    successDiv.textContent = 'Bedankt voor uw bericht!';
    form.parentNode.insertBefore(successDiv, form.nextSibling);
  };

  const init = () => {
    document.querySelectorAll('form').forEach(form => {
      form.addEventListener('submit', handleSubmit);
    });
  };

  return { init };
})();

// Initialisatie
document.addEventListener('DOMContentLoaded', () => {
  Navigation.init();
  FormHandler.init();

  // Dynamisch jaar in footer
  document.getElementById('current-year').textContent = new Date().getFullYear();

  // Smooth scroll voor anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      target.scrollIntoView({ behavior: 'smooth' });
    });
  });
});
