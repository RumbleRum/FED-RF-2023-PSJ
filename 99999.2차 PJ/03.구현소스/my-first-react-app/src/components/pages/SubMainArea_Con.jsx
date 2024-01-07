//// 서브 메인 영역 /////////////////////////////////////

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTiktok } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";

///////// 서브 메인 영역 //////////////////////////////
export function SubMainArea_Con() {
    return (
        <>
            {/* <!-- 서브 1페이지 -->  */}
            <section className="main inbox3 sub3">
                <div className="cp cp1">
                    <div className="flex-box">
                        <div className="col-12 cp1-1"></div>
                        <div className="partbox col-12 cp1-2"></div>
                        <div className="partbox col-12 cp1-2 move-txt3">
                            <h1>Conrad</h1>
                        </div>
                        <div className="partbox col-12 cp1-3">
                            <h1>AT RESORTS WORLD LAS VEGAS</h1>
                        </div>
                    </div>
                </div>
            </section>

            {/* <!-- 서브 2페이지 -->  */}
            <section className="main inbox3 sub3">
                <div className="cp cp2">
                    <div className="flex-box">
                        <div className="partbox col-6 cp2-1">
                            <h1>welcome</h1>
                            <h1>to the</h1>
                            <span>largest Conrad</span>
                            <span>in the world.</span>
                            <img src="./images/sub/ssub1.jpg" alt="서브" />
                        </div>
                        <div className="partbox col-6 cp2-2"></div>
                    </div>
                </div>
            </section>

            {/* <!-- 서브 3페이지 -->  */}
            <section className="main inbox3 sub3">
                <div className="cp cp3">
                    <div className="partbox col-12 cp3-1">
                        <h1>
                            <br />
                            <br />
                            <br />
                            5 outdoor pools,
                        </h1>
                        <h1>Michelin-starred</h1>
                        <h1>OTHER HIGHLIGHTS AT THIS</h1>
                        <h1>HOTEL INCLUDE</h1>
                    </div>
                </div>
            </section>
            <section className="main inbox3 sub3">
                <div className="cp cp3-11">
                    <div className="partbox col-12 cp3-2"></div>
                </div>
            </section>

            {/* <!-- 서브 4페이지 -->  */}
            <section className="main inbox3 sub3">
                <div className="cp cp4">
                    <div className="flex-box">
                        <div className="partbox col-6 cp4-1">
                            <h1>Rooms</h1>
                            <h2>Room for all</h2>
                            <span>
                                <br />
                                <br />
                                FEATURING PREMIUM ROOMS, SWANKY SUITES AND ACCESSIBLE OPTIONS, ALL ROOMS OFFER A PRIVATE RECEPTION, VIP CHECK-IN AND DIGITAL KEYS.
                            </span>
                            <span>라스베가스의 최고에 전망이 보이는 객실내부는</span>
                            <span>고객님들에게 최고의 경험을 선사할 것입니다.</span>
                            <img src="./images/sub/htt1.jpg" alt="축배" />
                        </div>
                        <div className="partbox col-6 cp4-2"></div>
                    </div>
                </div>
            </section>

            {/* <!-- 서브 5페이지 -->  */}
            <section className="main inbox3 sub3">
                <div className="cp cp5">
                    <div className="flex-box">
                        <div className="partbox col-12 cp5-1">
                            <h1>You might also</h1>
                        </div>
                        <div className="partbox col-6 cp5-2">
                            <img src="./images/sub/ssub6.jpg" alt="기타" />
                        </div>
                        <div className="partbox col-6 cp5-2-2">
                            <img src="./images/sub/ssub5.jpg" alt="기타" />
                        </div>
                        <div className="partbox col-6 cp5-3"></div>
                        <div className="partbox col-6 cp5-3-3"></div>
                        <div className="partbox col-12 cp5-4">
                            <h1>want to visit</h1>
                        </div>
                        <div className="partbox col-3 cp6-4">
                            <h1>© 2023 Expedia, Inc., an expedia group company. All Rights Reserved</h1>
                        </div>
                        <div className="partbox col-5 cp6-4">
                            <h1>
                                <FontAwesomeIcon icon={faTiktok} fontSize={"25px"} className="fam3" />
                                <FontAwesomeIcon icon={faInstagram} fontSize={"25px"} className="fam3" />
                                <FontAwesomeIcon icon={faYoutube} fontSize={"25px"} className="fam3" />
                            </h1>
                        </div>
                        <div className="partbox col-1 cp6-4">
                            <h1>Privacy Policy</h1>
                        </div>
                        <div className="partbox col-1 cp6-4">
                            <h1>Terms of Use</h1>
                        </div>
                        <div className="partbox col-2 cp6-4">
                            <h1>Do not sell my personal information</h1>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
