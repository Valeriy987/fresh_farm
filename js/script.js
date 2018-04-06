//плавная прокрутка по якорям
$(function(){
    $('a[data-target^="anchor"]').bind('click.smoothscroll', function(){
        var target = $(this).attr('href'),
            bl_top = $(target).offset().top - 10;
        $('body, html').animate({scrollTop: bl_top}, 700);
        return false;
    });
});

//фиксация меню при прокрутке

/*$(document).scroll(function () {
    if ($(document).scrollTop()>$('header').height()) {
        $('.headerMenu').addClass('fixed');
    }else {
        $('headerMenu').removeClass('fixed');
    }
});*/

//Прилипающее  меню  при  скроле
$(function(){
    $(window).scroll(function() {
        if($(this).scrollTop() >= 60) {
            $('.headerMenu').addClass('fixed');
        }
        else{
            $('.headerMenu').removeClass('fixed');
        }
    });
});

$(function(){
    $(window).scroll(function() {
        if($(this).scrollTop() >= 50) {
            $('div#slider').addClass('mt135');
        }
        else{
            $('div#slider').removeClass('mt135');
        }
    });
});


//эфект бургера
$(document).ready(function () {
    $('.navbar-toggler').click(function () {
       $('.navbar-toggler').toggleClass('burger-active');
    });
});

//
function functabs(number) {

    var divs = document.getElementsByClassName('li-but');
    for (var i = 0; i < divs.length; i++) {
        divs[i].classList.add("backgr-none");
    }
    document.getElementById('li' + number).classList.remove("backgr-none");
    document.getElementById('li' + number).classList.add("green-li");

    var divs = document.getElementsByClassName('control');
    for (var i = 0; i < divs.length; i++) {
        divs[i].classList.add("color-black");
    }
    document.getElementById('b' + number).classList.remove("color-black");
    document.getElementById('b' + number).classList.add("color-font");
}


//появление ссылки
jQuery(function(f){
    var element = f('#back-top');
    f(window).scroll(function(){
        element['fade'+ (f(this).scrollTop() > 200 ? 'In': 'Out')](500);
    });
});

//плавная прокрутка на верх
$(document).ready(function(){
    $("#wrap").on("click","#back-top", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1000);
    });
});




