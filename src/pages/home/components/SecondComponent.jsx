import React from "react";
import illustration1 from "../../../assets/illustration1.png";
import illustration2 from "../../../assets/illustration2.png";

const SecondComponent = () => {
  return (
    <div>
      <div className="main_home">
        <div className="join-now">
          <h1 className="h11">
            About Local Lancer
            <br />
            Nepal
          </h1>
          <br />
          <br />
          <p>
            Welcome to Local Lancer Nepal! We're
            <br /> transforming freelancing for Nepal's IT
            <br /> community. Connect with local talent for a<br /> redefined
            freelancing experience. Elevate
            <br /> your projects with us!
          </p>

          <br />
          <br />
          <br />
          <button className="button1">
            <span className="button-text">Get Started</span>
          </button>
        </div>
        <img src={illustration2} alt="illustration" />
      </div>
    </div>
  );
};

export default SecondComponent;
