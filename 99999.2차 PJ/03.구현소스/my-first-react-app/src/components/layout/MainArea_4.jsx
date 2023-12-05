// MainArea 컴포넌트

import { useEffect } from "react";

// 제이쿼리
import $ from "jquery";
import "jquery-ui-dist/jquery-ui";

// 메인 css
// import './css/main.css';

export function MainArea4() {
    // cat 속성으로 메뉴분류 전달

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
                                <img src="./images/hotel/hilton.png" alt="힐튼" />
                                <h2 className="hdn htxt1">
                                    Equally sleek and at ease, Hilton is home to  <br />
                                    high-end amenities. Absorbing guests in
                                    attentive service,
                                    <br /> the well recognized name in hospitality awaits.
                                </h2>
                                <img className="sp1" src="./images/hotel/ht1.jpg" alt="" />
                            </li>
                            <li>
                                <img src="./images/hotel/crockfords.png" alt="크록포드" />
                                <h2 className="hdn htxt2">
                                Overlooking the glam of the Strip,<br />
                                guests at Crockfords find the ultimate in Las Vegas luxury.<br /> 
                                Part of LXR Hotels & Resorts, expect unrivalled service.
                                </h2>
                                <img className="sp2" src="./images/hotel/ht2.jpg" alt="" />
                            </li>
                            <li>
                                <img src="./images/hotel/conrad.png" alt="콘라드" />
                                <h2 className="hdn htxt3">
                                 With luxe amenities, curated art, and bold design,<br />
                                 the world’s largest Conrad serves up stirring <br />
                                 views of the Strip and captures the spirit of travel.</h2>
                                <img className="sp3" src="./images/hotel/ht3.jpg" alt="" />
                            </li>
                        </ul>
                    </div>
                </section>
            </section>
        </>
    );
} ///////// MainArea 컴포넌트 ////////////
