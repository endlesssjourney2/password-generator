import React, { useState } from "react";
import "./App.css";
import GenerateBtn from "./components/GenerateBtn/GenerateBtn";
import CopyBtn from "./components/CopyBtn/CopyBtn";

function generatePassword(length) {
  const charset =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let retVal = "";
  for (let i = 0, n = charset.length; i < length; ++i) {
    retVal += charset.charAt(Math.floor(Math.random() * n));
  }
  return retVal;
}

const App = () => {
  const [password, setPassword] = useState("");
  const [copied, setCopied] = useState(false);
  const [length, setLength] = useState(8);

  const handleGenerate = () => {
    const newPassword = generatePassword(length);
    setPassword(newPassword);
    setCopied(false);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(password);
    setCopied(true);
    const interval = setInterval(() => {
      setCopied(false);
      clearInterval(interval);
    }, 2000);
  };

  return (
    <div className="App">
      <header className="header">Password Generator 🔐</header>
      <div className="container">
        <input
          className="password-input"
          type="text"
          readOnly
          value={password}
        />
        <div className="length-control">
          <label className="length-label">
            Password Length:
            <input
              className="length-input"
              type="number"
              min="6"
              max="15"
              value={length}
              onChange={(e) => setLength(Number(e.target.value))}
            />
          </label>
        </div>
        <div className="buttons">
          <GenerateBtn onClick={handleGenerate} />
          <CopyBtn onClick={handleCopy} />
        </div>
        {copied && <p className="copied-msg">Text was copied!</p>}
      </div>
    </div>
  );
};

export default App;
