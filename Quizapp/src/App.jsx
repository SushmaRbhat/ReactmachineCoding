import { useState } from "react";
import "./App.css";
import Question from "./components/Question";
import { quiz } from "./data.json";
import Result from "./components/Result";

function App() {
  const { questions, perQuestionScore } = quiz;
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [answers, setAnswers] = useState([]);
  const [result, setResult] = useState({
    correctAnswers: 0,
    score: 0,
  });

  const handleNextQuestion = () => {
    setCurrentQuestion(currentQuestion + 1);
  };

  const handleAnswerSelected = (answerclicked) => {
    setSelectedAnswer(answerclicked);
    const newAnswers = [...answers];

    if (questions[currentQuestion].correctAnswer === answerclicked) {
      setResult({
        ...result,
        correctAnswers: result.correctAnswers + 1,
        score: result.score + perQuestionScore,
      });
    }
    newAnswers[currentQuestion] = answerclicked;
    setAnswers(newAnswers);
  };

  const reset = () => {
    setCurrentQuestion(0);
    setAnswers([]);
  };
  return (
    <div className="app">
      <h1>Quiz App</h1>
      <div className="quiz-container">
        {currentQuestion < questions.length ? (
          <>
            <h3>
              {currentQuestion + 1}/{questions.length}
            </h3>
            <Question
              data={questions[currentQuestion]}
              selectedAnswer={selectedAnswer}
              onAnswerSelect={handleAnswerSelected}
            />
          </>
        ) : null}
        {currentQuestion !== questions.length ? (
          <button className="next-button" onClick={handleNextQuestion}>
            {currentQuestion === questions.length - 1 ? "Submit" : "Next"}
          </button>
        ) : null}
        {currentQuestion === questions.length ? (
          <Result
            questions={questions}
            answers={answers}
            result={result}
            retry={reset}
          />
        ) : null}
      </div>
    </div>
  );
}

export default App;
