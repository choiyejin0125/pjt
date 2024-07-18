import React, { useEffect, useRef, useState } from "react";
import { CheckLoginSession, tokenDecode } from "../js/Loginsession";
import "../css/community.css";
import { nowDate } from "../js/util";
import { getAllData, putData } from "../js/CommentDB";

const createComment = (comment) =>{
    return(
        <ul>
            {
                comment.map((data) => (
                    <div className="comment-wrap" key={data.date}>
                        <div className="comment-row-main">
                            <div className="comment-content">{data.comment}</div>
                            <div className="comment-like">{data.recommand}<img src="" alt="good" /></div>
                        </div>
                        <div className="comment-row-etc">
                            <div className="comment-name">{data.id}</div>
                            <div className="comment-date">{data.date}</div>
                        </div>
                    </div>
                ))
            }
        </ul>
    );
}


const Community = () =>{
    const [iswritemodal, setiswritemodal] = useState(false);
    const [dataarray, setdataarray] = useState([]);
    const [text, settext] = useState('');

    const maxtext = 120;



    const fetchcomment = async () =>{
        const data = await getAllData();
        setdataarray(data);
        console.log('데이터 불러오기 성공');
    }

    const writeBtnClickHandler = () =>{
        setiswritemodal(prevstate => !prevstate);
    }

    const textWriteHandler = (e) =>{
        const inputtext = e.target.value;

        if (inputtext.length >= maxtext) {
            alert(`텍스트는 최대 ${maxtext}자 까지만 입력 가능합니다`);
          }
        else{
            settext(inputtext);
        }
    }

    const writeHandler = () =>{
        if (window.confirm('댓글을 등록하시겠습니까?')){

            const usercomment = text;
            if (usercomment !== ''){
                const decodetoken = tokenDecode();

                const userdata = {
                    'id': decodetoken.username,
                    'comment': usercomment,
                    'date': nowDate('public'),
                    'recommand': 0

                }

                putData(userdata);
                alert('댓글이 등록되었습니다');

                settext('')
                window.location.reload();
            }
            else{
                alert('댓글이 없습니다');
            }
        }  
    }

    const writeModal = () =>{

        return(
            <div className="writemodal">
                <h1>댓글 작성</h1>
                <div className="modal-main">
                <b onClick={writeBtnClickHandler}>X</b>
                <input type="text" name="u_textarea"  onChange={textWriteHandler} placeholder="여기에 댓글을 적어주세요"/>
                <button onClick={writeHandler}>게시</button> <p>{text.length}/{maxtext} 자</p>
                </div>
            </div>
        );
    }

    useEffect(() =>{
        CheckLoginSession();
        fetchcomment();

    }, [])

    return(
        <div className="community-main">
            {
                iswritemodal
                ?
                writeModal()
                :
                null
            }
            <div className="pop-comment">
                인기 게시글 모음
            </div>
            <div className="comment-container">
                    {
                        createComment(dataarray)
                    }
            </div>
            <div className="button">
                <button onClick={writeBtnClickHandler}>글 작성</button>
            </div>
        </div>
    );
}

export default Community;