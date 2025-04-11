document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    function toggleMenu() {
        const isMobile = window.innerWidth <= 600;
        
        if (isMobile) {
            const isOpen = navLinks.classList.contains("active");
            navLinks.classList.toggle("active");
            navLinks.style.maxHeight = isOpen ? "0" : navLinks.scrollHeight + "px";
            navLinks.style.opacity = isOpen ? "0" : "1";
            menuToggle.setAttribute("aria-expanded", !isOpen);
        }
    }

    // Toon standaard menu op desktop bij laden
    function handleResize() {
        if (window.innerWidth > 600) {
            navLinks.style.display = "flex";
            navLinks.style.maxHeight = "none";
            navLinks.style.opacity = "1";
        } else {
            navLinks.style.display = "none";
        }
    }

    // Eerste keer laden
    handleResize();

    // Event listeners
    menuToggle.addEventListener("click", toggleMenu);
    window.addEventListener("resize", handleResize);
});
