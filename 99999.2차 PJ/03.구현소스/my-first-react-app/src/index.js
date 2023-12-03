////////// 메인 JS /////////////////////////

import React from 'react';
import ReactDOM from "react-dom/client";
// 제이쿼리 
// import $ from 'jquery';
// import 'jquery-ui-dist/jquery-ui';

// 상단메뉴
import { TopArea } from './components/layout/TopArea';

// 메인 부분
import { MainArea1 } from './components/layout/MainArea_1';
import { MainArea2 } from './components/layout/MainArea_2';
import { MainArea3 } from './components/layout/MainArea_3';
import { MainArea4 } from './components/layout/MainArea_4';
import { MainArea5 } from './components/layout/MainArea_5';
import { MainArea6 } from './components/layout/MainArea_6';
import { MainArea7 } from './components/layout/MainArea_7';
import { MainArea8 } from './components/layout/MainArea_8';
import { MainArea9 } from './components/layout/MainArea_9';

// 메인 css
import './css/main.css';




function App(){
 
  return(
    <>
    <TopArea />
    <MainArea1 />
    <MainArea2 />
    <MainArea3 />
    <MainArea4 />
    <MainArea5 />
    <MainArea6 />
    <MainArea7 />
    <MainArea8 />
    <MainArea9 />
    </>
  )
}





// 컴포넌트 출력 //////////
const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<App />);