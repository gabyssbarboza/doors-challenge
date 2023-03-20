import React from "react";
import styles from "../styles/EntryNumber.module.css";

interface EntryNumberProps {
  value: number;
  text: string;
  onChange: (newValue: number) => void;
}

const EntryNumber = (props: EntryNumberProps) => {
  const removeMore = () => props.onChange(props.value - 1);
  const addMore = () => props.onChange(props.value + 1);

  return (
    <div className={styles.entryNumber}>
      <span className={styles.text}>{props.text}</span>
      <span className={styles.value}>{props.value}</span>
      <div className={styles.buttons}>
        <button className={styles.btn} onClick={() => removeMore()}>
          {" "}
          -{" "}
        </button>
        <button className={styles.btn} onClick={() => addMore()}>
          {" "}
          +{" "}
        </button>
      </div>
    </div>
  );
};

export default EntryNumber;
