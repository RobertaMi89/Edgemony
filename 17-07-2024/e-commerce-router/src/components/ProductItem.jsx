import React, { useContext } from "react";
import CartContext from "../components/CartContext";

const ProductItem = ({ product }) => {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 relative">
      <img src={product.image} alt={product.title} className="rounded-t-lg" />
      <div className="p-5">
        <h4 className="mb-2 font-bold tracking-tight text-gray-900 dark:text-white">
          {product.title}
        </h4>
        <p className="mb-9 font-normal text-gray-700 dark:text-gray-400">
          ${product.price}
        </p>
        <p className="mb-9 font-normal text-gray-700 dark:text-gray-400">
          ${product.description}
        </p>
        <button
          onClick={() => addToCart(product)}
          className="bg-blue-500 text-white w-48 px-4 py-2  rounded hover:bg-blue-700 absolute bottom-2.5 left-2.5 "
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductItem;
