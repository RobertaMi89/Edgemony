import React from "react";

const CartItem = ({ item }) => {
  return (
    <div className="border rounded-lg shadow-lg p-4 flex flex-col items-center">
      <img
        src={item.image}
        alt={item.title}
        className="w-32 h-32 object-cover mb-4"
      />
      <h2 className="text-xl font-semibold mb-2 text-center">{item.title}</h2>
      <p className="text-gray-700">${item.price}</p>
    </div>
  );
};

export default CartItem;
