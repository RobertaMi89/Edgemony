import React, { useContext } from "react";
import CartContext from "../components/CartContext";

const ProductItem = ({ product }) => {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="border rounded-lg shadow-lg p-4 flex flex-col items-center">
      <img
        src={product.image}
        alt={product.title}
        className="object-cover mb-4"
      />
      <h2 className="text-xl font-semibold mb-2 text-center">
        {product.title}
      </h2>
      <p className="text-gray-700 mb-4">${product.price}</p>
      <button
        onClick={() => addToCart(product)}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductItem;
