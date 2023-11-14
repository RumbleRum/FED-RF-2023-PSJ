// 메인페이지 컨텐츠 컴포넌트 

import { Banner } from "../modules/Banner";

export function MainCont(){


        return(
            <>
            {/* 배너페이지 */}
                <section className="page" style={{background:'lightblue'}}>
                    <Banner />
                </section>
                <section className="page" style={{background:'lightgreen'}}></section>
                <section className="page" style={{background:'coral'}}></section>
                <section className="page" style={{background:'lightpink'}}></section>
                <section className="page" style={{background:'aqua'}}></section>
            </>

        );

} /// maincont //////////////////////////////