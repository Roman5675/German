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