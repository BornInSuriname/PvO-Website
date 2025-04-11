document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");
    const menuIcon = document.querySelector(".menu-icon");

    const openMenuIcon = "✕"; // Unicode 'X'
    const closedMenuIcon = "☰"; // Unicode Hamburger

    function toggleMenu() {
        const isOpen = navLinks.classList.contains("active");
        
        if (isOpen) {
            navLinks.style.maxHeight = "0";
            navLinks.style.opacity = "0";
            setTimeout(() => {
                navLinks.classList.remove("active");
            }, 400);
        } else {
            navLinks.classList.add("active");
            navLinks.style.maxHeight = navLinks.scrollHeight + "px";
            navLinks.style.opacity = "1";
        }

        menuIcon.textContent = isOpen ? closedMenuIcon : openMenuIcon;
        menuToggle.setAttribute("aria-expanded", !isOpen);
    }

    if (menuToggle && navLinks && menuIcon) {
        menuToggle.addEventListener("click", toggleMenu);

        navLinks.querySelectorAll("a").forEach(link => {
            link.addEventListener("click", () => {
                navLinks.style.maxHeight = "0";
                navLinks.style.opacity = "0";
                setTimeout(() => {
                    navLinks.classList.remove("active");
                    menuIcon.textContent = closedMenuIcon;
                    menuToggle.setAttribute("aria-expanded", "false");
                }, 400);
            });
        });

        window.addEventListener("resize", () => {
            if (window.innerWidth > 600 && navLinks.classList.contains("active")) {
                navLinks.style.maxHeight = "0";
                navLinks.style.opacity = "0";
                setTimeout(() => {
                    navLinks.classList.remove("active");
                    menuIcon.textContent = closedMenuIcon;
                    menuToggle.setAttribute("aria-expanded", "false");
                }, 400);
            }
        });
    }
});
