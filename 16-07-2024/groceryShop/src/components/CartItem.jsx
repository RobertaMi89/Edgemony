import React, { useContext } from "react";
import CartContext from "../components/CartContext";

const CartItem = ({ item }) => {
  const { removeFromCart } = useContext(CartContext);

  return (
    <div className="border rounded-lg shadow-lg p-4 flex flex-col items-center">
      <img src={item.image} alt={item.title} className="w-32 mb-4" />
      <h2 className="text-xl font-semibold mb-2 text-center">{item.title}</h2>
      <p className="text-gray-700">${item.price}</p>
      <button
        onClick={() => removeFromCart(item.id)}
        className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700 mt-2"
      >
        Remove
      </button>
    </div>
  );
};

export default CartItem;
