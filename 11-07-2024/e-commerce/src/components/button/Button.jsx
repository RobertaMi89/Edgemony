import React from "react";
import classNames from "classnames"; /*funzione che evita interpolazioni e si possono mettere più classi in un tag*/
import styles from "./button.module.css";

function Button({ children, text = "Add to cart" }) {
  return (
    <button className={classNames(styles.button)}>
      {children}
      {text}
    </button>
  );
}

export default Button;
