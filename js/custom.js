
       $(document).ready(function() {
              var owl = $('.owl-carousel');
              owl.owlCarousel({
                items: 4,
                loop: true,
                margin: 10,
                autoplay: true,
                autoplayTimeout: 1000,
                autoplayHoverPause: true,
                responsiveClass:true,
                responsive:{
                    0:{
                        items:2,
                        nav:false
                    },
                    600:{
                        items:3,
                        nav:false
                    },
                    1000:{
                        items:5,
                        nav:false,
                        loop:true
                    }
                }
              });
                owl.trigger('play.owl.autoplay', [1000]);
                 $('.owl-carousel').mouseleave(function(){
                  $(this).play();
                 })




                // scrole  navbar
                $(window).scroll(function () {
      //if you hard code, then use console
      //.log to determine when you want the 
      //nav bar to stick.  
      console.log($(window).scrollTop())
    if ($(window).scrollTop() > 140) {
      $('#nav_bar').addClass('navbar-fixed');
    }
    if ($(window).scrollTop() < 141) {
      $('#nav_bar').removeClass('navbar-fixed');
    }
  });

            })