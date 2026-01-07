// Enhanced smooth scrolling + active nav on scroll (fix lùi 1 mục)
$(function() {

    const navOffset = 70;

    // Smooth scroll khi click
    $('a.page-scroll[href*="#"]:not([href="#"], [href="#0"])').on('click', function(e) {
        e.preventDefault();

        if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') &&
            location.hostname === this.hostname) {

            let target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');

            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top - navOffset
                }, 800, 'easeInOutCubic', function() {
                    history.replaceState(null, null, this.hash);
                });

                // Đóng menu mobile
                $('.navbar-collapse').collapse('hide');
            }
        }
    });

    // Active nav khi scroll
    function updateActiveNav() {
        let scrollPos = $(window).scrollTop() + navOffset;

        let currentActive = null;

        $('a.page-scroll').each(function() {
            let link = $(this);
            let target = $(link.attr('href'));

            if (target.length) {
                let sectionTop = target.offset().top;
                let sectionBottom = sectionTop + target.outerHeight();

                // Active khi scrollPos nằm trong section (ưu tiên phần đầu section)
                if (sectionTop <= scrollPos + 50 && scrollPos <= sectionBottom) {  // +50 để nhạy hơn ở đầu section
                    currentActive = link;
                }
            }
        });

        if (currentActive) {
            // Xóa active cũ
            $('.navbar-nav .nav-item.active').removeClass('active');
            // Active mục hiện tại
            currentActive.closest('.nav-item').addClass('active');
        }
    }

    // Chạy khi load, scroll, resize
    updateActiveNav();
    $(window).on('scroll resize', updateActiveNav);

    // Fix cho trường hợp load trang có hash (#section)
    if (window.location.hash) {
        setTimeout(updateActiveNav, 300);
    }
});