// 제이쿼리 UI 드래그 앤 드롭 활용하기 JS /////

// 제이쿼리 코드구역 : html 태그 로딩후 실행구역
$(() => {
    // 드래그 기능 대상 : .draggable
    const dgEle = $(".draggable");

    // 드래그 기능 설정  : draggable()
    // dgEle.draggable() -> 호출만해도 드래그기능 가능
    // 드래그 기능 옵션은 {} 객체로 전달함
    dgEle.draggable({
        cursor: "grabbing", // 커서모양 '이동중' 표시
        stack: ".draggable", // 드래그 대상을 맨위로처리 (zindex)
        // 이동중 투명도 설정
        opacity: 0.8,
    }); ///////////////////////////////////////

    // 상세 요구사항 반영하기
    // 드래그 중 포스트잍 이미지 변경하기
    // .invert를 .draggable에 주면 배경이미지 변경됨!
    // 제이쿼리에 미리만들어지지 않은 이벤트는 일반적으로
    // on(이벤트명,함수) --> 를 사용

    // 드래그 시작 이벤트 : dragstart -> 이미지변경
    dgEle.on("dragstart", function () {
        // console.log('드래그시작',this);
        // 클래스 invert 넣기
        $(this).addClass("invert");
    }); /// dragstart ////////////////////

    // 드래그 종료 이벤트 : dragstop -> 이미지복귀
    dgEle.on("dragstop", function () {
        // console.log('드래그끝',this);
        // 클래스 invert 넣기
        $(this).removeClass("invert");
    }); /// dragstop ////////////////////

    // 드롭 대상 박스에 드롭될때 동영상 보여주기
    // droppable() 메서드 : 드롭되는 요소 처리
    // 이벤트 대상 : .dropshow

    $(".dropshow").droppable({
        drop: function (evt, ele) {
            //evt이벤트전달변수,ele드롭관련객체
            // 드롭된요소는 ele.draggable
            let target = ele.draggable;

            // 드롭된 요소의 이미지src 불러오기
            let isrc = target.find("img").attr("src");
            console.log("이미지경로", isrc);

            // 드롭영역의 배경이미지 변경하기
            // this - 드롭박스
            $(this).css({
                backgroundImage: `url(${isrc})`,
            }); ////////////css//////////////////////

            // 드롭된 요소 사라지기
            target.hide();

            // 드롭된 요소의 자식 p태그의 글자 읽어오기
            let ptxt = target.find("p").text();
            console.log("읽어온글자", ptxt);

            // 드롭영역에 글자넣기
            $(this).text(ptxt + "👑축👑");

            // 유튜브 동영상 박스넣기
            $(".u-box").html(`
                <div id="m-box">
                    <a href='#'>x</a>
                </div>
            `); ////// html /////////////////

            // 생서된 동영상박스 셋팅하기
            let mbox = $("#m-box");

            mbox.css({
                position: "fixed",
                top: "0",
                left: "0",
                width: "100%",
                height: "100%",
                zIndex: "999",
                backgroundColor: "black",
            }); /// css/ ////////////////

            // 동영상 박스에 유튜브 iframe 넣기
            // html()로 넣으면 닫기버튼 지워짐
            // 맨뒤에 요소 추가는 append() 메서드임!

            // 동영상 아이디 정보는 드래그된 요소(target)의 
            // data-mv 속성의 값으로 셋팅되어 있다
            // 속성값 읽어오기는 선택요소.attr(속성명)
            let mvId = target.attr('data-mv');
            console.log('동영상id',mvId);

            mbox.append(`
            <iframe src="https://www.youtube.com/embed/${mvId}?autoplay=1" allow="autoplay" style="width:100%;height:100%;border:none"></iframe>
            `)
            // 동영상 박스 숨기고 1초후 slideDown으로 보이기
            .hide().delay(1000).slideDown(2000);

            // 닫기버튼 세팅 및 클릭스 동영상 닫기
            mbox.find('a').css({
                position: "absolute",
                top: "50px",
                right: "50px",
                width: "50px",
                height: "50px",
                textDecoration: "none",
                font: "bold 48px Verdana",
                color: "#fff",
                textShadow: "0 0 5px #777",
                zIndex:2
            })
            .click(function(){ // 닫기버튼 a요소 클릭시
                // 1. mbox 닫기
                mbox.slideUp(1000,function(){
                    // 2. 자기자신 없애기(this-mbox)
                    $(this).remove();//태그제거
                    // 3.  드롭된요소(target) 다시 보이기
                    // 동시에 원래 자기위치로 돌아오기
                    target.show().css({
                        top:"0",
                        left:"0"
                    });///css//////

                    // 4. 드롭박스 초기화
                    $('.dropshow').text('여기에 드롭하세요!')
                    .css({
                        backgroundImage: 'url(addimg/effect2.jpg)'
                    });////css///
                });//slideUp
            });

        }, //drop이벤트 옵션 메서드 /////////
    }); ///////////////////////// droppable /////////////
}); ///////////// jQB ////////////////////
