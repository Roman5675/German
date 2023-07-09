//Слайдер swiper
new Swiper('.price-slider', {
    slidesPerView: 2.5,
    simulateTouch: true,
    keyboard: {
        enabled: true,
        onlyInViewport: true,
    },
    spaceBetween: 87,
    loop: false,
    loopedSlides: 0,
});

const mediaQuery = window.matchMedia('(max-width: 992px)');

if (mediaQuery.matches) {
    new Swiper('.price-slider', {
        slidesPerView: 1,
        simulateTouch: true,
        keyboard: {
            enabled: true,
            onlyInViewport: true,
        },
        spaceBetween: 87,
        loop: false,
        loopedSlides: 0,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    }); // Вызываем функцию, если разрешение изменилось и соответствует условию
} else {
  // Здесь можно добавить код для обработки, если разрешение больше или меньше 700px
}

//Всплывающий header при scroll
window.onscroll = function showHeader () {

    let header = document.querySelector('.header');

    if(window.pageYOffset > 80) {
        header.classList.add('header__fixed')
    } else{
        header.classList.remove('header__fixed')
    }
}

//Прокрутка при клике
const menuLinks = document.querySelectorAll('.menu__link[data-goto]');
if(menuLinks.length > 0) {
    menuLinks.forEach(menuLink => {
        menuLink.addEventListener("click", onMenuLinkClick);
    });
    function onMenuLinkClick(e) {
        const menuLink = e.target;
        if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
            const gotoBlock = document.querySelector(menuLink.dataset.goto);
            const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight;
            window.scrollTo({
                top: gotoBlockValue,
                behavior: "smooth"
            });
            e.preventDefault();
        }
    }
}