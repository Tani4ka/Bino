$(document).ready(function() {
                             /**** Common scripts ****/

    /* page scroll to top */
    $(this).scrollTop(0);

    /* Preloader */
    $(window).on('load', function () {
        $('.preloader').delay(1000).fadeOut('slow');
    });

    /* Foundation */
    $(document).foundation();


    /* SVG Fallback */
    //if(!Modernizr.svg) {
    //    $("img[src*='svg']").attr("src", function() {
    //        return $(this).attr("src").replace(".svg", ".png");
    //    });
    //};


    /* E-mail Ajax Send */
    //Documentation & Example: https://github.com/agragregra/uniMail
    $("#message").submit(function() { //Change
        var th = $(this);
        $.ajax({
            //type: "POST",
            //url: "mail.php", //Change
            //data: th.serialize()
        }).done(function() {
            $(th).find('.message__success').addClass('active').css('display', 'flex').hide().fadeIn();
            setTimeout(function() {
                // Done Functions
                th.trigger("reset");
                $(th).find('.message__success').removeClass('active').fadeOut();
            }, 1000);
        });
        return false;
    });


    /* Retina cover plugin*/
    $('.bg-stretch').retinaCover();


    /* Chrome Smooth Scroll */
    try {
        $.browserSelector();
        if($("html").hasClass("chrome")) {
            $.smoothScroll();
        }
    } catch(err) {};


    /* Prevent Drag for a, img */
    $("img, a").on("dragstart", function(event) { event.preventDefault(); });


    /* Scroll page to top */
    $(window).scroll(function () {
        if ($(this).scrollTop() > $(this).height()) {
            $('.top').addClass('active');
        } else {
            $('.top').removeClass('active');
        }
    });
    $('.top').click(function () {
        $('html, body').stop().animate({scrollTop: 0}, 'slow', 'swing');
    });




                        /***** Aditional scripts *****/

    /* Equalheight without plug plugin */
    (function ($) {
        $.fn.equalHeights = function () {
            var $items = $(this);
            function equalize() {
                $items.height('initial');
                var maxH = $items.eq(0).height();
                $items.each(function () {
                    maxH = ($(this).height() > maxH) ? $(this).height() : maxH;
                });
                $items.height(maxH);
            }
            equalize();
            $(window).bind('resize', function () {
                equalize();
            });
        };
    })(jQuery);
    // call equalHeights
    $('.study').equalHeights();



    /* Slick */
    $('.slider').slick({
        dots: false,
        infinite: true,
        speed: 300,
        autoplay: false,
        slidesToShow: 1,
        slidesToScroll: 1
    });

    $('.services-slider').slick({
        dots: true,
        prevArrow: false,
        nextArrow: false,
        infinite: true,
        speed: 300,
        autoplay: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        vertical: true,
        verticalSwiping: true
    });

    $('.study-slick').slick({
        dots: true,
        prevArrow: false,
        nextArrow: false,
        infinite: true,
        speed: 300,
        autoplay: false,
        slidesToShow: 1,
        slidesToScroll: 1
    });


    /* textarea autoheight*/
    var textarea = document.querySelector('#textarea');
    textarea.addEventListener('keyup', autoheight);

    function autoheight() {
        var scrollHeihg = this.scrollHeight;
        textarea.style.height = scrollHeihg+ "px";
    }



});




















