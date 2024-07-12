import React from "react";
import ProductLightBox from "../../molecules/product-lightBox/ProductLightBox.jsx";
import Description from "../../molecules/description/Description.jsx";
import styles from "./main.module.css";

function Main({ addToCart }) {
  return (
    <main>
      <ProductLightBox />
      <Description addToCart={addToCart} />
    </main>
  );
}

export default Main;
