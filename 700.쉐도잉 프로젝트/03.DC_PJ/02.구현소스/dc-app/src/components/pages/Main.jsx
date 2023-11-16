// 메인페이지 메인컨텐츠

import { Banner } from "../modules/Banner";
import { SecIntro } from "../modules/SecIntro";

export function Main(){
    // cat 속성으로 메뉴분류 전달
    return(
        <>
           {/* 배너 컴포넌트 */}
            <Banner category={
                "main"+ Math.ceil(Math.random()*3)
                } />
                {/*
                     Math.ceil(Math.random()*3) 
                    -> 1~3 중 임의의 난수를 발생하여 변경해줌
                    "main1" / "main2" / "main3"
                */}

            {/* 섹션 소개 컴포넌트 */}
            <SecIntro />

            {/* 비디호 소개 컴포넌트 
            cat - 페이지 분류명 / cls - 클래스명(on,off) */}
            <VidIntro cat="main" cls="off" />

        </>
    )

} ////////////  Main 컴포넌트 ///////////