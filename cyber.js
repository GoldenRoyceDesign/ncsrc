
    document.addEventListener("DOMContentLoaded", function () {
        var navbarCollapse = document.querySelector(".navbar-collapse");
        var navLinks = document.querySelectorAll(".nav-link");
        var navbarToggler = document.querySelector(".navbar-toggler");

        navLinks.forEach(function (link) {
            link.addEventListener("click", function () {
                if (navbarCollapse.classList.contains("show")) {
                    navbarToggler.click(); // Simulate click to close navbar
                }
            });
        });
    });
