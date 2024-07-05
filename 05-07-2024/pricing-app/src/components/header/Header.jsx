import React from "react";
import styles from "./header.module.css";
function Header() {
  return (
    <div className={styles.emptyBackground}>
      <img
        src="../interactive-pricing-component-main/images/pattern-circles.svg"
        alt=""
        className={styles.backgroundImage}
      />
      <div className={styles.textOverlay}>
        <h1>Simple, traffic-based pricing</h1>
        <p>Sign-up for our 30-day trial. No credit card required.</p>
      </div>
    </div>
  );
}

export default Header;
