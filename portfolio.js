$(function() {
    $('.hamburger_image').on('click', function(event) {
        event.preventDefault;
        $('.menu_view').slideToggle(500);
    });
});