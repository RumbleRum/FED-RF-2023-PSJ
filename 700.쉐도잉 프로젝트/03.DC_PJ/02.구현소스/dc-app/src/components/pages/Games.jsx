// 게임 페이지 메인 컨텐츠

import { Banner } from "../modules/Banner";
import { VidIntro } from "../modules/Vidintro";

export function Games(){
    return(
        <>
            <Banner category="GAMES" />
            <VidIntro cat="GAMES" cls="on" />
        </>
    );

} ///////// Main //////////////////////////