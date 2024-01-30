// MainArea 컴포넌트

import { useInView } from "react-intersection-observer";
import "../../css/ani.css";

export function MainArea8() {
    const [ref, inView] = useInView({
        threshold: 0.1,
        triggerOnce: false,
    });

    return (
        <>
            <section className="main inbox fdtip">
                <div className="ep ep8">
                    <div className="flex-box">
                        <div className="partbox col-5 ep8-1">
                            <h1 ref={ref} className={`fade-in-text4 ${inView ? "visible" : ""}`}>
                                <p>
                                    <img src="./images/food3.jpg" alt="음식" />
                                </p>
                            </h1>
                        </div>
                        <div className="partbox col-7 ep8-2">
                            <ul>
                                <li>
                                    <h1 ref={ref} className={`fade-in-text4 ${inView ? "visible" : ""}`}>
                                        <p>
                                            <a>
                                                <h1>Of</h1>
                                            </a>
                                        </p>
                                    </h1>
                                </li>
                                <li>
                                    <h1 ref={ref} className={`fade-in-text4 ${inView ? "visible" : ""}`}>
                                        <p>
                                            <a>
                                                <img src="./images/fd3.jpg" alt="" />
                                                The
                                            </a>
                                        </p>
                                    </h1>
                                </li>
                                <li>
                                    <h1 ref={ref} className={`fade-in-text5 ${inView ? "visible" : ""}`}>
                                        <p>
                                            <a>Culinary</a>
                                        </p>
                                    </h1>
                                </li>
                                <li>
                                    <h1 ref={ref} className={`fade-in-text5 ${inView ? "visible" : ""}`}>
                                        <p>
                                            <a>Arts</a>
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
