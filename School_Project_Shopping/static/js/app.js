/* js */
jQuery(function ($) {
    var t = true;
    var count = 2;
    var count_ = 0;
    var $windowWidth = $(window).width();
    //--------------------------------------------------------------

    $('.close').on('click',function () {
        $('.banner').css({
            "display":"none"
        })
    })


    setInterval(function(){
        $('.slide_' + count).css('opacity','1')
        count++
        if ( count == 6 ) {
            count = 1;
        }
        $('.slide_' + count_).css('opacity','0')
        count_++
    }, 5000);

    $('.viewer_con_icon > img:nth-of-type(1)').on('click',function () {
        if (count_ % 2 == 0 ) {
            $(this).attr("src","/static/img/sub/like_f.png")
            count_++;

        }else if ( count_ % 2 == 1 ){
            $(this).attr("src","/static/img/sub/like.png")
            count_++;
        }
    })

    $('.viewer_con_icon > img:nth-of-type(2)').on('click',function () {
        if (count_ % 2 == 0 ) {
            $(this).attr("src","/static/img/sub/shape_f.png")
            count_++;

        }else if ( count_ % 2 == 1 ){
            $(this).attr("src","/static/img/sub/shape.png")
            count_++;
        }
    })
    if ( $windowWidth >= 980 ) {
        var $wrapTop = $('.header_fixed').offset().top
        var $window = $(window).scroll(function () {
            if ($window.scrollTop() > $wrapTop) {
                $('.header_fixed').addClass('fixed')
                $('.top').css({
                    'opacity':'1',
                    'height':'40px'
                })
            } else {
                if ($window.scrollTop() < $wrapTop) {
                    $('.header_fixed').removeClass('fixed')
                    $('.top').css({
                        'opacity':'0',
                        'height':'0'
                    })
                }
            }
        })
        $('.top').on('click',function () {
            if (t) {
                t = false;
                $('html, body').animate({
                    scrollTop: 0
                }, 800, function() {
                    t = true;
                });
            }
        })
    }
})