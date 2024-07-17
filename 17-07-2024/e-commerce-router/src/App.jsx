import React from "react";
import { CartProvider } from "./components/CartContext.jsx";
import ProductList from "./components/productList.jsx";

const App = () => {
  return (
    <CartProvider>
      <div className="flex">
        <ProductList />
      </div>
    </CartProvider>
  );
};

export default App;
