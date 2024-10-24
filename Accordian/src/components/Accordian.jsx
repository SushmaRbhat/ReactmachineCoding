import React, { useState } from "react";
import "./Accordian.css";

const Accordian = ({ item, activeId, toggle }) => {
  return (
    <div className="accordian-container">
      <div className="accordian-header">
        <h3>{item.question}</h3>
        <button onClick={() => toggle(item.id)}>
          {activeId == item.id ? "-" : "+"}
        </button>
      </div>
      {activeId === item.id ? <p>{item.answer}</p> : null}
    </div>
  );
};

export default Accordian;
