// 무비 페이지 메인 컨텐츠

import { Banner } from "../modules/Banner";
import { VidSwipe } from "../modules/VidSwipe";
import { VidIntro } from "../modules/vidintro";

export function Movies(){
    return(
        <>
            {/* 배너 */}
            <Banner category="MOVIES" />
            {/* 비디오 소개 */}
            <VidIntro cat="MOVIES" cls="on" />
            {/* 페이지 비디오 스와이프 */}
            <VidSwipe cat="movies" />
        </>
    );

} ///////// movies //////////////////////////