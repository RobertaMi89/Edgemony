import React from "react";
import styles from "./header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <h1>SONO UN HEADER</h1>
      <nav>
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <a href="#">Home</a>
          </li>
          <li className={styles.navItem}>
            <a href="#">About</a>
          </li>
          <li className={styles.navItem}>
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default Header;
