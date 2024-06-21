new SimpleLightbox ({elements:".Portofolio-images a"});

AOS.init();

document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.querySelector('.Nav-links');

    hamburger.addEventListener('click', function () {
        navLinks.classList.toggle('active');
    });
});
