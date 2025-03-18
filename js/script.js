// Navigation Module
const Navigation = (() => {
  const init = () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    const toggleMenu = () => {
      menuToggle.classList.toggle('active');
      navLinks.classList.toggle('active');
      document.body.classList.toggle('nav-open');
    };

    menuToggle.addEventListener('click', toggleMenu);

    // Sluit menu bij klik buiten
    document.addEventListener('click', (e) => {
      if (!e.target.closest('.nav-container')) {
        menuToggle.classList.remove('active');
        navLinks.classList.remove('active');
        document.body.classList.remove('nav-open');
      }
    });
  };

  return { init };
})();

// Accordion Module
const Accordion = (() => {
  const init = () => {
    document.querySelectorAll('.accordion-header').forEach(button => {
      button.addEventListener('click', () => {
        const content = button.nextElementSibling;
        content.style.maxHeight = 
          content.style.maxHeight ? null : `${content.scrollHeight}px`;
        button.setAttribute('aria-expanded', 
          button.getAttribute('aria-expanded') === 'true' ? 'false' : 'true'
        );
      });
    });
  };

  return { init };
})();

// Donation Module
const Donation = (() => {
  let currentAmount = 0;
  
  const updateMeter = () => {
    const progress = document.querySelector('.donation-progress');
    const percentage = (currentAmount / 10000) * 100;
    progress.style.width = `${percentage}%`;
  };

  const init = () => {
    document.querySelectorAll('.donation-amount').forEach(button => {
      button.addEventListener('click', (e) => {
        currentAmount += parseInt(e.target.dataset.amount);
        updateMeter();
        // Hier zou API-call komen
        console.log(`Donatie van €${e.target.dataset.amount} verwerkt`);
      });
    });
  };

  return { init };
})();

// Form Validation Module
const FormValidator = (() => {
  const showError = (input, message) => {
    const error = input.nextElementSibling;
    error.textContent = message;
    input.classList.add('error');
  };

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const init = () => {
    document.querySelectorAll('form').forEach(form => {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        let isValid = true;

        form.querySelectorAll('[required]').forEach(input => {
          if (input.value.trim() === '') {
            showError(input, 'Dit veld is verplicht');
            isValid = false;
          }

          if (input.type === 'email' && !validateEmail(input.value)) {
            showError(input, 'Ongeldig emailadres');
            isValid = false;
          }
        });

        if (isValid) {
          form.submit();
        }
      });
    });
  };

  return { init };
})();

// Initialisatie
document.addEventListener('DOMContentLoaded', () => {
  Navigation.init();
  Accordion.init();
  Donation.init();
  FormValidator.init();

  // Dynamisch jaar in footer
  document.getElementById('current-year').textContent = new Date().getFullYear();

  // Smooth scroll
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
});
