// MainArea 컴포넌트

import { useEffect } from "react";

// 제이쿼리
import $ from "jquery";
import "jquery-ui-dist/jquery-ui";

// 메인 css
// import './css/main.css';

export function MainArea4() {
    

    useEffect(() => {
        const myFn = () => {
            $(".cont ul li").click((e) => {
                $(e.currentTarget).toggleClass("on").siblings().removeClass("on");
            });
        };
        myFn();
    },[]);

    // 리턴 코드 //////////////////////////
    return (
        <>
            <section className="main inbox">
                <section className="ep ep4">
                    <div className="cont">
                        <ul>
                            <li>
                            <a><img className="pc1" src="./images/hotel/hilton.png" alt="힐튼" /></a>
                                <h2 className="hdn htxt1">
                                    <span>DELUXE ROOM</span>
                                    <br />
                                    <br />
                                    <br />
                                    힐튼 리조트의 디럭스룸은 신선하고 현대적인 감각으로 <br />
                                    고객에게 특별한 환경을 제공하며
                                    맞춤형 장식, 고급 침구, 친근한 휴식 공간
                                    <br />대형 샤워실과 LED가 장착된 맞춤형 세면대를 갖춘 넓은 욕실로
                                    <br />여행객에게 럭셔리한 환경을 제공합니다<br />

                                    <br />
                                    <p>Day Price : 25$</p>
                                </h2>
                                <img className="sp1" src="./images/hotel/ht1.jpg" alt="" />
                            </li>
                            <li>
                            <a><img className="pc2" src="./images/hotel/crockfords.png" alt="크록포드" /></a>
                                <h2 className="hdn htxt2">
                                <span>STRIP VIEW DELUXE ROOM</span>
                                    <br />
                                    <br />
                                    <br />
                                    크록포드의 스트립 뷰 디럭스룸은 이 디럭스룸은 스트립의 멋진 전망을 제공하며  <br />
                                    고객에게 특별한 환경을 제공하며
                                    고급 리넨 침구, 맞춤형 장식, 편안한 휴식 공간
                                    <br /> 넓은 욕실, 대형 샤워실과 LED가 장착된 맞춤형 세면대를 갖춘 넓은 욕실로
                                    <br />여행객에게 특별한 경험을 제공합니다<br />

                                    <br />
                                    <p>Day Price : 35$</p>
                                </h2>
                                <img className="sp2" src="./images/hotel/ht2.jpg" alt="" />
                            </li>
                            <li>
                            <a><img className="pc3" src="./images/hotel/conrad.png" alt="콘라드" /></a>
                                <h2 className="hdn htxt3">
                                <span>CITY VIEW DELUXE ROOM</span>
                                    <br />
                                    <br />
                                    <br />
                                    콘라드 리조트의 시티뷰 디럭스룸은 넓은 공간과 환상적인 전망으로 <br />
                                    예약하신 특별한 고객분들에게 완벽하고 로멘틱한 환경을 제공하며<br />
                                    맞춤형 장식, 고급 침구, 스폐셜하고 로멘틱한 휴식 공간 및 2개의
                                    <br />대형 샤워실과 스피커가 장착된 대형욕조를 갖춘 프리미엄 룸 으로
                                    <br />여행객에게 럭셔리한 환경을 제공합니다<br />

                                    <br />
                                    <p>Day Price : 65$
                            
                                    </p>
                                    <p></p>
                                 </h2>
                                <img className="sp3" src="./images/hotel/ht3.jpg" alt="" />
                            </li>
                        </ul>
                    </div>
                </section>
            </section>
        </>
    );
} ///////// MainArea 컴포넌트 ////////////
