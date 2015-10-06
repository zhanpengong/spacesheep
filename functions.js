/*jslint browser: true*/
/*global $, jQuery, alert*/
/*jslint browser: true, devel: true */


$(window).scroll(function () {
    "use strict";

    var wScroll = $(this).scrollTop(),
        opacity;
    
    $('.logo').css({
        'top' : +(wScroll / 14) + "%"
    });
    
    $('.back').css({
        'top' : +(wScroll / 4.5) + "%"
    });
    
    $('.front').css({
        'top' : -(wScroll / 10) + "%"
    });
    
    $('.slogan').css({
        'top' : +(wScroll / 3.5) + "%"
    });
    
    $('.bigback').css({
        'top' : +(wScroll / 2.8) + "%"
    });
    
    if (wScroll > $('#itemscontainer').offset().top - ($(window).height() / 1.2)) {
                
        $('#itemscontainer figure').each(function (i) {
            
            setTimeout(function () {
                $('#itemscontainer figure').eq(i)
                    .addClass('isshowing');
            }, 150 * (i + 1));
            
        });
        
    }
    
    if (wScroll > $('.periscope').offset().top - $(window).height()) {
        $('.periscope').css({'backgroundposition': 'center' + (wScroll - $('.periscope').offset().top) + 'px'});
    
    }
    
    if (wScroll > $('.periscope2').offset().top - $(window).height()) {
        $('.periscope2').css({'backgroundposition': 'center' + (wScroll - $('.periscope2').offset().top) + 'px'});
        
        opacity = (wScroll - $('.periscope2').offset().top + 400) / (wScroll / 7);
        $('.windowtint').css({'opacity': opacity});
    
    }
    
    if (wScroll > $('.navbar').offset().top) {
        $('.navbar').css({'opacity': 1});
        
    
    }
    
    
});
