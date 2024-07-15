import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import  "./css/Sidebar.css";




const Header = () => {

  
    return(
        <>
    <div className="header">
      <div className="logo">
        <a href="#none"><img src="./imgs/200x70_logo.png" alt="로고 이미지" /></a>
      </div>
      <ul className="main_top">
        <li>
          <a href="#none"><img src="./imgs/30x30_icon.jpg" alt="아이콘 이미지" /></a>
        </li>
        <li>
          <a href="#none">로그인</a>
        </li>
        <li>
          <a href="#none">회원가입</a>
        </li>
        <li>
          <a href="#none">로그아웃</a>
        </li>
        <li>
        <a href="#none">정보 수정</a>
        </li>
      </ul>
    </div>

        </>
    );
}


export default Header;