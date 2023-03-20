import React from "react";
import styles from "../styles/Card.module.css";

interface CardProps {
  bgColor?: string;
  children?: any;
}

const Card = (props: CardProps) => {
  return (
    <div
      className={styles.card}
      style={{ backgroundColor: props.bgColor ?? "#fff" }}
    >
      {props.children}
    </div>
  );
};

export default Card;
