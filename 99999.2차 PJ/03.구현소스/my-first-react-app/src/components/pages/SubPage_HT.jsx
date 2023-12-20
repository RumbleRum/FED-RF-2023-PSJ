import { SubTopArea } from "./SubTopArea";


// 서브 css
import "../../css/sub_main.css";
import "../../css/sub.css";

import { useEffect } from "react";

import $ from 'jquery'
import { SubMainArea_HT } from "./SubMainArea_HT";

export function SubPage({chgPg}){
    useEffect(()=>{
        $('html,body').css({overflow:'visible'})
    },[])
    return(
        <>
            <SubTopArea chgPg={chgPg} />
            <SubMainArea_HT />
        </>
    )
}