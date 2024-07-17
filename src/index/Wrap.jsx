import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

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

import Game1 from "./games/Game1";
import Game2 from "./games/Game2";
import Game3 from "./games/Game3";
import Game4 from "./games/Game4";
import Game5 from "./games/Game5";
import Game6 from "./games/Game6";
import Game7 from "./games/Game7";
import Game8 from "./games/Game8";
import Game9 from "./games/Game9";
import Game10 from "./games/Game10";
import Game11 from "./games/Game11";
import Game12 from "./games/Game12";
import Game13 from "./games/Game13";
import Game14 from "./games/Game14";
import Game15 from "./games/Game15";
import Game16 from "./games/Game16";
import Game17 from "./games/Game17";
import Game18 from "./games/Game18";
import Game19 from "./games/Game19";
import Game20 from "./games/Game20";

import './css/index.css';
import './css/common.css';
import Modify from "./member/Modfy.jsx";
import Deleteinfo from "./member/Deleteinfo.jsx";
import PIProcessingPolicy from "./textpage/PIProcessingPolicy.jsx";
import TermsAndConditions from "./textpage/termsAndConditions.jsx";

const Layout = ({ children }) => {
  return (
    <div id="wrap">
      <Header />
      {children}
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
        <Route path="/games/*" element={<Layout><Games /></Layout>} />
        <Route path="/games/game1" element={<Layout><Game1 /></Layout>} />
        <Route path="/games/game2" element={<Layout><Game2 /></Layout>} />
        <Route path="/games/game3" element={<Layout><Game3 /></Layout>} />
        <Route path="/games/game4" element={<Layout><Game4 /></Layout>} />
        <Route path="/games/game5" element={<Layout><Game5 /></Layout>} />
        <Route path="/games/game6" element={<Layout><Game6 /></Layout>} />
        <Route path="/games/game7" element={<Layout><Game7 /></Layout>} />
        <Route path="/games/game8" element={<Layout><Game8 /></Layout>} />
        <Route path="/games/game9" element={<Layout><Game9 /></Layout>} />
        <Route path="/games/game10" element={<Layout><Game10 /></Layout>} />
        <Route path="/games/game11" element={<Layout><Game11 /></Layout>} />
        <Route path="/games/game12" element={<Layout><Game12 /></Layout>} />
        <Route path="/games/game13" element={<Layout><Game13 /></Layout>} />
        <Route path="/games/game14" element={<Layout><Game14 /></Layout>} />
        <Route path="/games/game15" element={<Layout><Game15 /></Layout>} />
        <Route path="/games/game16" element={<Layout><Game16 /></Layout>} />
        <Route path="/games/game17" element={<Layout><Game17 /></Layout>} />
        <Route path="/games/game18" element={<Layout><Game18 /></Layout>} />
        <Route path="/games/game19" element={<Layout><Game19 /></Layout>} />
        <Route path="/games/game20" element={<Layout><Game20 /></Layout>} />
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