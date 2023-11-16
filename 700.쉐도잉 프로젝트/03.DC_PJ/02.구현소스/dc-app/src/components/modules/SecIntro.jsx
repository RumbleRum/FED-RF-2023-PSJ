// 섹션소개 컴포넌트 : SecIntro

// 섹션소개 모듈 데이터 가져오기
import { secIntroData } from "../data/secintro";

// 쎽션 소개 모듈용 CSS 불러오기
import "../../css/secintro.css"
import { useNavigate } from "react-router-dom";

// 구조정의 :
// Root > section > img Box + title Box + button Box

export function SecIntro(){

    
    // 선택 데이터
    const selData = secIntroData;

    // 라우터 이동객체 설정
    const goNav = useNavigate();


    // 라우터 이동함수
    const chgPage = (txt) => goNav(txt);


    return(
        <>
            <section className="sec-intro">
                {
                    selData.map((v,i)=>
            <div key={i}>
                {/* 1. 이미지박스 */}
                <div className="imbx">
                    <img src={v.isrc} alt={v.tit.split('^')[0]} />
                </div>
                {/* 2. 타이틀박스 */}
                <div className="titbx">
                    <h3>{v.tit.split('^')[0]}</h3>
                    <h2>{v.tit.split('^')[1].toUpperCase()}</h2>
                </div>
                {/* 3. 버튼박스 */}
                <div className="btnbx">
                        <button onClick={()=>chgPage(v.link)}>
                            {v.btn.toUpperCase()}
                        </button>
                </div>
                            
            </div>
                    )
                }
            </section>
        </>
    );

} //// SecIntro /////////////////////////////////////////