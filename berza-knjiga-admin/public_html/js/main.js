$(".showNav").click(function () {
    $(".side-nav").toggleClass("showSideNav");
    $(".showNav").toggleClass('buttonSlide');
});
$(".side-button").click(function () {

    $(".toggle-nav").toggleClass('col-sm-3');
    $(".articles").toggleClass('col-sm-9');
    $(".side-nav li span:nth-of-type(2n)").toggleClass('showInline');
    $(".toggle-nav").toggleClass('showInline');
    if ($(".side-button > span").hasClass('fa-chevron-right')) {
        $(".side-button > span").removeClass('fa-chevron-right');
        $(".side-button > span").addClass('fa-chevron-left');

    } else {
        $(".side-button > span").removeClass('fa-chevron-left');
        $(".side-button > span").addClass('fa-chevron-right');
    }
});
$(".fa-search").click(function () {
    $(".search").toggleClass('showInline');

});
$(".fa-cogs").click(function () {
    $(".nivelacija").toggleClass('showInline');

});
$('.toggle-oredr-list').click(function () {
    $(this).closest('.shop').find('.order-list').toggleClass('display');

});
$('.toggle-oredr').click(function () {
    if ($(this).parent().next().hasClass('active')) {
        $(this).parent().next().removeClass('active');
        $(this).parent().next().html('');
    } else {
        var oredrList = $('.order-list').html();
        $(this).parent().next().append(oredrList);
        $(this).parent().next().addClass('active');
    }
});
$(window).on('load resize', function (e) {
    windowWidth = $(window).width();
    if (windowWidth < 992) {
        $('.order-list').removeClass('display');

    }

    if (windowWidth > 992) {
        $('.order-wrapper-mobile').removeClass('active');
        $('.order-wrapper-mobile').html('');
    }

});
$(".fa-power-off").click(function () {
    $(this).toggleClass('disabled');

});
$(".fa-lock").click(function () {
    $(this).toggleClass('fa-unlock-alt');

});

jQuery(document).ready(function () {
    jQuery(".selection [required]").after("<span class='required'>*</span>");
});

$('.help').click(function () {
    $(this).next().toggleClass('show');
});

$('.help-button').click(function () {
    $('.help').toggleClass('show');
    $('.help-button').toggleClass('active');
});
    