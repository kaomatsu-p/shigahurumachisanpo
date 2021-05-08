ScrollReveal().reveal('.cover-title', {
    duration: 2000,
    opacity: 0,
    distance: '30px',
    origin: 'top',
    reset: true
});

ScrollReveal().reveal('.drop', {
    duration: 2000,
    opacity: 0,
    distance: '30px',
    origin: 'top',
    reset: true
});

ScrollReveal().reveal('.concept', {
    duration: 2000,
    distance: '30px',
    origin: 'left',
    reset: true
});

ScrollReveal().reveal('.ranking', {
    duration: 2000,
    distance: '30px',
    origin: 'left',
});


// トップへ戻るボタン
$(document).ready(function () {
    $(".pagetop").hide();
    $(window).on("scroll", function () {
        if ($(this).scrollTop() > 200) {
            $(".pagetop").fadeIn("fast");
        } else {
            $(".pagetop").fadeOut("fast");
        }
    });
    //スムーススクロール設定
    $('.pagetop').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 800);　//スムーススクロールの速度
        return false;
    });
});

$(function(){
  $('a[href^="#button_area"]').click(function(){
    var speed = 500;
    var href= $(this).attr("href");
    var target = $(href == "#country_kohoku" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $("html, body").animate({scrollTop:position}, speed, "swing");
    return false;
  });
});