import Button from "../../atom/button/Button.jsx";
import IconCart from "../../atom/icons/IconCart.jsx";
import Counter from "../../atom/counter/Counter.jsx";
import styles from "./description.module.css";

function Description() {
  return (
    <div className={styles.card}>
      <span>sneaker company</span>
      <h1>fall limited edition sneakers</h1>
      <p>
        These low-profile sneakers are you perfect casual wear companion.
        Featuring a durable rubber outer sole, they'll withstand everything the
        weather can offer
      </p>
      <div className={styles.price}>
        <span>$125.00</span> <button>50%</button>
        <p>$250.00</p>
      </div>
      <div className={styles.setBtns}>
        <Counter />
        <Button text={"Add to cart"}>
          <IconCart fill="#000"></IconCart>
        </Button>
      </div>
    </div>
  );
}

export default Description;
