import React from "react";
import { nowDate } from "./js/util";
import "./css/footer.css";
import { useNavigate } from "react-router-dom";

const Footer = () => {
    const navi = useNavigate();
    const termsHandler = () =>{
        navi("/terms");
    }
    const publicHandler = () =>{
        navi("/policy");
    }
    return(
        <div className="footer">
        <div className="info-copyright">
            <div className="info-text">
            <span>(주)name 대표: 대표이름</span>
            <span>서울특별시 강남구 테헤란로 123 디지털타워 15층</span>
            <span>사업자등록번호: 123-86-45678</span>
            &nbsp;&nbsp;
            <span>&copy; {`${nowDate('private').slice(0, 4)} name Corporation. All rights reserved`}</span>
            </div>
            <div className="advertising">

            </div>
            <button onClick={termsHandler}>이용약관</button>
            <button onClick={publicHandler}>개인정보처리방침</button>
        </div>
        </div>
    );
}

export default Footer;
