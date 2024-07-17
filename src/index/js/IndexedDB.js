import { openDB } from "idb";
import { getLoginSession } from "./Loginsession";

const dbPromise = openDB('userdata', 1, {
    upgrade(db) { //db 생성
        if (!db.objectStoreNames.contains('users')){
            db.createObjectStore('users', {keyPath: 'id'});
        }
    }
});
export async function addUser(user){ // db에 데이터 추가
    const db = await dbPromise;
    const tx = db.transaction('users', 'readwrite');
    const store = tx.objectStore('users');

    try{
        await store.add(user);

        alert('가입이 승인되었습니다');

        await tx.done;

    }
    catch (error) {
        if (error.name === 'ConstraintError') {
            alert('이미 존재하는 ID입니다. 다른 ID를 사용해주세요.');
            tx.abort();
            window.location.reload();
            
        } else {
            throw error;
        }

}
}
export async function getUser(id){ // 데이터 찾아오기
    const db = await dbPromise;
    return db.get('users', id);
}

/*
export async function getAllUserId(){
    const db = await dbPromise;
    const allid = await db.getAllKeys('users');

    console.log('테스트(db id)', allid)
    return allid;
}
*/

export async function updateuser(user){ // 데이터 업데이트
    const db = await dbPromise;
    const tx = db.transaction('users', 'readwrite');
    const store = tx.objectStore('users');

    await store.put(user);
    console.log('update success');
    await tx.done;
}








const Register = (userdata) =>{ // 회원가입
    addUser({id: userdata.id, pw: userdata.pw, name: userdata.name, email: userdata.email, active: true })
}


const Login = async(logindata) =>{
    const searchUid = await getUser(logindata.id);
    if (searchUid === undefined || searchUid.active === false){
        alert('ID 또는 비밀번호가 틀립니다');
    }
    else{
        if (searchUid.id === logindata.id && searchUid.pw === logindata.pw){
            alert('로그인 성공!');
            getLoginSession(logindata.id);
            window.location.href = "/";
        }
        else{
            alert('ID 또는 비밀번호가 틀립니다');
        }
    }
}

const Modify = (userdata) =>{
    updateuser({id: userdata.id, pw: userdata.pw, name: userdata.name, email: userdata.email, active: true })
}

const Delete = async(databox) =>{
    const searchUid = await getUser(databox.id);
    if (searchUid.pw === databox.pw){
        alert('탈퇴를 성공적으로 마쳤습니다');
        updateuser({id: databox.id, active: false});
        localStorage.removeItem('token');
        window.location.href = "/";
    }
    else{
        alert('비밀번호가 틀립니다');
    }

}



export const DBconnection = (data, purpose) =>{
    switch(purpose){
        case 'register':
            Register(data);
            break;
        case 'login':
            Login(data);
            break;
        case 'modify':
            Modify(data);
            break;
        case 'delete':
            Delete(data);
            break;
        default:
            console.log('Unidentified purpose');
            throw new Error('invalid access');
    }
}