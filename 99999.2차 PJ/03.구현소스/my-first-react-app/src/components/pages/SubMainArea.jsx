//// 서브 메인 영역 /////////////////////////////////////

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTiktok } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";

///////// 서브 메인 영역 //////////////////////////////
export function SubMainArea() {
    return (
        <>
            {/* <!-- 서브 1페이지 -->  */}
            <section className="main inbox1 sub">
                <div className="ap ap1">
                    <div className="flex-box">
                        <div className="col-12 ap1-1"></div>
                        <div className="partbox col-12 ap1-2"></div>
                        <div className="partbox col-12 ap1-2 move-txt">
                            <h1>Crockfords</h1>
                        </div>
                        <div className="partbox col-12 ap1-3">
                            <h1>AT RESORTS WORLD LAS VEGAS</h1>
                        </div>
                    </div>
                </div>
            </section>

            {/* <!-- 서브 2페이지 -->  */}
            <section className="main inbox1 sub">
                <div className="ap ap2">
                    <div className="flex-box">
                        <div className="partbox col-6 ap2-1">
                            <h1>CROCKFORDS LAS VEGAS,</h1>
                            <h1>LXR HOTELS & RESORTS</h1>
                            <span>represents</span>
                            <span>a new</span>
                            <img src="./images/sub/ssub1.jpg" alt="서브" />
                        </div>
                        <div className="partbox col-6 ap2-2"></div>
                    </div>
                </div>
            </section>

            {/* <!-- 서브 3페이지 -->  */}
            <section className="main inbox1 sub">
                <div className="ap ap3">
                    <div className="partbox col-12 ap3-1">
                        <h1>
                            <br />
                            <br />
                            <br />
                            standard for luxury
                        </h1>
                        <h1>accommodations,</h1>
                        <h1>service and gaming.</h1>
                    </div>
                </div>
            </section>
            <section className="main inbox1 sub">
                <div className="ap ap3-11">
                    <div className="partbox col-12 ap3-2"></div>
                </div>
            </section>

            {/* <!-- 서브 4페이지 -->  */}
            <section className="main inbox1 sub">
                <div className="ap ap4">
                    <div className="flex-box">
                        <div className="partbox col-6 ap4-1">
                            <h1>Rooms</h1>
                            <h2>5 room categories</h2>
                            <span>
                                <br />
                                <br />
                                OFFERING ARGUABLY THE BEST VIEWS IN LAS VEGAS,
                            </span>
                            <span>EXPERIENCE A NEW STANDARD FOR LUXURY OVERLOOKING</span>
                            <span>THE WORLD-FAMOUS STRIP.</span>
                            <img src="./images/sub/htt1.jpg" alt="축배" />
                        </div>
                        <div className="partbox col-6 ap4-2"></div>
                    </div>
                </div>
            </section>

            {/* <!-- 서브 5페이지 -->  */}
            <section className="main inbox1 sub">
                <div className="ap ap5">
                    <div className="flex-box">
                        <div className="partbox col-12 ap5-1">
                            <h1>You might also</h1>
                        </div>
                        <div className="partbox col-6 ap5-2">
                            <img src="./images/sub/ssub6.jpg" alt="기타" />
                        </div>
                        <div className="partbox col-6 ap5-2-2">
                            <img src="./images/sub/ssub5.jpg" alt="기타" />
                        </div>
                        <div className="partbox col-6 ap5-3"></div>
                        <div className="partbox col-6 ap5-3-3"></div>
                        <div className="partbox col-12 ap5-4">
                            <h1>want to visit</h1>
                        </div>
                        <div className="partbox col-3 ap6-4">
                            <h1>© 2023 Expedia, Inc., an expedia group company. All Rights Reserved</h1>
                        </div>
                        <div className="partbox col-5 ap6-4">
                            <h1>
                                <FontAwesomeIcon icon={faTiktok} fontSize={"25px"} className="fam" />
                                <FontAwesomeIcon icon={faInstagram} fontSize={"25px"} className="fam" />
                                <FontAwesomeIcon icon={faYoutube} fontSize={"25px"} className="fam" />
                            </h1>
                        </div>
                        <div className="partbox col-1 ap6-4">
                            <h1>Privacy Policy</h1>
                        </div>
                        <div className="partbox col-1 ap6-4">
                            <h1>Terms of Use</h1>
                        </div>
                        <div className="partbox col-2 ap6-4">
                            <h1>Do not sell my personal information</h1>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
