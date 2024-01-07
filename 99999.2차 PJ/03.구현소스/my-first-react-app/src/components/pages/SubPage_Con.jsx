
// 서브 css
import "../../css/sub_main_conrad.css";
import "../../css/sub_conrad.css";

import { useEffect } from "react";

import $ from 'jquery'
import { SubMainArea_Con } from "./SubMainArea_Con";
import { SubTopArea_Con } from "./SubTopArea_Con";

export function SubPage_Con({chgPg}){
    useEffect(()=>{
        $('html,body').css({overflow:'visible'})
    },[])
    return(
        <>
            <SubTopArea_Con chgPg={chgPg} />
            <SubMainArea_Con />
        </>
    )
}