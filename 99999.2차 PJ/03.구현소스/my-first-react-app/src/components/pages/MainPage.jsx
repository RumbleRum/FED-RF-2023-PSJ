

// 메인 css
import "../../css/main.css";

// 상단메뉴
import { TopArea } from "../layout/TopArea";

// 메인 부분
import { MainArea1 } from "../layout/MainArea_1";
import { MainArea2 } from "../layout/MainArea_2";
import { MainArea3 } from "../layout/MainArea_3";
import { MainArea4 } from "../layout/MainArea_4";
import { MainArea5 } from "../layout/MainArea_5";
import { MainArea6 } from "../layout/MainArea_6";
import { MainArea7 } from "../layout/MainArea_7";
import { MainArea8 } from "../layout/MainArea_8";
import { MainArea9 } from "../layout/MainArea_9";

import { wheelFn, initWnum } from "../../components/func/jquery-HrScroll2";
import { useEffect } from "react";


export function MainPage({chgPg}) {
    
      useEffect(() => {
        document.querySelector(".wrap").addEventListener("wheel", wheelFn);
        // 휠이동값 초기화함수 호출
        initWnum();
        
        return(()=>{
          if(document.querySelector(".wrap"))
            document.querySelector(".wrap").removeEventListener("wheel", wheelFn);
        });
      }, []);

  return (
    <>
      <div id="main">
        <TopArea chgPg={chgPg} />
        <MainArea1 />
        <MainArea2 />
        <MainArea3 />
        <MainArea4 />
        <MainArea5 />
        <MainArea6 />
        <MainArea7 />
        <MainArea8 />
        <MainArea9 />
      </div>
    </>
  );
}
