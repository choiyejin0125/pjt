import React, { useEffect } from "react";
import { CheckLoginSession } from "./js/Loginsession";


const Community = () =>{
    useEffect(() =>{
        CheckLoginSession();
    }, [])
    return(
        <>
        Community
        </>
    );
}

export default Community;