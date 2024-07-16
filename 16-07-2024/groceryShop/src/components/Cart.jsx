import React, { useContext } from "react";
import CartContext from "../components/CartContext";
import CartItem from "./CartItem";

const Cart = () => {
  const { cart } = useContext(CartContext);

  return (
    <div className="container mx-auto my-8">
      <h1 className="text-4xl font-bold text-center mb-8">Cart</h1>
      <div className="grid grid-cols-1 gap-4">
        {cart.map((item, index) => (
          <CartItem key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Cart;
