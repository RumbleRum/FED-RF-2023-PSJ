// DC PJ 비디오 스와이프 컴포넌트

/* 
[ 구조정의 ]
    Root >
        section.vidswbox >  
        ( h2.tit + <SwiperVid />) + 
        (section.vidbx > div.playvid > h2.ifrtit + iframe + button )
*/

    // 비디오 스와이프 CSS 불러오기
import "../../css/vid_swipe.css";
import { SwiperVid } from "../plugin/SwiperVid";


export function VidSwipe(props){
    return (
        <>
            {/* 모듈코드 */}
            <section className="vid-swbox">
                {/* 모듈 타이틀 */}
                <h2 className="tit">{props.tit}</h2>
            {/* 스와이퍼 컴포넌트 */}
                <SwiperVid />

            {/* 비디오 재생창 */}
                <section className="vid-bx">
                    {/* 비디오 중앙박스 */}
                    <div className="play-vid">
                        {/* 비디오 타이틀 */}
                        <h2 className="ifr-tit"></h2>
                        {/* 아이프레임 */}
                        <iframe src="" allow="autoplay"></iframe>
                        {/* 닫기버튼 */}
                        <button className="cbtn">x</button>
                    </div>
                </section>
            </section>
        </>
    );
} /// VidSwipe ///////////////////
