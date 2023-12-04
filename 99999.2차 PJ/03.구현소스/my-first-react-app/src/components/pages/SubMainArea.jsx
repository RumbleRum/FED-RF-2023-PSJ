//// 서브 메인 영역 /////////////////////////////////////

// 서브 CSS 경로
import "../../css/sub_main.css";
import "../../css/sub.css";



///////// 서브 메인 영역 //////////////////////////////
export function SubMainArea(){
    return(
      <>
           {/* <!-- 서브 1페이지 -->  */}
           <section class="main inbox">
                    <div class="ep ep1">
                        <div class="flex-box">
                            <div class="col-12 ep1-1"></div>
                            <div class="partbox col-12 ep1-2"></div>
                            <div class="partbox col-12 ep1-2">
                                <h1>Crockfords</h1>
                            </div>
                            <div class="partbox col-12 ep1-3">
                                <h1>AT RESORTS WORLD LAS VEGAS</h1>
                            </div>
                        </div>
                    </div>
                </section>

            {/* <!-- 서브 2페이지 -->  */}
                <section class="main inbox">
                    <div class="ep ep2">
                        <div class="flex-box">
                            <div class="partbox col-6 ep2-1">
                                <h1>CROCKFORDS LAS VEGAS,</h1>
                                <h1>LXR HOTELS & RESORTS</h1>
                                <span>represents</span>
                                <span>a new</span>
                                <img src="./images/sub/ssub1.jpg" alt="서브" />
                            </div>
                        <div class="partbox col-6 ep2-2"></div>
                      </div>
                    </div>
                </section>

            {/* <!-- 서브 3페이지 -->  */}
                <section class="main inbox">
                    <div class="ep ep3">
                            <div class="partbox col-12 ep3-1">
                                <h1><br /><br /><br />standard for luxury</h1>
                                <h1>accommodations,</h1>
                                <h1>service and gaming.</h1>
                            </div>
                        </div>
                    </section>
                    <section class="main inbox">
                        <div class="ep ep3-11">
                            <div class="partbox col-12 ep3-2"></div>
                            </div>
                        </section>


                 {/* <!-- 서브 4페이지 -->  */}
                 <section class="main inbox">
                    <div class="ep ep4">
                        <div class="flex-box">
                            <div class="partbox col-6 ep4-1">
                                <h1>Rooms</h1>
                                <h2>5 room categories</h2>
                                <span><br /><br />OFFERING ARGUABLY THE BEST VIEWS IN LAS VEGAS,</span>
                                <span>EXPERIENCE A NEW STANDARD FOR LUXURY OVERLOOKING</span>
                                <span>THE WORLD-FAMOUS STRIP.</span>
                            </div>
                        <div class="partbox col-6 ep4-2"></div>
                      </div>
                    </div>
                </section>

                 {/* <!-- 서브 5페이지 -->  */}
                 <section class="main inbox">
                    <div class="ep ep5">
                        <div class="flex-box">
                        <div class="partbox col-12 ep5-1">
                            <h1>You might also</h1>
                        </div>
                        <div class="partbox col-6 ep5-2">
                            <img src="./images/sub/ssub6.jpg" alt="기타" />
                        </div>
                        <div class="partbox col-6 ep5-2-2">
                            <img src="./images/sub/ssub5.jpg" alt="기타" />
                        </div>
                        <div class="partbox col-6 ep5-3"></div>
                        <div class="partbox col-6 ep5-3-3"></div>
                        <div class="partbox col-12 ep5-4">
                            <h1>want to visit</h1>
                        </div>
                        <div class="partbox col-3 ep6-4">
                            <h1>© 2023 Expedia, Inc., an expedia group company. All Rights Reserved</h1>
                        </div>
                        <div class="partbox col-5 ep6-4">
                            <h1>
                                <i class="fa-brands fa-facebook-f"></i>
                                <i class="fa-brands fa-tiktok"></i>
                                <i class="fa-brands fa-instagram"></i>
                            </h1>
                        </div>
                        <div class="partbox col-1 ep6-4">
                            <h1>Privacy Policy</h1>
                        </div>
                        <div class="partbox col-1 ep6-4">
                            <h1>Terms of Use</h1>
                        </div>
                        <div class="partbox col-2 ep6-4">
                            <h1>Do not sell my personal information</h1>
                        </div>
                      </div>
                    </div>
                </section>

      </>
    )
}
