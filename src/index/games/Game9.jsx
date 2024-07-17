import React from "react";
import Games from "./Games";
import "../css/games.css";

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

            <div className="community">
                <div className="text_box">

                </div>
                <div className="text">
                    <input type="text" placeholder="댓글을 입력하세요." />
                    <button>등록</button>
                </div>
            </div>
        </div>   
    </>
        );

 }
const Contents = () => {
    return(
        <>
        <GameInfos 
        src="../imgs/1200x800.png"

        info_title="‘던전 스토커즈’는 전통적인 던전 RPG의 탐험과 탈출 서바이벌 장르의 즐거움을 경험할 수 있는 PvEvP 던전 크롤러 게임입니다. 당신은 돈, 명예, 진실을 찾기 위해 던전을 모험하는 '던전 스토커즈'가 됩니다. 각자의 이야기를 가진 스토커즈들을 선택하여 성장시키고,
믿을 수 있는 동료들과 함께 마녀의 저주로 계속 변화하는 던전이라는 환경에 맞서 싸워야 합니다.
던전 안에서는 다양한 몬스터와 다른 스토커즈들이 각자의 목적으로 당신의 생명을 위협할 것입니다."

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



const Game9 = () => {
    return(
        <>
        <Games />
        <div id="game_wrap">
            <Contents />
        </div>

    </>
    );
}

export default Game9;