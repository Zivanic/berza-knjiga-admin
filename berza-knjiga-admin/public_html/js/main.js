$(".showNav").click(function () {
    var viewportWidth = $(window).width();
    if (viewportWidth < 768) {
        
            $(".side-nav").slideToggle("2000");
            $(".showNav").toggleClass('buttonSlide');
        
    } else {
        
            $(".toggle-nav").toggleClass('col-sm-3');
            $(".articles").toggleClass('col-sm-9');
            $(".showNav").toggleClass('buttonSlide');
            $(".side-nav li span:nth-of-type(2n)").toggleClass('showInline');
            $(".toggle-nav").toggleClass('showInline');
    }
});
$(".fa-search").click(function () {
    $(".search").toggleClass('showInline');

});
