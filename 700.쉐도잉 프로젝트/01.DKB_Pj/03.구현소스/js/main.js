// 도깨비 PJ 메인 JS - main JS

// 로딩구역 호출
window.addEventListener('DOMContentLoaded',loadFn);

// 로딩구역 함수 구역/////////////////////////////
function loadFn(){
    // 로딩 호출 확인
    console.log('로딩완료!!');

    // 뷰드러운 스크롤 적용
    startSS();

    // 마우스휠 이벤트 막기가 작동되어
    // 캐릭터 설명 작은박스 스크롤 작용이 안되므로
    // 따라서 이벤트 버블링을 막아줘야함!!
    // event.stopPropagation()
    // 이벤트 객체의 이벤트 버블링 막아주는 매서드임!!

    // 대상선정 :.desc-box
    let desc_box = document.querySelectorAll('.desc-box');

    // 모든 캐릭터 설명박스는 이벤트 버블링 막기!!!!
    // -> 여기서 마우스 휠됨!!
    desc_box.forEach(ele=>{  
        ele.onwheel = e => e.stopPropagation();
    });

    // ele - 요소자신 !



} //////loadFn //////////////////////////////////