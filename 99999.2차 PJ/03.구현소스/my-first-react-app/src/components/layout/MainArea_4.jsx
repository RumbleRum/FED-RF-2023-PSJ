// MainArea 컴포넌트

import { useEffect } from "react";


// 제이쿼리
import $ from 'jquery';
import 'jquery-ui-dist/jquery-ui';

// 메인 css
// import './css/main.css';

export function MainArea4() {
  // cat 속성으로 메뉴분류 전달

useEffect(()=>{
   
 const myFn = () => {
  $('.cont ul li').click((e)=>{
      $(e.currentTarget).toggleClass('on')
      .siblings().removeClass('on');
  })

}
myFn();
},[])


// 리턴 코드 //////////////////////////
  return (
    <>
      <section className="main inbox">
        <section className="ep ep4">
          <div className="cont">
            <ul>
              <li>
                <img src="./images/hotel/hilton.png" alt="힐튼" />
                <h2 className="hdn">힐튼</h2>
              </li>
              <li>
                <img src="./images/hotel/crockfords.png" alt="크록포드" />
                <h2 className="hdn">크록포드</h2>
              </li>
              <li>
                <img src="./images/hotel/conrad.png" alt="콘라드" />
                <h2 className="hdn">콘라드</h2>
              </li>
            </ul>
          </div>
        </section>
      </section>
    </>
  );
} ///////// MainArea 컴포넌트 ////////////
