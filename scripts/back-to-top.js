// Links
$(document).ready(function() {

    // Bac-to-top ===========
    function backToTop() {
        let button = $('.back-to-top');
    
        $(window).on('scroll', () => {
        if ($(this).scrollTop() >= 800) {
        button.fadeIn(500, "linear");
        } else {
            button.fadeOut(500, "linear");
        }
        });
    
        button.on('click', (e) => {
            e.preventDefault();
            $('html').animate({scrollTop: 0}, 800);
        })
    }
    backToTop();
    // =======================

    // Hover off =============
    // $('body').on('touchstart', function() {});
    // =======================
    });