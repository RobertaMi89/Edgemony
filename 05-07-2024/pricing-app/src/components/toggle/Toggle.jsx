import React from "react";
import styles from "./toggle.module.css";
function Toggle({ checked, onChange }) {
  return (
    <>
      <div>
        <label className={styles.switch}>
          <input type="checkbox" checked={checked} onChange={onChange} />
          <span className={styles.slider}></span>
        </label>
      </div>
    </>
  );
}

export default Toggle;
