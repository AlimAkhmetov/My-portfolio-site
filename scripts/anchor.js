
$(document).ready(function() {
// Anchor ===============
$('a[href^="#"]').click(function () {
    let target = $(this).attr('href');
    $('html, body').animate({
        scrollTop: $(target).offset().top - 0 //- 50
    }, 1200);
});
// ======================
});