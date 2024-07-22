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
        <div class="mt-8 flex justify-end border-t border-gray-100 pt-8">
          <div class="w-screen max-w-lg space-y-4">
            <dl class="space-y-0.5 text-sm text-gray-700">
              <div class="flex justify-between">
                <dt>Subtotal</dt>
                <dd>$250</dd>
              </div>

              <div class="flex justify-between">
                <dt>VAT</dt>
                <dd>$25</dd>
              </div>

              <div class="flex justify-between">
                <dt>Discount</dt>
                <dd>-$20</dd>
              </div>

              <div class="flex justify-between !text-base font-medium">
                <dt>Total</dt>
                <dd>$200</dd>
              </div>
            </dl>

            <div class="flex justify-end">
              <span class="inline-flex items-center justify-center rounded-full bg-indigo-100 px-2.5 py-0.5 text-indigo-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  class="-ms-1 me-1.5 h-4 w-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 010 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 010-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375z"
                  />
                </svg>

                <p class="whitespace-nowrap text-xs">2 Discounts Applied</p>
              </span>
            </div>

            <div class="flex justify-end">
              <a
                href="#"
                class="block rounded bg-gray-700 px-5 py-3 text-sm text-gray-100 transition hover:bg-gray-600"
              >
                Checkout
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;
