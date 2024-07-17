import React, { createContext, useState, useEffect } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  useEffect(() => {
    if (!cart.length) {
      localStorage.removeItem("cart");
    } else {
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart]);

  const addToCart = (product) => {
    const existingIndex = cart.findIndex((item) => item.id === product.id);
    if (existingIndex !== -1) {
      const updatedCart = [...cart];
      updatedCart[existingIndex].quantity += 1;
      setCart(updatedCart);
    } else {
      setCart((prevCart) => [...prevCart, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  const updateCartItemQuantity = (productId, newQuantity) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === productId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const clearCart = () => {
    setCart([]);
  };
  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        addToCart,
        removeFromCart,
        clearCart,
        updateCartItemQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
