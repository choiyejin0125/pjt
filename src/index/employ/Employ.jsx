import React, { useState } from "react";
import "../css/employ.css";


const writeModal = () =>{
    return(
        <div className="writemodal">
            <button>X</button>
            <select name="jobselectbox" >
                    <option value="planner">기획</option>
                    <option value="artist">아트</option>
                    <option value="programmer">프로그래밍</option>
            </select>
            <input type="text" name="game" id="" />
            <input type="text" name="title" id="" />
            <input type="date" name="date" id="" />
            <input type="date" name="limit" id="" />
            <button>작성</button>
        </div>
    );
}


const employTemplete = () =>{
    return(
        <ul className="emp-templete">
            <li className="emp-itme">게임이름</li>
            <li className="emp-itme">제목</li>
            <li className="emp-itme">분야</li>
            <li className="emp-itme">개제일자</li>
            <li className="emp-itme">기간</li>
        </ul>
    );
}



const Employ = () =>{

    const [writemodal, setwritemodal] = useState(false);

    const writeEmployHandler = () =>{

    }

    return(
        <div className="employ-wrap">
        <h3>채용 공고</h3>
        <div className="employ-main">
            <div className="employ-search">
                검색: <input type="text" name="search"/>
                <select name="jobselectbox" >
                    <option value="planner">기획</option>
                    <option value="artist">아트</option>
                    <option value="programmer">프로그래밍</option>
                </select>
                <button>search</button>
            </div>
            {
                employTemplete()

            }
        
        </div>
        <button onClick={writeEmployHandler}>글 작성</button>
        </div>
    );
}

export default Employ;