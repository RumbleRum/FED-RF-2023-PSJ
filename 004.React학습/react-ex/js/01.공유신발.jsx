// 01.공유신발 JSX
import myData from './data.js';
import myData2 from './data2.js';

// JS기능함수
import { initFn,firstOneFn } from './act_effect.js';

// 두개의 데이터를 배열로 구성
const twoData = [myData,myData2];

// console.log(twoData);

// console.log('여성의류',myData2);

// 메인 컴포넌트 /////////////////
// 메인의 의미는? 다른 구성요소 컴포넌트들을 모아
// 최종적으로 랜더링하는 구성 컴포넌트를 말한다!
function MainComponent(){

    // 상태관리 메서드를 사용하여 후크변수를 설정하자!
    // const [변수명,set변수명] = React.useState(초기값)    
    // dataNum은 데이터를 구분하는 번호저장 후크변수다!
    // 데이터 구분값으로 배열 순번을 생각하여 처음에 로딩될 
    // 데이터가 0번째 즉 첫번째 배열순번 데이터를 불러올 순번값으로 셋팅한다!
    const [dataNum,setDataNum] = React.useState(0);
    
    // 테스트 후크상태변수
    const [test,setTest] = React.useState(0);
    
    console.log('초기값',dataNum);

    // 가상돔에서 실제 돔에 반영 후 DOM에 구현할 JS코드는 어디에 넣어야되나?
    // ->> useEffect()
    // ->> useLayoutEffect()

    console.log('컴포넌트 그냥규욕',
        document.querySelector('.img-box'));

////////////////////////////////////////////////////////////////////
// [ 리액트 컴포넌트 랜더링 후 실행함수 호출하기]//////////////////////
////////////////////////////////////////////////////////////////////       
    // [ 컴포넌트가 뿌려지기 애니메이션 적용하기 ]
    React.useLayoutEffect(initFn);

    // 처음 한번만 타이틀 글자 커졌다가 작아지기
    React.useEffect(firstOneFn,[]);
//////////////////////////////////////////////////////////////////////////////////



        //[ useEffect 테스트 코드 ] ////////////////////
        // -> 페이지 로딩후 >> 매법 업데이트 시에도 실행함!!
        React.useEffect(()=>{
            console.log('useEffect순수');
            // console.log('useEffect순수구욕 JS',
            //     document.querySelector('.img-box'));

            // console.log('useEffect순수구욕 제이쿼리',
            //     $('.img-box'));

            }); ////////////////////////////////////////////


    // 빈 배열옵션 useEffect
    // -> 페이지 로딩후 >> 단 한번만 실행함 
    React.useEffect(()=>{
        console.log('useEffect 빈배열 JS');             
    },[]); ////////////////////////////////////////////

    // 의존성 배열옵션 useEffect
    // -> 페이지 로딩후 >> 단 한번만 실행함 
    React.useEffect(()=>{
        console.log('useEffect 의존성 배열옵션 test');             
    },[test]); ////////////////////////////////////////////

    React.useEffect(()=>{
        console.log('useEffect 의존성 배열옵션 dataNum');             
    },[dataNum]); ////////////////////////////////////////////
    // 의존성이 다수일 경우 배열형태의 옵션에
    // 콤마로 연결하여 등록해준다!
            
    // 랜더링 후 화면 출력전 상태
    React.useLayoutEffect(()=>{
        console.log('useLayoutEffect구욕 JS')
    });


    // 의존성 테스트 함수 ////
    const testFn = () => {
        setTest(test?0:1);
        console.log('test 후크변수 변경',test);
    }; //// testFn //////////

    // 데이터 변경 호출 함수 /////////////////
    const chgData = () => {
        console.log('바꿔~!');
        // 데이터 키 후크변수를 업데이트 함
        setDataNum(dataNum?0:1);
        // 업데이트 값 호출
        console.log(dataNum);  
    }; ///// chgData ////////////

    // 최종 리턴 코드 ///////////////////////////
    // 함수 , 변수 , 구현소스는 모두 return 위쪽에 코딩!
    return(
        <React.Fragment>
            {/* 1. 타이틀 */}
            <h1 className="tit">{dataNum?'효진이 입고':'공유가 신고'} 다닌다는!</h1>
            {/* 2. 내용박스 */}
            <section>
                <h2>{dataNum?"어머나어마나이러지마":"공유는 오늘도 멋찝니다!"}</h2>
                {/* 이미지 */}
                <div className="img-box">
                    <img src={dataNum?"./images/vans/hyo.jpg":"./images/vans/gongyoo.jpg"} alt="멋진공유" />
                </div>
            </section>
            {/* 3. 데이터 변경 버튼 */}
            {/* <button onClick = {()=>chgData();ccc();bbb();} className = "btn-gong"> */}
            <button onClick = {chgData} className = "btn-gong">
                {dataNum?"공유초이스 바로가기":"효진초이스 바로가기"}
            </button>
            <button onClick={testFn}>의존성테스트</button>
            {/* 4. 상품리스트박스 */}
            <div className="gwrap">
                <GoodsCode idx={dataNum} />
            </div>
        </React.Fragment>
    );

}; /////////// MainComponent //////////////////


// console.log(myData);

// 서브 컴포넌트(자식컴포넌트 -> 부모컴포넌트로 부터 데이터를
// props 속성을 통하여 전달 받는다!)
// 상품 html 코드 구성 컴포넌트 /////////////////////
function GoodsCode(props){ // idx - 데이터 배열순번
    console.log(props.idx);
    // 선택 데이터
    const selData = twoData[props.idx];
    return selData.map((v)=> (
        <ol class="glist">
            <li>
                <img src={
                    props.idx?
                    "./images/gallery/" + v.idx + ".jpg":
                    "./images/vans/vans_" + v.idx + ".jpg"
                } alt={props.idx?"드레스":"신발"} />
            </li>
            <li>{v.gname}</li>
            <li>가격: {v.gprice}원</li>
        </ol>
        ));

}; /////////// GoodsCode //////////////////



// 메인 컴포넌트 출력하기 ////////////////////////
ReactDOM.render(<MainComponent/>,document.querySelector('#root'));






























