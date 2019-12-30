$(document).ready(function() {

    // Nav Menu
    document.querySelector('.menu-icon-wrapper').onclick = function() {
            document.querySelector('.menu-icon').classList.toggle('menu-icon-active');
        }
        //Owl Carousel
    $(".owl-carousel").owlCarousel({
        // nav: true,
        items: 1
    });

    //Srcoll To Top
    // находимо кнопку і записуємо в змінну
    const scrollBtn = $('.scroll-to-top-btn');

    // scrollBtn.hide();

    // по скролу - скриваємо або показуємо кнопку
    $(window).scroll(function() {
        if ($(this).scrollTop() > 500) {
            scrollBtn.fadeIn();
        } else {
            scrollBtn.fadeOut();
        }

    });

    // клік по кнопці
    scrollBtn.click(function() {
        $('html, body').animate({
            scrollTop: 0
        }, 360);
        return false;
    });
});