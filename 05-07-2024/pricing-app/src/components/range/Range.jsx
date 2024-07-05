import React from "react";
import styles from "./range.module.css";
import iconSlider from "../../../interactive-pricing-component-main/images/icon-slider.svg";

function Range({ value, onChange }) {
  const handleChange = (event) => {
    const newValue = parseInt(event.target.value, 10);
    onChange(newValue);
  };

  return (
    <div className={styles.range}>
      <input
        type="range"
        min="0"
        max="200"
        value={value}
        defaultValue={value}
        onChange={handleChange}
        className={styles.rangeInput}
      />
    </div>
  );
}

export default Range;
