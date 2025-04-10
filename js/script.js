document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");
    const menuIcon = document.querySelector(".menu-icon");

    const openMenuIcon = "\u2715"; // Unicode 'X'
    const closedMenuIcon = "\u2630"; // Unicode Hamburger

    function toggleMenu() {
        navLinks.classList.toggle("active");
        const isOpen = navLinks.classList.contains("active");
        menuIcon.textContent = isOpen ? openMenuIcon : closedMenuIcon;
        menuToggle.setAttribute("aria-expanded", isOpen);
        menuToggle.classList.toggle("open", isOpen);
    }

    if (menuToggle && navLinks && menuIcon) {
        menuToggle.addEventListener("click", toggleMenu);

        navLinks.querySelectorAll("a").forEach(link => {
            link.addEventListener("click", () => {
                navLinks.classList.remove("active");
                menuToggle.classList.remove("open");
                menuIcon.textContent = closedMenuIcon;
                menuToggle.setAttribute("aria-expanded", "false");
            });
        });

        // Verwijder mobiel menu bij schermvergroting
        window.addEventListener("resize", () => {
            if (window.innerWidth > 600 && navLinks.classList.contains("active")) {
                navLinks.classList.remove("active");
                menuToggle.classList.remove("open");
                menuIcon.textContent = closedMenuIcon;
                menuToggle.setAttribute("aria-expanded", "false");
            }
        });
    }
});
