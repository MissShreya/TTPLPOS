(function($) {
    "use strict";

    $(document).on('ready', function() {
		
	/* Header scroll on fixed */
	
	var NavBar = $('nav.navbar');
    var didScroll;
    var lastScrollTop = 0;
    var navbarHeight = NavBar.outerHeight();
    $(document).ready(function(event) {
        didScroll = true;
    });
    $(window).scroll(function(event) {
        didScroll = true;
    });
    setInterval(function() {
        if (didScroll) {
            hasScrolled();
            didScroll = false;
        }
    }, 100);

    function hasScrolled() {
        var st = $(document).scrollTop();
        if (st + $(window).height() < $(document).height()) {
            NavBar.addClass('fixed-header');
            if (st == 0) {
                NavBar.removeClass('fixed-header');
            }
        }
        lastScrollTop = st;
    }


        /* ==================================================
            # Smooth Scroll
         ===============================================*/
        $("body").scrollspy({
            target: ".navbar-collapse",
            offset: 200
        });
        $('a.smooth-menu').on('click', function(event) {
            var $anchor = $(this);
            var headerH = '75';
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top - headerH + "px"
            }, 1500, 'easeInOutExpo');
            event.preventDefault();
        });
		
        /* ==================================================
            # Navbar Sticky
         ===============================================*/
        /*navbarSticky : function(){  
            var getNav = $("nav.navbar.bootsnav"),
                navSticky = getNav.hasClass("navbar-sticky");
            
            if( navSticky ){
                
                // Set Height Navigation
                var getHeight = getNav.height();             
                $(".wrap-sticky").height(getHeight);
                
                // Windown on scroll
                var getOffset = $(".wrap-sticky").offset().top;
                $(window).on("scroll", function(){  
                    var scrollTop = $(window).scrollTop();
                    if(scrollTop > getOffset){
                        getNav.addClass("sticked");
                    }else {
                        getNav.removeClass("sticked");
                    }
                });
            }   
        },*/


        /* ==================================================
            # Equal Height Init
        ===============================================*/
        $(window).on('resize', function() {
            $(".equal-height").equalHeights();
        });

        $(".equal-height").equalHeights().find("img, iframe, object").on('load', function() {
            $(".equal-height").equalHeights();
        });
		
		$(".owl-carousel").owlCarousel({
		    center: true,
		    items:2,
		    lazyLoad:true,
		    loop:true,
		    margin:40,
		    autoplay:true,
		    dots:true,
		    smartSpeed:800,
		    autoplayTimeout:3500,
		    autoplayHoverPause:false
		});
		
    /*$(window).on ('load', function (){ // makes sure the whole site is loaded

        // -------------------- Site Preloader
        $('#loader').fadeOut(); // will first fade out the loading animation
        $('#loader-wrapper').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.
        $('body').delay(350).css({'overflow':'visible'});


        // ------------------------------- AOS Animation 
        AOS.init({
          duration: 1000,
          mirror: true
        });



    })*/
	
    $(window).on ('load', function (){ // makes sure the whole site is loaded

        // -------------------- Site Preloader
        /*$('.loader').fadeOut(); // will first fade out the loading animation
        $('.loader-wrapper').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.
        $('body').delay(350).css({'overflow':'visible'});*/
		
		$('#loader').delay(100).fadeOut('slow');
		$('#loader-wrapper').delay(500).fadeOut('slow');
		$('body').delay(500).css({'overflow':'visible'});
		
		AOS.init({
          duration: 1000,
          mirror: true
        });


    });

    }); // end document ready function
})(jQuery); // End jQuery