import React, { useContext } from "react";
import CartContext from "../providers/CartContext";
import CartItem from "../components/organisms/CartItem";

const Cart = () => {
  const { cart, clearCart } = useContext(CartContext);

  const handleClearCart = () => {
    clearCart();
    localStorage.removeItem("cart");
  };

  return (
    <section className="bg-white py-8 antialiased dark:bg-gray-900 md:py-16">
      <div className="px-4">
        <div className="flex flex-row justify-between">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">
            Shopping Cart
          </h2>
          <button
            onClick={handleClearCart}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700"
          >
            Clear All
          </button>
        </div>
        <div className="mt-6 sm:mt-8 md:gap-6 lg:flex lg:items-start xl:gap-8">
          <div className="mx-auto w-full flex-none lg:max-w-2xl xl:max-w-4xl">
            <div className="space-y-6">
              <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 md:p-6">
                {cart.length === 0 ? (
                  <p className="text-gray-500 dark:text-gray-400">
                    Your cart is empty.
                  </p>
                ) : (
                  cart.map((item, index) => (
                    <CartItem key={index} item={item} />
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;
