// 로그인페이지


// 제이쿼리
import $ from 'jquery';

import { useState } from 'react';

export function Login() {

    // 아디
    const [useId, setUseId] = useState('');
    // 비번
    const [pwd, setPwd] = useState('');

    // 아디 비번 에러변수
    const [useIdError, setUseIdError] = useState(false);
    const [pwdError, setPwdError] = useState(false);

    // 아이디 비번 메시지
    const msgId = ["아이디 필수입력.","아이디가 존재하지 않습니다."];
    const msgPwd = ["비밀번호 필수입력.","비밀번호가 존재하지 않습니다."];
    

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
                              onChange={useIdError}
                            />

                        </li>
                        <li>
                            <label>비밀번호 : </label>
                            <input
                              type="text"
                              maxLength="30"
                              placeholder="비밀번호를 입력해 주세요!!"
                              value={pwd}
                              onChange={useIdError}
                             />
                        </li>
                    </ul>
                </form>
            </section>
        </div>
    );
}