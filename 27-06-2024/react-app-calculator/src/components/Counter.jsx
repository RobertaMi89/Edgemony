import { useState } from "react";
import { ButtonCounter } from "./ButtonCounter";

export function Counter() {
  const [count, setCount] = useState(0);
  const handleMinusClick = () => {
    if (count === 0) {
      return;
    }

    setCount(count - 1);
  };

  return (
    <div className="Counter">
      <ButtonCounter onClick={handleMinusClick}>-1</ButtonCounter>
      <span>{count}</span>
      <ButtonCounter onClick={() => setCount(count + 1)}>+1</ButtonCounter>
    </div>
  );
}

export default Counter;
