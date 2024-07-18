import React, { useContext, useState } from "react";
import CartContext from "../components/CartContext";
import Modal from "./Modal";
import { Link } from "react-router-dom";

const ProductItem = ({ product }) => {
  const { addToCart } = useContext(CartContext);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="flex flex-wrap justify-center h-auto bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 relative">
      <img
        onClick={() => setIsModalOpen(true)}
        src={product.image}
        alt={product.title}
        className="rounded-t-lg h-auto w-44 object-contain m-2 cursor-pointer"
      />

      <div className="p-5">
        <h4 className="mb-2 font-bold tracking-tight text-gray-900 dark:text-white">
          {product.title}
        </h4>
        <p className="mb-9 font-normal text-gray-700 dark:text-gray-400">
          ${product.price}
        </p>

        <button
          onClick={() => {
            addToCart(product);
          }}
          className="bg-yellow-600 text-white w-48 px-4 py-2  rounded-xl hover:bg-gray-500 absolute bottom-2.5 left-2.5 "
        >
          Add to Cart
        </button>
      </div>
      <Modal isOpen={isModalOpen} OnClose={() => setIsModalOpen(false)}>
        <div className="flex justify-center">
          <img
            src={product.image}
            alt={product.title}
            className="rounded-t-lg w-96 h-auto object-cover m-2"
          />
        </div>
        <div className="flex items-center justify-end p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
          <Link to={`/product/${product.id}`} state={{ product }}>
            <button
              data-modal-hide="static-modal"
              type="button"
              className="py-2.5 px-5 ms-3 text-sm items-endfont-medium border-yellow-600 text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
            >
              Info
            </button>
          </Link>
        </div>
      </Modal>
    </div>
  );
};

export default ProductItem;
