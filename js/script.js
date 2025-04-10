document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");
    const menuIcon = document.querySelector(".menu-icon");

    const openMenuIcon = "\u2715"; // Unicode 'X'
    const closedMenuIcon = "\u2630"; // Unicode Hamburger

    function toggleMenu() {
        const isOpen = navLinks.classList.contains("active");
        if (isOpen) {
            // Start animatie voor sluiten (fade-out)
            navLinks.style.maxHeight = "0";
            navLinks.style.opacity = "0";
            setTimeout(() => {
                navLinks.classList.remove("active");
            }, 400); // gelijk aan CSS-transitie
        } else {
            navLinks.classList.add("active");
            navLinks.style.maxHeight = "500px";
            navLinks.style.opacity = "1";
        }

        menuIcon.textContent = isOpen ? closedMenuIcon : openMenuIcon;
        menuToggle.setAttribute("aria-expanded", !isOpen);
        menuToggle.classList.toggle("open", !isOpen);
    }

    if (menuToggle && navLinks && menuIcon) {
        menuToggle.addEventListener("click", toggleMenu);

        navLinks.querySelectorAll("a").forEach(link => {
            link.addEventListener("click", () => {
                navLinks.style.maxHeight = "0";
                navLinks.style.opacity = "0";
                setTimeout(() => {
                    navLinks.classList.remove("active");
                    menuToggle.classList.remove("open");
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
                    menuToggle.classList.remove("open");
                    menuIcon.textContent = closedMenuIcon;
                    menuToggle.setAttribute("aria-expanded", "false");
                }, 400);
            }
        });
    }
});
