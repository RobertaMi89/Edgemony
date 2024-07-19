import { useEffect, useState } from "react";
import ProductItem from "./components/organisms/ProductItem.jsx";
import productsData from "../server/db.json";
import Carousel from "./components/molecules/Carousel.jsx";
import MenuCategories from "./components/molecules/MenuCategories.jsx";
const App = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    setProduct(productsData.products);
  }, []);

  return (
    <>
      <Carousel />
      <MenuCategories />
      <div className="container mx-auto my-8">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {product.map((product) => (
            <ProductItem key={product.id} product={product} />
          ))}
        </div>
      </div>
    </>
  );
};

export default App;
