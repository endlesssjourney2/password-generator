import s from "./SaveBtn.module.css";

const SaveBtn = ({ onClick }) => {
  return (
    <button className={s.saveBtn} onClick={onClick}>
      Save
    </button>
  );
};

export default SaveBtn;
