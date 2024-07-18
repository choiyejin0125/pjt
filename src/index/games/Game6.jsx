import React from "react";
import Games from "./Games";
import "../css/games.css";
import Communitymodal from "./Communitymodal";

const GameInfos = (props) => {
    return(
        <>
        <div className="main_img">
            <img src={props.src} alt="thum" />
        </div>
        <div className="lower_game">
            <div className="game_info">
                <h2 className="game_story">스토리</h2>
                <p>{props.info_title}</p>
                

                <h2 className="game_infos">게임 정보</h2>
                <div className="game_infos">
                    <div>
                        <p>장르</p>
                        <p>창작자</p>
                        <p>배급사</p>
                        <p>지원언어</p>
                        <p>이용등급</p>
                    </div>
                    <div>
                        <p>{props.genre}</p>
                        <p>{props.originator}</p>
                        <p>{props.distributor}</p>
                        <p>{props.language}</p>
                        <p>{props.use}</p>
                    </div>
                </div>
            </div>

            <div className="game_new_info">
            <h2 className="pressrelease">보도자료</h2>
                <ul>
                    <li>
                        <a href="#none">{props.newinfo_txt1}</a>
                    </li>
                    <li>
                        <a href="#none">{props.newinfo_txt2}</a>
                    </li>
                    <li>
                        <a href="#none">{props.newinfo_txt3}</a>
                    </li>
                    <li>
                        <a href="#none">{props.newinfo_txt4}</a>
                    </li>
                </ul>
            </div> 

            <Communitymodal games="game6" />
        </div>   
    </>
        );

 }
const Contents = () => {
    return(
        <>
        <GameInfos 
        src="../imgs/1200x800.png"

        info_title="좀비가 창궐한 조선에서, 플레이어는 각자의 목표를 위해 처절한 전투를 시작합니다.
한국의 미를 느낄 수 있는 배경과 도전 의식을 고취시키는 특유의 난이도를 플레이 해보세요.
강력한 패턴의 보스를 친구들과 협력해 무찌를 수도 있습니다. 깊이 있는 액션을 경험하세요."

        genre="RPG"
        originator="WAYCODER"
        distributor="DAEWON MEDIA"
        language="영어,일본어"
        use="12세 이용가"

        newinfo_txt1="모바일 최초로 Unreal Engine을 이용한 고퀄리티 3D 액션 RPG!"
        newinfo_txt2="2014년 앱스토어 인기게임 1위,구글 플레이스토어 최고 매출 1위,구글 플레이 매출 세계 4위 기록"
        newinfo_txt3="액션RPG 최초 500만 다운로드 돌파"
        newinfo_txt4="가벼운 캐주얼 장르 위주의 모바일 게임 시장에서 본격적인 코어 RPG 시장을 연 게임"
        />
        </>
    );
}



const Game6 = () => {
    return(
        <>
        <Games />
        <div id="game_wrap">
            <Contents />
        </div>

    </>
    );
}

export default Game6;