import React from "react";

const Question = ({ data, selectedAnswer, onAnswerSelect }) => {
  return (
    <div className="question">
      <h2>{data.question}</h2>
      <div className="button-container"></div>
      <div className="options">
        {data.choices.map((option) => {
          return (
            <button
              key={option}
              className={option === selectedAnswer ? "selected" : ""}
              onClick={() => onAnswerSelect(option)}
            >
              {option}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Question;
