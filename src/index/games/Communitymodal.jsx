import React, { useEffect, useState } from "react";
import {CheckLoginSession, tokenDecode } from "../js/Loginsession";
import { nowDate } from "../js/util";
import { deleteComment, getDataGameFilter, getKeyData, putData, updateComment } from "../js/CommentDB";
import "../css/community.css";



const joayoBtnHandler = async (date) =>{

    alert('댓글을 추천했습니다');

    console.log('데이터키: ',date);

    let currecommand = await getKeyData(date);


    const goodresult = {
        'date': currecommand.date,
        'comment': currecommand.comment,
        'commentgame': currecommand.commentgame,
        'id': currecommand.id,
        'recommand': currecommand.recommand + 1,
    }

    updateComment(goodresult);

    window.location.reload();

    console.log("테스트 / curcommand: ", goodresult);



}




const deleteHandler = async (date) =>{
    if (window.confirm('삭제하시겠습니까?')){
        alert('삭제 완료');

        await deleteComment(date);

        window.location.reload();
    }

}


const Textbox = (comment) =>{

    const [modifyBtnClick, setModifyBtnClick] = useState(false);
    const [modalChange, setModalChange] = useState('');
    const [editingId, setEditingId] = useState('')

    const maxtext = 120;

    const modifyBtnClickHandler = (currdate) =>{
        setEditingId(currdate);
        setModifyBtnClick(prevstate => !prevstate);
    }

    const modalChangeHandler = (e) =>{
        const inputtext = e.target.value;

        if (inputtext.length >= maxtext) {
            alert(`텍스트는 최대 ${maxtext}자 까지만 입력 가능합니다`);
          }
        else{
            setModalChange(inputtext);
        }
    }

    const modifyModal = () =>{
        return(
            <div className="comment-content"><input type="text" onChange={modalChangeHandler}/></div>
        );
    }
    return(
        <ul>
            {
                comment.map((data) => (
                    <div className="comment-wrap" key={data.date}>
                        <div className="comment-row-main">
                            {
                                (modifyBtnClick && editingId === data.date)
                                ?
                                modifyModal()
                                :
                                <div className="comment-content">{data.comment}</div>
                            }
                            <div className="comment-like">{data.recommand}<img src="../../../public/imgs/like.png" alt="good" onClick={() =>joayoBtnHandler(data.date)}/></div>
                        </div>
                        <div className="comment-row-etc">
                            <div className="comment-name">{data.id}</div>
                            <div className="comment-date">{data.date}</div>
                            {
                                (modifyBtnClick && editingId === data.date)
                                ?
                                <><button className="modify-delete" onClick={null}>submit</button><button className="modify-delete" onClick={modifyBtnClickHandler}>X</button></>
                                :
                                <><button className="modify-delete" onClick={() => modifyBtnClickHandler(data.date)}>modify</button><button className="modify-delete" onClick={() => deleteHandler(data.date)}>delete</button></>
                                
                            }
                        </div>
                    </div>
                ))
            }
        </ul>
    );
}


const Communitymodal = (games) =>{

    const [textstate, settextstate] = useState('');
    const [dataarray, setdataarray] = useState([]);

    const maxtext = 120;

    const textboxChangeHandler= (e) =>{
        const inputtext = e.target.value;

        if (inputtext.length >= maxtext) {
            alert(`텍스트는 최대 ${maxtext}자 까지만 입력 가능합니다`);
          }
        else{
            settextstate(inputtext);
        }
    }
    const textSubmitHandler= () =>{
        if (CheckLoginSession() != false){
            if (window.confirm('댓글을 등록하시겠습니까?')){

                const usercomment = textstate;
                if (usercomment !== ''){
                    const decodetoken = tokenDecode();
    
                    const userdata = {
                        'id': decodetoken.username,
                        'comment': usercomment,
                        'date': nowDate('public'),
                        'recommand': 0,
                        'commentgame': games,
    
                    }
    
                    putData(userdata);
                    alert('댓글이 등록되었습니다');
    
                    settextstate('')
                    window.location.reload();
                }
                else{
                    alert('댓글이 없습니다');
                }
            }
        }  
    }

    const fetchcomment = async () =>{
        const data = await getDataGameFilter(games);
        setdataarray(data);
        console.log('데이터 불러오기 성공');
    }

    useEffect(() =>{
        fetchcomment();

    }, [])

    return(
        <div className="community">
            <div className="text_box">
                {
                    Textbox(dataarray)
                }
            </div>
            <div className="text">
                <input type="text" placeholder="댓글을 입력하세요." onChange={textboxChangeHandler} value={textstate}/>
                <button onClick={textSubmitHandler}>등록</button> <p>{textstate.length}/{maxtext} 자</p>
            </div>
        </div>
    );
}


export default Communitymodal;