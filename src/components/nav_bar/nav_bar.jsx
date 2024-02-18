import React from "react";

import "./nav_bar.css";
import logo from "../../assets/logo.png";
import { Link, useMatch, useResolvedPath,useNavigate } from "react-router-dom";



const NavBar = () => {
  const navigate = useNavigate();

  const handleLoginButtonClick = () => {
    navigate("/login");
  };

 

  return (
    <div className="navbar">
      <Link to="/">
        <img src={logo} alt="logo" className="logo" />
      </Link>
      <ul>
        <CustomLink href="/">Home</CustomLink>
        <CustomLink href="/findatalent">Find Talent</CustomLink>
        <CustomLink href="/findajob">Find a Job</CustomLink>
        <CustomLink href="/about-us">About Us</CustomLink>
        <CustomLink href="/help&support">Help & Support</CustomLink>
      </ul>
      <button onClick={
        handleLoginButtonClick
      }  className="button">Login / Signup</button>
    </div>
  );
};

function CustomLink({ href, children }) {
  const resolvedPath = useResolvedPath(href);
  const isActive = useMatch(resolvedPath.pathname);

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={href}>{children}</Link>
    </li>
  );
}

export default NavBar;
