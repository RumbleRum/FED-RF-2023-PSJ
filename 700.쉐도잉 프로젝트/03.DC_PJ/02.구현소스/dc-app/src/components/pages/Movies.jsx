// 무비 페이지 메인 컨텐츠

import { Banner } from "../modules/Banner";
import { VidIntro } from "../modules/Vidintro";

export function Movies(){
    return(
        <>
            <Banner category="MOVIES" />
            <VidIntro cat="MOVIES" cls="on" />
        </>
    );

} ///////// Main //////////////////////////