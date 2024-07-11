import React from "react";
import styles from "./counter.module.css";
import IconMinus from "../icons/IconMinus.jsx";
import IconPlus from "../icons/IconPlus.jsx";
import classNames from "classnames";

function Counter() {
  return (
    <div className={classNames(styles.counter)}>
      <button>
        <IconMinus />
      </button>
      <div>0</div>
      <button>
        <IconPlus />
      </button>
    </div>
  );
}

export default Counter;
