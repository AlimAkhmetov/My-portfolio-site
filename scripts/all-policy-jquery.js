$(document).ready(function(){$('a[href^="#"]').click(function(){let e=$(this).attr("href");$("html, body").animate({scrollTop:$(e).offset().top-0},1200)}),AOS.init({disable:!1,startEvent:"DOMContentLoaded",initClassName:"aos-init",animatedClassName:"aos-animate",useClassNames:!1,disableMutationObserver:!1,debounceDelay:50,throttleDelay:99,offset:100,delay:0,duration:700,easing:"ease",once:!0,mirror:!1,anchorPlacement:"top-bottom"}),function(){let e=$(".back-to-top");$(window).on("scroll",()=>{$(this).scrollTop()>=800?e.fadeIn(500,"linear"):e.fadeOut(500,"linear")}),e.on("click",e=>{e.preventDefault(),$("html").animate({scrollTop:0},800)})}()});