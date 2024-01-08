// MainArea 컴포넌트

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTiktok } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { useEffect, useLayoutEffect, useState } from "react";

import { useInView } from "react-intersection-observer";
import "../../css/ani.css";

export function MainArea1() {

    const [ref, inView] = useInView({
      triggerOnce: false
    });

    return (
        <>
            <section className="main inbox video-box">
                <video id="mvid" src="./images/videoplayback2.mp4" autoPlay loop muted></video>
                <div className="ep ep1 first-bx">
                    <div className="flex-box">
                        <div className="col-12 ep1-1"></div>
                        <div className="partbox col-12 ep1-2">
                            <h1 ref={ref} className={`fade-in-text ${inView ? "visible" : ""}`}>
                                <p>This is</p>
                            </h1>
                        </div>
                        <div className="partbox col-12 ep1-2">
                            <h1 ref={ref} className={`fade-in-text ${inView ? "visible" : ""}`}>
                                <p>Our World</p>
                            </h1>
                        </div>
                        <div className=" col-3 ep1-3">
                            <h2 ref={ref} className={`fade-in-text2 ${inView ? "visible" : ""}`}>
                                <p> A JOURNEY BY:</p>
                            </h2>
                        </div>
                        <div className=" col-3 ep1-3">
                            <h2 ref={ref} className={`fade-in-text2 ${inView ? "visible" : ""}`}>
                                <p>HILTON</p>
                            </h2>
                        </div>
                        <div className=" col-3 ep1-3">
                            <h2 ref={ref} className={`fade-in-text2 ${inView ? "visible" : ""}`}>
                                <p>CROCKFORDS</p>
                            </h2>
                        </div>
                        <div className=" col-3 ep1-3">
                            <h2 ref={ref} className={`fade-in-text2 ${inView ? "visible" : ""}`}>
                                <p>CONRAD</p>
                            </h2>
                        </div>
                        <div className="partbox col-4 ep1-4">
                            <h1>
                                <p>© 2023 Expedia, Inc., an expedia group company. All Rights Reserved</p>
                            </h1>
                        </div>
                        <div className="partbox col-4 ep1-4"> 
                                <FontAwesomeIcon icon={faTiktok} fontSize={"25px"} className="fam" />
                                <FontAwesomeIcon icon={faInstagram} fontSize={"25px"} className="fam" />
                                <FontAwesomeIcon icon={faYoutube} fontSize={"25px"} className="fam" />
                        </div>
                        <div className="partbox col-1 ep1-4">
                            <h1>
                                <p>Privacy Policy</p>
                            </h1>
                        </div>
                        <div className="partbox col-1 ep1-4">
                            <h1>
                                <p>Terms of Use</p>
                            </h1>
                        </div>
                        <div className="partbox col-2 ep1-4">
                            <h1>
                                <p>Do not sell my personal information</p>
                            </h1>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
} ///////// MainArea 컴포넌트 ////////////
