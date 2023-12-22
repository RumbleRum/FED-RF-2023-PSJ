// 익페 로그인페이지

// 제이쿼리
import $ from 'jquery';

import { useState } from 'react';

export function Login() {

    // 아디
    const [useId, setUseId] = useState('');
    // 비번
    const [pwd, setPwd] = useState('');

    const reLogin = () => {
        if(useId==='user' && pwd==='password'){
        history.push('/home');
    }
    else{
        
        alert('로그인에 실패하였습니다, 아이디와 비밀번호를 확인하여주세요')
    }
    };

    // 유효성 검사
    const totalValid = () => {
        if(!useId) true;
        if(!pwd) true;
        // 통과시
        if(useId&&pwd) return true;
        else return false;
    }
    
    
    
    

    return(
        <div className="out-box">
            <section className='log-box' style={{minHeight:"500px"}}>
                <h2>LOGIN</h2>
                <form method="post" action="/login">
                    <ul>
                        <li>
                            <label>아이디 : </label>
                            <input 
                              type="text" 
                              value={useId}
                              onChange={e=>setUseId(e.currentTarget.value)}
                              />
                        </li>
                        <li>
                            <label>비밀번호 : </label>
                            <input
                              type="text"
                              value={pwd}
                              onChange={e=>setPwd(e.currentTarget.value)}
                             />
                        </li>
                    </ul>
                </form>
            </section>
        </div>
    );
}