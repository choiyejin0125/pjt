import "../css/games.css";
import Communitymodal from "./Communitymodal";
import Games from "./Games";

const GameInfos = (props) => {
    return(
        <>
        <div className="main_img">
            <img src={props.src} alt="thum" />
        </div>
        <h2>{props.name}</h2>
        <div className="lower_game">
            <div className="game_info">
                <div>
                    <h2 className="game_story">스토리</h2>
                    <p className="title">{props.info_title}</p>
                </div>
                
                <div>
                <h2 className="game_infos">게임 정보</h2>
                <div className="game_infos">
                    <div>
                        <p>장르</p>
                        <p>창작자</p>
                        <p>배급사</p>
                        <p>지원언어</p>
                        <p>이용등급</p>
                        <p>출시일</p>
                    </div>
                    <div>
                        <p>{props.genre}</p>
                        <p>{props.originator}</p>
                        <p>{props.distributor}</p>
                        <p>{props.language}</p>
                        <p>{props.use}</p>
                        <p>{props.date}</p>
                    </div>
                </div>
            </div>
        </div>

            <div className="game_new_info">
                <div>
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
            </div> 

            <Communitymodal games="game8" />
        </div>   
    </>
        );

 }
const Contents = () => {
    return(
        <>
        <GameInfos 
        src="..\imgs\gameimgs\game8/game8_img01.jpg"
        name="스페이스 프레셔 3D: 서막 (Space Pressure 3D: Prelude)"

        info_title="무책임한 귀족 체제에 도전하는 두 용감한 우주 아마존의 이야기에 빠져보세요!"

        genre="액션"
        originator="Maze Team"
        distributor="Tinaynox"
        language="영어, 한국어, 러시아어, 기타언어"
        use="청소년이용불가"
        date="2024.07.16"

        newinfo_txt1="모바일 최초로 Unreal Engine을 이용한 고퀄리티 3D 액션 RPG!"
        newinfo_txt2="2014년 앱스토어 인기게임 1위,구글 플레이스토어 최고 매출 1위,구글 플레이 매출 세계 4위 기록"
        newinfo_txt3="액션RPG 최초 500만 다운로드 돌파"
        newinfo_txt4="가벼운 캐주얼 장르 위주의 모바일 게임 시장에서 본격적인 코어 RPG 시장을 연 게임"
        />
        </>
    );
}



const Game8 = () => {
    return(
        <>
        <Games />
        <div id="game_wrap">
            <Contents />
        </div>

    </>
    );
}

export default Game8;