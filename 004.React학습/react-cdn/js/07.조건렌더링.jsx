 /* 07. 조건렌더링 : 리엑트 조건렌더링 */

/* 
    1. if 문을 사용하여 조건부 렌더링하기
    - 리액트 에서는 조건부로 구성요소를 
    렌더링 할 수 있다!
*/

// 선택적으로 로딩하도록 컴포넌트를 2개 만들기

// 1번 컴포넌트
function MakeDev(){
    return <h1>나는 개.발.자.!</h1>;
};///// MakeDev ///////////////////

// 2번 컴포넌트
function LostDev(){
    return <h1>개발자?? 어이가없네 진실의방으로</h1>;
};///// LostDev ///////////////////

// 3번 컴포넌트  : 이미지 생성
function MakeImg(props){
    return <img
        src={props.isrc}
        alt={props.ialt}
        title={props.itit} />;

}; /// MakeImg 컴포넌트 ////////////////////

// 출력 메인 컴포넌트 ////////////
// 셋팅할 변수 : isDev , isrc , ialt , itit
function Developer(props){
    const isNow = props.isDev;  // true / false 

    // 조건문
    if(isNow){
        return(
            <React.Fragment>
                {/* MakeDev 선택출력 */}
                <MakeDev />
                <MakeImg
                    isrc={props.isrc}
                    ialt={props.ialt}
                    itit={props.itit} />
            </React.Fragment>
        ); ///// return //////

    }; //// if  ////

    // if 문에 걸리면 그 앞에서 return 돔
    // 안걸리면 else 문 없이도 여기 return됨!
    return(
        <React.Fragment>
            {/* MakeDev 선택출력 */}
            <LostDev />
            <MakeImg
                isrc={props.isrc}
                ialt={props.ialt}
                itit={props.itit} />
        </React.Fragment>
    ); ///// return //////



}; //// Developer ////////////

// 이미지경로 배열
const devImg = [
    "https://www.spochoo.com/news/photo/202307/105961_212847_2541.png",
    "https://img3.daumcdn.net/thumb/R658x0.q70/?fname=https://t1.daumcdn.net/news/202208/24/BoiledMovie/20220824133926904mopw.png"
];

// 컴포넌트 호출 하기 : 개발자 찍기
ReactDOM.render(<Developer 
    isDev={true}
    isrc={devImg[0]}
    ialt="개발자 박서진"
    itit="프론트 엔트 개발쨔 박서진입니다"
    
    />,document.querySelector('#root1'));


// 컴포넌트 호출 하기 : 비개발자 찍기
ReactDOM.render(<Developer 
    isDev={false}
    isrc={devImg[1]}
    ialt="진실의방으로"
    itit="어이? 어이가없네 쉬볼럼이"
    
    />,document.querySelector('#root2'));