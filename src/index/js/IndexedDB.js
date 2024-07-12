import { openDB } from "idb";
import { setislogined } from "./private";
import { getLoginSession } from "./Loginsession";

const dbPromise = openDB('userdata', 1, {
    upgrade(db) { //db 생성
        if (!db.objectStoreNames.contains('users')){
            db.createObjectStore('users', {keyPath: 'id'});
        }
    }
});
async function addUser(user){ // db에 데이터 추가
    const db = await dbPromise;
    const tx = db.transaction('users', 'readwrite');
    const store = tx.objectStore('users');

    await store.add(user);
    await tx.done;
}
async function getUser(id){ // 데이터 찾아오기
    const db = await dbPromise;
    return db.get('users', id);
}








const Register = (userdata) =>{ // 회원가입
    addUser({id: userdata.id, pw: userdata.pw, name: userdata.name, email: userdata.email })
}


const Login = async(logindata) =>{
    const searchUid = await getUser(logindata.id);
    if (searchUid === undefined){
        alert('ID 또는 비밀번호가 틀립니다');
        return false;
    }
    else{
        if (searchUid.id === logindata.id && searchUid.pw === logindata.pw){
            alert('로그인 성공!');
            getLoginSession(logindata.id);
        }
        else{
            alert('ID 또는 비밀번호가 틀립니다');
        }
    }
}



export const DBconnection = (data, purpose) =>{
    switch(purpose){
        case 'register':
            Register(data);
            break;
        case 'login':
            Login(data)
            break;
        case 'modify':
            break;
        case 'delete':
            break;
        default:
            console.log('Unidentified purpose');
            throw new Error('invalid access');
    }
}