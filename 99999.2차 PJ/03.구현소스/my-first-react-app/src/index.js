////////// 메인 JS /////////////////////////

import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
// 제이쿼리
// import $ from 'jquery';
// import 'jquery-ui-dist/jquery-ui';

// 메인 css
import "./css/main.css";
import { MainPage } from "./components/pages/MainPage";
import { SubPage } from "./components/pages/SubPage";
import { Gaip } from "./components/pages/Gaip";
import { Login } from "./components/pages/Login";
import { SubPage_HT } from "./components/pages/SubPage_HT";
import { SubPage_Con } from "./components/pages/SubPage_Con";
import { HotelApp } from "./components/pages/HotelApp";

function App() {
    const [pgName, setPgName] = useState("main");

    const chgPage = (pg) => {
        setPgName(pg);
        console.log(pgName);
    };

    // 리턴 코드 ////////////////////
    return (
        <>
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
                    <HotelApp chgPg={chgPage} />
                ) : (
                    <MainPage chgPg={chgPage} />
                )}
            </div>
        </>
    );
}

// 컴포넌트 출력 //////////
const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<App />);
