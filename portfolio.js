$(function() {
    $('.menu').on('click', function(event) {
        event.preventDefault;
        $('.menu_view').slideToggle(500);
    });
});