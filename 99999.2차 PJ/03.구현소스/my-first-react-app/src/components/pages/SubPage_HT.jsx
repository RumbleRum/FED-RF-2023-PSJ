import { SubTopArea } from "./SubTopArea";


// 서브 css
import "../../css/sub_main_hilton.css";
import "../../css/sub_hilton.css";

import { useEffect } from "react";

import $ from 'jquery'
import { SubMainArea_HT } from "./SubMainArea_HT";
import { SubTopArea_HT } from "./SubTopArea_HT";

export function SubPage_HT({chgPg}){
    useEffect(()=>{
        $('html,body').css({overflow:'visible'})
    },[])
    return(
        <>
            <SubTopArea_HT chgPg={chgPg} />
            <SubMainArea_HT />
        </>
    )
}