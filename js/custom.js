(function($) {
    "use strict";

    //sticky menu
    // $(window).on('scroll', function() {
    //     var window_top = $(window).scrollTop() + 0;
    //     if (window_top > 0) {
    //         $('.classic_header, .fixed_menu ').addClass('menu_fixed animated fadeInDown');
    //     } else {
    //         $('.classic_header, .fixed_menu').removeClass('menu_fixed animated fadeInDown');
    //     }
    // });


    //menu icon
    $('.close_icon').on('click', function() {
        $('.body_wrapper').removeClass('promotion').find('.promo_banner').css({
            top: '-70px',
            WebkitTransition: 'all 0.3s ease-in-out',
            MozTransition: 'all 0.3s ease-in-out',
            MsTransition: 'all 0.3s ease-in-out',
            OTransition: 'all 0.3s ease-in-out',
            transition: 'all 0.3s ease-in-out'
        });

    });

    //count up
    var counter = $('.counter');
    if (counter.length > 0) {
        counter.counterUp({
            time: 2000
        });
    }

    //wow js
    var wow = new WOW({
        animateClass: 'animated',
        offset: 100,
        mobile: false,
        duration: 1000,
    });
    wow.init();


    // map js
    if ($('#contactMap').length) {
        var $lat = $('#contactMap').data('lat');
        var $lon = $('#contactMap').data('lon');
        var $zoom = $('#contactMap').data('zoom');
        var $marker = $('#contactMap').data('marker');
        var $info = $('#contactMap').data('info');
        var $markerLat = $('#contactMap').data('mlat');
        var $markerLon = $('#contactMap').data('mlon');
        var map = new GMaps({
            el: '#contactMap',
            lat: $lat,
            lng: $lon,
            scrollwheel: false,
            scaleControl: true,
            streetViewControl: false,
            panControl: true,
            disableDoubleClickZoom: true,
            mapTypeControl: false,
            zoom: $zoom,
        });
        map.addMarker({
            lat: $markerLat,
            lng: $markerLon,
            icon: $marker,
            infoWindow: {
                content: $info
            }
        })
    }


    //offcanvus menu js
    $(".menu-trigger, .item_trigger").on('click', function() {
        $(".off_canvus_menu, .off_canvus_item").addClass("active")
        $(".offcanvas_overlay").addClass("active")
    });
    $(".close_icon i, .offcanvas_overlay").on('click', function() {
        $(".off_canvus_menu, .off_canvus_item").removeClass("active")
        $(".offcanvas_overlay").removeClass("active")
    });
    // dropdown-toggle class not added for submenus by current WP Bootstrap Navwalker as of November 15, 2017.
    $('.dropdown-menu > .dropdown > a').addClass('dropdown-toggle');

    $('.dropdown-menu a.dropdown-toggle').on('click', function(e) {
        if (!$(this).next().hasClass('show')) {
            $(this).parents('.dropdown-menu').first().find('.show').removeClass("show");
        }
        var $subMenu = $(this).next(".dropdown-menu");
        $subMenu.toggleClass('show');
        $(this).parents('li.nav-item.dropdown.show').on('.dropdown', function(e) {
            $('.dropdown-menu > .dropdown .show').removeClass("show");
        });
        $('.dropdown-menu a.dropdown-toggle').removeClass("show_dropdown");
        if ($(this).next().hasClass('show')) {
            $(this).addClass("show_dropdown");
        }
        return false;
    });

    if ($(window).innerWidth() <= 991) {
        $('.classic_header .dropdown-menu > .dropdown > .dropdown-toggle').on('click', function() {
            $('.classic_header .dropdown-menu > .dropdown > .dropdown-toggle').removeClass("active_icon");
            if ($(this).next().hasClass('show')) {
                $(this).addClass("active_icon");
            }
        });
    } else {
        $('.classic_header .dropdown-menu > .dropdown').hover(
            function() {
                $(this).find('.dropdown-toggle').toggleClass("active_icon");
            }
        );
    }


    // easying js code 
    $('.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        var headerH = '115';
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - headerH + "px"
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });


    //niceselect js
    var nc_select = $('.nc_select');
    if (nc_select.length > 0) {
        nc_select.niceSelect();
    }

    //searchbar popup
    $('#search-popup-close').on('click', function(){
        $('#popup-search').removeClass('open');
    })
    $('.search_icon').on('click', function(){
        $('#popup-search').addClass('open');
    })


    //banner slider js
    var full_height_slider = document.getElementById("testimonial_section_1");
    if (full_height_slider) {
        var swiper = new Swiper('.style_1', {
            slidesPerView: 1,
            loop: true,
            speed: 800,
            autoplay: false,
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
            },
            navigation: {
                nextEl: '.swiper_prev',
                prevEl: '.swiper_next',
            },
        });
        $('.swiper-slide').on('mouseover', function() {
            swiper.autoplay.stop();
        });

        $('.swiper-slide').on('mouseout', function() {
            swiper.autoplay.start();
        });
    }
    
    //banner slider js
    var testimonial_slider_2 = document.getElementById("testimonial_slider_2");
    if (testimonial_slider_2) {
        var swiper = new Swiper('.style_2', {
            slidesPerView: 3,
            mousewheel: false,
            loop: true,
            speed: 800,
            spaceBetween: 30,
            autoplay: true,
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
            },
            breakpoints: {
                320: {
                  slidesPerView: 1
                },
                576: {
                  slidesPerView: 1
                },
                768: {
                  slidesPerView: 2
                },
                991: {
                  slidesPerView: 3
                }
            }
        });
        $('.swiper-slide').on('mouseover', function() {
            swiper.autoplay.stop();
        });

        $('.swiper-slide').on('mouseout', function() {
            swiper.autoplay.start();
        });
    }
    
    //banner slider js
    var testimonial_slider_3 = document.getElementById("testimonial_slider_3");
    if (testimonial_slider_3) {
        var swiper = new Swiper('.style_3', {
            slidesPerView: 1,
            mousewheel: false,
            loop: true,
            speed: 800,
            autoplay: false,
            spaceBetween: 30,
            navigation: {
                nextEl: '.swiper_prev',
                prevEl: '.swiper_next',
            },
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
            }
        });
        $('.swiper-slide').on('mouseover', function() {
            swiper.autoplay.stop();
        });

        $('.swiper-slide').on('mouseout', function() {
            swiper.autoplay.start();
        });
    }
    
    //banner slider js
    var testimonial_slider_4 = document.getElementById("testimonial_slider_4");
    if (testimonial_slider_4) {
        var swiper = new Swiper('.style_4', {
            slidesPerView: 2,
            loop: true,
            speed: 800,
            autoplay: false,
            spaceBetween: 30,
            navigation: {
                nextEl: '.swiper_prev',
                prevEl: '.swiper_next',
            },
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
            },
            breakpoints: {
                320: {
                  slidesPerView: 1,
                  navigation: false
                },
                768: {
                  slidesPerView: 1,
                  navigation: false
                },
                991: {
                  slidesPerView: 2,
                  navigation: true
                }
            }
        });
        $('.swiper-slide').on('mouseover', function() {
            swiper.autoplay.stop();
        });

        $('.swiper-slide').on('mouseout', function() {
            swiper.autoplay.start();
        });
    }

    //progressbar js
    var fillbar_1 = $('.fillbar_1');
    if (fillbar_1.length) {
        fillbar_1.rProgressbar({
            percentage: 80
        });
    };
    var fillbar_2 = $('.fillbar_2');
    if (fillbar_2.length) {
        fillbar_2.rProgressbar({
            percentage: 90
        });
    };
    var fillbar_3 = $('.fillbar_3');
    if (fillbar_3.length) {
        fillbar_3.rProgressbar({
            percentage: 70
        });
    };
    var fillbar_4 = $('.fillbar_4');
    if (fillbar_4.length) {
        fillbar_4.rProgressbar({
            percentage: 88
        });
    };
    

}(jQuery));