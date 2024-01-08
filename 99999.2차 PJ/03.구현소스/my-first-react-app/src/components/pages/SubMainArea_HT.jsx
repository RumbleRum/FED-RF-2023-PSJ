//// 서브 메인 영역 /////////////////////////////////////

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTiktok } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
 
///////// 서브 메인 영역 //////////////////////////////
export function SubMainArea_HT() {
    return ( 
        <>
            {/* <!-- 서브 1페이지 -->  */}
            <section className="main inbox2 sub2">
                <div className="bp bp1">
                    <div className="flex-box">
                        <div className="col-12 bp1-1"></div>
                        <div className="partbox col-12 bp1-2"></div>
                        <div className="partbox col-12 bp1-2 move-txt2">
                            <h1>Hilton</h1>
                        </div>
                        <div className="partbox col-12 bp1-3">
                            <h1>AT RESORTS WORLD LAS VEGAS</h1>
                        </div>
                    </div>
                </div>
            </section>

            {/* <!-- 서브 2페이지 -->  */}
            <section className="main inbox2 sub2">
                <div className="bp bp2">
                    <div className="flex-box">
                        <div className="partbox col-6 bp2-1">
                            <h1>A fusion of modern</h1>
                            <h1>design and</h1>
                            <span>classic</span>
                            <span>Hilton</span>
                            <span>service.</span>
                            <img src="./images/sub/hlt/ht3.jpg" alt="서브" />
                        </div>
                        <div className="partbox col-6 bp2-2"></div>
                    </div>
                </div>
            </section>

            {/* <!-- 서브 3페이지 -->  */}
            <section className="main inbox2 sub2">
                <div className="bp bp3">
                    <div className="partbox col-12 bp3-1">
                        <h1>
                            <br />
                            <br />
                            <br />
                            discover why we’re
                        </h1>
                        <h1>a household name</h1>
                        <h1>in hospitality.</h1>
                    </div>
                </div>
            </section>
            <section className="main inbox2 sub2">
                <div className="bp bp3-11">
                    <div className="partbox col-12 bp3-2"></div>
                </div>
            </section>

            {/* <!-- 서브 4페이지 -->  */}
            <section className="main inbox2 sub2">
                <div className="bp bp4">
                    <div className="flex-box">
                        <div className="partbox col-6 bp4-1">
                            <h1>Rooms</h1>
                            <h2>Signature service</h2>
                            <span>
                                <br />
                                <br />
                                CHOOSE FROM 1,774 ROOMS AND CITY OR STRIP VIEWS WITH THEMOST RECOGNIZED NAME IN THE HOSPITALITY INDUSTRY.
                            </span>
                            <span>라스베가스의 최고에 전망이 보이는 객실내부는 숙박 업계에서</span>
                            <span>가장 잘 알려진 이름을 지닌 1,774개의 객실과 도시 또는 스트립 전망을 제공합니다.</span>
                            <img src="./images/sub/htt1.jpg" alt="축배" />
                        </div>
                        <div className="partbox col-6 bp4-2"></div>
                    </div>
                </div>
            </section>

            {/* <!-- 서브 5페이지 -->  */}
            <section className="main inbox2 sub2">
                <div className="bp bp5">
                    <div className="flex-box">
                        <div className="partbox col-12 bp5-1">
                            <h1>You might also</h1>
                        </div>
                        <div className="partbox col-6 bp5-2">
                            <img src="./images/sub/ssub6.jpg" alt="기타" />
                        </div>
                        <div className="partbox col-6 bp5-2-2">
                            <img src="./images/sub/ssub5.jpg" alt="기타" />
                        </div>
                        <div className="partbox col-6 bp5-3"></div>
                        <div className="partbox col-6 bp5-3-3"></div>
                        <div className="partbox col-12 bp5-4">
                            <h1>want to visit</h1>
                        </div>
                        <div className="partbox col-3 bp6-4">
                            <h1>© 2023 Expedia, Inc., an expedia group company. All Rights Reserved</h1>
                        </div>
                        <div className="partbox col-5 bp6-4">
                            <h1>
                                <FontAwesomeIcon icon={faTiktok} fontSize={"25px"} className="fam2" />
                                <FontAwesomeIcon icon={faInstagram} fontSize={"25px"} className="fam2" />
                                <FontAwesomeIcon icon={faYoutube} fontSize={"25px"} className="fam2" />
                            </h1>
                        </div>
                        <div className="partbox col-1 bp6-4">
                            <h1>Privacy Policy</h1>
                        </div>
                        <div className="partbox col-1 bp6-4">
                            <h1>Terms of Use</h1>
                        </div>
                        <div className="partbox col-2 bp6-4">
                            <h1>Do not sell my personal information</h1>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
