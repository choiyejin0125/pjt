import React, { useEffect, useRef, useState } from "react";
import { CheckLoginSession, tokenDecode } from "../js/Loginsession";
import { DBconnection, getUser } from "../js/IndexedDB";
import { Validcheck } from "./Register";
import { useNavigate } from "react-router-dom";

import "../css/modifyform.css";

const getCurrentValue = async() =>{
    const getuserinfo = await getUser(tokenDecode().username);

    return getuserinfo;
}

const Modify = () => {
    const [currentdata, setcurrentdata] = useState('');
    const navi = useNavigate();

    let uid = useRef(null);
    let upw = useRef(null);
    let umail = useRef(null);
    let uname = useRef(null);

    useEffect(() =>{
        CheckLoginSession();

        const fetchdata = async() =>{
            const data = await getCurrentValue();
            setcurrentdata(data);
        }

        fetchdata();

    }, [])

    const submitHandler = () =>{
        if(window.confirm('회원 정보를 수정하시겠습니까?')){
            uid.current.focus();
            upw.current.focus();
            umail.current.focus();
            uname.current.focus();

            const regform = {
                'name': uname.current.value.trim(),
                'id': uid.current.value.trim(),
                'pw': upw.current.value.trim(),
                'email': umail.current.value.trim(),
            }

            const isvalid = Validcheck(regform);

            if (isvalid === true){ 
                alert('정보 갱신에 성공하였습니다');
                console.log('정보를 db로 전송합니다');
                DBconnection(regform, 'modify');
            }
            else{
                console.log('전송 실패');
            }
            uid.current.value = ''; 
            upw.current.value = '';
            umail.current.value = '';
            uname.current.value = '';

            window.location.reload();


    
            
        }
        else{
            alert('취소했습니다');
        }
    }

    const deleteHandler = () =>{
        if(window.confirm('회원 정보를 삭제하시겠습니까?')){
            
            navi("/deleteinfo");
            
        }
        else{
            alert('취소했습니다');
        }
    }

    return(
        <div className="modify-form">
            <h1>회원 정보 수정</h1>
            <p>이름:<input type="text" name="name" ref={uname} defaultValue={currentdata.name}/></p>
            <p>ID:<input type="text" name="id" ref={uid} defaultValue={currentdata.id} disabled/></p>
            <p>비밀번호:<input type="text" name="pw" ref={upw} defaultValue={currentdata.pw}/></p>
            <p>Email:<input type="text" name="email" ref={umail} defaultValue={currentdata.email}/></p>
            <div className="modify-button">
            <button onClick={submitHandler}>Submit</button> <button onClick={deleteHandler}>Delete</button>
            </div>
        </div>
    );
}

export default Modify;
