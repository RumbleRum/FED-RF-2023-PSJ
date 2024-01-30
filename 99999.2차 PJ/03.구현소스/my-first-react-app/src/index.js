////////// 메인 JS /////////////////////////

import React, { useCallback, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
// 제이쿼리
// import $ from 'jquery';
// import 'jquery-ui-dist/jquery-ui';

// Context API 불러오기
import { dcCon } from "./components/modules/dcContext";

import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// 메인 css
import "./css/main.css";
import { MainPage } from "./components/pages/MainPage";
import { SubPage } from "./components/pages/SubPage";
import { Gaip } from "./components/pages/Gaip";
import { Login } from "./components/pages/Login";
import { SubPage_HT } from "./components/pages/SubPage_HT";
import { SubPage_Con } from "./components/pages/SubPage_Con";
import { Board } from "./components/pages/HotelApp";

import { initData } from "./components/func/mem_fn";

function App() {
    initData();

    // ********* Hook 상태관리 변수 ********* //
    // 1. 로그인 상태체크 변수 : 로컬스 'minfo'초기할당!
    const [logSts, setLogSts] = useState(localStorage.getItem("minfo"));
    // 2. 로그인 환영메시지 상태변수
    const [logMsg, setLogMsg] = useState(null);

    /////////////////////////////
    ////// 로그아웃 함수 /////////
    // -> TopArea 컴포넌트에 전달함!
    const logOut = useCallback(() => {
        // 1. 로컬스 삭제(minfo)
        localStorage.removeItem("minfo");
        // 2. 로그인 상태값 업데이트
        setLogSts(null);
        // 3. 로그인 메시지 업데이트
        setLogMsg(null);
        // 4. 첫페이지로 이동
        // chgPage('/',{});
    }, []); //////// logOut함수 //////////

    // 랜더링후 실행구역 한번만 ///////
    useEffect(() => {
        // 로그인 로컬스가 있으면 환영메시지 넣기
        if (localStorage.getItem("minfo")) {
            const minfo = JSON.parse(localStorage.getItem("minfo"));
            // 유저아이콘
            const usrIcon = ["🙍‍♂️", "🧏‍♀️", "🦸‍♂", "👨‍🎤", "🦸‍♀"];
            // 컨텍스트 API에 공개된 로그인 메시지 업데이트하기!
            setLogMsg("Welcome " + minfo.unm + usrIcon[Math.floor(Math.random() * 5)]);
        } /////// if //////////
    }, []); ////// useEffect //////////

    const [pgName, setPgName] = useState("main");

    const chgPage = (pg) => {
        setPgName(pg);
        console.log(pgName);
    };

    // 리턴 코드 ////////////////////
    return (
        <dcCon.Provider value={{ logSts, setLogSts, setLogMsg }}>
            {logMsg !== null && (
                <div
                    className="welcome"
                    style={{
                        position: "fixed",
                        top: "0",
                        left: "50%",
                        transform: "translateX(-50%)",
                        color: "white",
                        zIndex: "9999999999",
                        textShadow: "1px 0 #000,-1px 0 #000,0 1px #000,0 -1px #000",
                        display: "flex",
                        fontSize: "20px",
                    }}
                >
                    <h3>{logMsg}</h3>
                    <FontAwesomeIcon
                        icon={faArrowRightFromBracket}
                        onClick={logOut}
                        style={{
                            fontSize: "25px",
                            position: "fixed",
                            top: "2px",
                            left: "102%",
                            color: "lightgray"
                        }}
                    />
                </div>
            )}
            <div className="wrap">
                {pgName === "main" ? (
                    <MainPage chgPg={chgPage} />
                ) : pgName === "sub" ? (
                    <SubPage chgPg={chgPage} />
                ) : pgName === "sub2" ? (
                    <SubPage_HT chgPg={chgPage} />
                ) : pgName === "sub3" ? (
                    <SubPage_Con chgPg={chgPage} />
                ) : pgName === "gaip" ? (
                    <Gaip chgPg={chgPage} />
                ) : pgName === "login" ? (
                    <Login chgPg={chgPage} />
                ) : pgName === "hotel" ? (
                    <Board chgPg={chgPage} />
                ) : (
                    <MainPage chgPg={chgPage} />
                )}
            </div>
        </dcCon.Provider>
    );
}

// 컴포넌트 출력 //////////
const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<App />);
