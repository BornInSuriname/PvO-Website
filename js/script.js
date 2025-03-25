document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");
    const menuIcon = document.querySelector(".menu-icon");

    if (menuToggle && navLinks) {
        menuToggle.addEventListener("click", function () {
            navLinks.classList.toggle("active");
            menuToggle.classList.toggle("open");

            // Verander het icoon bij openen/sluiten
            if (menuToggle.classList.contains("open")) {
                menuIcon.textContent = "✖";  // Kruisje bij open menu
            } else {
                menuIcon.textContent = "☰";  // Hamburger bij gesloten menu
            }
        });

        navLinks.querySelectorAll("a").forEach(link => {
            link.addEventListener("click", function () {
                navLinks.classList.remove("active");
                menuToggle.classList.remove("open");
                menuIcon.textContent = "☰";  // Terug naar hamburger bij klik
            });
        });
    }
});
