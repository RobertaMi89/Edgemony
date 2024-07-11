import React from "react";
import styles from "./thumbNail.module.css";
import classNames from "classnames";

function ThumbNail({ isSelected = false, thumbNail = "" }) {
  return (
    <div
      className={classNames(styles.thumbNail, isSelected && styles.selected)}
    >
      <img src={thumbNail} alt="thumbnail" />
      <div className={classNames(isSelected && styles.over)}></div>
    </div>
  );
}

export default ThumbNail;
