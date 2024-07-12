import { jwtDecode } from "jwt-decode";


const checkSessionExpired = (exptime) =>{

}

export const getLoginSession = (userid) =>{
    const header = btoa(JSON.stringify({ alg: 'HS256', typ: 'JWT' }));
    const payload = btoa(JSON.stringify({ username: userid, exp: Date.now() + 3600000 }));
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
        return;
    }
    else{
        try{
            const decodetoken = jwtDecode(token);
            console.log('디코딩 테스트: ', decodetoken);
        } catch(error){
            console.error('토큰 디코딩 실패:', error);
        }
    }
}

