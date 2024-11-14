import React from "react";
import "./ProgressBar.css";

const ProgressBar = ({ value }) => {
  return (
    <div className="progressbar-container">
      <span>{value} %</span>
      <div
        className="progressbar"
        style={{ transform: `scaleX(${value / 100})` }}
      ></div>
    </div>
  );
};

export default ProgressBar;
