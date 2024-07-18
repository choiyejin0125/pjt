import React from "react";
import "../css/games.css";
import {  Route, Routes, Link } from "react-router-dom";



const Games = () => {

    
    return(
        <>
        <nav>
        
        <div className="game_menubar">
        <ul>
            <li>
                <Link to="/games/game1">리미디엄 (REMEDIUM)</Link>
            </li>
            <li>
                <Link to="/games/game2">귀곡팔황 (Tale of Immortal)</Link>
            </li>
            <li>
                <Link to="/games/game3">환세취호전 플러스 (GENSEISUIKODEN PLUS)</Link>
            </li>
            <li>
                <Link to="/games/game4">갓 오브 웨폰(God Of Weapons)</Link>
            </li>
            <li>
                <Link to="/games/game5">드래곤 크로니클: 블랙 티어스 (Dragon Chronicles: Black Tears)</Link>
            </li>
            <li>
                <Link to="/games/game6">Game6</Link>
            </li>
            <li>
                <Link to="/games/game7">Game7</Link>
            </li>
            <li>
                <Link to="/games/game8">Game8</Link>
            </li>
            <li>
                <Link to="/games/game9">Game9</Link>
            </li>
            <li>
                <Link to="/games/game10">Game10</Link>
            </li>
        </ul>
         <ul>
            <li>
                <Link to="/games/game11">Game11</Link>
            </li>
            <li>
                <Link to="/games/game12">Game12</Link>
            </li>
            <li>
                <Link to="/games/game13">Game13</Link>
            </li>
            <li>
                <Link to="/games/game14">Game14</Link>
            </li>
            <li>
                <Link to="/games/game15">Game15</Link>
            </li>
            <li>
                <Link to="/games/game16">Game16</Link>
            </li>
            <li>
                <Link to="/games/game17">Game17</Link>
            </li>
            <li>
                <Link to="/games/game18">Game18</Link>
            </li>
            <li>
                <Link to="/games/game19">Game19</Link>
            </li>
            <li>
                <Link to="/games/game20">Game20</Link>
            </li>
        </ul>
        </div>
        </nav>

    
        </>
    );
}

export default Games;



