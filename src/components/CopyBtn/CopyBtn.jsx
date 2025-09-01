import React from "react";
import s from "./CopyBtn.module.css";

const CopyBtn = ({ onClick }) => {
  return (
    <div>
      <button className={s.copyBtn} onClick={onClick}>
        Copy
      </button>
    </div>
  );
};

export default CopyBtn;
