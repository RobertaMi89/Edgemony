import React, { useState } from "react";
import styles from "./card.module.css";
import Range from "../range/Range.jsx";
import Toggle from "../toggle/Toggle.jsx";

function Card() {
  const [pageviews, setPageviews] = useState(100);
  const [price, setPrice] = useState(16);
  const [discountApplied, setDiscountApplied] = useState(false);

  const calculatePrice = (value) => {
    // Utilizza un'equazione o intervalli per calcolare il prezzo
    if (value <= 50) {
      return 8;
    } else if (value <= 100) {
      return 16;
    } else if (value <= 150) {
      return 24;
    } else {
      return 32;
    }
  };

  // Funzione per applicare o rimuovere lo sconto del 25%
  const toggleDiscount = () => {
    if (discountApplied) {
      const originalPrice = calculatePrice(pageviews);
      setPrice(originalPrice); // Ripristina il prezzo originale
    } else {
      const discountedPrice = price * 0.75; // Calcola il prezzo scontato del 25%
      setPrice(discountedPrice); // Imposta il nuovo prezzo scontato
    }
    setDiscountApplied(!discountApplied); // Inverte lo stato di sconto applicato
  };

  // Funzione per aggiornare il prezzo e il valore di pageviews
  const updatePrice = (value) => {
    setPageviews(value);
    const newPrice = calculatePrice(value);
    setPrice(newPrice);

    // Aggiorna il prezzo scontato se lo sconto è applicato
    if (discountApplied) {
      const discountedPrice = newPrice * 0.75;
      setPrice(discountedPrice);
    }
  };
  return (
    <div className={styles.cardContainer}>
      <div className={styles.headerCard}>
        <span>{pageviews}K PAGEVIEWS</span>
        <span style={{ fontWeight: 900, fontSize: "50px" }}>
          ${price.toFixed(2)}
        </span>
      </div>
      <Range value={pageviews} onChange={updatePrice} />
      <div className={styles.billing}>
        <span>Monthly billing</span>
        <Toggle checked={discountApplied} onChange={toggleDiscount} />
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
  );
}

export default Card;
