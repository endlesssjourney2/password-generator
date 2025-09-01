import { useState } from "react";
import s from "./GeneratePage.module.css";
import GenerateBtn from "../../components/GenerateBtn/GenerateBtn";
import CopyBtn from "../../components/CopyBtn/CopyBtn";
import SaveBtn from "../../components/SaveBtn/SaveBtn";

function generatePassword(length) {
  const charset =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let retVal = "";
  for (let i = 0, n = charset.length; i < length; ++i) {
    retVal += charset.charAt(Math.floor(Math.random() * n));
  }
  return retVal;
}

const GeneratePage = () => {
  const [password, setPassword] = useState("");
  const [copied, setCopied] = useState(false);
  const [saved, setSaved] = useState(false);
  const [length, setLength] = useState(8);

  const handleGenerate = () => {
    const newPassword = generatePassword(length);
    setPassword(newPassword);
    setCopied(false);
  };

  const handleCopy = () => {
    if (!password) return;
    navigator.clipboard.writeText(password);
    setCopied(true);
    const interval = setInterval(() => {
      setCopied(false);
      clearInterval(interval);
    }, 2000);
  };

  const handleSave = () => {
    if (!password) return;
    const raw = localStorage.getItem("passwords");
    const list = raw ? JSON.parse(raw) : [];
    const isDup = list[0]?.value === password;
    if (isDup) return;
    const newList = [{ id: Date.now(), value: password }, ...list].slice(0, 50);
    localStorage.setItem("passwords", JSON.stringify(newList));
    setSaved(true);
    const interval = setInterval(() => {
      setSaved(false);
      clearInterval(interval);
    }, 2000);
  };

  return (
    <div className={s.container}>
      <input
        className={s.passwordInput}
        type="text"
        readOnly
        value={password}
      />
      <div className={s.lengthControl}>
        <label className={s.lengthLabel}>
          Password Length:
          <input
            className={s.lengthInput}
            type="number"
            min="6"
            max="15"
            value={length}
            onChange={(e) => setLength(Number(e.target.value))}
          />
        </label>
      </div>
      <div className={s.buttons}>
        <GenerateBtn onClick={handleGenerate} />
        <CopyBtn onClick={handleCopy} />
        <SaveBtn onClick={handleSave} />
      </div>
      {copied && <p className={s.copiedMsg}>Password was copied!</p>}
      {saved && <p className={s.savedMsg}>Password was saved!</p>}
    </div>
  );
};

export default GeneratePage;
