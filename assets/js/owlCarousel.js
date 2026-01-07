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

    $('.featured-carousel').owlCarousel({
        loop: true,
        margin: 20,
        autoplay: true,
        autoplayTimeout: 4000,
        responsive: {
            0: { items: 1 },
            576: { items: 2 },
            768: { items: 3 },
            992: { items: 4 }
        }
    });

    $('.activities-carousel').owlCarousel({
        loop: true,
        margin: 20,
        nav: true,
        dots: true,
        slideBy: 3,
        autoplay: false,
        navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
        responsive: {
            0: {
                items: 1,
                slideBy: 1
            },
            768: {
                items: 2,
                slideBy: 2
            },
            992: {
                items: 3,
                slideBy: 3
            }
        }
    });
});

