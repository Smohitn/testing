// Add this script to your HTML file or external JavaScript file

$(document).ready(function() {
    $('.portfolio-button').mousedown(function() {
        $('html, body').animate({
            scrollTop: 0
        }, 500); // You can adjust the duration of the scroll
        return false;
    });
});



