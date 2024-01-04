// 서브 페이지상단영역 컴포넌트
// GNB 데이터

import { useLayoutEffect } from "react";
import $ from "jquery";

import { faPlane } from "@fortawesome/free-solid-svg-icons";
import { faHouseChimney } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

///////// 서브 상단 영역 //////////////////////////////
export function SubTopArea({ chgPg }) {
    useLayoutEffect(() => {
        $(".ap1").css({
            background: "#000 url(./images/sub/thum.jpg) no-repeat top/100%",
        });

        $(".sub-header").css({ top: "-60px" }).delay(2000).animate({ top: "0" }, 1500);

        $(".move-txt").delay(1500).animate({ top: "200px", opacity: 1 }, 1500);
    });

    return (
        <>
            <div id="header" className="sub-header">
                <header className="header gnb">
                    <div className="flex-box">
                        <div className="t11 partbox col-1">
                            <img src="./images/Expedia New 2023.png" alt="로교" />
                        </div>
                        <div className="t22 partbox col-1 hom2">
                            <h1>
                                <a href="#" onClick={() => chgPg("main")}>
                                    Home
                                </a>
                            </h1>
                        </div>
                        <div className="partbox col-7">
                        </div>
                        <div className="t22 partbox col-1 br2">
                            <h1>
                                <a href="#" onClick={() => chgPg("sub2")}>
                                    HILTON
                                </a>
                            </h1>
                        </div>
                        <div className="t22 partbox col-1 br2">
                            <h1>
                                <a href="#" onClick={() => chgPg("sub")}>
                                    CROCKFORDS
                                </a>
                            </h1>
                        </div>
                        <div className="t22 partbox col-1">
                            <h1>
                                <a href="#" onClick={() => chgPg("sub")}>
                                    CONRAD
                                </a>
                            </h1>
                        </div>
                    </div>
                </header>
            </div>
        </>
    );
}
