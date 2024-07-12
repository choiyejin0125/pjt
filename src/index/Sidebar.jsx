import React, { useState } from "react";
import  "./css/Sidebar.css";
import { Link } from "react-router-dom";


const Sidebar = () =>{

    const [isSideBarOpen, setisSideBarOpen] = useState(false);

    const sidebarMouseHandler = () =>{
        setisSideBarOpen(prevState => !prevState);
        console.log('changesidebarstate: ' + isSideBarOpen);
    }
    return(
        <div className = {`sidebar ${isSideBarOpen? 'open' : ''}`} onMouseEnter={sidebarMouseHandler} onMouseLeave={sidebarMouseHandler}>
            <ul>
                <li><Link to ="/">홈</Link></li>
                <li><Link to ="/company">회사 소개</Link></li>
                <li><Link to ="/register">로그인/회원가입</Link></li>
                <li><Link to ="/games">게임</Link></li>
                <li><Link to ="/community">커뮤니티</Link></li>
                <li><Link to ="/employ">채용 공고</Link></li>
                <li><Link to ="/pr">보도자료</Link></li>
            </ul>

            <div className="sidebar-footer">
                Contact us
                <a href="#none">youtube</a>
                <a href="#none">Twitter</a>
                <a href="#none">Email</a>
            </div>
        </div>
    );
}

export default Sidebar;