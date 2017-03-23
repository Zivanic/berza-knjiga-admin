$(".showNav").click(function () {
    var viewportWidth = $(window).width();
    if (viewportWidth < 768) {
        
            $(".side-nav").slideToggle("2000");
            $(".showNav").toggleClass('buttonSlide');
        
    } else {
        
            $(".test").toggleClass('col-sm-1','col-sm-3');
            $(".showNav").toggleClass('buttonSlide');

    }
});
