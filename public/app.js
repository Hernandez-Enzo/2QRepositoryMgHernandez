const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});

window.addEventListener('resize', function() {
    if (window.innerWidth > 960) {
        menu.classList.remove('is-active');
        menuLinks.classList.remove('active');
    }
    });