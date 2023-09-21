////////////////// 포폴 JS 영역 ////////////////////////////

// DOM 함수 객체 //////////////
const domFn = {
    // 요소선택함수 ////////
    qs: (x) => document.querySelector(x),
    qsEl: (el, x) => el.querySelector(x),
    qsa: (x) => document.querySelectorAll(x),
    qsaEl: (el, x) => el.querySelectorAll(x),
  
    // 이벤트셋팅함수
    addEvt: (ele, evt, fn) => ele.addEventListener(evt, fn),
  }; /////// domFn 객체 /////////////
  
  
// 부드러운 스크롤 모듈
import { startSS, setPos } from "./smoothScroll23.js";

startSS();


// 대상: .btn-grp button
const btns = domFn.qsa('.btn-grp button');
const mapImg = domFn.qs('.map img');

btns.forEach((ele,idx)=>{

    domFn.addEvt(ele,'click',(e)=>{
        e.preventDefault();
        // alert(idx);
        mapImg.src = `../03.구현소스/images/map/map${idx+1}.jpg`;
    })
})
