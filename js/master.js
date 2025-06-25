$(document).ready(function() {
    $(window).scroll(function() {
        // Check the scroll position
        if ($(this).scrollTop() > 182.4) {
            // Add 'sticky-header-active' class when scroll position is greater than 182.4px
            $('.sticky-header').addClass('sticky-header-active');
        } else {
            // Remove the class if the scroll position is less than or equal to 182.4px
            $('.sticky-header').removeClass('sticky-header-active');
        }
    });
});