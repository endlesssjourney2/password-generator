import { useEffect, useState } from "react";

import s from "./SavedPage.module.css";

const SavedPage = () => {
  const [saved, setSaved] = useState([]);

  useEffect(() => {
    const raw = localStorage.getItem("passwords");
    setSaved(raw ? JSON.parse(raw) : []);
  }, []);

  const copyOne = (value) => {
    navigator.clipboard.writeText(value);
  };

  const deleteOne = (id) => {
    const newList = saved.filter((item) => item.id !== id);
    setSaved(newList);
    localStorage.setItem("passwords", JSON.stringify(newList));
  };

  const clearAll = () => {
    setSaved([]);
    localStorage.removeItem("passwords");
  };

  return (
    <div className={s.container}>
      <div className={s.savedHeader}>
        <h3 className={s.savedTitle}>Saved passwords : {saved.length}</h3>
        {saved.length > 0 && (
          <button className={s.clearButton} onClick={clearAll}>
            Clear All
          </button>
        )}
      </div>
      {saved.length === 0 ? (
        <p className={s.emptyMessage}>No saved passwords</p>
      ) : (
        <ul className={s.savedList}>
          {saved.map((item) => (
            <li className={s.savedItem} key={item.id}>
              <span className={s.password}>{item.value}</span>
              <div className={s.buttons}>
                <button
                  className={s.copyButton}
                  onClick={() => copyOne(item.value)}
                >
                  Copy
                </button>
                <button
                  className={s.deleteButton}
                  onClick={() => deleteOne(item.id)}
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SavedPage;
