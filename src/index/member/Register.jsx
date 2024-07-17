import React, { useState, useRef } from "react";
import { DBconnection, getAllUserId } from "../js/IndexedDB";
import "../css/Register.css";
import { getLoginSession } from "../js/Loginsession";


export const Validcheck = (props) => { // 유효성 검사
    const nameregex = /^[a-zA-Z가-힣\s]+$/; // 정규식 표현(영문, 한글)
    const idregex = /^[a-zA-Z0-9가-힣\s]+$/; // 정규식 표현(영문, 한글, 숫자)


    if (Object.values(props).includes('')) {
        alert('모든 칸을 입력해주세요!');
    }
    else if (idregex.test(props.id) === false || nameregex.test(props.name) === false){
        alert('이름과 id에는 특수문자가 들어갈 수 없습니다!');
    }
    else if(props.id.length < 8 || props.id.length > 20 ){
        alert('ID는 최소 8에서 최대 20자리까지');
    }
    else if(props.name.length <= 0 || props.name.length > 10 ){
        alert('이름은 최소 1에서 최대 10자리까지');
    }
    else if(props.pw.length < 8 || props.pw.length > 20 ){
        alert('비밀번호는 최소 8에서 최대 20자리까지');
    }
    else if (!props.email.split('').includes('@')) {
        alert('이메일을 다시 확인해주세요');
    }
    else{
        return true;
    }
    return false;
}

const Register = () =>{
    //회원가입 정보
    let uid = useRef(null);
    let upw = useRef(null);
    let umail = useRef(null);
    let uname = useRef(null);

    let logid = useRef(null);
    let logpw = useRef(null);

    //usestate( 비밀번호 공개 버튼)
    const [isHoldPwBtn, setisHoldPwBtn] = useState(false);

    const [regModalOpen, setRegModalOpen] = useState(false);
    const modalBackground = useRef();

    //핸들러
    const holdPwBtnShowHandler = () =>{ // 비밀번호 공개 핸들러
        setisHoldPwBtn(prevstate => !prevstate);
    }

    const regBtnClickHandler = () =>{ // Register버튼 클릭 핸들러
        uid.current.focus();
        upw.current.focus();
        umail.current.focus();
        uname.current.focus();

        console.log(`name:${uname.current.value}`);
        console.log(`id:${uid.current.value}`);
        console.log(`pw:${upw.current.value}`);
        console.log(`email:${umail.current.value}`);

        const regform = {
            'name': uname.current.value.trim(),
            'id': uid.current.value.trim(),
            'pw': upw.current.value.trim(),
            'email': umail.current.value.trim(),
        }

        const isvalid = Validcheck(regform);

        if (isvalid === true){ 
            console.log('정보를 db로 전송합니다');
            DBconnection(regform, 'register');
        }
        else{
            console.log('전송 실패');
        }
        uid.current.value = ''; // 필드 초기화
        upw.current.value = '';
        umail.current.value = '';
        uname.current.value = '';
    }

    const logBtnClickHandler = () =>{ //로그인 핸들러

        logid.current.focus();
        logpw.current.focus();
        
        const logform = {
            'id': logid.current.value.trim(),
            'pw': logpw.current.value.trim(),
        }
        
        let isLoginSuccess = DBconnection(logform, 'login');
        if (isLoginSuccess == true){
            getLoginSession(logform.id);
        }

        logid.current.value = ''; // 필드 초기화
        logpw.current.value = '';
    }

    
    return(
        <>
        <div className="Login">
            <div className="login_box">
                <h2>로그인</h2>
                <h5>아이디</h5>
                <input type="text" id="log_id" ref={logid}  placeholder="Place your ID"/>
                <br />
                <h5>비밀번호</h5>
                <input type='text' id="log_pw" ref={logpw} placeholder="Place your PW"/>
                <br />
                <button id = "log_btn" onClick={logBtnClickHandler}>로그인</button>
                <button className ={'reg_btn'}  onClick={() => setRegModalOpen(true)}>회원가입</button>
                {
                regModalOpen &&
                <div className={'modal_container'} ref={modalBackground} onClick={e => {
                    if (e.target === modalBackground.current) {
                        setRegModalOpen(false);
                    }
                }}>
                    <div className={'modal_content'}>

                    <div className="Register">
                        <div className="register_box">
                            <h2>회원가입</h2>
                            <h5>이름</h5>
                            <input type="text" ref={uname} id="u_name" placeholder="Place your NAME"/>
                            <br />
                            <h5>아이디</h5>
                            <input type="text" ref={uid} id="u_id"  placeholder="Place your ID"/>
                            <br />
                            <h5>비밀번호</h5>
                            <div>
                                <input type={isHoldPwBtn ? 'text' : 'password'} ref={upw} id="u_pw" placeholder="Place your PW"/>
                                <div className="show_btn">
                                    <button className="pwshow-btn" onClick={holdPwBtnShowHandler}>show</button>
                                </div>
                            </div>
                            <h5>이메일</h5>
                            <input type="text" ref={umail} id="u_mail" placeholder="Place your EMAIL"/>
                            <br />
                            <button id="reg_btn" onClick={regBtnClickHandler}>가입하기</button>
                            </div>
                            <button className={'modal_close_btn'} onClick={() => setRegModalOpen(false)}>
                            X
                            </button>
                        </div>
                        
                    </div>
                </div>
                }
            </div>
        </div>

        


        </>

    );
}


export default Register;