import { useEffect, useState } from "react";
import "./App.css";

// You are tasked with building a simple traffic light component using React.
// The traffic light should consist of three lights: red, yellow, and green.
// The lights should switch from red to yellow to green after predetermined intervals and loop indefinitely. Each light should be lit for the following durations:

// Red light: 4000ms
// Yellow light: 500ms
// Green light: 3000ms

function App() {
  const [activeLight, setActiveLight] = useState("red");

  useEffect(() => {
    let timer;
    if (activeLight === "red") {
      timer = setTimeout(() => {
        setActiveLight("yellow");
      }, 4000);
    }
    if (activeLight === "yellow") {
      timer = setTimeout(() => {
        setActiveLight("green");
      }, 500);
    }
    if (activeLight === "green") {
      timer = setTimeout(() => {
        setActiveLight("red");
      }, 3000);
    }
    return () => {
      clearTimeout(timer);
    };
  }, [activeLight]);

  return (
    <>
      <div>
        <h1>Traffic Light</h1>
        <div className="traffic-light">
          <div className={`light ${activeLight === "red" ? "red" : ""}`}></div>
          <div
            className={`light ${activeLight === "yellow" ? "yellow" : ""}`}
          ></div>
          <div
            className={`light ${activeLight === "green" ? "green" : ""}`}
          ></div>
        </div>
      </div>
    </>
  );
}

export default App;
