// 서브 페이지상단영역 컴포넌트
// GNB 데이터




///////// 서브 상단 영역 //////////////////////////////
export function SubTopArea({chgPg}){
    return(
      <>
            <div id="header">
              <header className="header gnb">
                  <div className="flex-box">
                      <div className="t11 partbox col-1">
                            <img src="./images/Expedia New 2023.png" alt="로교"/>
                      </div>
                      <div className="t22 partbox col-1 hom2">
                          <h1><a href="#" onClick={()=>chgPg('main')}>
                            <i className="fa-solid fa-house"></i>
                            Home
                        </a></h1>
                      </div>
                      <div className="partbox col-7"></div>
                      <div className="t22 partbox col-1 br2">
                          <h1><a href="#" onClick={()=>chgPg('sub')}>HILTON</a></h1>
                      </div>
                      <div className="t22 partbox col-1 br2">
                          <h1><a href="#" onClick={()=>chgPg('sub')}>CROCKFORDS</a></h1>
                      </div>
                      <div className="t22 partbox col-1">
                          <h1><a href="#">CONRAD</a></h1>
                      </div>
                  </div>
              </header>
          </div>
      </>
    )
}

