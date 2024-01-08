// MainArea 컴포넌트

import { useEffect } from "react";

// 제이쿼리
import $ from "jquery";
import "jquery-ui-dist/jquery-ui";

import { useInView } from "react-intersection-observer";
import "../../css/ani.css";

export function MainArea9() {
    const [ref, inView] = useInView({
        threshold: 0.1,
        triggerOnce: false,
    });

    const spArr = [
        "DawgHouse_Logo",
        "casual_dining_logo_2",
        "casual_dining_logo_3",
        "casual_dining_logo_4",
        "casual_dining_logo_5",
        "casual_dining_logo_2",
        "casual_dining_logo_3",
        "casual_dining_logo_4",
        "casual_dining_logo_5",
        "casual_dining_logo_2",
    ];

    useEffect(() => {
        $("#imageLink1").on("click", function (e) {
            e.preventDefault();
            changeImage("./images/map/dfood1.jpg");
        });
        $("#imageLink2").on("click", function (e) {
            e.preventDefault();
            changeImage("./images/map/dfood2.jpg");
        });
        $("#imageLink3").on("click", function (e) {
            e.preventDefault();
            changeImage("./images/map/dfood3.jpg");
        });

        function changeImage(newImage) {
            $("#myImage").fadeOut(400, function () {
                $(this).attr("src", newImage).fadeIn(300);
            });
            $("#slider").fadeOut(400, function () {
                $(this).attr("src", newImage).fadeIn(300);
            });
        }
    });

    return (
        <>
            <section className="main inbox">
                <div className="ep ep9">
                    <div className="flex-box">
                        <div className="partbox col-7 ep9-1">
                            <div className="sul-box">
                                <ul>
                                    <li>
                                        <h1 ref={ref} className={`fade-in-text ${inView ? "visible" : ""}`}>
                                            <p>
                                                TUCK INTO OVER 40 INTERNATIONAL FOOD <br />
                                                AND BEVERAGE OPTIONS.
                                            </p>
                                        </h1>
                                    </li>
                                    <li>
                                        <h2 ref={ref} className={`fade-in-text ${inView ? "visible" : ""}`}>
                                            <p>RESTAURANT DINING</p>
                                        </h2>
                                    </li>
                                    
                                </ul>
                            </div>
                                <div className="seg">
                                      <h2 ref={ref} className={`fade-in-text ${inView ? "visible" : ""}`}>
                                            <p>
                                                라스베가스 리조트의 레스토랑에서의 식사는 환상적입니다
                                                <br />
                                                최고급 식재료와 세계 각국의 40가지 이상의 요리들을 맛보실수 있으며
                                                <br />
                                                럭셔리하고 분위기있는 식사를 위한 레스토랑 내부와 인테리어는 물론
                                                <br />
                                                식사와 함께 오케스트라 밴드와 함께하는 잊지못할 특별한 추억까지
                                                <br />
                                                라스베가스 리조트는 고객에게 완벽한 식사를 제공합니다
                                            </p>
                                      </h2>
                                </div>
                            <nav className="sul-box2">
                                '
                                <ul>
                                    <li>
                                        <h1 ref={ref} className={`fade-in-text2 ${inView ? "visible" : ""}`}>
                                            <p>
                                                <a href="#" id="imageLink1">
                                                    CASUAL DINING
                                                </a>
                                            </p>
                                        </h1>
                                    </li>
                                    <li>
                                        <h1 ref={ref} className={`fade-in-text2 ${inView ? "visible" : ""}`}>
                                            <p>
                                                <a href="#" id="imageLink2">
                                                    FINE DINING
                                                </a>
                                            </p>
                                        </h1>
                                    </li>
                                    <li>
                                        <h1 ref={ref} className={`fade-in-text2 ${inView ? "visible" : ""}`}>
                                            <p>
                                                <a href="#" id="imageLink3">
                                                    FAMOUS FOODS
                                                </a>
                                            </p>
                                        </h1>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        <div className="partbox col-5 ep9-2">
                            
                                    <img id="myImage" src="./images/map/dfood1.jpg" alt="식사" />
                                    <div id="slider">
                                        <div className="image-box">
                                            {spArr.map((v, i) => (
                                                <div key={i}>
                                                    <img src={"./images/slide/" + v + ".png"} />
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                             
                        </div>
                    </div>
                </div>
            </section>

            {/* <!-- 따라다니는 원 --> */}
            <div className="mover"></div>
        </>
    );
} ///////// MainArea 컴포넌트 ////////////
