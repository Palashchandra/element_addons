(function ($) {
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
    $('.close_icon').on('click', function () {
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
    $(".menu-trigger, .item_trigger").on('click', function () {
        $(".off_canvus_menu, .off_canvus_item").addClass("active")
        $(".offcanvas_overlay").addClass("active")
    });
    $(".close_icon i, .offcanvas_overlay").on('click', function () {
        $(".off_canvus_menu, .off_canvus_item").removeClass("active")
        $(".offcanvas_overlay").removeClass("active")
    });
    // dropdown-toggle class not added for submenus by current WP Bootstrap Navwalker as of November 15, 2017.
    $('.dropdown-menu > .dropdown > a').addClass('dropdown-toggle');

    $('.dropdown-menu a.dropdown-toggle').on('click', function (e) {
        if (!$(this).next().hasClass('show')) {
            $(this).parents('.dropdown-menu').first().find('.show').removeClass("show");
        }
        var $subMenu = $(this).next(".dropdown-menu");
        $subMenu.toggleClass('show');
        $(this).parents('li.nav-item.dropdown.show').on('.dropdown', function (e) {
            $('.dropdown-menu > .dropdown .show').removeClass("show");
        });
        $('.dropdown-menu a.dropdown-toggle').removeClass("show_dropdown");
        if ($(this).next().hasClass('show')) {
            $(this).addClass("show_dropdown");
        }
        return false;
    });

    if ($(window).innerWidth() <= 991) {
        $('.classic_header .dropdown-menu > .dropdown > .dropdown-toggle').on('click', function () {
            $('.classic_header .dropdown-menu > .dropdown > .dropdown-toggle').removeClass("active_icon");
            if ($(this).next().hasClass('show')) {
                $(this).addClass("active_icon");
            }
        });
    } else {
        $('.classic_header .dropdown-menu > .dropdown').hover(
            function () {
                $(this).find('.dropdown-toggle').toggleClass("active_icon");
            }
        );
    }


    // easying js code 
    $('.page-scroll').bind('click', function (event) {
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
    $('#search-popup-close').on('click', function () {
        $('#popup-search').removeClass('open');
    })
    $('.search_icon').on('click', function () {
        $('#popup-search').addClass('open');
    })


    //banner slider js
    var full_height_slider = document.getElementById("dl_testimonial_section_1");
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
        $('.swiper-slide').on('mouseover', function () {
            swiper.autoplay.stop();
        });

        $('.swiper-slide').on('mouseout', function () {
            swiper.autoplay.start();
        });
    }

    //banner slider js
    var dl_testimonial_slider_2 = document.getElementById("dl_testimonial_slider_2");
    if (dl_testimonial_slider_2) {
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
        $('.swiper-slide').on('mouseover', function () {
            swiper.autoplay.stop();
        });

        $('.swiper-slide').on('mouseout', function () {
            swiper.autoplay.start();
        });
    }

    //banner slider js
    var dl_testimonial_slider_3 = document.getElementById("dl_testimonial_slider_3");
    if (dl_testimonial_slider_3) {
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
        $('.swiper-slide').on('mouseover', function () {
            swiper.autoplay.stop();
        });

        $('.swiper-slide').on('mouseout', function () {
            swiper.autoplay.start();
        });
    }

    //banner slider js
    var dl_testimonial_slider_4 = document.getElementById("dl_testimonial_slider_4");
    if (dl_testimonial_slider_4) {
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
        $('.swiper-slide').on('mouseover', function () {
            swiper.autoplay.stop();
        });

        $('.swiper-slide').on('mouseout', function () {
            swiper.autoplay.start();
        });
    }

    //progressbar js
    // $(window).scroll(function() {
    //     var top_of_element = $(".dl_skil_progressbar").offset().top;
    //     var bottom_of_element = $(".dl_skil_progressbar").offset().top + $(".dl_skil_progressbar").outerHeight();
    //     var bottom_of_screen = $(window).scrollTop() + $(window).innerHeight();
    //     var top_of_screen = $(window).scrollTop();

    //     if ((bottom_of_screen > top_of_element) && (top_of_screen < bottom_of_element)){
    //         var fillbar_1 = $('#bar1');
    //         if (fillbar_1.length) {
    //             fillbar_1.barfiller({
    //             });
    //         };
    //         var fillbar_2 = $('#bar2');
    //         if (fillbar_2.length) {
    //             fillbar_2.barfiller({
    //             });
    //         };
    //         var fillbar_3 = $('#bar3');
    //         if (fillbar_3.length) {
    //             fillbar_3.barfiller({
    //             });
    //         };
    //         var fillbar_4 = $('#bar4');
    //         if (fillbar_4.length) {
    //             fillbar_4.barfiller({
    //             });
    //         };
    //     }
    // });
    $('.style_1').onScreen({
        container: window,
        direction: 'vertical',
        doIn: function () {
            var fillbar_1 = $('#bar1');
            if (fillbar_1.length) {
                fillbar_1.barfiller({});
            };
            var fillbar_2 = $('#bar2');
            if (fillbar_2.length) {
                fillbar_2.barfiller({});
            };
            var fillbar_3 = $('#bar3');
            if (fillbar_3.length) {
                fillbar_3.barfiller({});
            };
            var fillbar_4 = $('#bar4');
            if (fillbar_4.length) {
                fillbar_4.barfiller({});
            };
        },
        tolerance: 0,
        throttle: 50,
        lazyAttr: null,
        debug: true
    });

    $('.style_2').onScreen({
        container: window,
        direction: 'vertical',
        doIn: function () {
            var fillbar_5 = $('#bar5');
            if (fillbar_5.length) {
                fillbar_5.barfiller({});
            };
            var fillbar_6 = $('#bar6');
            if (fillbar_6.length) {
                fillbar_6.barfiller({});
            };
            var fillbar_7 = $('#bar7');
            if (fillbar_7.length) {
                fillbar_7.barfiller({});
            };
            var fillbar_8 = $('#bar8');
            if (fillbar_8.length) {
                fillbar_8.barfiller({});
            };
        },
        tolerance: 0,
        throttle: 50,
        lazyAttr: null,
        debug: true
    });

    $('.style_3').onScreen({
        container: window,
        direction: 'vertical',
        doIn: function () {
            var fillbar_9 = $('#bar9');
            if (fillbar_9.length) {
                fillbar_9.barfiller({});
            };
            var fillbar_10 = $('#bar10');
            if (fillbar_10.length) {
                fillbar_10.barfiller({});
            };
            var fillbar_11 = $('#bar11');
            if (fillbar_11.length) {
                fillbar_11.barfiller({});
            };
            var fillbar_12 = $('#bar12');
            if (fillbar_12.length) {
                fillbar_12.barfiller({});
            };
            var fillbar_13 = $('#bar13');
            if (fillbar_13.length) {
                fillbar_13.barfiller({});
            };
        },
        tolerance: 0,
        throttle: 50,
        lazyAttr: null,
        debug: true
    });


    /*-------------------------------------------------------------------------------
	  progress bar js
	-------------------------------------------------------------------------------*/
    function circle_progress() {
        if ($(".circle").length) {
            $(".circle").each(function () {
                $(".circle").appear(
                    function () {
                        $(".circle").circleProgress({
                            startAngle: -14.1,
                            size: 200,
                            duration: 9000,
                            easing: "circleProgressEase",
                            emptyFill: "#fafafa ",
                            lineCap: "round",
                            thickness: 10,
                        });
                    }, {
                        triggerOnce: true,
                        offset: "bottom-in-view",
                    }
                );
            });
        }
    }
    circle_progress();

    //slider carousel js
    var dl_active_slider_1 = $(".dl_active_slider_1");
    if (dl_active_slider_1.length) {
        dl_active_slider_1.owlCarousel({
            items: 1,
            loop: true,
            nav: true,
            navText: ["<i class='icon-arrow-left'></i>", "<i class='icon-arrow-right'></i>"],
            dots: false,
            autoplay: true,
            autoplayHoverPause: true,
            smartSpeed: 500,
            margin: 20,
            responsive: {
                0: {
                    nav: false
                },
                768: {
                    nav: true
                }
            },
        });
    }

    //slider carousel js
    var dl_active_slider_2 = $(".dl_active_slider_2");
    if (dl_active_slider_2.length) {
        dl_active_slider_2.owlCarousel({
            items: 1,
            loop: true,
            nav: false,
            autoplay: true,
            autoplayHoverPause: true,
            smartSpeed: 500,
            margin: 20
        });
    }

    //slider carousel js
    var dl_active_slider_3 = $(".dl_active_slider_3");
    if (dl_active_slider_3.length) {
        dl_active_slider_3.owlCarousel({
            items: 1,
            loop: true,
            nav: true,
            navText: ["<i class='icon-arrow-left'></i>", "<i class='icon-arrow-right'></i>"],
            dots: false,
            autoplay: true,
            autoplayHoverPause: true,
            smartSpeed: 500,
            margin: 20,
            responsive: {
                0: {
                    nav: false
                },
                768: {
                    nav: true
                }
            },
        });
    }

    //slider carousel js
    var active_carousel_1 = $(".active_carousel_1");
    if (active_carousel_1.length) {
        active_carousel_1.owlCarousel({
            items: 3,
            loop: true,
            nav: true,
            navText: ["<i class='icon-arrow-left'></i>", "<i class='icon-arrow-right'></i>"],
            dots: false,
            autoplay: true,
            autoplayHoverPause: true,
            smartSpeed: 500,
            margin: 30,
            responsive: {
                0: {
                    items: 1
                },
                576: {
                    items: 2
                },
                786: {
                    items: 3
                }
            }
        });
    }
    //slider carousel js
    var active_carousel_2 = $(".active_carousel_2");
    if (active_carousel_2.length) {
        active_carousel_2.owlCarousel({
            items: 4,
            loop: true,
            nav: false,
            dots: true,
            autoplay: true,
            autoplayHoverPause: true,
            smartSpeed: 500,
            margin: 30,
            responsive: {
                0: {
                    items: 1
                },
                576: {
                    items: 2
                },
                786: {
                    items: 3
                },
                911: {
                    items: 4
                }
            }
        });
    }
    //slider carousel js
    var active_carousel_3 = $(".active_carousel_3");
    if (active_carousel_3.length) {
        active_carousel_3.owlCarousel({
            items: 4,
            loop: true,
            nav: true,
            navText: ["<i class='icon-arrow-left'></i>", "<i class='icon-arrow-right'></i>"],
            dots: false,
            autoplay: true,
            autoplayHoverPause: true,
            smartSpeed: 500,
            margin: 30,
            responsive: {
                0: {
                    items: 1,
                    nav: false
                },
                576: {
                    items: 2,
                    nav: false
                },
                786: {
                    items: 3,
                    nav: false
                },
                911: {
                    items: 4
                }
            }
        });
    }

    //simple grid js
    var gallery = $('.dl_simple_image_grid_inner');
    if (gallery.length) {
        gallery.imagesLoaded(function () {
            gallery.isotope({
                itemSelector: '.grid-item',
                masonry: {
                    gutter: 20
                }
            });
        })
    }
    var dl_twentytwenty_container_1 = $(".dl_twentytwenty_container[data-orientation!='vertical']");
    if (dl_twentytwenty_container_1.length) {
        dl_twentytwenty_container_1.twentytwenty({
            default_offset_pct: 0.5
        });
    }
    var dl_twentytwenty_container_2 =  $(".dl_twentytwenty_container[data-orientation='vertical']");
    if (dl_twentytwenty_container_2.length) {
        dl_twentytwenty_container_2.twentytwenty({
            default_offset_pct: 0.5, orientation: 'vertical'
        });
    }

    //portfolio grid js
    $('.grid_filter_menu').on('click', 'button', function() {
        var filterValue = $(this).attr('data-filter');
        $('.grid').isotope({
            filter: filterValue
        });
        $('.grid_filter_menu button').removeClass('active');
        $(this).addClass('active');
    });
    var grid_portfolio = $('.minimal_grid_style');
    if (grid_portfolio.length) {
        grid_portfolio.imagesLoaded( function() {
            grid_portfolio.isotope({
                itemSelector: '.grid-item',
                layoutMode: 'fitRows',
                fitRows: {
                    gutter: 10
                }
            });
        })  
    }

    var grid_with_fitrow = $('.grid_with_fitrow');
    if (grid_with_fitrow.length) {
        grid_with_fitrow.imagesLoaded( function() {
            grid_with_fitrow.isotope({
                itemSelector: '.grid-item',
                layoutMode: 'fitRows',
            });
        })  
    }

    var grid_with_fitrow_gutter = $('.grid_with_fitrow_gutter');
    if (grid_with_fitrow_gutter.length) {
        grid_with_fitrow_gutter.imagesLoaded( function() {
            grid_with_fitrow_gutter.isotope({
                itemSelector: '.grid-item',
                layoutMode: 'fitRows',
                fitRows: {
                    gutter: 10
                }
            });
        })  
    }
      

}(jQuery));