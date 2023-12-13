// 상단영역 컴포넌트
// GNB 데이터

// 제이쿼리
import $ from "jquery";
import "jquery-ui-dist/jquery-ui";
import { useEffect } from "react";

import { faPlane } from "@fortawesome/free-solid-svg-icons";
import { faHouseChimney } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//////////////// 상단영역 //////////////////////////////////////
export function TopArea({ chgPg }) {
  useEffect(() => {
    
  }, []);

  const goSub = (e) => {
    let tg = e.currentTarget;
    let txt = tg.innerText;
    console.log(txt);
    if (txt === "HILTON"||txt==="CROCKFORDS"||txt==="CONRAD") {
      $(tg)
        .siblings(".nail")
        .css({
          transform: "none",
        })
        .animate(
          {
            width: "100vw",
            top: "0",
            left: "0",
            marginLeft: "0",
          },
          2000,
          () => {
            setTimeout(() => {
              chgPg("sub");
            }, 1000);
          }
        )
        .parent()
        .addClass("on");
    }

    // 홈버튼클릭
    if (txt === "Home") chgPg("main");
  }; 

  return (
    <>
      <div id="header1">
        <header className="header gnb">
          <div className="flex-box">
            <div className="t1 partbox col-1 lgo">
              <img src="./images/mainlogo1.png" alt="로고" />
              <h1>Expedia</h1>
            </div>
            <div className="t2 partbox col-1 hom">
              <h1>
                <FontAwesomeIcon icon={faHouseChimney} />
                <a href="#" onClick={goSub}>
                  Home
                </a>
              </h1>
            </div>
            <div className="partbox col-7">
            <FontAwesomeIcon 
            className="plane"
            icon={faPlane} 
            />
            </div>
            <div className="t2 partbox col-1 br tr">
              <h1>
                <a href="#" onClick={goSub}>
                  HILTON
                </a>
                <div className="nail">
                  <img src="./images/sub/thum2.jpg" alt="썸네일" />
                </div>
              </h1>
            </div>
            <div className="t2 partbox col-1 br tr">
              <h1>
                <a href="#" onClick={goSub}>
                  CROCKFORDS
                </a>
                <div className="nail">
                  <img src="./images/sub/thum.jpg" alt="썸네일" />
                </div>
              </h1>
            </div>
            <div className="t2 partbox col-1 tr">
              <h1>
                <a href="#" onClick={goSub}>CONRAD</a>
                <div className="nail">
                  <img src="./images/sub/thum3.jpg" alt="썸네일" />
                </div>
              </h1>
            </div>
          </div>
        </header>
      </div>
    </>
  );
}
