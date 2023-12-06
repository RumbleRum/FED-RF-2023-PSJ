// 상단영역 컴포넌트
// GNB 데이터

// 제이쿼리
import $ from "jquery";
import "jquery-ui-dist/jquery-ui";
import { useEffect } from "react";

//////////////// 상단영역 //////////////////////////////////////
export function TopArea({chgPg}) {
  useEffect(() => {
    $(".gnb .tr a").mouseover((e) => {
      console.log(333, e.currentTarget);
    });

    // $(document.querySelectorAll).ready(function() {
    //     const xOffset = 10;
    //     const yOffset = 30;

    // $(document.querySelectorAll).on( "mouseover", "nail" ,function (e) {

    //     let prev = $({className:"tr"});
    //     let Img = $({src:$(this).attr("./images/sub/thum.jpg")});
    //     prev.append(Img);
    //     $("body").append(prev);

    //     $(".tr")
    //      .css("top",(e.pageY - xOffset) +"px")
    //      .css("left",(e.pageX - yOffset) +"px")
    //      .fadeIn("fast");
    //     }); // 마우스 오버시

    //     $(document.querySelectorAll).on( "mouseover", "nail" ,function (e) {
    //     $(".tr")
    //         .css("top",(e.pageY - xOffset) + "px")
    //         .css("left",(e.pageX - yOffset) + "px")
    //     });

    //     $(document.querySelector).on( "mouseover", "nail" ,function () {
    //         $(".tr").remove();
    //     });
    // });  /////  미리보기 함수
  }, []);

  return (
    <>
      <div id="header1">
        <header className="header gnb">
          <div className="flex-box">
            <div className="t1 partbox col-1">
              <img src="./images/Expedia New 2023.png" alt="로교" />
            </div>
            <div className="t2 partbox col-1 hom">
              <h1>
                <a href="#" onClick={()=>chgPg('main')}>
                  <i className="fa-solid fa-house"></i>
                  Home
                </a>
              </h1>
            </div>
            <div className="partbox col-7"></div>
            <div className="t2 partbox col-1 br tr">
              <h1>
                <a href="#" onClick={()=>chgPg('sub')}>HILTON</a>
                <div className="nail"><img src="./images/sub/thum.jpg" alt="썸네일"/></div>
              </h1>
            </div>
            <div className="t2 partbox col-1 br tr">
              <h1>
                <a href="#" onClick={()=>chgPg('sub')}>CROCKFORDS</a>
                <div className="nail"><img src="./images/sub/thum.jpg" alt="썸네일"/></div>
              </h1>
            </div>
            <div className="t2 partbox col-1 tr">
              <h1>
                <a href="#">CONRAD</a>
                <div className="nail"><img src="./images/sub/thum.jpg" alt="썸네일"/></div>
              </h1>
            </div>
          </div>
          
        </header>
      </div>
    </>
  );
}
