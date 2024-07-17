import React, { useEffect, useState } from "react";
import "../css/termspolicy.css";
import policy from "../textpage/policy.txt";

const PIProcessingPolicy = () =>{

    const [plc, setplc] = useState('');
    useEffect(() =>{
        fetch(policy).then(response => response.text())
        .then(data => setplc(data))
        .catch(error => console.error('Error loading terms:', error));
    }, [])

    return(
        <div>
            <div className="head">
                개인정보처리방침
            </div>
            <div className="body">
                {
                    plc
                }
            </div>
        </div>
    );
}

export default PIProcessingPolicy;