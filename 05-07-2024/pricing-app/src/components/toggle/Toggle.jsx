import React from "react";
import styles from "./toggle.module.css";
function Toggle() {
  return (
    <>
      <div>
        <label className={styles.switch}>
          <input type="checkbox" />
          <span className={styles.slider}></span>
        </label>
      </div>
    </>
  );
}

export default Toggle;
