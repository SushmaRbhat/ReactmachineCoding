import { useState, useEffect, useRef } from "react";
import "./App.css";
import ProgressBar from "./components/ProgressBar";

function App() {
  const [percent, setPercent] = useState(0);
  const timerId = useRef(null);

  ///run this without any click of button i.e on initial load
  useEffect(() => {
    startProgress();
    return () => {
      clearInterval(timerId);
    };
  }, []);

  const startProgress = () => {
    clearInterval(timerId.current);
    timerId.current = setInterval(() => {
      setPercent((prev) => {
        if (prev >= 100) {
          clearInterval(timerId);
          return prev;
        }
        return prev + 1;
      });
    }, 100);
  };

  const pauseProgress = () => {
    clearInterval(timerId.current);
  };

  const resetProgress = () => {
    clearInterval(timerId);
    setPercent(0);
  };

  const increment = () => {
    setPercent((prev) => {
      if (prev >= 100) {
        clearInterval(timerId);
        return prev;
      }
      return prev + 1;
    });
  };
  const decrement = () => {
    setPercent((prev) => {
      if (prev <= 0) {
        clearInterval(timerId);
        return prev;
      }
      return prev - 1;
    });
  };
  return (
    <>
      <div className="app">
        <h2 style={{ marginBottom: 20 }}>ProgressBar</h2>
        <ProgressBar value={percent} />
        <p>{percent >= 100 ? "Completed" : "Loading"}</p>
        <div className="buttons">
          <button onClick={startProgress}>Start</button>
          <button onClick={pauseProgress}>Pause</button>{" "}
          <button onClick={resetProgress}>Reset</button>
        </div>
        <div className="buttons" style={{ marginTop: 10 }}>
          <button onClick={increment}>+</button>
          <button onClick={decrement}>-</button>{" "}
        </div>
      </div>
    </>
  );
}

export default App;
