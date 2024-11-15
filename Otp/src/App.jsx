import { useState } from "react";
import "./App.css";
import Otp from "./Otp";

function App() {
  const [phone, setPhone] = useState("");
  const [showOtpInput, setShowOtpInput] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const regex = /[^0-9]/g;
    if (phone.length !== 10 || regex.test(phone)) {
      alert("Invalid Phone Number");
      return;
    }
    setShowOtpInput(true);
  };
  const handleSubmitOtp = (data) => {
    console.log("finalopt", data);
  };
  return (
    <>
      <div>
        <h1>Otp</h1>
        {!showOtpInput ? (
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <button type="submit">Submit</button>
          </form>
        ) : (
          <Otp length={5} otpSubmit={handleSubmitOtp} />
        )}
      </div>
    </>
  );
}

export default App;
