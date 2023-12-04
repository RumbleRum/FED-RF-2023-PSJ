// 서브 페이지상단영역 컴포넌트
// GNB 데이터

// 서브 CSS 경로
import "../../css/sub_main.css";
import "../../css/sub.css";


///////// 서브 상단 영역 //////////////////////////////
export function SubTopArea(){
    return(
      <>
            <div id="header">
              <header className="header gnb">
                  <div className="flex-box">
                      <div className="t1 partbox col-1">
                            <img src="./images/Expedia New 2023.png" alt="로교"/>
                      </div>
                      <div className="t2 partbox col-1 hom">
                          <h1><a href="#">
                            <i className="fa-solid fa-house"></i>
                            Home
                        </a></h1>
                      </div>
                      <div className="partbox col-7"></div>
                      <div className="t2 partbox col-1 br">
                          <h1><a href="#">HILTON</a></h1>
                      </div>
                      <div className="t2 partbox col-1 br">
                          <h1><a href="#">CROCKFORDS</a></h1>
                      </div>
                      <div className="t2 partbox col-1">
                          <h1><a href="#">CONRAD</a></h1>
                      </div>
                  </div>
              </header>
          </div>
      </>
    )
}

