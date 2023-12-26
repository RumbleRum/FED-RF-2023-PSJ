// 회원가입 페이지 컴포넌트


// 회원가입 CSS 
import "../../css/member.css";

import { Link } from "react-router-dom";
import { useContext, useState } from "react";

// 로컬스토리지 생성 JS
import { initData } from "../func/mem_fn";

export function Gaip() {

  

  // [ 상태관리변수 ] /////////
  // [1] 입력요소 상태변수 /////////
  // 1. 아이디변수
  const [userId, setUserId] = useState("");
  // 2. 비밀번호변수
  const [pwd, setPwd] = useState("");
  // 3. 비밀번호확인변수
  const [chkPwd, setChkPwd] = useState("");
  // 4. 사용자이름변수
  const [userName, setUserName] = useState("");
  // 5. 이메일변수
  const [email, setEmail] = useState("");

  // [2] 에러상태관리 변수
  // 1. 아이디변수
  const [userIdError, setUserIdError] = useState(false);
  // 2. 비밀번호변수
  const [pwdError, setPwdError] = useState(false);
  // 3. 비밀번호확인변수
  const [chkPwdError, setChkPwdError] = useState(false);
  // 4. 사용자이름변수
  const [userNameError, setUserNameError] = useState(false);
  // 5. 이메일변수
  const [emailError, setEmailError] = useState(false);


    // 아이디 메시지
  const msgId = [
    "아이디는 5~12글자 내로 입력해주세요",
    "이미 사용중인 아이디 입니다!",
    "가입이 가능한 아이디 입니다!",
  ];

  
  // 기타에러메시지
  const msgEtc = {
    // 비밀번호
    pwd: "특수문자, 문자, 숫자 형태의 5~15자리 내로 입력해주세요",
    // 비밀번호확인
    confPwd: "비밀번호가 일치하지 않습니다",
    // 필수입력
    req: "필수 입력 항목입니다",
    // 이메일
    email: "올바른 이메일 형식을 입력하세요",
  }; ///// msgEtc ///////

  // [3] 에러메시지 상태변수
  const [idMsg, setIdMsg] = useState(msgId[0]);





  /////////////////////////////////////////
  // [ 유효성 검사 함수 ] //////////////////////////////////////////
  // 1. 아이디 유효성 검사 ///////////
  const changeUserId = (e) => {
    // 1. 아이디 유효성 검사식
    const valid = /^[A-Za-z0-9+]{5,}$/;

    if (valid.test(e.target.value)) {
      // 1.사용중 아이디인지 검사
      // 로컬스토리지 체크함수호출
      initData();

      // 1. 로컬스 변수할당
      let memData = localStorage.getItem("mem-data");

      // 2. 로컬스 객체변환
      memData = JSON.parse(memData);

      // 3. 기존 아이디가 있으면 상태값 false로 업데이트
      let isOK = true;

      // 4. 검사돌리기
      memData.forEach(v=>{
        // 기존아이디와 같은 경우
        if(v.uid===e.target.value){
            // 메시지변경
            setIdMsg(msgId[1]);
            // 아이디에러상태값 업데이트
            setUserIdError(true);
            // 존재여부 업데이트
            isOK = false;
        } ////// if ////////
      }); /////// forEach /////////

      // 5.최종통과시 결과
      if(isOK){
        // 메시지변경
        setIdMsg(msgId[0]);
        // 아이디에러상태값 업데이트
        setUserIdError(false);
      } ////// if /////////////

    } //////////////// if ////////////////
    // 에러일때 ////////////
    else {
      setUserIdError(true);
    } /////////////// else ///////////////

    setUserId(e.target.value);
  }; ///////// changeUserId  //////////




  // 2. 비밀번호 유효성 검사 ///////////
  const changePwd = (e) => {
    // 1. 비밀번호 유효성 검사식
    const valid = /^.*(?=^.{5,15}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$/;


    if (valid.test(e.target.value)) setPwdError(false);
    else setPwdError(true);

    // 4. 기존입력값 반영하기
    setPwd(e.target.value);
  }; ///////// changeUserId 함수 //////////



  // 3. 비밀번호확인 유효성 검사 ///////////
  const changeChkPwd = (e) => {
    // 1. 비밀번호 입력내용과 일치여부 확인
    if (pwd === e.target.value) setChkPwdError(false);
    else setChkPwdError(true);

    // 2. 기존입력값 반영하기
    setChkPwd(e.target.value);
  }; ///////// changeUserId 함수 //////////



  // 4. 사용자이름 유효성 검사 ///////////
  const changeUserName = (e) => {
    // 1. 빈값체크
    if (e.target.value !== "") setUserNameError(false);
    else setUserNameError(true);

    // 2. 기존입력값 반영하기
    setUserName(e.target.value);
  }; ///////// changeUserId 함수 //////////




  // 5. 이메일 유효성 검사 ///////////
  const changeEmail = (e) => {
    // 1. 이메일 유효성 검사식
    const valid =
      /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;

    // 3. 에러에 따른 상태값 변경
    if (valid.test(e.target.value)) setEmailError(false);
    else setEmailError(true);

    // 4. 기존입력값 반영하기
    setEmail(e.target.value);
  }; ///////// changeUserId 함수 //////////





  // [ 전체 유효성검사 체크함수 ] ///////////
  const totalValid = () => {
    // 1. 모든 상태변수에 빈값일때 에러상태값 업데이트
    if (!userId) setUserIdError(true);
    if (!pwd) setPwdError(true);
    if (!chkPwd) setChkPwdError(true);
    if (!userName) setUserNameError(true);
    if (!email) setEmailError(true);

    // 2. 통과시 true, 불통과시 false 리턴처리
    if (
      userId &&
      pwd &&
      chkPwd &&
      userName &&
      email &&
      !userIdError &&
      !pwdError &&
      !chkPwdError &&
      !userNameError &&
      !emailError
    )
      return true;
    else return false;
  }; /////////// totalValid 함수 ///////////




  // [ 서브밋 기능함수 ] /////////////////
  const onSubmit = (e) => {
    // 1. 서브밋 기본이동 막기
    e.preventDefault();
    // 2. 유효성 검사 전체통과시
    if (totalValid()) {

      // 로컬스토리지 체크함수호출
      initData();

      // 1. 로컬스 변수할당
      let memData = localStorage.getItem("mem-data");

      // 2. 로컬스 객체변환
      memData = JSON.parse(memData);

      // 3. 새로운 데이터 구성하기
      let newData = {
        idx: memData.length + 1,
        uid: userId,
        pwd: pwd,
        unm: userName,
        eml: email,
      };

      // 4. 데이터 추가하기 : 배열에 데이터추가 push()
      memData.push(newData);

      // 5. 로컬스에 반영하기
      localStorage.setItem("mem-data", JSON.stringify(memData));

      // 6. 버튼 텍스트변경
      document.querySelector(".sbtn").innerText = 
      "회원 가입을 축하합니다~!!^^";

      // 7. 페이지 이동 : 로그인페이지로!
      setTimeout(()=>
        myCon.chgPage('login',{})
      ,1000);

    } ///////// if ////////
    // 3. 불통과시
    else {
      alert("입력하신 내용을 변경해주세요!");
    }
  }; /////////// onSubmit 함수 //////////////




  // 리턴 코드 ///////////////////
  return (
    <div className="outbx">
      {/* 회원가입 모듈코드 */}
      <section className="membx">
        <h2>Wellcome Join Us</h2>
        <form action="process.php" method="post">
          <ul>
            <li>
              {/* 1.아이디 */}
              <label>아이디 : </label>
              <input
                type="text"
                maxLength="20"
                placeholder="회원님의 아이디를 입력해 주세요"
                value={userId}
                onChange={changeUserId}
              />
              {
                // 에러시 메시지출력
                userIdError && (
                  <div className="msg">
                    <small
                      style={{
                        color: "red",
                        fontSize: "10px",
                      }}
                    >
                      {idMsg}
                    </small>
                  </div>
                )
              }
    
              {
                // 통과시 출력
                !userIdError && userId && (
                  <div className="msg">
                    <small
                      style={{
                        color: "green",
                        fontSize: "10px",
                      }}
                    >
                      {msgId[2]}
                    </small>
                  </div>
                )
              }
            </li>
            <li>
              {/* 2.비밀번호 */}
              <label>비밀번호 : </label>
              <input
                type="password"
                maxLength="20"
                placeholder="회원님의 비밀번호를 입력해 주세요"
                value={pwd}
                onChange={changePwd}
              />
              {
                // 에러시 메시지출력
                pwdError && (
                  <div className="msg">
                    <small
                      style={{
                        color: "red",
                        fontSize: "10px",
                      }}
                    >
                      {msgEtc.pwd}
                    </small>
                  </div>
                )
              }
            </li>
            <li>
              {/* 3.비밀번호확인 */}
              <label>비밀번호 재확인 : </label>
              <input
                type="password"
                maxLength="20"
                placeholder="회원님의 비밀번호를 다시 입력해 주세요"
                value={chkPwd}
                onChange={changeChkPwd}
              />
              {
                // 에러시 메시지출력
                chkPwdError && (
                  <div className="msg">
                    <small
                      style={{
                        color: "red",
                        fontSize: "10px",
                      }}
                    >
                      {msgEtc.confPwd}
                    </small>
                  </div>
                )
              }
            </li>
            <li>
              {/* 4.이름 */}
              <label>이름 : </label>
              <input
                type="text"
                maxLength="20"
                placeholder="이름을 입력해 주세요"
                value={userName}
                onChange={changeUserName}
              />

              {
                // 에러시 메시지출력
                userNameError && (
                  <div className="msg">
                    <small
                      style={{
                        color: "red",
                        fontSize: "10px",
                      }}
                    >
                      {msgEtc.req}
                    </small>
                  </div>
                )
              }
            </li>
            <li>
              {/* 5.이메일 */}
              <label>본인 확인 이메일 : </label>
              <input
                type="text"
                maxLength="50"
                placeholder="Email주소를 입력해 주세요"
                value={email}
                onChange={changeEmail}
              />
              {
                // 에러시 메시지출력
                emailError && (
                  <div className="msg">
                    <small
                      style={{
                        color: "red",
                        fontSize: "10px",
                      }}
                    >
                      {msgEtc.email}
                    </small>
                  </div>
                )
              }
            </li>
            <li style={{ overflow: "hidden" }}>
              {/* 6.버튼 */}
              <button className="sbtn" onClick={onSubmit}>
                가입요청
              </button>
            </li>
            <li>
              {/* 7. 로그인 페이지링크 */}
              혹시 이전에 회원에 가입하셨나요?
              <Link to="/login">  로그인하기</Link>
            </li>
          </ul>
        </form>
      </section>
    </div>
  );
} //////////// Member 컴포넌트 ////////////////