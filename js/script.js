document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    function toggleMenu() {
        const isMobile = window.innerWidth <= 600;
        if (!isMobile) return;

        const isOpen = navLinks.classList.contains("active");
        navLinks.classList.toggle("active");

        navLinks.style.maxHeight = isOpen ? "0" : navLinks.scrollHeight + "px";
        navLinks.style.opacity = isOpen ? "0" : "1";
        menuToggle.setAttribute("aria-expanded", String(!isOpen));
    }

    function handleResize() {
        if (window.innerWidth > 600) {
            navLinks.classList.remove("active");
            navLinks.style.maxHeight = "none";
            navLinks.style.opacity = "1";
        } else {
            navLinks.style.maxHeight = "0";
            navLinks.style.opacity = "0";
        }
    }

    handleResize();
    menuToggle.addEventListener("click", toggleMenu);
    window.addEventListener("resize", handleResize);
});
