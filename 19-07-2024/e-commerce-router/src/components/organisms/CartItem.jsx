import React, { useContext, useState } from "react";
import CartContext from "../../providers/CartContext";

const CartItem = ({ item }) => {
  const { removeFromCart, updateCartItemQuantity } = useContext(CartContext);
  const [quantity, setQuantity] = useState(item.quantity || 1);

  const handleDecrement = () => {
    if (quantity > 1) {
      const newQuantity = quantity - 1;
      setQuantity(newQuantity);
      updateCartItemQuantity(item.id, newQuantity);
    }
  };

  const handleIncrement = () => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
    updateCartItemQuantity(item.id, newQuantity);
  };

  const handleQuantityChange = (e) => {
    const newQuantity = parseInt(e.target.value);
    if (!isNaN(newQuantity) && newQuantity >= 1) {
      setQuantity(newQuantity);
      updateCartItemQuantity(item.id, newQuantity);
    }
  };

  return (
    <div className="space-y-4 md:flex md:items-center md:justify-between md:gap-6 md:space-y-0">
      <img src={item.images[0]} alt={item.title} className="w-32 mb-4" />
      <div className="w-full min-w-0 flex-1 space-y-4 md:order-2 md:max-w-md">
        <h4 className="font-semibold mb-2">{item.title}</h4>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Size: {item.selectedSize}
        </p>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Color:{" "}
          <span
            style={{ backgroundColor: item.selectedColor }}
            className="w-4 h-4 inline-block rounded-full"
          ></span>
        </p>
        <div className="flex items-center gap-4 w-full">
          <button
            type="button"
            className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-900 hover:underline dark:text-gray-400 dark:hover:text-white"
          >
            <svg
              className="me-1.5 h-5 w-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12.01 6.001C6.5 1 1 8 5.782 13.001L12.011 20l6.23-7C23 8 17.5 1 12.01 6.002Z"
              />
            </svg>
            Add to Favorites
          </button>

          <button
            onClick={() => removeFromCart(item.id)}
            type="button"
            className="inline-flex items-center text-sm font-medium text-red-600 hover:underline dark:text-red-500"
          >
            <svg
              className="me-1.5 h-5 w-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18 17.94 6M18 18 6.06 6"
              />
            </svg>
            Remove
          </button>
        </div>
      </div>

      <label htmlFor="counter-input" className="sr-only">
        Choose quantity:
      </label>
      <div className="flex items-center justify-between md:order-3 md:justify-end">
        <div className="flex items-center">
          <button
            type="button"
            id="decrement-button"
            onClick={handleDecrement}
            className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
          >
            <svg
              className="h-2.5 w-2.5 text-gray-900 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 18 2"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h16"
              />
            </svg>
          </button>
          <input
            id="counter-input"
            data-input-counter
            className="w-10 shrink-0 border-0 bg-transparent text-center text-sm font-medium text-gray-900 focus:outline-none focus:ring-0 dark:text-white"
            value={quantity}
            onChange={handleQuantityChange}
            required
          />
          <button
            type="button"
            id="increment-button"
            onClick={handleIncrement}
            className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
          >
            <svg
              className="h-2.5 w-2.5 text-gray-900 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 18 18"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 1v16M1 9h16"
              />
            </svg>
          </button>
        </div>
        <p className="text-gray-700 mx-4 items-center font-bold">
          ${(item.price * quantity).toFixed(2)}
        </p>
      </div>
    </div>
  );
};

export default CartItem;
