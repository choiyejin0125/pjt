import React from "react";
import "../css/games.css";
import {  Route, Routes, Link } from "react-router-dom";



const Games = () => {

    
    return(
        <>
        <nav>
        <div className="games_wrap">
        <div className="games">
            <h6>GAMES</h6>
        </div>
        <div className="game_menubar">
            <div><Link to="/games/game1">리미디엄</Link></div>
           
            <div><Link to="/games/game2">귀곡팔황</Link></div>
        
            <div><Link to="/games/game3">환세취호전 플러스</Link></div>
            
            <div><Link to="/games/game4">갓 오브 웨폰</Link></div>
            
            <div><Link to="/games/game5">드래곤 크로니클: 블랙 티어스</Link></div>
            
            <div><Link to="/games/game6">올드 월드</Link></div>
           
            <div><Link to="/games/game7">나이트 오버로디드</Link></div>
            
            <div><Link to="/games/game8">스페이스 프레셔 3D: 서막</Link></div>
            
            <div><Link to="/games/game9">세르케</Link></div>
            
            <div><Link to="/games/game10">아이 씨 레드</Link></div>
            
            <div><Link to="/games/game11">엘든 블링</Link></div>
            
            <div><Link to="/games/game12">로터스 랜턴: 보련등 이야기</Link></div>
         
            <div><Link to="/games/game13">메트로 시뮬레이터 2</Link></div>
           
            <div><Link to="/games/game14">샴블즈</Link></div>
            
            <div><Link to="/games/game15">여귀교</Link></div>
            
            <div><Link to="/games/game16">헬프더캣츠 Demo</Link></div>
            
            <div><Link to="/games/game17">카라반 샌드위치</Link></div>
            
            <div><Link to="/games/game18">이더본</Link></div>
            
            <div><Link to="/games/game19">슬립스트림</Link></div>
           
            <div><Link to="/games/game20">RPG 메이커 MZ</Link></div>
            </div>
        </div>
        </nav>

    
        </>
    );
}

export default Games;



