import React, { useContext, useState } from "react";
import Modal from "../organisms/Modal";
import { Link } from "react-router-dom";
import { SetProductContext } from "../../providers/ProductContext";

const ProductItem = ({ product }) => {
  const { setProducts } = useContext(SetProductContext);
  const [isModalOpen, setIsModalOpen] = useState(false);

  {
    /*const handleAdd = (product) => {
    setProducts((prevState) => {
      if (!Array.isArray(prevState)) {
        return [product];
      }
      return [...prevState, product];
    });
  };

  const colors = product.colors || [];
  const sizes = product.sizes || [];*/
  }

  return (
    <div className="flex flex-wrap justify-center h- bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 relative">
      <img
        onClick={() => setIsModalOpen(true)}
        src={product.images[0]}
        alt={product.name}
        className="rounded-t-lg w-full max-w-md h-auto object-cover cursor-pointer"
      />
      <div className="p-5">
        <h4 className="mb-2 font-bold tracking-tight text-gray-900 dark:text-white">
          {product.name}
        </h4>
      </div>
      <Modal isOpen={isModalOpen} OnClose={() => setIsModalOpen(false)}>
        <div className="p-4 md:p-5">
          <div className="flex justify-center mb-4">
            <img
              src={product.images[0]}
              alt={product.name}
              className="rounded-lg w-full max-w-md h-auto object-cover"
            />
          </div>
          <div className="mb-4">
            <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
              {product.name}
            </h4>

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
    </div>
  );
};

export default ProductItem;
