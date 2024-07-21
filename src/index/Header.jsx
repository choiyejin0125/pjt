import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import"./css/Header.css";







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

    const topbarClose = () =>{
      setisTopbarOpen(false);
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
                <li onClick={topbarClose}><Link to ="/"><img src="/imgs/topbar_image/home.png" className="topbar-icon" alt="home" />홈</Link></li>
                <li onClick={topbarClose}><Link to ="/company"><img src="/imgs/topbar_image/company.png" className="topbar-icon" alt="company" />회사 소개</Link></li>
                {
                    islogined
                    ?
                    <>
                    <li><Link to = {null} onClick={logoutHanlder}><img src="/imgs/topbar_image/logout.png" className="topbar-icon" alt="logout" />로그아웃</Link></li>
                    <li onClick={topbarClose}><Link to = "/modify"><img src="/imgs/topbar_image/modify.png" className="topbar-icon" alt="modify" />회원정보</Link></li>
                    </>
                    :
                    <li onClick={topbarClose}><Link to ="/register"><img src="/imgs/topbar_image/login.png" className="topbar-icon" alt="login" />로그인</Link></li>

                }
                <li onClick={topbarClose}><Link to ="/games"><img src="/imgs/topbar_image/console.png" className="topbar-icon" alt="games" />게임</Link></li>
            </ul>
            <div className="topbar-footer">
              <div className="logo">
                <Link to="/" onClick={topbarClose}><img src="/imgs/200x70_logo.png" alt="로고 이미지" /></Link>
              </div>
              <ul className="main_top">
                <li>
                  <Link to="" onClick={menuClickHandler}><img src="/imgs/menubtn.png" alt="아이콘 이미지" /></Link>
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