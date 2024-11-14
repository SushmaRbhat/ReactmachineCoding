import { useRef, useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("red");
  const circleRef = useRef();

  const handleOnmouseMove = (e, u) => {
    circleRef.current.style.left = `${e.clientX}px`;
    circleRef.current.style.top = `${e.clientY}px`;
    circleRef.current.style.background = color;
  };

  const throttle = (func, duration = 500) => {
    let isWaiting = false;
    return (...args) => {
      if (!isWaiting) {
        func(...args);
        isWaiting = true;
        setTimeout(() => {
          isWaiting = false;
        }, duration);
      }
    };
  };
  const throttled = throttle(handleOnmouseMove, 500);
  const handleButtonClick = (value) => {
    setColor(value);
  };

  return (
    <div>
      <div>
        <button onClick={() => handleButtonClick("#ff9100")}>orange</button>
        <button onClick={() => handleButtonClick("#03a9f4")}>blue</button>
      </div>
      <div style={{ height: "100vh" }} onMouseMove={throttled}>
        <div
          ref={circleRef}
          className="circle"
          style={{ left: 0, top: 0 }}
        ></div>
      </div>
    </div>
  );
}

export default App;
