import React from "react";

const Result = ({ questions, answers, result, retry }) => {
  return (
    <div className="results">
      <h2>Results</h2>
      <p>
        You have scored <b>{result.score}</b>
      </p>
      <p>
        You have answered <b>{result.correctAnswers}</b> out of{" "}
        <b>{questions.length}</b> questions!
      </p>
      <button onClick={retry}>Retry</button>
      <ul>
        {questions.map((x, index) => {
          let questionfont =
            x.correctAnswer === answers[index] ? "correct" : "wrong";
          return (
            <div className="result-item">
              <li className={questionfont}>{x.question}</li>
              <li>
                <span>
                  Answer: <b>{x.correctAnswer}</b>
                </span>{" "}
              </li>
              <li>
                <span>
                  Your answer: <b>{answers[index]}</b>
                </span>{" "}
              </li>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default Result;
