import { useEffect, useState } from "react";
import ProductItem from "./components/ProductItem.jsx";
import productsData from "../server/db.json";

const App = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    setProduct(productsData.products);
  }, []);

  return (
    <div className="container mx-auto my-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {product.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default App;
