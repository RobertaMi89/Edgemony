import React, { useContext, useState } from "react";
import CartContext from "../providers/CartContext";
import Modal from "./Modal";
import { Link } from "react-router-dom";
import Toast from "./Toast";
import { SetProductContext } from "../providers/ProductContext";

const ProductItem = ({ product }) => {
  const { setProducts } = useContext(SetProductContext);
  const { addToCart } = useContext(CartContext);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isToastVisible, setIsToastVisible] = useState(false);

  const handleAdd = (product) => {
    setProducts((prevState) => {
      if (!Array.isArray(prevState)) {
        return [product];
      }
      return [...prevState, product];
    });
  };

  const handleAddToCart = (product) => {
    addToCart(product, selectedSize, selectedColor);
    setIsToastVisible(true);
    setTimeout(() => {
      setIsToastVisible(false);
    }, 3000);
  };

  const colors = product.colors || [];
  const sizes = product.sizes || [];

  return (
    <div className="flex flex-wrap justify-center h-auto bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 relative">
      <img
        onClick={() => setIsModalOpen(true)}
        src={product.images[0]}
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
            handleAddToCart(product);
            handleAdd(product);
          }}
          className="bg-yellow-600 text-white w-48 px-4 py-2 rounded-xl hover:bg-gray-500 absolute bottom-2.5 left-2.5"
        >
          Add to Cart
        </button>
      </div>
      <Modal isOpen={isModalOpen} OnClose={() => setIsModalOpen(false)}>
        <div className="p-4 md:p-5">
          <div className="flex justify-center mb-4">
            <img
              src={product.images[0]} // Usa la prima immagine come principale
              alt={product.title}
              className="rounded-t-lg w-full max-w-md h-auto object-cover"
            />
          </div>
          <div className="mb-4">
            <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
              {product.title}
            </h4>
            <p className="text-gray-700 dark:text-gray-400 mb-2">
              {product.description}
            </p>
            <div className="mb-4">
              <span className="font-bold text-gray-700 dark:text-gray-300">
                Price:
              </span>
              <span className="text-gray-600 dark:text-gray-300">
                $ {product.price}
              </span>
            </div>
          </div>
          <div className="flex items-center justify-end p-4 border-t border-gray-200 dark:border-gray-600">
            <Link to={`/product/${product.id}`} state={{ product }}>
              <button
                data-modal-hide="static-modal"
                type="button"
                className="py-2.5 px-5 ms-3 text-sm font-medium border-yellow-600 text-gray-900 focus:outline-none bg-white rounded-lg border hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
              >
                Info
              </button>
            </Link>
          </div>
        </div>
      </Modal>
      {isToastVisible && (
        <Toast
          message={`${product.title} added to cart!`}
          onClose={() => setIsToastVisible(false)}
        />
      )}
    </div>
  );
};

export default ProductItem;
