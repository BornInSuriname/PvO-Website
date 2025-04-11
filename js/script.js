document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.getElementById("navMenu");

  function toggleMenu() {
    const isMobile = window.innerWidth <= 600;
    if (!isMobile) return;

    navLinks.classList.toggle("active");

    const isOpen = navLinks.classList.contains("active");
    navLinks.style.maxHeight = isOpen ? navLinks.scrollHeight + "px" : "0";
    navLinks.style.opacity = isOpen ? "1" : "0";

    menuToggle.setAttribute("aria-expanded", String(isOpen));
  }

  function resetMenuOnResize() {
    const isMobile = window.innerWidth <= 600;
    if (!isMobile) {
      navLinks.classList.remove("active");
      navLinks.style.maxHeight = "none";
      navLinks.style.opacity = "1";
      menuToggle.setAttribute("aria-expanded", "false");
    } else {
      navLinks.style.maxHeight = "0";
      navLinks.style.opacity = "0";
    }
  }

  // Init
  resetMenuOnResize();
  menuToggle.addEventListener("click", toggleMenu);
  window.addEventListener("resize", resetMenuOnResize);
});
