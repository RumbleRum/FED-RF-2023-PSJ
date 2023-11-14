// 메인페이지 메인컨텐츠

import { Banner } from "../modules/Banner";

export function Main(){
    // cat 속성으로 메뉴분류 전달
    return(
        <>

            <h1 style={{textAlign:'center'}}>메인 페이지</h1>
            <Banner category={
                "main"+ Math.ceil(Math.random()*3)
                } />
                {/*
                     Math.ceil(Math.random()*3) 
                    -> 1~3 중 임의의 난수를 발생하여 변경해줌
                    "main1" / "main2" / "main3"
                */}

        </>
    )

} ////////////  Main 컴포넌트 ///////////