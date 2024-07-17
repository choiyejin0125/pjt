import React, { useState } from "react";
//import  "./css/Sidebar.css";
import { Link } from "react-router-dom";


const Sidebar = () =>{

    const [isSideBarOpen, setisSideBarOpen] = useState(false);
    const [islogined, setislogined] = useState(false);

    const sidebarMouseHandler = () =>{
        setisSideBarOpen(prevState => !prevState);

        if (localStorage.getItem('token') !== null){
            setislogined(true);
        }
        else{
            setislogined(false);
        }


        console.log('changesidebarstate: ' + isSideBarOpen);
    }

    const logoutHanlder = () =>{
        const logout = window.confirm('정말 로그아웃하시겠습니까?');

        if(logout === true){
            localStorage.removeItem('token');
            alert("로그아웃이 완료되었습니다");
            window.location.href = "/";
        }

    }
    return(
        <div className = {`sidebar ${isSideBarOpen? 'open' : ''}`} onMouseEnter={sidebarMouseHandler} onMouseLeave={sidebarMouseHandler}>
            <ul>
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

            <div className="sidebar-footer">
                <h3>Contact us</h3>
                <a href="#none">youtube</a>
                <a href="#none">Twitter</a>
                <a href="#none">Email</a>
            </div>
        </div>
    );
}

//export default Sidebar;