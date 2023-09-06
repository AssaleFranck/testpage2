$(document).ready(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) { // 100 est le nombre de pixels à partir duquel la barre de navigation se rétrécit
            $('.nav-bg').addClass('nav-bg-scroll');
        } else {
            $('.nav-bg').removeClass('nav-bg-scroll');
        }
    });
});