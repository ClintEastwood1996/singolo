let header__wrapper = document.querySelector('.header__wrapper');
let menu__item = document.querySelectorAll('.menu__item');

document.querySelector('.burger-menu').addEventListener('click', function(e) {
    e.preventDefault();

    header__wrapper.classList.toggle('header__wrapper');
    header__wrapper.classList.toggle('header__wrapper_active');
    
    for (item of menu__item) {
        item.classList.toggle('menu__item');
    }

    this.classList.toggle('burger-menu_active');
})