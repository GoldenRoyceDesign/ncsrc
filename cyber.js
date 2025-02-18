
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


const scrollToTopBtn = document.getElementById("scrollToTopBtn");

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 100) {
        scrollToTopBtn.classList.add('visible');
    } else {
        scrollToTopBtn.classList.remove('visible');
    }
});

scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});



