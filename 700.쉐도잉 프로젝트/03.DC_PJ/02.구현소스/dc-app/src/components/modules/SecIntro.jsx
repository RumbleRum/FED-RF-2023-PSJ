// 섹션소개 컴포넌트 : SecIntro

// 섹션소개 모듈 데이터 가져오기
import { secIntroData } from "../data/secintro";

// 쎽션 소개 모듈용 CSS 불러오기
import "../../css/secintro.css"
import { Link } from "react-router-dom";

// 구조정의 :
// Root > section > img Box + title Box + button Box

export function SecIntro(){

    // 선택 데이터
    const selData = secIntroData;

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
                    <Link to={v.link}>
                        <button>
                            {v.btn.toUpperCase()}
                        </button>
                    </Link>
                </div>
                            
            </div>
                    )
                }
            </section>
        </>
    );

} //// SecIntro /////////////////////////////////////////