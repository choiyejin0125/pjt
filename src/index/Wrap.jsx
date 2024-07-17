import React from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import Community from "./community/Community";
import Company from "./company/Company";
import Employ from "./employ/Employ";
import Games from "./games/Games";
import Register from "./member/Register.jsx";
import Pr from "./Pr.jsx";
import NG from "./NG.jsx";

import './css/index.css';
import './css/common.css';
import Modify from "./member/Modfy.jsx";
import Deleteinfo from "./member/Deleteinfo.jsx";
import PIProcessingPolicy from "./textpage/PIProcessingPolicy.jsx";
import TermsAndConditions from "./textpage/termsAndConditions.jsx";

const Layout = ({ children }) => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";



  return (
    <div id="wrap">
      <Header />
      {isHomePage ? <Home /> : children}
      <Footer />
    </div>
  );
};

const Wrap = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/company" element={<Layout><Company /></Layout>} />
        <Route path="/pr" element={<Layout><Pr /></Layout>} />
        <Route path="/register" element={<Layout><Register /></Layout>} />
        <Route path="/community" element={<Layout><Community /></Layout>} />
        <Route path="/games" element={<Layout><Games /></Layout>} />
        <Route path="/employ" element={<Layout><Employ /></Layout>} />

        <Route path="/modify" element={<Layout><Modify /></Layout>} />
        <Route path="/deleteinfo" element={<Layout><Deleteinfo /></Layout>} />
        <Route path="/terms" element={<Layout><TermsAndConditions/></Layout>} /> 
        <Route path="/policy" element={<Layout><PIProcessingPolicy /></Layout>} />
        <Route path="/*" element={<Layout><NG /></Layout>} />
      </Routes>
    </BrowserRouter>
  );
};

export default Wrap;