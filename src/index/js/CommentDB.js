import { openDB } from "idb";

const dbPromise = openDB('usercomment', 1, {
    upgrade(db) { //db 생성
        if (!db.objectStoreNames.contains('uscomment')){
            db.createObjectStore('uscomment', {keyPath: 'date'});
        }
    }
});

export async function addComment(data){ // db에 데이터 추가
    const db = await dbPromise;
    const tx = db.transaction('uscomment', 'readwrite');
    const store = tx.objectStore('uscomment');


    await store.add(data);
    console.log('코멘트 전송 성공');
    await tx.done;

}

export async function updateComment(data){ // 데이터 업데이트
    const db = await dbPromise;
    const tx = db.transaction('uscomment', 'readwrite');
    const store = tx.objectStore('uscomment');

    await store.put(data);
    console.log('update success');
    await tx.done;
}

export async function getAllComment(){
    const db = await dbPromise;
    const tx = db.transaction('uscomment', 'readonly');
    const store = tx.objectStore('uscomment');
    const allcomm = await store.getAll();

    await tx.done;

    return allcomm;
}


export async function getKeyData(datekey){
    const db = await dbPromise;
    const tx = db.transaction('uscomment', 'readonly');
    const store = tx.objectStore('uscomment');

    const currecommand = await store.get(datekey);

    console.log("테스트 / 좋아요(currecommand: ", currecommand);

    await tx.done;

    return currecommand;
}



export async function getGameComment(games){

    const allcomm = await getAllComment();
    const filteredComments = allcomm.filter(comment => comment.commentgame.games === games.games);

    console.log(`테스트(filteredComments):`, filteredComments);

    return filteredComments;


}

export async function deleteComment(datekey){

    const db = await dbPromise;
    const tx = db.transaction('uscomment', 'readwrite');
    const store = tx.objectStore('uscomment');

    await store.delete(datekey);

    console.log("데이터 삭제 완료");

    await tx.done;


}




export const putData = (userdata) =>{ // 데이터 전송
    addComment({id: userdata.id, comment: userdata.comment, date: userdata.date, recommand: 0, commentgame: userdata.commentgame })
}

export const updateData = (userdata) =>{
    updateComment({id: userdata.id, comment: userdata.comment, date: userdata.date, commentgame: userdata.commentgame, recommand: userdata.recommand });
}


export const  getAllData = async () =>{
    const data = await getAllComment();
    console.log('테스트/getalldata: ', data);
    return data; 
}


export const  getDataGameFilter = async (games) =>{
    const data = await getGameComment(games);
    console.log('테스트/getalldata: ', data);
    return data; 
}