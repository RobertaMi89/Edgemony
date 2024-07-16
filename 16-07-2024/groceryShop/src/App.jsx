import React from "react";
import { CartProvider } from "./components/CartContext.jsx";
import ProductList from "./components/productList.jsx";
import Cart from "./components/Cart.jsx";

const App = () => {
  return (
    <CartProvider>
      <div className="flex">
        <ProductList />
        <Cart />
      </div>
    </CartProvider>
  );
};

export default App;
