
// 산정보 데이터 불러오기
import { mtInfo } from "./02.sub_com/mountain";

console.log(mtInfo);

/*************************************************** 
    1. props로 데이터를 전달하여 제목출력하기
    -> props Down 으로 데이터를 하위 컴포넌트에 전달
**************************************************/

// 메인 컴포넌트 /////////////////////////////////////
function MyHome(){
    return <MyRoom aa='세계의 산' bb="🎄" />;
}

// 일반적으로 props down 할때 props 변수 하나를 써서
// 하위 (쩜찍어서) 속성으로 접근했으나 중괄호구역 즉
// 리엑트 코드구역을 쓰면 변수명을 개수만큼 직접사용가능!!
function MyRoom({cc,dd}){
    return <MyBag ee={cc} ff={dd} />;

}

function MyBag(gg,hh){
    return <MyCase ii={gg} jj={hh} />
}

function MyEnd(kk,ll){
    return <div>{kk + ll}</div>
}

// 화면 출력 ////////////////////////////////////////////
ReactDOM.render(<MyHome />, document.querySelector('#oot'));