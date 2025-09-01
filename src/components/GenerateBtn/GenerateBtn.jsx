import React from "react";
import s from "./GenerateBtn.module.css";
const GenerateBtn = ({ onClick }) => {
  return (
    <div>
      <button className={s.generateBtn} onClick={onClick}>
        Generate
      </button>
    </div>
  );
};

export default GenerateBtn;
