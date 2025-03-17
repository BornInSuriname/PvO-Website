document.addEventListener("DOMContentLoaded", function () {
    // Smooth scrolling for anchor links
    document.querySelectorAll("a[href^='#']").forEach(anchor => {
        anchor.addEventListener("click", function (event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: "smooth" });
            }
        });
    });

    // Hover-effecten op knoppen voor interactie
    document.querySelectorAll(".btn, .cta-button").forEach(button => {
        button.addEventListener("mouseover", function () {
            this.style.transform = "scale(1.05)";
            this.style.transition = "all 0.3s ease-in-out";
        });
        button.addEventListener("mouseout", function () {
            this.style.transform = "scale(1)";
        });
    });

    // Dynamische jaar-update in footer
    const yearElement = document.getElementById("year");
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }

    // Verberg de skip-link standaard, toon bij keyboard navigatie
    const skipLink = document.querySelector(".skip-link");
    if (skipLink) {
        skipLink.addEventListener("focus", function() {
            this.style.top = "10px";
        });
        skipLink.addEventListener("blur", function() {
            this.style.top = "-40px";
        });
    }

    // Hamburgermenu functionaliteit
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    if (menuToggle && navLinks) {
        menuToggle.addEventListener("click", function () {
            const expanded = this.getAttribute("aria-expanded") === "true" || false;
            this.setAttribute("aria-expanded", !expanded);
            navLinks.classList.toggle("active");
        });
    }
});
