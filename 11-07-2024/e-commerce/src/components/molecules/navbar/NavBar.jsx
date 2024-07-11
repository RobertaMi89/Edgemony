import React from "react";
import styles from "./navbar.module.css";
import IconCart from "../../atom/icons/IconCart";
import Avatar from "../../../../ecommerce-product-page-main/images/image-avatar.png";
import Logo from "../../atom/logo/Logo";
function NavBar() {
  return (
    <>
      <nav>
        <div className={styles.menu}>
          <Logo />
        </div>
        <div className={styles.user}>
          <IconCart />
          <img src={Avatar} alt="avatar" />
        </div>
      </nav>
      <hr />
    </>
  );
}

export default NavBar;
