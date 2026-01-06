document.addEventListener('DOMContentLoaded', () => {
    const navToggler = document.querySelector('.nav-toggler');
    const navLinks = document.querySelector('.nav-links');

    if (navToggler && navLinks) {
        navToggler.addEventListener('click', () => {
            navLinks.classList.toggle('nav-links--open');
        });
    }
});
