// 메인페이지 JS

import React, { useEffect, useState } from "react";
import ReactDOM, { createRoot } from "react-dom/client";
import { TopArea } from "./layout/TopArea";
import { MainArea } from "./layout/MainArea";
import { FooterArea } from "./layout/FooterArea";

// 제이쿼리
import $ from 'jquery';
import 'jquery-ui-dist/jquery-ui';


// 페이지 공통 CSS
import "./css/common.css";

// 최상위 Root 컴포넌트 /////////////////////
function App() {
    // 후크상태변수 설정 : 메뉴페이지 변경
    const [pgName, setPgName] = useState("main");

    //  페이지 변경 상태변수 업데이트 함수
    const chgPgName = (txt) => {
        setPgName(txt);
    }; ////// chgPgName ///////////////

  // 랜더링 후 실행구역 ////////////
  useEffect(()=>{
  // 햄버거 버튼 클릭시 전체 메뉴 보이기/숨기기
  $('.ham').click(e=>{
    // 전체메뉴 박스 :
    $('.mbox').fadeToggle(400);
    // 햄버거 버튼에 클래스 'on' 넣기/빼기
    $(e.currentTarget).toggleClass('on');

    // e.target과 e.currentTarget은 다르다
    // 후자가 햄버거 버튼 자신임

    // 비디오 재생/멈춤 : 대상 - .bgm
    // get(0)은 비디오 컬렉션임
    const vid = $('.bgm').get(0);
    vid.paused? vid.play() : vid.pause();
    // console.log(vid.paused);
    // paused 속성 : 동영상 멈춤일때 true 리턴
    // play() 메서드 : 동영상 재생 메서드
    // paused() 메서드 : 동영상 정지 메서드


  })////////// click //////////////
  }); ////////// useEffect //////////////




// 리턴코드 ////////////////////////////////////////////
    return (
        <>
            <TopArea cat={pgName} />
            <MainArea page={pgName} />
            <FooterArea />
        </>
    );
} // app ////////////////////////////////////////////////////

/* 
 <button onClick={()=>chgPgName('main')}>
          메인페이지
        </button>
        <button onClick={()=>chgPgName('men')}>
          남성페이지
        </button>
        <button onClick={()=>chgPgName('women')}>
          여성페이지
        </button>
        <button onClick={()=>chgPgName('style')}>
          스타일페이지
        </button>
*/

// 출력하기
const root = createRoot(document.querySelector("#root"));
root.render(<App />);
