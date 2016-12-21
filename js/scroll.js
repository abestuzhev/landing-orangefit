jQuery(document).ready(function () {
    window.onscroll = function() {
        if(jQuery(window).scrollTop()>0) {
            jQuery('.header_top').css('background','#ffffff');
        }
        else {
            jQuery('.header_top').css('background','transparent');
        }
        if(jQuery(window).scrollTop()>jQuery('.header p.button').offset().top) {
            jQuery('.header_top .button_').css('opacity','1');
            jQuery('.header_top .button_ input').css('pointer-events','all');
            // jQuery('.timer').appendTo('.timer-block');
        }
        else {
            jQuery('.header_top .button_').css('opacity','0');
            jQuery('.header_top .button_ input').css('pointer-events','none');
            // jQuery('.header_top .timer').prependTo('.timer-big-block');

        }

        if(jQuery(window).width()<768) {
            if(jQuery(window).scrollTop()>jQuery('.header p.button').offset().top) {
                jQuery('.header_top .button_').css('display','block');
                // jQuery('.timer').appendTo('.timer-block');
            }
            else {
                jQuery('.header_top .button_').css('display','none');
                // jQuery('.header_top .timer').prependTo('.timer-big-block');
            }
        }
    }
});
