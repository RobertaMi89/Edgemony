import classNames from "classnames";
import React from "react";
import styles from "./showbox.module.css";

function ShowBox({ imgUrl }) {
  return (
    <div className={classNames(styles.showBox)}>
      <img src={imgUrl} alt="product" />
    </div>
  );
}

export default ShowBox;
