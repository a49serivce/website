document.addEventListener('DOMContentLoaded', () => {
    const navToggler = document.querySelector('.nav-toggler');
    const navLinks = document.querySelector('.nav-links');

    if (navToggler && navLinks) {
        navToggler.addEventListener('click', () => {
            navLinks.classList.toggle('nav-links--open');
        });
    }

    if (location.pathname.endsWith('.html')) {
        history.replaceState(null, '', location.pathname.slice(0, -5) + location.search + location.hash);
    }
});
