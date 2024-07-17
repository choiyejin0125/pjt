import React, { useEffect, useState } from "react";
import "../css/termspolicy.css";
import terms from  "../textpage/terms.txt";

const TermsAndConditions = () =>{

    const[tac, settac] = useState('');

    useEffect(() =>{
        fetch(terms).then(response => response.text())
        .then(data => settac(data))
        .catch(error => console.error('Error loading terms:', error));
    }, [])

    return(
        <div>
            <div className="head">
                이용약관
            </div>
            <div className="body">
                {
                    tac
                }
            </div>
        </div>
    );
}

export default TermsAndConditions;