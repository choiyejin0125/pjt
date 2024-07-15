import React, { useEffect } from "react";
import { CheckLoginSession, tokenDecode } from "../js/Loginsession";

const getModifyValue = () =>{
    const decodetoken = tokenDecode();

    const tokenid = decodetoken.username.value;
    console.log('test gettoken:', tokenid)

    return tokenid;

}

const Modify = () => {
    useEffect(() =>{
        CheckLoginSession();
    }, [])
    return(
        <div className="modify-form">
            Name:<input type="text" name="name" id=""/>
            ID:<input type="text" name="id" id="" disabled/>
            Password:<input type="password" name="pwd" id=""/>
            Email:<input type="text" name="email" id=""/>
            <button>Submit</button>
            <button>Delete</button>
        </div>
    );
}

export default Modify;
