import React from "react";
import illustration1 from "../../../assets/illustration1.png"

const FirstComponent = () => {
  return (
    <div>
      <div className="main_home">
        <div className="join-now">
          <h1>
            Bridging the Gap
            <br />
            Between Companies
            <br />
            And Employees
          </h1>
          <br />
          <br />
          <p>
            Join now for a tailored freelancing experience
            <br />
            designed for Nepal's thriving IT community. <br /> Redefine
            freelancing, locally!
          </p>

          <br />
          <br />
          <br />
          <button className="button1">
            <span className="button-text">Get Started</span>
          </button>
        </div>
        <img src={illustration1} alt="illustration" />
      </div>
    </div>
  );
};

export default FirstComponent;
