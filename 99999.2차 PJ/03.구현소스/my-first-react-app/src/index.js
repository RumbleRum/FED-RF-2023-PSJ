////////// 메인 JS /////////////////////////

import React from 'react';
import ReactDOM from "react-dom/client";
// 제이쿼리 
import $ from 'jquery';
import 'jquery-ui-dist/jquery-ui';
import { TopArea } from './components/layout/TopArea';

// 메인 css
import './css/main.css';



function App(){
  return(
    <TopArea />
  )
}





// 컴포넌트 출력 //////////
const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<App />);