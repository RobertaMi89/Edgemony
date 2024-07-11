import styles from "./counter.module.css";
import IconMinus from "../icons/IconMinus.jsx";
import IconPlus from "../icons/IconPlus.jsx";
import classNames from "classnames";

function Counter({ count, setCount }) {
  const handleMinusClick = () => {
    if (count === 0) {
      return;
    }

    setCount(count - 1);
  };
  return (
    <div className={classNames(styles.counter)}>
      <button onClick={handleMinusClick}>
        <IconMinus />
      </button>
      <div>{count}</div>
      <button onClick={() => setCount(count + 1)}>
        <IconPlus />
      </button>
    </div>
  );
}

export default Counter;
