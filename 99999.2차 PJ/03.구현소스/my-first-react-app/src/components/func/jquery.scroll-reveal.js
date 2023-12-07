
// 제이쿼리
import $ from 'jquery';
import 'jquery-ui-dist/jquery-ui';

export const ScrollReveal = (e) => {

   $.fn.scrollReveal = function(e) {

        //get viewport size
        var windowHeight = $(window).height(),
            windowWidth = $(window).width(),
            initialScroll = $(window).scrollTop(),
            items = $('.js-reveal'),
            scroll;

        //hide anything not in the viewport
        items.each(function(){
            if($(this).offset().width >= windowWidth){
                $(this).addClass('js-reveal--hidden');
            }
        });

        //on scroll
        $(window).scroll(function (event) {
            //get the current scroll position
            scroll = $(window).width();
            //show anything that is now in view (scroll + windowHeight)
            items.each( function(){
                if($(this).offset().width <= (scroll + windowWidth)){
                    $(this).removeClass('js-reveal--hidden');
                }
            });
        });

        return this;
    };

};
