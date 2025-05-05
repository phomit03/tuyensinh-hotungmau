// JavaScript Initialization
$(document).ready(function(){
    $('.testimonial-slider').owlCarousel({
        items: 1,
        loop: true,
        margin: 0,
        nav: true,
        dots: true,
        autoplay: true,
        autoplayTimeout: 3000, // 8 giây tự động chuyển
        autoplayHoverPause: true,
        smartSpeed: 800,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        responsive: {
            0: {
                nav: false
            },
            992: {
                nav: true
            }
        }
    });
});