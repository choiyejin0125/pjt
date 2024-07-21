import { jwtDecode } from "jwt-decode";
import { nowDate } from "./util";


export const tokenDecode = () =>{

    const token = localStorage.getItem('token');

    if (token !== null){
        console.log("로그인 상태가 아닐때는 이게 나오면 안됨");
        const decodetoken = jwtDecode(token);

        return decodetoken;
    }
    else{
        return null;
    }


}

export const getLoginSession = (userid) =>{
    const header = btoa(JSON.stringify({ alg: 'HS256', typ: 'JWT' }));
    const payload = btoa(JSON.stringify({ username: userid, exp: nowDate("common") + 3600 }));
    const signature = btoa('secret'); 

    const token = `${header}.${payload}.${signature}`;

    if (localStorage.getItem('token') == null){
        localStorage.setItem('token', token);
        console.log('토큰 발급 완료: ', token);
    }
    else{
        alert('이미 로그인 된 상태입니다!');
    }


}

export const CheckLoginSession = () =>{
    const token = localStorage.getItem('token');

    if (!token){
        alert('로그인이 필요한 서비스입니다');
        window.location.href = "/register";
        return false;
    }
    else{
        try{
            const decodetoken = tokenDecode();

            if (nowDate("common") > decodetoken.exp){
                localStorage.removeItem('token');
                alert("세션이 만료되었습니다. 다시 로그인해주세요");
                window.location.href = "/register";
            }
        } catch(error){
            console.error('토큰 디코딩 실패:', error);
        }
    }
}

