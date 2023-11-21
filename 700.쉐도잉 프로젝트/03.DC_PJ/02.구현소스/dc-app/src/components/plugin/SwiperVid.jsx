// 비디오 스와이프 플러그인 컴포넌트

import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// 제이쿼리 넣기
import $ from "jquery";


// Import Swiper styles
import "swiper/css";
// 양쪽이동 버튼만 필요함
import "swiper/css/navigation";

/* 폰트어썸 임포트 */
import { faCirclePlay } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// 스와이퍼 CSS
import "./css/swiper_vid.css";

// SwiperVid 사용 데이터 가져오기
import { swVidData } from "../data/swiper_vid";

// import required modules
// 사용할 스와이퍼 모듈을 불러온다(여기서는 페이지네이션, 네비게이션 , 자동넘김 사용)
import { Navigation } from "swiper/modules";

export function SwiperVid(props) {

    // 선택 데이터 : 카테고리에 해당하는 데이터를 가져옴!
    const selData = swVidData[props.cat];

    // 비디오 보이기 함수 //
    const showVid = (src , tit) => {
        console.log(src,tit);
        
        // 대상선정
        // 아이프레임 : .play-vid iframe
        const ifr = $('.play-vid iframe');
        // 전체 박스
        const vbx = $('.vid-bx');
        // 타이틀박스
        const itit = $('.ifr-tit')
        // 닫기버튼
        const cbtn = $('.cbtn');

        // 변경하기
        // 아이프레임 src 경로 넣기
        ifr.attr('src',src+"?autoplay=1");
        // 아이프레임 
        itit.text(tit);
        // 박스보이기
        vbx.fadeIn(300);
        // 닫기버튼 세팅
        cbtn.click(()=>{
            // 전체박스 사라지기
            vbx.fadeOut(300);
            // 기존동영상 플레이멈추기(src 삭제)
            ifr.attr('src','');
        }); //click /////

    }; ////// showVid /////////////////////////

    // 리턴코드 //////////////////////////////////////////////
    return (
        <>
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                navigation={true}
                // 사용할 모듈을 여기에 적용시킨다 ///////
                modules={[Navigation]}
                // 스와이퍼 사이즈별 슬라이드수 변경!
                breakpoints={{
                    200: {
                        slidesPerView: 2,
                    },
                    700: {
                        slidesPerView: 2,
                    },
                    1000: {
                        slidesPerView: 3,
                    },
                    1200: {
                        slidesPerView: 4,
                    },
                }}
                className="mySwiper"
            >
                {
                selData.map((v, i) => (
                    <SwiperSlide key={i}>
                        {/* 비디오 보이기 함수호출(비디오 경로,비디오제목) */}
                        <section className="sw-inbox" onClick={()=>showVid(v.vsrc,v.tit)}>
                            {/* 동영상 이미지 박스 */}
                            <div className="vid-img">
                                <img src={v.isrc} alt={v.tit} />
                                {/* 폰트어썸 아이콘 */}
                                <FontAwesomeIcon
                                    icon={faCirclePlay}
                                    style={{
                                        position:'absolute',
                                        bottom:'55%',
                                        left:'10%',
                                        color:'#fff',
                                        fontSize:'50px'
                                    }} />
                            </div>
                            {/* 동영상 타이틀 박스 */}
                            <div className="vid-tit">
                                <h4>{v.cat}</h4>
                                <h3>{v.tit}</h3>
                            </div>
                        </section>
                    </SwiperSlide>
                ))}
                </Swiper>
        </>
    );
} /////////// SwiperApp 컴포넌트 ///////////
