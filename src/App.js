import React from "react";
import NavBar from "./components/nav_bar/nav_bar";
import Home from "./pages/home/Home";
import AboutUs from "./pages/AboutUs";
import FindTalent from "./pages/FindTalent";
import Help_Support from "./pages/Help_Support";
import Find_A_Job from "./pages/Find_A_Job";
import LoginPage  from "./pages/login_page/LoginPage";
import { Route, Routes, useLocation } from "react-router-dom";

const App = () => {
  const location = useLocation();

  // Exclude navigation bar from login page
  const hideNavBar = location.pathname === "/login";
  return (
    <div className="container">
      {!hideNavBar && <NavBar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/findatalent" element={<FindTalent />} />
        <Route path="/findajob" element={<Find_A_Job></Find_A_Job>} />
        <Route path="/about-us" element={<AboutUs></AboutUs>} />
        <Route path="/help&support" element={<Help_Support></Help_Support>} />
        <Route path="/login" element={<LoginPage></LoginPage>} />
      </Routes>
    </div>
  );
};

export default App;
