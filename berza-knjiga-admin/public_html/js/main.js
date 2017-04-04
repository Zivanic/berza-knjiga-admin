$(".showNav").click(function () {
    $(".side-nav").toggleClass("showSideNav");
    $(".showNav").toggleClass('buttonSlide');
});
$(".side-button").click(function () {

    $(".toggle-nav").toggleClass('col-sm-3');
    $(".articles").toggleClass('col-sm-9');
    $(".side-nav li span:nth-of-type(2n)").toggleClass('showInline');
    $(".toggle-nav").toggleClass('showInline');

});
$(".fa-search").click(function () {
    $(".search").toggleClass('showInline');

});
$(".fa-cogs").click(function () {
    $(".nivelacija").toggleClass('showInline');

});
