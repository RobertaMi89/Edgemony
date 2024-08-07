import React from "react";
import styles from "./navbar.module.css";
import IconCart from "../../atom/icons/IconCart";
import Avatar from "../../../../ecommerce-product-page-main/images/image-avatar.png";
import Logo from "../../atom/logo/Logo";
import Menu from "../../atom/menu/Menu.jsx";

function NavBar({ count }) {
  return (
    <>
      <nav>
        <div className={styles.menu}>
          <Logo />
          <Menu />
        </div>
        <div className={styles.user}>
          <IconCart />
          {count > 0 && <span className={styles.count}>{count}</span>}
          <img src={Avatar} alt="avatar" />
        </div>
      </nav>
      <hr />
    </>
  );
}

export default NavBar;
