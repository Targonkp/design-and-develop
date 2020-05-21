let swiper = new Swiper('.swiper-container', {
    speed: 500,
    spaceBetween: 50,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,

    },
    keyboard: {
        enabled: true,
        onlyInViewport: false,
    },
});