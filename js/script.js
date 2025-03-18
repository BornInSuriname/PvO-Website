// Navigation Module
const Navigation = (() => {
  const init = () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (!menuToggle || !navLinks) return; // Voorkom fouten als elementen ontbreken

    const toggleMenu = () => {
      const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
      menuToggle.setAttribute('aria-expanded', !isExpanded);
      navLinks.classList.toggle('active');
      menuToggle.classList.toggle('open');
    };

    // Menu sluiten als er buiten wordt geklikt
    document.addEventListener('click', (e) => {
      if (!menuToggle.contains(e.target) && !navLinks.contains(e.target)) {
        navLinks.classList.remove('active');
        menuToggle.setAttribute('aria-expanded', 'false');
        menuToggle.classList.remove('open');
      }
    });

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

    // Verwijder het bericht na 3 seconden
    setTimeout(() => successDiv.remove(), 3000);
  };

  const init = () => {
    document.querySelectorAll('form').forEach(form => {
      form.addEventListener('submit', handleSubmit);
    });
  };

  return { init };
})();

// Initialisatie
document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    menuToggle.addEventListener("click", function() {
        navLinks.classList.toggle("active");
    });
});

  // Dynamisch jaar in footer
  const yearElement = document.getElementById('current-year');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  // Smooth scroll voor anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
});
