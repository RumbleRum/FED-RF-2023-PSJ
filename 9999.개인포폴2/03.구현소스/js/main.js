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

    // 바운딩위치값함수
    getBCR: (ele) => ele.getBoundingClientRect().top,

    // 옵셋탑값 반환함수
    getOT: (ele) => ele.offsetTop,

}; /////// domFn 객체 /////////////

const door = $(".cont li");

door.click((e) => {
  e.toggleClass(door);
});





// 버튼 입력후 바뀌는 함수 ////////////////////

const btn = domFn.qsa('.sul-box2 button');

const mapImg = domFn.qs('.ep9-2 img');

btn.forEach((ele,idx)=>{

  domFn.addEvt(ele,'click',(e)=>{
    e.preventDefault();
    mapImg.src = `../03.구현소스/images/map/dfood${idx+1}.jpg`;
  });
  
 
}); //// btn ///////////////////////////




