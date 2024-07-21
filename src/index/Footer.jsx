import React, { useEffect, useState } from "react";
import { nowDate } from "./js/util";
import "./css/footer.css";
import { useNavigate } from "react-router-dom";






const Footer = () => {
    const [image, setimage] = useState(null);


    const navi = useNavigate();


    const termsHandler = () =>{
        navi("/terms");
    }
    const publicHandler = () =>{
        navi("/policy");
    }

    useEffect(() => {
        fetch("/jsonstorage/advertising.json")
        .then(response => response.json())
        .then(data => {
            const randomindex = Math.floor(Math.random()*data.ads.length);
            setimage(data.ads[randomindex]);
        });
    }, []);

    if (!image) {return <div>광고 로딩 중...</div>;}
    return(
        <div className="footer">
        <div className="info-copyright">
            <div className="info-text">
            <span>(주)액션스퀘어 대표: 가나다</span>
            <span>서울특별시 강남구 테헤란로 123 디지털타워 15층</span>
            <span>사업자등록번호: 123-86-45678</span>
            &nbsp;&nbsp;
            <span>&copy; {`${nowDate('private').slice(0, 4)} name Corporation. All rights reserved`}</span>
            </div>
            <div className="advertising">
                <img src={image.url} onClick={null} alt={image.name} className="advertising-main"/>
            </div>
            <button onClick={termsHandler}>이용약관</button>
            <button onClick={publicHandler}>개인정보처리방침</button>
        </div>
        </div>
    );
}

export default Footer;
