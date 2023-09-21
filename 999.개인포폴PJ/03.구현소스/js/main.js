////////////////// 포폴 JS 영역 ////////////////////////////
// DOM함수 모듈
import dFn from "./dom.js";


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


// 0. 새로고치면 스크롤바 위치캐싱후 맨위로 이동
setTimeout(() => {
    // 윈도우 스크롤 맨위로!
    window.scrollTo(0, 0);
    // 부드러운 스크롤 위치값 반영!
    setPos(0);
    // 안하면 원래 위치로 스크롤시 튐!
  }, 400);
  // 0. 스크롤바 트랙을 잡고 위치이동시 위치값 반영
  dFn.addEvt(window, "mouseup", () => setPos(window.scrollY));
  //////// mouseup /////////////
  
  // 0. 키보드 방향키 이동시 위치값 반영
  dFn.addEvt(window, "keyup", () => setPos(window.scrollY));
  //////// mouseup /////////////


let mov_box = document.querySelectorAll('.mov-box');
console.log('mov-box');

mov_box.forEach((ele) => {
    // ele - 요소자신
    ele.onwheel = (e) => e.stopPropagation();
  });


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


let observer = new IntersectionObserver((e)=>{
  e.forEach((window)=>{
      if(window.isIntersecting){
        window.target.style.opacity = 1;
      }
      else{
        div.target.style.opacity = 0;
      }
  })
})


let start_txt = document.querySelectorAll('.start-txt');
observer.observe(start_txt[0]);

let tit1 = document.querySelectorAll('.tit1');
observer.observe(tit1[0]); 

let tit2 = document.querySelectorAll('.tit2');
observer.observe(tit2[0]); 

let tit3 = document.querySelectorAll('.tit3');
observer.observe(tit3[0]);

let ch1 = document.querySelectorAll('.ch1');
observer.observe(ch1[0]);

let ch2 = document.querySelectorAll('.ch2');
observer.observe(ch2[0]);

let ch3 = document.querySelectorAll('.ch3');
observer.observe(ch3[0]);





