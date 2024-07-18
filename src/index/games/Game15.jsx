import "../css/games.css";
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
        src="..\imgs\gameimgs\game15/game15_img01.jpg"
        name="여귀교 (The Bridge Curse Road to Salvation)"

        info_title="두려움, 불안감 및 웃음은 청년들의 상징입니다. 1인칭 시점에서 친구들과 진정한 초자연 현상을 경험하고 끝까지 살아남으세요. 은 대만 도시 전설 괴담과 그 이면의 흥미로운 진실을 이야기하는 공포 영화를 각색한 게임입니다."

        genre="공포"
        originator="SOFTSTAR ENTERTAINMENT"
        distributor="SOFTSTAR ENTERTAINMENT"
        language="한국어, 영어, 태국어, 중국어(간체), 중국어(번체)"
        use="청소년이용불가"
        date="2024.03.28"

        newinfo_txt1="모바일 최초로 Unreal Engine을 이용한 고퀄리티 3D 액션 RPG!"
        newinfo_txt2="2014년 앱스토어 인기게임 1위,구글 플레이스토어 최고 매출 1위,구글 플레이 매출 세계 4위 기록"
        newinfo_txt3="액션RPG 최초 500만 다운로드 돌파"
        newinfo_txt4="가벼운 캐주얼 장르 위주의 모바일 게임 시장에서 본격적인 코어 RPG 시장을 연 게임"
        />
        </>
    );
}



const Game15 = () => {
    return(
        <>
        <Games />
        <div id="game_wrap">
            <Contents />
        </div>

    </>
    );
}

export default Game15;