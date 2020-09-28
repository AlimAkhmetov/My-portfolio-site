$(document).ready(function() {
    $('.burger, .burger-popup__button, .burger-popup__menu_link').click(function(event) {
        $('.burger-popup').toggleClass('burger-popup-active');
        $('.burger-popup__wrapper').toggleClass('burger-popup__wrapper-active');
        $('body, html').toggleClass('lock');
    });
  });

  