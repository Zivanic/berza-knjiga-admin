$(".showNav").click(function () {
    $(".side-nav").toggleClass("showSideNav");
    $(".showNav").toggleClass('buttonSlide');
});
$(".side-button").click(function () {

    $(".toggle-nav").toggleClass('col-sm-2');
    $(".articles").toggleClass('col-sm-10');
    $(".side-nav li span:nth-of-type(2n)").toggleClass('showInline');
    $(".toggle-nav").toggleClass('showInline');

});
$(".fa-search").click(function () {
    $(".search").toggleClass('showInline');

});
$(".fa-cogs").click(function () {
    $(".nivelacija").toggleClass('showInline');

});
$('.toggle-oredr-list').click(function (){
    $(this).closest('.shop').find('.order-list').toggleClass('display'); 

});
$('.toggle-oredr').click(function (){
    var oredrList = $('.order-list').html();
    $('.order-wrapper-mobile').append(oredrList);
    
});
$(window).on('load resize', function (e) {
    windowWidth = $( window ).width();
 if ( windowWidth < 992 ) {
	$('.order-list').removeClass('display'); 
         
}

if ( windowWidth > 992 ) {
	
}
$(".fa-power-off").click(function () {
    $(this).toggleClass('disabled');

});
$(".fa-lock").click(function () {
    $(this).toggleClass('disabled');

});
	

});