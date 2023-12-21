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
                              maxLength="30"
                              placeholder="아이디를 입혁해 주세요!!"
                              value={useId}
                              
                            />
                            {
                                useIdError &&(
                                  <div className="msg">
                                    <small style={{color:"blue",fontSize:"20px"}}>
                                        {idEr}
                                    </small>
                                  </div>
                                )
                            }
                        </li>
                        <li>
                            <label>비밀번호 : </label>
                            <input
                              type="text"
                              maxLength="30"
                              placeholder="비밀번호를 입력해 주세요!!"
                              value={pwd}
                              
                             />
                             {
                                pwdError &&(
                                    <div className="msg">
                                        <small style={{color:"skyblue",fontSize:"10px"}}>
                                            {pwdEr}
                                        </small>
                                    </div>
                                )
                             }
                        </li>
                    </ul>
                </form>
            </section>
        </div>
    );
}