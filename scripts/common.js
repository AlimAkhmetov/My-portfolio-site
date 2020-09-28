
// Slick-slider

$(document).ready(function(){
    $('.comments__slider').slick({
        autoplay: true,
        autoplaySpeed: 1700,
        speed: 700,
        cssEasse: 'easy',
        // centerMode: true,
        // centerPadding: '60px',
        slidesToShow: 3,
        dots: true,
        arrows: false,
        pauseOnDotsHover: true,

        responsive: [
            {
              breakpoint: 1270,
              settings: {
                slidesToShow: 2
              }
            },

            {
              breakpoint: 960,
              settings: {
                slidesToShow: 1
              }
            },

            {
              breakpoint: 580,
              settings: {
                slidesToShow: 1,
                dots: false
              }
            }

            // {
            //   breakpoint: 992,
            //   settings: {
            //     slidesToShow: 2,
            //     dots: false,
            //   }
            // },

            // {
            //   breakpoint: 810,
            //   settings: {
            //     slidesToShow: 1,
            //     dots: false,
            //   }
            // },

            
        ]
    });
});