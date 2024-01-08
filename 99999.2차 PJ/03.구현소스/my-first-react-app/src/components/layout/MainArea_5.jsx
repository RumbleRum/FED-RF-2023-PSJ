// MainArea 컴포넌트

import { useInView } from "react-intersection-observer";
import "../../css/ani.css";

export function MainArea5() {
    const [ref, inView] = useInView({
        threshold: 0.1,
        triggerOnce: false,
    });

    return (
        <>
            <section className="main inbox">
                <div className="ep ep5">
                    <div className="flex-box">
                        <div className="partbox col-6 ep5-1">
                            <h1 ref={ref} className={`fade-in-text4 ${inView ? "visible" : ""}`}>
                                <p>Cue</p>
                            </h1>
                            <img src="./images/racon1.jpg" alt="라콘" />
                        </div>
                        <div className="partbox col-6 ep5-2">
                            <h1 ref={ref} className={`fade-in-text6 ${inView ? "visible" : ""}`}>
                                <p>
                                    라스베가스
                                    <br /> 리조트의
                                    <br /> 세계최고의
                                    <br /> 공연시설
                                </p>
                            </h1>
                        </div>
                        <div className="partbox col-3 ep5-3-img">
                            <img src="./images/racon2.jpg" alt="라콘" />
                        </div>
                        <div className="partbox col-4 ep5-3">
                            <h1 ref={ref} className={`fade-in-text4 ${inView ? "visible" : ""}`}>
                                <p>The Thrills</p>
                            </h1>
                        </div>
                        <div className="partbox col-5 ep5-4">
                            <h1 ref={ref} className={`fade-in-text6 ${inView ? "visible" : ""}`}>
                                BRACE YOURSELF FOR UNRIVALED ENTERTAINMENT EXPERIENCES AT LAS VEGAS’S NEWEST STATE-
                                OF-THE-ART VENUE
                            </h1>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
} ///////// MainArea 컴포넌트 ////////////
