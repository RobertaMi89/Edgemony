import React from "react";
import styles from "./layout.module.css";
import Header from "../header/Header.jsx";
import Footer from "../footer/Footer.jsx";
function Layout({ children }) {
  return (
    <div className={styles.layoutContainer}>
      <Header />
      <main className={styles.main}>{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
