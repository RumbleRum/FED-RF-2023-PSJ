/* 05. 리엑트 Props */



/********************************************************** 
    [ 리액트 Props ]
    1. 리액트 구성요소에 전달되는 인수다!(전달변수)
    2. HTML 속성을 통해서 구성요소에 전달된다
    3. props는 속성이다.
    4. JS 함수에 셋팅되는 전달변수와 HTML속성과 동일함
    5. 컴포넌트로 보내기 위해서는 HTML속성과 동일한 구문사용
**********************************************************/

// 자기차를 소개하는 컴포넌트1 /////////////////////////////////
function Car(Props){
    // 일반함수에서는 전달변수를 여러개 썼으니ㅏ
    // 컴포넌트 에서는 전달하는 props 하나로 여러개 사용가능!
    // 사용법 : props.속성명
    // 컴포넌트에서 미리 세부속성명을 정하여 호출하는 곳에서
    // 같은 이름의 속성명으로 값을 담아 보내준다!
    return(
        <React.Fragment>
            <h2>나의 차는 {Props.brand}입니다!</h2>
        </React.Fragment>
    );


}; ////// Car ///////////////////////

// 자동차 상세정보 출력 컴포넌트 /////////////////////////
function Detail(Props){
    return(
        <React.Fragment>
            <h2>
                모델명은 {Props.brand.model} 이공
                차색은 {Props.brand.color} 임
            </h2>
            {/* 이미지 출력 
                인라인 스타일 시트 넣기형식:
                <태그 style={{객체형식CSS}} />
                -> 값은 문자형으로 셋팅함 {속성:값}
                */}
            <img src="./images/ray.png" alt="뤠이" 
            style={Props.brand.opt} />
        </React.Fragment>
    );

}; //// detail ///////////////////



// 전체 자동차 브랜드 소개 컴포넌트 /////////////////////////
function Brand(Props){
    return(
        <React.Fragment>
            <h1>당신의 차는 무슨차입니까?</h1>
            <Car brand="기아 레이"/>
            {/* 다른 컴포넌트 호출 */}
        </React.Fragment>

    );

}; //// Brand 컴포넌트 //////////////////////

// 추가질문으로 자동차 정보를 자세히 기술하는 컴포넌트 ///////////////////
function AskMore(Props){ // props.num 배열데이터 순번값

    // 컴포넌트 에서 사용할변수
    // 다른 컴포넌트 에서도 사용할 경우 컴포넌트 바깥쪽
    // 전역구에 코드를 넣는다!

    // 옵션 배열 변슈만들기
    const carInfo = [
        {color:"라이트불루",model:"2023년형",opt:{filter:"hue-rotate(0deg)"}},
        {color:"녹차그린",model:"2023년형",opt:{filter:"hue-rotate(155deg)"},Transform:'rotateY(180deg)'}
    ];


    return(
        <React.Fragment>
            <h1>더 자세히 설명좀</h1>
            <Detail brand={carInfo[Props.num]} />
        </React.Fragment>
    );

}////// AskMore 컴포넌트 //////////////////////////

// 랜더링 하기/////////////
ReactDOM.render(
    <div>
        <Brand />
        <AskMore num="0"/>
        <AskMore num="1"/>
    </div>
    ,document.querySelector('#root1')
);

// ReactDOM.render(어쩌구,저쩌구);
// 어쩌구를 저쩌구에 출력해라