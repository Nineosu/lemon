window.addEventListener('DOMContentLoaded', () => {
    // burger
    const burgerBtn = document.querySelector('.burger'),
          burgerMenu = document.querySelector('.burger-menu'),
          burgerClose = burgerMenu.querySelector('.burger__close'),
          burgerLinks = burgerMenu.querySelectorAll('.header__list-link');

    burgerBtn.addEventListener('click', () => {
        burgerMenu.classList.toggle('show');
        document.body.style.overflow = 'hidden';
    });
    burgerClose.addEventListener('click', () => {
        burgerMenu.classList.toggle('show');
        document.body.style.overflow = '';
    });
    burgerLinks.forEach(link => {
        link.addEventListener('click', () => {
            burgerMenu.classList.toggle('show');
            document.body.style.overflow = '';
        });
    });
});