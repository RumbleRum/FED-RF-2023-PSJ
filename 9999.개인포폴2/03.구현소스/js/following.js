// 따라다니는 원 JS - following.js

// 1. 이벤트 등록하기 
window.addEventListener('DOMContentLoaded',loadFn);

// 2. 함수만들기 //////
// DOM선택함수
const qs = x => document.querySelector(x);
const qsa = x => document.querySelectorAll(x);

// 2-1. 로드함수 ////
function loadFn(){
   
  
    // (1) 움직일 대상 : .mover
    const mover = qs('.mover');
    // (2) 이벤트 대상 : document.body
    const myBody = document.body;

   
    // 무버 크기의 절반계산
    let gap = mover.clientWidth/2;
    
    // width는 clientWidth, height는 clientHeight
    console.log('무버width:',gap);

    // 2. 이벤트 대상에 마우스 무드 이벤트가 적용될때
    // 무버가 따라다니게 기능 구현
    myBody.onmousemove = e => { // e - 이벤트 전달변수
        // 1.위치값 가져오기(박스중앙위치로 보정)
        let posx = e.pageX - gap;
        let posy = e.pageY - gap;
        
        // -> 만약 .mover가 fixed 포지션이면
        // 브라우저 화면에서의 위치인 clientY를 사용한다!

        // 2.무버에 위치값 적용하기
        mover.style.top = posy + 'px';
        mover.style.left = posx + 'px';



    }; ///////// onmousemove //////////

    // 이벤트 구역을 들어올때만 보이기 / 나가면 숨기기
    myBody.onmouseenter = () => {
        mover.style.opacity = 1;
    }; ////////// mouseenter ////////////

    myBody.onmouseleave = () => {
        mover.style.opacity = 0;
    }; ////////// mouseleave ////////////



} //////////// 로드함수 /////////////////////

