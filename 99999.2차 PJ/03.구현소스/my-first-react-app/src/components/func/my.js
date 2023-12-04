
// 제이쿼리
import $ from 'jquery';
import 'jquery-ui-dist/jquery-ui';

export const myFn = () => {
    $('.cont ul li').click((e)=>{
        $(e.currentTarget).toggleClass('on')
        .siblings().removeClass('on');
    })

}
