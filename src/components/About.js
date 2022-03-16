import React, { useState } from "react";
import "./Style.css";

const About = () => {
  const [mode, setMode] = useState({
    backgroundColor: "white",
    color: "black",
  });

  const [btnText, setBtnText] = useState("Dark Mode");

  const toggleMode = () => {
    if (mode.color === "black") {
      setMode({
        backgroundColor: "black",
        color: "white",
      });
      setBtnText("Light Mode");
    } else {
      setMode({
        backgroundColor: "white",
        color: "black",
      });
      setBtnText("Dark Mode");
    }
  };
  return (
    <div className="container-flex" style={mode}>
      <h1>About Us</h1>
      <div className="form-check form-switch">
        <input
          onClick={toggleMode}
          className="form-check-input"
          type="checkbox"
          id="flexSwitchCheckDefault"
        />
        <label className="form-check-label" forhtml="flexSwitchCheckDefault">
          {btnText}
        </label>
      </div>
    </div>
  );
};

export default About;
