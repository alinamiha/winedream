
$('.carousel').carousel({
    interval: 1500
})
$(".burger-menu").on('click', function () {
    $(this).toggleClass('active-burger')
    $('.header_menu').toggleClass('mobile-header-visible')
    $('.header-menu-list').toggleClass('open')
})