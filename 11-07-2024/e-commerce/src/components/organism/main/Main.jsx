import ProductLightBox from "../../molecules/product-lightBox/ProductLightBox.jsx";
import Description from "../../molecules/description/Description.jsx";
import styles from "./main.module.css";
function Main({ count, setCount }) {
  return (
    <main>
      <ProductLightBox />
      <Description count={count} setCount={setCount} />
    </main>
  );
}

export default Main;
