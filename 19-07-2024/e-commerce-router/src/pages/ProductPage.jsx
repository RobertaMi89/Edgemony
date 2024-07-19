import CartContext from "../providers/CartContext";
import React, { useContext, useState } from "react";
import { useLocation } from "react-router-dom";
import Toast from "../components/atom/Toast";

function ProductPage() {
  const { addToCart } = useContext(CartContext);
  const location = useLocation();
  const { product } = location.state || {};
  const [isToastVisible, setIsToastVisible] = useState(false);
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  const colors = product?.colors || [];

  const handleAddToCart = (product) => {
    if (selectedSize && (selectedColor || colors.length === 0)) {
      addToCart(product, selectedSize, selectedColor);
      setIsToastVisible(true);
      setTimeout(() => {
        setIsToastVisible(false);
      }, 3000);
    } else {
      alert("Please select a size and color.");
    }
  };

  return (
    <>
      <div className="bg-gray-100 dark:bg-gray-800 py-8">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row -mx-4 gap-6">
            {/* Immagine principale */}
            <div className="md:flex-1 px-4 justify-center">
              <div className="grid gap-4">
                {product?.images?.length > 0 && (
                  <div>
                    <img
                      className="h-auto max-w-full rounded-lg"
                      src={product.images[0]}
                      alt={`Image of ${product.name}`}
                    />
                  </div>
                )}
                {product?.images?.length > 1 && (
                  <div className="grid grid-cols-2 md:grid-cols-3 mb-5 gap-4">
                    {product.images.slice(1).map((image, index) => (
                      <div key={index}>
                        <img
                          className="h-auto max-w-full rounded-lg"
                          src={image}
                          alt={`Image ${index + 2} of ${product.name}`}
                        />
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
            <div className="md:flex-1 px-4">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                {product?.name}
              </h2>

              <div className="flex mb-4">
                <div className="mr-4">
                  <span className="font-bold text-gray-700 dark:text-gray-300">
                    Price:
                  </span>
                  <span className="text-gray-600 dark:text-gray-300">
                    ${product?.price}
                  </span>
                </div>
                <div>
                  <span className="font-bold text-gray-700 dark:text-gray-300">
                    Availability:
                  </span>
                  <span className="text-gray-600 dark:text-gray-300">
                    In Stock
                  </span>
                </div>
              </div>
              <div className="mb-4">
                <span className="font-bold text-gray-700 dark:text-gray-300">
                  Select Color:
                </span>
                <div className="flex items-center mt-2">
                  {colors.length > 0 ? (
                    colors.map((color, index) => (
                      <button
                        key={index}
                        className={`w-6 h-6 rounded-full mr-2 ${
                          selectedColor === color
                            ? "ring-2 ring-offset-2 ring-gray-500"
                            : ""
                        }`}
                        style={{ backgroundColor: color }}
                        aria-label={`Color ${color}`}
                        onClick={() => setSelectedColor(color)}
                      ></button>
                    ))
                  ) : (
                    <span className="text-gray-600 dark:text-gray-300">
                      No colors available
                    </span>
                  )}
                </div>
              </div>
              <div className="flex items-center mt-2">
                {product?.sizes.map((size) => (
                  <button
                    key={size}
                    className={`bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600 ${
                      selectedSize === size ? "bg-gray-500" : ""
                    }`}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
              <div className="mt-3">
                <span className="font-bold text-gray-700 dark:text-gray-300 ">
                  Product Description:
                </span>
                <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">
                  {product?.description}
                </p>
              </div>
              <div className="flex my-4 justify-star items-center">
                <button
                  onClick={() => handleAddToCart(product)}
                  className="bg-yellow-600 dark:bg-gray-600 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800 dark:hover:bg-gray-700"
                >
                  Add to Cart
                </button>
                <div className="px-2">
                  <button className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white py-2 px-4 rounded-full font-bold hover:bg-gray-300 dark:hover:bg-gray-600">
                    Add to Wishlist
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {isToastVisible && (
          <Toast
            message={`${product.name} added to cart!`}
            onClose={() => setIsToastVisible(false)}
          />
        )}
      </div>
    </>
  );
}

export default ProductPage;
