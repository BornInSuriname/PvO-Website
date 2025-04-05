
document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");
    const menuIcon = document.querySelector(".menu-icon");

    if (menuToggle && navLinks) {
        menuToggle.addEventListener("click", function () {
            navLinks.classList.toggle("active");
            menuToggle.classList.toggle("open");

            if (menuToggle.classList.contains("open")) {
                menuIcon.textContent = "âœ–";
            } else {
                menuIcon.textContent = "â˜°";
            }

            menuToggle.setAttribute("aria-expanded", menuToggle.classList.contains("open"));
        });

        navLinks.querySelectorAll("a").forEach(link => {
            link.addEventListener("click", function () {
                navLinks.classList.remove("active");
                menuToggle.classList.remove("open");
                menuIcon.textContent = "â˜°";
                menuToggle.setAttribute("aria-expanded", "false");
            });
        });
    }
});
