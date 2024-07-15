import React from "react";
import "../css/games.css";

const Games = () =>{
    return(
    <div id="game_wrap">
        <div className="upper_game">
            <div className="game_img">
                <img src="#none" alt="large_img" />
            </div>
            <div className="game_banner">
                <div className="arrow left_arrow">
                <img src="" alt="left_arrow"/>
                </div>
                <ul>
                    <li><img src="#none" alt="img1" /></li>
                    <li><img src="#none" alt="img2" /></li>
                    <li><img src="#none" alt="img3" /></li>
                    <li><img src="#none" alt="img4" /></li>
                    <li><img src="#none" alt="img5" /></li>
                    <li><img src="#none" alt="img6" /></li>
                </ul>
                <div className="arrow right_arrow">
                <img src="#none" alt="right_arrow"/>
                </div>
            </div>
        </div>
        <div className="lower_game">
            <div className="community">
                community
            </div>
            <div className="game_new_info">
                game_new_info
            </div>
            <div className="game_info">
                game_info
            </div>
        </div>
    </div>
    );
}

export default Games;