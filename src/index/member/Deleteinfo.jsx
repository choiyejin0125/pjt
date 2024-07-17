import React, { useEffect, useRef, useState } from "react";
import { CheckLoginSession, tokenDecode } from "../js/Loginsession";

import "../css/delectinfo.css";
import { useNavigate } from "react-router-dom";

import txtTerms from "../textpage/delectTerms.txt";
import { DBconnection } from "../js/IndexedDB";

const Deleteinfo = () =>{

    const navi = useNavigate();

    const [terms, setterms] = useState('');
    const [checkbox, setcheckbox] = useState(false);

    let upw = useRef(null);

    useEffect(() =>{
        CheckLoginSession();

        fetch(txtTerms).then(response => response.text())
        .then(data => setterms(data))
        .catch(error => console.error('Error loading terms:', error));
    }, [])

    const deleteBtnHandler = () =>{
        if (checkbox === true){
            if(window.confirm('정말 탈퇴하시겠습니까?')){

                const token = tokenDecode();
                upw.current.focus();

                const udatabox = {
                    'id': token.username,
                    'pw': upw.current.value.trim(),
                }
                DBconnection(udatabox, 'delete');
    
            }
            else{
                alert('취소하였습니다');
                navi('/');
    
            }
        }
        else{
            alert('체크박스를 눌러주세요');
        }
    }
    const delCheckboxHandler = () =>{
        setcheckbox(prevstate => !prevstate);
        console.log('체크박스 테스트', checkbox);
    }
    return(
        <div className="delete-info">
        <div className="terms">
            <b>계정 탈퇴를 위해 비밀번호 재확인이 필요합니다. 또한 다음 약관을 자세히 읽고 체크박스를 눌러주세요</b>
            <div className="terms-txt">
            {terms}
            </div>
            <span>약관을 자세히 읽었고, 이에 동의합니다<input type="checkbox" name="" onChange={delCheckboxHandler} /></span>
        </div>
        <div className="repeat-pw">
            <input type="password" name="delete-pwd"  placeholder="비밀번호 재확인" ref={upw}/>
        </div>
        <button className="delete-btn" onClick={deleteBtnHandler}>계정 탈퇴</button>
        </div>
    );
}

export default Deleteinfo;