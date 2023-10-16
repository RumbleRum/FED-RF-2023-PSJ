// 미니언즈 좀비 탈출 애니 구현 JS - main.js

/*********************************** 
        [ 요구사항정리 ]
        1. 버튼을 클릭하여 미니언즈가
        순서대로 특정위치로 이동하며
        메시지를 보여준다
        2. 각 위치별 좀비를 등장시킨다
        3. 맨윗층에서 탈출할때 헬기를 사용한다

        [ 변경대상 ]
        1. 주인공 미니언즈
        2. 좀비 미니언즈들
        3. 주사기
        4. 헬기

        [ 이벤트와 이벤트대상  ]
        1. 이벤트 : 클릭이벤트
        2. 이벤트대상 : 버튼들
        3. 기능구분 : 버튼글자(지시사항)

    ***********************************/

// 0. 주인공들 변수에 할당!
// (1) 미니언즈
const mi = $('.mi');

// (2) 건물 li
const room = $('.building li');

// (3) 버튼들
const btns = $('.btns button');

// (4) 메시지 박스
const msg = $('.msg');

// (5) 좀비 주사기 요소 변수처리
let mz1 = `<img src="./images/mz1.png" alt="좀1" class="mz">`;
let mz2 = `<img src="./images/mz2.png" alt="좀2" class="mz">`;
let zom = `<img src="./images/zom.png" alt="좀비들" class="mz">`;
let inj = `<img src="./images/inj.png" alt="주사기" class="inj">`;

// (6) 메시지 배열 셋팅
const msgTxt = [
    // 0번방
    "",
    // 1번방
    "",
    // 2번방
    "",
    // 3번방
    "",
    // 4번방
    [
        ['무','무.','무.서','무.서.','무.서.워','무.서.워.','무.서.워..',],
        `아~악! 물렸다!<br>어서 치료주사방으로!`
    ],
    // 5번방
    "",
    // 6번방
    [`여긴없겠지?`,
    `그래도 무서우니 윗층으로 가자!`],
    // 7번방
    ["악 씨발 설마...!",'끄악~! 여기도 좀비새끼가'],
    // 8번방
    `와~! 아늑하다! 옆방으로 가보자!`,
    // 9번방
    "악! 좀비<br>새끼다~~~~",
];

// console.log('대상',mi,room,btns,msg);

// 1. 건물 각 방에 번호넣기 + 좀비 / 주사기 넣기
// 대상: .building li -> room변수
// 사용 제이쿼리 매서드 :
// (1) each((순번,요소)=>{}) : 요소의 개수만큼 순서대로 돌아줌!
// (2) append(요소) : 선택요소 내부에 자식요소 추가(이동)

room.each((idx,ele)=>{
    // console.log(idx,ele);
    // 1. 각 방에 숫자로 순번넣기
    $(ele).text(idx);

    // 2. 좀비 / 주사기넣기
    switch(idx){
        case 9:
            $(ele).append(mz1);
            break;
        case 7:
            $(ele).append(mz2);
            break;
        case 2:
            $(ele).append(inj);
            break;
        case 1:
            $(ele).append(zom);
            break;

    }/// switch case ////////////

}); //// each ///////////


// 좀비 싹다 숨기기
$('.mz').hide();
// 시간이 없는 hide는 display:none 처리함!!

// 2.버튼 셋팅/////////
// 대상 : .btns button -> btns 변수

// btns.hide().first().show();
// 버튼들.숨겨.첫번째.보여줘

btns.hide().eq(4).show();


// 3. 미니언즈 공통기능 함수//////////////////
// (1) ele - 클릭된 버튼요소
// (2) seq - 이동할 li방 순번
// (3) fn - 이동후 실행할 코드(콜백함수)
const actMini = (ele,seq,fn)=>{

    // 메시지 숨기기 + 버튼숨기기
    msg.fadeOut(300);
    // this 는 클릭된 버튼 자신임! -> ele로 전달!
    $(ele).slideUp(400);

    // 1. 위치값 읽기 : seq에 방 번호를 보냄!
    // 원리 : 이동할 li 방 위치값을 읽은 후 이동함
    let myRoom = room.eq(seq);
    // 위치값 배열변수
    let pos = [];
    // top위치값
    pos[0] = myRoom.offset().top;
    // left위치값 : 방에서 중앙에 위치하도록 보정
    //  -> left값 + 방width절반 - 미니언즈 width절반
    pos[1] = myRoom.offset().left + myRoom.width() / 2 - mi.width() / 2 ;

    // 제이쿼리 위치값 정보 메서드 : offset() 
    // -> 하위속성 : offset().top, offset().left
    
    // 제이쿼리로 가로,세로 크기정보 메서드 : 
    // -> 가로크기 width() / 세로크기 height()

    console.log(pos[0],'/',pos[1]);

    // 2. 이동하기
    // 대상 : .mi -> mi변수
    // animate({CSS설정},시간,이징,()=>{})
    mi.animate({
        top: pos[0] + 'px',
        left: pos[1] + 'px'
    },800,"easeOutElastic",fn
       ); /////// animate ///////////////

}; ///// actMini ////////////////

// 다음버튼 보이기 함수 ////////////////////
const showNextBtn = (ele) =>
$(ele).next().delay(1000).slideDown(400);
////////// showNextBtn 함수 ///////////////////////

// 4. "들어가기" 버튼 클릭시 ///////////////////
btns.first() // 첫번쨰버튼
    .click(function(){

        // 버튼별 콜백함수 만들기 //////////////
        let fn = () => {  // this가 싸고있는 버튼 요소로 설정됨!
                          // function(){} -> 이거로 쓰면 this 경로 가 mi로 설정됨!

         // 메시지변경 + 메시지 보이기
         msg.html(msgTxt[8])
         .delay(1000).fadeIn(300);
            
         // 다음버튼 보이기
         showNextBtn(this);
         
         }; ///////////// 콜백함수 ////////////////////////

        // 미니언즈 공통함수 호출
        actMini(this,8,fn);
        

    }) /// '들어가기' 버튼 끝 //////////////////

// 5. "옆방으로" 버튼 클릭시 ///////////////////
// 위의 버튼에서 이어짐! .next() - 세밀콜론 위에서 지워야 이어짐
        .next() // 두번쨰버튼
        .click(function(){  

        // 버튼별 콜백함수 만들기 ////////////// 
        let fn = () => { 
            // 좀비 나타나기
            room.eq(9).find('.mz')
            .delay(2000)

            .fadeIn(400,()=>{
                // 콜백함수
                // 메시지 보이기
                msg.html(msgTxt[9])
                .fadeIn(300)
                .css({left:"-89%"})

                // 다음버튼 보이기
                showNextBtn(this);

            }); ////// fadeIn ////////////////

         }; ///////////// 콜백함수 ////////////////////////

        // 미니언즈 공통함수 호출
        actMini(this,9,fn);
        

    }) /// '옆방으로' 버튼 끝 //////////////////

// 6. "윗층으로 도망가!" 버튼 클릭시 ///////////////////
// 위의 버튼에서 이어짐! .next() - 세밀콜론 위에서 지워야 이어짐
        .next() // 세번쨰버튼
        .click(function(){  

        // 버튼별 콜백함수 만들기 ////////////// 
        let fn = () => { 
                // 메시지 보이기
                msg.text(msgTxt[7][0])
                .fadeIn(300);

                // 좀비보이기
                // find() 자손선택 / children() 직계자식선택
                room.eq(7).find('.mz')
                .delay(1000).fadeIn(400,()=>{
                    // 좀비등장후 메시지 변경하기 - 두번째 메시지
                    msg.text(msgTxt[7][1]);

                    // 다음버튼 보이기
                    showNextBtn(this);

                }); /// fadeIn ///////////
                

         }; ///////////// 콜백함수 ////////////////////////

        // 미니언즈 공통함수 호출
        actMini(this,7,fn);
        

    }) /// '윗층으로 도망가!' 버튼 끝 //////////////////

// 7. "다시옆방으로!" 버튼 클릭시 ///////////////////
// 위의 버튼에서 이어짐! .next() - 세밀콜론 위에서 지워야 이어짐
        .next() // 세번쨰버튼
        .click(function(){  

        // 버튼별 콜백함수 만들기 ////////////// 
        let fn = () => { 
                // 메시지 보이기
                msg.text(msgTxt[6][0])
                .fadeIn(200).delay(1000).fadeIn(200,()=>{  // fadeIn 2번써도 적용됌!!
                    // 두번째 메시지 보이기 : 1.2초후 실행
                    msg.html(msgTxt[6][1]);

                    // 다음버튼 보이기
                    showNextBtn(this);
                });/// fadeIn ///////////////////

         }; ///////////// 콜백함수 ////////////////////////

        // 미니언즈 공통함수 호출
        actMini(this,6,fn);
        

    }) /// '다시옆방으로!' 버튼 끝 //////////////////

// 8. "무서우니 윗층으로!" 버튼 클릭시 ///////////////////
// 위의 버튼에서 이어짐! .next() - 세밀콜론 위에서 지워야 이어짐
        .next() // 다섯 번쨰버튼
        .click(function(){  

        // 버튼별 콜백함수 만들기 ////////////// 
        let fn = () => { 
                // 메시지 보이기 - 배열에 배열에 배열
                msg.html(msgTxt[4][0][0]).fadeIn(200)
                .delay(500).fadeIn(200,()=>msg.html(msgTxt[4][0][1]))
                .delay(500).fadeIn(200,()=>msg.html(msgTxt[4][0][2]))
                .delay(500).fadeIn(200,()=>msg.html(msgTxt[4][0][3]))
                .delay(500).fadeIn(200,()=>msg.html(msgTxt[4][0][4]))
                .delay(500).fadeIn(200,()=>msg.html(msgTxt[4][0][5]))
                .delay(500).fadeIn(200,()=>msg.html(msgTxt[4][0][6]))
                .delay(500).fadeIn(200,()=>{ // 뮤서워 대사 후 좀비 올라와 달려들기
                    // 좀비 선생 7번방에서 올라옴
                    room.eq(7).find('.mz')
                    .animate({ // 위층으로 올라옴 li 높이값 만큼
                        bottom: room.eq(7).height()+'px'
                    },500,'easeOutElastic')
                    .delay(500) // 기다림
                    .animate({
                        // right값을 li width값 만큼 이동 (120%보정)
                        right: room.eq(7).width()*1.2 + 'px'
                    },1000,'easeOutBounce',
                    ()=>{ 
                        
                        // 미니언즈 좀비 흑백 변경(1초후)
                        setTimeout(()=>{
                            mi.find('img')
                            // 흑백변경 :  필터 (그레이 스케일)
                            .css({filter:'grayscale(100%)'});
                            // 물린후 대사
                            msg.html(msgTxt[4][1])
                            .css({left:"-84%"});

                        },1000); // setTimeout //////////////

                        // 미니언즈 좀비 이미지 변경(2초후)
                        setTimeout(()=>{
                            mi.find('img').attr('src','images/mz1.png')

                            // 다음버튼 보이기
                            showNextBtn(this);

                        },2000); // setTimeout //////////////
                    }); //// animate //////////////////
                }); /// fadeIn //////////////////////

                
         }; ///////////// 콜백함수 ////////////////////////

        // 미니언즈 공통함수 호출
        actMini(this,4,fn);
        

    }) /// '무서우니 윗층으로!' 버튼 끝 //////////////////

// 9. "치료주사방으로!" 버튼 클릭시 ///////////////////
// 위의 버튼에서 이어짐! .next() - 세밀콜론 위에서 지워야 이어짐
        .next() // 다섯 번쨰버튼
        .click(function(){  

        // 주사기 돌리기
        let fn = () => { 
            $('.inj')
            .css({zIndex: "9999"})
            .delay(800)
            .animate({
                rotate:"-150deg",
            },500,"easeInOutQuart",
            ()=>{ //주사기 회전 후 콜백함수
                // 미니언즈 이미지 변경하기
                // attr(속성명,값)-> 값설정하기
                // attr(속성명) -> 값읽어오기
                mi.find('img')
                .attr('src','images/m2.png') // 이미지변경
                .css({filter:"grayscale(0)"}); // 흑백에서 컬러로
            }) ///////// animate //////////

        // jquery.rotate.js 는
        // jQuery animate메서드에 transform rotate를 사용할 수 있도록 
        // 해주는 플러그인임! -> 제이쿼리 라이브러리 아래 위치
        // [ 사용법(animate css설정에 씀)-> rotate:"각도deg" ]


            // animate는 트랜스폼 적용안됨! 따라서 CSS로 처리!
            // .css({
            //     transform:"rotate(-150deg)",//반시계방향
            //     transition:".5s .5s", //0.5초후 0.5초간 애니
            //     zIndex: "9999" // 미니언즈보다 위
            // })
      
        }; ///////// 콜백함수 ///////////////////////////////
// 미니언즈 공통함수 호출
actMini(this,2,fn);
    }); /// '치료주사방으로!' 버튼 끝 //////////////////






























