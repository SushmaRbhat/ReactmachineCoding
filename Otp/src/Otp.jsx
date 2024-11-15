import { useState, useRef } from "react";
import "./App.css";

const Otp = ({ length = 5, otpSubmit }) => {
  const [otp, setOtp] = useState(Array(length).fill(""));
  const otpRef = useRef([]);

  const handleChange = (e, index) => {
    const { value } = e.target;
    if (isNaN(value)) {
      return;
    }
    const newOtp = [...otp];
    const singledigit = value.slice(0, 1);
    newOtp[index] = singledigit;
    setOtp(newOtp);
    if (singledigit && index < length - 1) {
      const idx = newOtp.indexOf(""); // this will find the first index of empty string and moves to that cursor rather than moving to next cursor
      otpRef.current[idx]?.focus();
    }

    const combinedOtp = newOtp.join("");
    if (combinedOtp.length === length) otpSubmit(combinedOtp);
  };

  const handleKeyDown = (e, index) => {
    const newOtp = [...otp];

    if (e.key === "Backspace") {
      e.preventDefault();
      newOtp[index] = "";
      setOtp(newOtp);
      if (index > 0) {
        otpRef.current[index - 1].focus();
      }
    } else if (e.key === "ArrowRight" && index < length - 1) {
      otpRef.current[index + 1].focus();
    } else if (e.key === "ArrowLeft" && index > 0) {
      otpRef.current[index - 1].focus();
    }
  };
  const handleClick = (index) => {
    otpRef.current[index].setSelectionRange(1, 1); ///this make cursor always be on right of the user input number
    // find first emty index and moves focus to that
    if (index > 0 && otp[index - 1] === "") {
      otpRef.current[otp.indexOf("")].focus();
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const newOtp = [...otp];
    const pastedData = e.clipboardData.getData("text");
    if (/^[0-9]*$/.test(pastedData)) {
      for (let i = 0; i < newOtp.length; i++) {
        if (i < pastedData.length) {
          newOtp[i] = pastedData[i];
        } else {
          break;
        }
      }
      setOtp(newOtp);
      const combinedOtp = newOtp.join("");
      if (combinedOtp.length === length) otpSubmit(combinedOtp);
    }
  };
  return (
    <div className="otp-container">
      {otp.map((x, i) => (
        <input
          key={i}
          type="text"
          ref={(val) => (otpRef.current[i] = val)}
          value={otp[i]}
          onChange={(e) => handleChange(e, i)}
          onKeyDown={(e) => handleKeyDown(e, i)}
          onClick={(e) => handleClick(i)}
          onPaste={handlePaste}
        />
      ))}
    </div>
  );
};

export default Otp;
