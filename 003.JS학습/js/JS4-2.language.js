//////// JS 4-2. 객체연습 - 다국어 JS

// 돔 객체 모듈 불러오기
import dFn from './dom.js';
// 데이터 묘둘 불러오기 : 제이슨
import langCode from './data_lang.json' assert{type:'json'};
// import langCode from './data_lang.json' 어서써{타입:JSON};
// 제이슨 import 맨 뒤에 assert(주장하다! 제이슨임)
// assert{type:json}; -> 어서써 타입 제이슨

console.log(langCode);


// 원래 제이슨 파일과 같은 데이터 파일을 불러올때는 
// 데이터 파일을 모두 불러온 후 그 데이터를 이용하는 코드가 
// 실행 되도록 하는 비동기 코딩방식인 Promise를 사용하는 것이 원칙임

// 1. 다국어 요구사항 /////////////////////

// - 언어선택 박스를 변경하면 해당 코드에 맞게 다국어 데이터를
// 제이슨 파일에서 읽어서 본 페이지에 데이터를 변경한다

// 2. 대상선정 ////////////////////////////

// 2-1 이벤트 대상 : .sel
const selBox = dFn.qs('.sel');
console.log(selBox);

// 2-2 변경대상 : #gnb a / #cont img / #info address
// (1) gnb a : gnb메뉴
const gnbList = dFn.qsa('#gnb a');
console.log(gnbList);

// (2) 메인이미지 : #cont img
const mainImg =  dFn.qs('#cont img');
console.log(mainImg);

// (3) 하단주소 : #info address
const addrBox = dFn.qs('#info address');
console.log(addrBox);


// 3. 이벤트 설정하기////////////////////
// 이벤트 종류 : 선택박스가 변경될때 발생하는 이벤트는? change
dFn.addEvt(selBox,'change',()=>{
    // 1 현재 이벤트가 발생하는 선택박스의 값 읽어오기
    // 즉 하위 옵션 요소의 벨류(value) 속성값 읽기 
    let selVal =  event.currentTarget.value

        console.log('변경',selVal);

    // 2 읽어온 value 값으로 다국에 셋팅 객체의 값과 매칭하기
    let selData = langCode[selVal];
    console.log('선택데이터:',selData);

// 4. 데이터 셋팅하기 //////////
    // GNB 데이터 셋팅하기
     gnbList.forEach((ele,idx)=>{
        ele.innerText = selData['메뉴'][idx];
     });
    
    // 메인이미지 src 데이터 셋팅하기
     mainImg.src = `images/${selVal}.jpg`;

    // 회사주소 데이터 셋팅하기
    addrBox.innerText = selData['주소'];





});
