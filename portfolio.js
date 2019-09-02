function mobileMenuDisplay() {
    $('.hamburger_image').on('click', function(event) {
        $('nav').toggleClass('hide');
    });
}

$(function() {
    mobileMenuDisplay();
});