import React, { useState } from "react";
import styles from "./card.module.css";
import Range from "../range/Range.jsx";
import Toggle from "../toggle/Toggle.jsx";

function Card() {
  const [pageviews, setPageviews] = useState(100000);
  const [price, setPrice] = useState(16);

  const updatePrice = (value) => {
    setPageviews(value);

    // Calcola il prezzo in base ai pageviews
    if (value <= 50000) {
      setPrice(8);
    } else if (value <= 100000) {
      setPrice(16);
    } else if (value <= 200000) {
      setPrice(24);
    } else {
      setPrice(32);
    }
  };
  return (
    <>
      <div className={styles.cardContainer}>
        <div className={styles.headerCard}>
          <span>{pageviews}K PAGEVIEWS</span>
          <span>${price} /month</span>
        </div>
        <Range value={pageviews} onChange={updatePrice} />
        <div className={styles.billing}>
          <span>Monthly billing</span>
          <Toggle />
          <span>Yearly billing</span>
          <button>25% discount</button>
        </div>
        <hr />
        <div className={styles.footerCard}>
          <ul className={styles.customList}>
            <li>
              <span className={styles.checkmark}>✓</span> Unlimited websites
            </li>
            <li>
              <span className={styles.checkmark}>✓</span> 100% data ownership
            </li>
            <li>
              <span className={styles.checkmark}>✓</span> Email reports
            </li>
          </ul>
          <button>Start my trial</button>
        </div>
      </div>
    </>
  );
}

export default Card;
