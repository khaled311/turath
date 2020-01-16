$(function() {
    // Toggle open
    $(".drop").on("click", function(e) {
        $(this)
            .find(".subMenu")
            .slideToggle();
        $(this)
            .siblings()
            .find(".subMenu")
            .slideUp();
        $(this)
            .find(".ar")
            .toggleClass("open");
        $(this)
            .siblings()
            .find(".ar")
            .removeClass("open");
        e.stopPropagation();
    });

    // Toggle open
    $(".subMenu > li").on("click", function() {
        $(this)
            .find(".arr-left")
            .toggleClass("open");
    });

    // Toggle open
    $(".sideNav li").on("click", function() {
        $(this)
            .find(".dropDown")
            .slideToggle();
        $(this)
            .siblings()
            .find(".dropDown")
            .slideUp();
        $(this)
            .siblings()
            .find(".arr-left")
            .removeClass("open");
    });

    // open Side Nav
    $(".menuTriger").on("click", function() {
        $(".sideNav").toggleClass("open");
        $(".navover").toggleClass("open");
        $("html").css("overflow", "hidden");
    });

    // Close Side Nav
    $(".navover, .close1").on("click", function() {
        if ($(".sideNav").hasClass("open")) {
            $(".bars").removeClass("active");
            $(".navover").removeClass("open");
            $(".sideNav").toggleClass("open");
            $("html").css("overflow", "auto");
        }
    });

    // Search Open
    $(".header .search").click(function() {
        $(".searchh").toggleClass("open");
        $("html").css("overflow", "hidden");
    });

    // Search Close
    $(".searchh, .searchh .inner span.lnr-cross").click(function() {
        $(".searchh").removeClass("open");
        $("html").css("overflow", "auto");
    });

    // Main Slider
    $(".main-slider .owl-carousel").owlCarousel({
        autoplay: true,
        rtl: true,
        loop: true,
        nav: true,
        items: 1,
        dots: true,
        smartSpeed: 1000,
        navText: [
            "<span class='lnr lnr-chevron-right'></span>",
            "<span class='lnr lnr-chevron-left'></span>"
        ]
    });

    // clients Slider
    $(".clients .owl-carousel").owlCarousel({
        // autoplay: true,
        rtl: true,
        loop: true,
        nav: true,
        items: 7,
        dots: true,
        smartSpeed: 1000,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 3
            },
            992: {
                items: 5
            },
            1200: {
                items: 7
            }
        },
        navText: ["<span></span>", "<span></span>"]
    });

    //footer accordion
    if ($(window).width() < 992) {
        $(".foot-links button").attr("data-toggle", "collapse");
    }

    $(".foot-links button").on("click", function() {
        $(this).toggleClass("trans");
        $(this)
            .parent()
            .parent()
            .siblings()
            .find(".collapse")
            .collapse("hide");
        $(this)
            .parent()
            .parent()
            .siblings()
            .find("button")
            .removeClass("trans");
    });

    // Preloder
    $(window).on("load", function() {
        $("html").css("overflow-y", "auto");
        $(".loaderr").fadeOut(400, function() {
            $(this).remove();
        });
    });
});
