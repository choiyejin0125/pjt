import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import  "./css/Header.css";




const Header = () => {

  const [isTopbarOpen, setisTopbarOpen] = useState(false);
    const [islogined, setislogined] = useState(false);

    const menuClickHandler = () =>{
        setisTopbarOpen(prevState => !prevState);
    }

    const logoutHanlder = () =>{
        const logout = window.confirm('정말 로그아웃하시겠습니까?');

        if(logout === true){
            localStorage.removeItem('token');
            alert("로그아웃이 완료되었습니다");
            window.location.href = "/";
        }

    }

    useEffect(() =>{
      if (localStorage.getItem('token') !== null){
        setislogined(true);
      }
      else{
          setislogined(false);
      }
    }, [])

    return(
    <div className="header">
      <div className="topbar">
      <div className = {`topbar ${isTopbarOpen? 'open' : ''}`}>
            <ul className="topbar-menu">
                <li><Link to ="/">홈</Link></li>
                <li><Link to ="/company">회사 소개</Link></li>
                {
                    islogined
                    ?
                    <>
                    <li><Link to = {null} onClick={logoutHanlder}>로그아웃</Link></li>
                    <li><Link to = "/modify">회원정보 수정</Link></li>
                    </>
                    :
                    <li><Link to ="/register">로그인/회원가입</Link></li>

                }
                <li><Link to ="/games">게임</Link></li>
                <li><Link to ="/community">커뮤니티</Link></li>
                <li><Link to ="/employ">채용 공고</Link></li>
                <li><Link to ="/pr">보도자료</Link></li>
            </ul>
            <div className="topbar-footer">
              <div className="logo">
                <Link to="/"><img src="./imgs/200x70_logo.png" alt="로고 이미지" /></Link>
              </div>
              <ul className="main_top">
                <li>
                  <Link to="" onClick={menuClickHandler}><img src="./imgs/menubtn.png" alt="아이콘 이미지" /></Link>
                </li>
                {
                  islogined
                  ?
                  <>
                    <li>
                    <Link to = "" onClick={logoutHanlder}>로그아웃</Link>
                    </li>
                    <li>
                    <Link to ="/modify">정보 수정</Link>
                    </li>
                  </>
                  :
                    <li>
                    <Link to ="/register">로그인 / 회원가입</Link>
                    </li>
                }
              </ul>
          </div>
        </div>
      </div>
      </div>
    );
    
}


export default Header;