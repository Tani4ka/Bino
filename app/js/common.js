$(function() {
                             /**** Common scripts ****/

    /* Foundation */
    $(document).foundation(

    );


    /* SVG Fallback */

    //if(!Modernizr.svg) {
    //    $("img[src*='svg']").attr("src", function() {
    //        return $(this).attr("src").replace(".svg", ".png");
    //    });
    //};

    /* E-mail Ajax Send */

    //Documentation & Example: https://github.com/agragregra/uniMail
    //$("form").submit(function() { //Change
    //    var th = $(this);
    //    $.ajax({
    //        type: "POST",
    //        url: "mail.php", //Change
    //        data: th.serialize()
    //    }).done(function() {
    //        alert("Thank you!");
    //        setTimeout(function() {
    //            // Done Functions
    //            th.trigger("reset");
    //        }, 1000);
    //    });
    //    return false;
    //});


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


    /* Preloader */

    $(window).on('load', function () {
        $('.preloader').delay(1000).fadeOut('slow');
    });



                        /***** Aditional scripts *****/
    /* Equalheight without plug plugin */

    //(function ($) {
    //    $.fn.equalHeights = function () {
    //        var $items = $(this);
    //        function equalize() {
    //            $items.height('initial');
    //            var maxH = $items.eq(0).height();
    //            $items.each(function () {
    //                maxH = ($(this).height() > maxH) ? $(this).height() : maxH;
    //            });
    //            $items.height(maxH);
    //        }
    //        equalize();
    //        $(window).bind('resize', function () {
    //            equalize();
    //        });
    //    };
    //})(jQuery);
    //
    //// call equalHeights
    //$('.services__header').equalHeights();
    //$('.services__text').equalHeights();


    /* Fixed sidebar block */

    //$(function(){
    //    var topPos = $('#floating').offset().top; //расстояние от АйДи флоатинг до начала документа
    //    $(window).scroll(function() { //при скроллинге:
    //        var top = $(document).scrollTop(),//скролинг документа
    //            pip = $('footer').offset().top,//расстояние от футера до начала документа
    //            height = $('#floating').outerHeight();//высота черного блока
    //        console.log(topPos)//вывод в консоль любого значения
    //
    //        if (top > topPos && top < pip - height) {//проскролено больше расстояния от АйДи флоатинг до начала документа
    //            //и проскролено меньше чем расстояние от футера минус высота черного блоока
    //            $('#floating').addClass('fixed').fadeIn(300); //добавляем черному блоку класс фиксед и плавное проявление
    //        }
    //        else if (top > pip - height) {$('#floating').fadeOut(100);//скрытие черного блока при достижении футера
    //        }
    //        else {$('#floating').removeClass('fixed');}//убираем класс фиксед
    //    });
    //});


    /* Popup show hide */

    //$(document).ready(function(){
    //    PopUpHide();
    //});
    //function PopUpShow(){
    //    $("#popup1").show();
    //}
    //function PopUpHide(){
    //    $("#popup1").hide();
    //}


    /* Blocks the same height */

    //function carouselService() {
    //    var mh = 23;
    //    $('.services').each(function () {
    //        var ths = $(this),
    //            thsh = ths.find('.services__header').outerHeight();
    //        //console.log(thsh);
    //        if(thsh > mh) {
    //            mh = thsh;
    //        };
    //    });
    //
    //    $('.services__header').height(mh);
    //    //console.log($('.services__header').outerHeight());
    //}carouselService();


    /* Add last/first span for cms */

    //$('.carousel-services__composition .carousel-services__header').each(function () {
    //    var ths = $(this);
    //    ths.html(ths.html().replace(/(\S+)\s*$/, '<span>$1</span>')); // выделяет последнее слово в span
    //});
    //
    //
    //$('section .h2').each(function () {
    //    var ths = $(this);
    //    ths.html(ths.html().replace(/^(\S+)/, '<span>$1</span>'));  // выделяет первое слово в span
    //});


    /* Selectize */
    //$('select').selectize();


    /* Resize Window (in the end) */

    //function onResize() {
    //    $('.carousel-services__content').equalHeights();  // for owl-carousel,
    //}onResize();
    //window.onresize = function () {
    //    onResize()
    //};


    /* Gamburger for menu */

    // https://codepen.io/agragregra/pen/bEbbmZ
    //$(".mobile-mnu").click(function() {
    //    var mmApi = $("#my-menu").data( "mmenu" );
    //    mmApi.open();
    //    var thiss = $(this).find(".toggle-mnu");
    //    thiss.addClass("on");
    //    $(".main-mnu").slideToggle();
    //    return false;
    //});
    //
    //$(".ishome").click(function() {
    //    $(".toggle-mnu").removeClass("on");
    //});


    /* Magnific-popup */

    //$('.popup-with-move-anim').magnificPopup({
    //    type: 'inline',
    //    fixedContentPos: false,
    //    fixedBgPos: true,
    //    overflowY: 'auto',
    //    closeBtnInside: true,
    //    preloader: false,
    //    midClick: true,
    //    removalDelay: 300,
    //    mainClass: 'my-mfp-slide-bottom'
    //});


    /* What form did the application come from */

    //$('a[href="#callback"]').click(function() {      // возьмет из кнопки зачение data-form и вставит в input[type=hidden] value с этим значением, чтобы знать с какой фрмы пришла заявка
    //    $('#callback .formname').val($(this).data('form'));
    //});


    /* clone mobile menu */
    //$(".main-menu").clone().appendTo(".mobile-menu");
    ////$(".mobile-menu").find("*").attr("style", "");
    //$(".mobile-menu").find("ul").removeAttr("data-dropdown-menu");
    //$(".mobile-menu").find("ul").removeClass("align-right");
    //$(".mobile-menu").find("ul").addClass("vertical");


    /* Slick */
    $('.slider').slick({
        dots: false,
        infinite: true,
        speed: 300,
        autoplay: false,
        slidesToShow: 1,
        slidesToScroll: 1
    });

});




















