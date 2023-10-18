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


/********************************************** 
    2. if문이 아닌 조건 표현하기
    -> 조건식 && JSX표현식
    조건이 true일때만 && 뒤의 JSX표현식이 출력됨!
**********************************************/

// 개발자의 취향을 알아보지!!


// 2-1. 제목을 찍기 위한 타이틀 컴포넌트
function Title(props){ // 컴포넌트 호출시 tit를 셋팅함
    return <h1> 👨‍🔧개발자👩‍🔧가 좋아하는 {props.tit} </h1>;

} //// Title //////////////////////////////

// 음식리스트
const foods = ["스파게티","짜파게티","냉면","짜장면","마라탕"];

// 2-2. 반복 리스트를 위한 컴포넌트 ////////////////////////
function FoodList(props){
    return <li>개발자는 {props.fname} 졸아해!</li>;
} ///////////FoodList ///////////////////////

// 2-3. 개발자 선호 음식 리스트 출력 컴포넌트 //////////////////
function WishList(props){ // wlist 속성에 담아서 보내준다!
    // 위시리스트 담기
    const myFood = props.wlist;
    // 코드리턴
    return(
        <React.Fragment>
            <title tit="음식" />
            {/* 음식 위시리스트의 길이가 0보다 클때만 출력 */}

            {
            myFood.length > 0 &&
            <div>
                <h2>
                👨‍🔧개발자👩‍🔧가 좋아하는 음식은 모두
                    {myFood.length} 가지 입니다.
                </h2>
                <ul>
                    {
                        // 배열변수.map() 메서드 사용!
                        // map(변수=>바로리턴 컴포넌트)
                        // 리엑트 map()은 JS맵과 다름
                        // 맵.join 하지 않으므로
                        myFood.map(x=><FoodList fname={x} />)
                    }
                </ul>
            </div>            
            }
            {/* 다른 경우의 출력은 별도의 JSX출력 중괄호 구역에 코딩한다! */}
            {
                 myFood.length == 0 &&
                 <h2> 아직 개발자 음식쿠가 업뎃이 안됑썽 </h2>
            }
        </React.Fragment>
    );
} ////// WishList 컴포넌트 ///////////////////////////////

// 컴포넌트 출력 ///////////////////
ReactDOM.render(<WishList wlist={foods}/>,
    document.querySelector('#root3'));


    // 3. 좀더 복잡한 리스트를 출력하는 컴포넌트 ////////////////////

    // 전달할 배열변수 ////////
    const movs = [
        {year:"2021",mtit:"모가디슈"},
        {year:"2022",mtit:"범죄도시2"},
        {year:"2023",mtit:"가디언즈 오브 갤럭시3"},
    ];

    // const movs = [];

    // 개발자가 좋아하는 영화찍기 /////
    // 컴포넌트 구성하여 찍기 ///////
    
/* 
    [ 출력형태 ]
    👨‍🔧개발자👩‍🔧가 좋아하는 영화
    개발자가 좋아하는 영화는 최근 3년간 아래와 같습니다!
    2021년도 영화1
    2022년도 영화2
    2023년도 영화3
*/

// 3-1. 제목을 찍기위한 타이틀 컴포넌트
// -> 2-1 컴포넌트 재사용!

// 3-2. 반복리스트를 위한 컴포넌트 ///////////
function MovieList(props){ // year - 영화 개봉년도 / mname 영화명
    return <li>{props.year}년도 {props.mname}</li>;
} /////////// MovieList /////////////

// 3-3 개발자 선호영화 리스트 출력 컴포넌트 //////////
function WishList2(props){
    // 위시리스트 속성으로 담기
    const mymv = props.wlist;

    return(
        <React.Fragment>
            <Title tit='영화' />
            {/* 영화 위시리스트의 길이가 0보다 클때만 출력 */}
            {
                mymv.length > 0 &&
                <div>
                    <h2>
                        개발자가 좋아하는 영화는 <br />
                        {mymv.length}년간 아래와 같음
                    </h2>
                    <ul>
                        {
                            mymv.map(x=><MovieList year={x.year} mname={x.mtit} />)
                        }
                    </ul>
                </div>
            }
            {/* 다른 조건은 아랫쪽에 다른 중괄호로 표현 */}
            {
                mymv.length == 0 &&
                <h2> 아직 리스트 업뎃 ㄴㄴ </h2>
            }
        </React.Fragment>

    );

}/////////// MovieList2 /////////////

// 3-4 개발자 선호영화 리스트 출력
ReactDOM.render(<WishList2 wlist={movs} />,document.querySelector('#root4'));


/********************************************************** 
    4. 조건 연산자(삼항연산자)를 사용하여 조건부 랜더링하기 
**********************************************************/

// 명화 데이터
const worksrc = {
    "피카소":"https://m.theartin.net/web/product/big/201907/30c5a0fdd153bfdfdc8f19b2f4166fa8.jpg",
    "모네":"https://dimg.donga.com/wps/NEWS/IMAGE/2015/12/11/75316598.3.jpg",
    "피카츄":"https://images.imyfone.com/kr/assets/article/change-location/pikachu-lightning.jpg"
};

//4-1 타이틀과 그림찍기 컴포넌트
// 구성 : 작가이름 + 작품이미지
//  데이터 : 작가이름(painter) , 이미지경로(작가이름의 객체 worksrc)
// 작품명(wname
function MakeWork(props){
    return(
        <div>
            <h2>{props.painter}</h2>
            <img 
                src = {worksrc[props.painter]}
                alt = {props.wname}
                style = {{width:'400px'}}
                title = {props.wname}
            />
        </div>

    );
} ///////////////////////////////////////////////////////////////////////////////

// 4-2 전체출력 컴포넌트 /////////////////////////
// 구성 : 전체타이틀(Title컴포넌트) + 변경버튼
//          + 작가와 그림출력(MakeWork컴포넌트)
// 변경버튼 클릭시 MakeWork 컴포넌트 데이터를 변경하여 다시 출력하도록 함!(hook사용!)
function ExpComp(props){
    // 작품 변경 전달변수 : props.isChange
    // isChange 값은 트루/폴쓰

    // [일반변수]
    // let result = props.isChange;

    // [후크변수]
    const [result,setResult] =
         React.useState(props.isChange);
        // cosnt[변수명,set변수명] = React.useState(초기값)
        // -> set 변수명 : 변수명 첫글자는 대문자로!
        // useState() 메서드가 변수값이 업데이트 되는 여부를
        // 관리하여 변경시 이 변수를 사용하는 컴포넌트를
        // 자동으로 업데이트함!!!!
        // 후크변수 업데이트는 set변수명(값) 형식으로 한다!

    // 변경버튼 호출함수 /////
    const againFn = () =>{
        // not 연산자 - !(느낌표)는 true/false를 반대로 전환함
        // [일반변수 업데이트]
        // result = !result;
        // [후크변수 업데이트]
        setResult(!result);

        console.log('다시변경',result);
        // 단순히 변수값만 변경한다고 해서 이변수를 사용하는 컴포넌트를 변경할수없음
        // 이런 변수를 관리하는 (Hook) 를 사용하면 반영될수있다

    }; //// againFn //////

    return(
        <React.Fragment>
            {/* 1. 큰제목 */}
            <Title tit='명화' />
            {/* 2. 클릭시 again 함수를 호출함 */}
            <button onClick={againFn}>작가변경ㅆ스</button>
            {/* 3. 작품출력
            result 변수를 후크변수로 셋팅하면 
            컴포넌트가 이 변수의 값이 변경됨에 따라 자동으로 재설정된다 */}
                {
                    result ?
                    <MakeWork painter='피카츄' wname = '우는여인' /> 
                        :
                    <MakeWork painter='모네' wname = '양산을쓴여인' /> 
                }
        </React.Fragment>
    );

} // ExpComp//////////////////////////////////////

// 4-3 개발자가 좋아하는 명화출력 ///////////////
ReactDOM.render(<ExpComp isChange={false} />,document.querySelector('#root5'));


/********************************************************* 
    [ 리액트 훅크 : React Hook ]
    - 일반적으로 리액트에 사용되는 변수는 처음에 
    컴포넌트에 전달되어 초기 셋팅에 활용된다.
    그런데 이 변수가 변경될 경우 컴포넌트의 변경이
    자동적으로 이루어지지 않는다!
    이런 종류의 변수 업데이트가 가상돔과 실제돔에
    바로 반영되도록 실시간 감시역할을 하는
    리액트의 기술내용을 담고 있는 것이 후크다!

    1. 목적 : 어떤 특정 데이터가 변경될때
        이 데이터를 할당하여 사용하고 있는 컴포넌트의
        변경이 반영되도록 하고자 할때 후크를 사용한다!

    2. 구현방법:
        1) 노드JS SPA 개발환경에서는 상단에 import useState를 한다!
        -> CDN 에서는 React.useState 로 사용함!
        2) 코딩법 : useState() 메서드사용
            배열변수 = useState(초기값)
            (CDN) -> 배열변수 = React.useState(초기값)

            ((일반형))
            const [변수명,set변수명] = useState(초기값)
            -> set변수명 작성시 변수명 첫글자는 대문자로 씀
            예) 변수명 myname -> setMyname
            -> set변수명(값) : 메서드형태로 후크변수의 값을 셋팅함!

        3) 작동원리 
            - useState에 쓴 초기값이 배열변수 첫번째변수에 할당된다!
            - 코드에서 set변수명에 값을 할당하면
            useState메서드가 이것을 체크하여 이 변수를 사용한
            다른부분의 업데이트를 실행한다!
            예컨데 컴포넌트 내부에 사용한 경우 컴포넌트가 업데이트 됨!
        4) 사용결과
            - 별도의 메서드 호출없이 후크 상태변수를 사용한 곳이
            자동으로 변경될대마다 다시 갱신되는 것을 확인 할 수 있다!

        -> 뷰JS의 리액티브 데이터와 매우 유사함!

*****************************************************************/






















