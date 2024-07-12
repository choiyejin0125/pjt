import React from "react";


import Header from "./Header";
import Footer from "./Footer";
import Sidebar from "./Sidebar";
import Home from "./Home";

// import Community from "./community/Community";

// import Company from "./company/Company";

// import Employ from "./employ/Employ";

// import Games from "./games/Games";

// import Modify from "./member/Modfy";
// import Signin from "./member/Signin";
// import Signup from "./member/Signup";

import './css/index.css';
import './css/common.css';




const Wrap = () => {
    return(
        <>
        <div id="wrap">
            
            <Header />
            <Sidebar />
            <Home />
            <Footer />
        </div>
        </>
    );
}

export default Wrap;