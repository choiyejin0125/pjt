import React from "react";
import "../css/company.css";

const companyUIFactory = () =>{
    return(
        <div className="company-container">
            asdf
        </div>
    );
}


const Company = () =>{
    return(
        <div className="company-wrap">
            {
                companyUIFactory()
            }
        </div>
    );
}

export default Company;