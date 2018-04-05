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

$(document).scroll(function () {
    if ($(document).scrollTop()>$('header').height()) {
        $('.headerMenu').addClass('fixed');
    }else {
        $('headerMenu').removeClass('fixed');
    }
});


$(document).ready(function () {
    $('.navbar-toggler').click(function () {
       $('.navbar-toggler').toggleClass('burger-active');
    });
});


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

// sorting

/*
var $container = $('#container-sort');

$('#sort a').click(function(){
    // get href attribute, minus the #
    var $this = $(this),
        sortName = $this.attr('href').slice(1),
        asc = $this.parents('.sort').hasClass('asc');
    $container.isotope({
        sortBy : sortName,
        sortAscending : asc
    });
    return false;
});

// switches selected class on buttons
$('#sh').find('.option-set a').click(function(){
    var $this = $(this);

    // don't proceed if already selected
    if ( !$this.hasClass('selected') ) {
        $this.parents('.option-set').find('.selected').removeClass('selected');
        $this.addClass('selected');
    }

});


$(function(){
    $container.isotope({
        itemSelector : '.element',
        getSortData : {
            symbol : function( $elem ) {
                return $elem.attr('data-symbol');
            },
            category : function( $elem ) {
                return $elem.attr('data-category');
            },
            number : function( $elem ) {
                return parseInt( $elem.find('.number').text(), 10 );
            },
            weight : function( $elem ) {
                return parseFloat( $elem.find('.weight').text().replace( /[\(\)]/g, '') );
            },
            name : function ( $elem ) {
                return $elem.find('.name').text();
            }
        }
    });

});*/





