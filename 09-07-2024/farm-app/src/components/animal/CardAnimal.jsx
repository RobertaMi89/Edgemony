import React from "react";
import styles from "./cardAnimal.module.css";

function CardAnimal({ name, onDelete }) {
  return (
    <div className={styles.card}>
      <p>{name}</p>
      <button className={styles.deleteBtn} onClick={() => onDelete(name)}>
        ➖
      </button>
    </div>
  );
}

export default CardAnimal;
