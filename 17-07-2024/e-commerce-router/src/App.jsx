import React, { useEffect, useState } from "react";
import ProductItem from "./components/ProductItem.jsx";
import { CartProvider } from "./components/CartContext.jsx";

const App = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <CartProvider>
      <div className="container mx-auto my-8">
        <h1 className="text-4xl font-bold text-center mb-8">Product List</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <ProductItem key={product.id} product={product} />
          ))}
        </div>
      </div>
    </CartProvider>
  );
};

export default App;
