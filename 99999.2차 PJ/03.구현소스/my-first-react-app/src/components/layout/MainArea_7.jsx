// MainArea 컴포넌트

import { useInView } from "react-intersection-observer";
import "../../css/ani.css";

export function MainArea7() {
    const [ref, inView] = useInView({
        threshold: 0.1,
        triggerOnce: false,
    });

    return (
        <>
            <section className="main inbox fdtip">
                <div className="ep ep7">
                    <div className="flex-box">
                        <div className="partbox col-5 ep7-1">
                          <h1 ref={ref} className={`fade-in-text4 ${inView ? "visible" : ""}`}>
                            <p>
                            <img src="./images/map/dfood2.jpg" alt="음식" />

                            </p>
                          </h1>
                        </div>
                        <div className="partbox col-7 ep7-2">
                            <ul>
                                <li>
                                    <a>
                                        <h1 ref={ref} className={`fade-in-text4 ${inView ? "visible" : ""}`}>
                                            <p>Take</p>
                                        </h1>
                                    </a>
                                </li>
                                <li>
                                    <h1 ref={ref} className={`fade-in-text4 ${inView ? "visible" : ""}`}>
                                        <p>
                                            <a>
                                                <img src="./images/fd2.png" alt="" />A
                                            </a>
                                        </p>
                                    </h1>
                                </li>
                                <li>
                                    <h1 ref={ref} className={`fade-in-text5 ${inView ? "visible" : ""}`}>
                                        <p>
                                            <a>Worldwide</a>
                                        </p>
                                    </h1>
                                </li>
                                <li>
                                    <h1 ref={ref} className={`fade-in-text5 ${inView ? "visible" : ""}`}>
                                        <p>
                                            <a>
                                                Tour <img src="./images/fd1.jpg" alt="" />
                                            </a>
                                        </p>
                                    </h1>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
} ///////// MainArea 컴포넌트 ////////////
