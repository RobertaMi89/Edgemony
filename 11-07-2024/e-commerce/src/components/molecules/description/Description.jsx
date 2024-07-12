import React, { useState } from "react";
import Button from "../../atom/button/Button.jsx";
import IconCart from "../../atom/icons/IconCart.jsx";
import Counter from "../../atom/counter/Counter.jsx";
import styles from "./description.module.css";

function Description({ addToCart }) {
  const [count, setCount] = useState(0);

  const handleAddToCart = () => {
    addToCart(count);
  };

  return (
    <div className={styles.card}>
      <span>sneaker company</span>
      <h1>fall limited edition sneakers</h1>
      <p>
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they'll withstand everything the
        weather can offer.
      </p>
      <div className={styles.price}>
        <span>$125.00</span> <button>50%</button>
        <p>$250.00</p>
      </div>
      <div className={styles.setBtns}>
        <Counter count={count} setCount={setCount} />
        <Button text={"Add to cart"} onClick={handleAddToCart}>
          <IconCart fill="#000" />
        </Button>
      </div>
    </div>
  );
}

export default Description;
