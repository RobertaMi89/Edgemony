import React, { createContext, useState, useEffect, useCallback } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [cartCount, setCartCount] = useState(() => {
    const savedCount = localStorage.getItem("cartCount");
    return savedCount ? JSON.parse(savedCount) : 0;
  });

  // Carica il carrello dal localStorage all'avvio
  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  // Salva il carrello e il conteggio nel localStorage ogni volta che cambiano
  useEffect(() => {
    if (cart.length > 0) {
      localStorage.setItem("cart", JSON.stringify(cart));
    } else {
      localStorage.removeItem("cart");
    }
    localStorage.setItem("cartCount", JSON.stringify(cartCount));
  }, [cart, cartCount]);

  const addToCart = useCallback((product, selectedSize, selectedColor) => {
    setCart((prevCart) => {
      const existingIndex = prevCart.findIndex(
        (item) =>
          item.id === product.id &&
          item.selectedSize === selectedSize &&
          item.selectedColor === selectedColor
      );

      if (existingIndex !== -1) {
        const updatedCart = [...prevCart];
        updatedCart[existingIndex].quantity += 1;
        setCartCount((prevCount) => prevCount + 1);
        return updatedCart;
      } else {
        setCartCount((prevCount) => prevCount + 1);
        return [
          ...prevCart,
          { ...product, quantity: 1, selectedSize, selectedColor },
        ];
      }
    });
  }, []);

  const removeFromCart = useCallback((productId) => {
    setCart((prevCart) => {
      const itemToRemove = prevCart.find((item) => item.id === productId);
      if (itemToRemove) {
        setCartCount((prevCount) => prevCount - itemToRemove.quantity);
      }
      return prevCart.filter((item) => item.id !== productId);
    });
  }, []);

  const updateCartItemQuantity = useCallback((productId, newQuantity) => {
    setCart((prevCart) => {
      const itemToUpdate = prevCart.find((item) => item.id === productId);
      if (itemToUpdate) {
        const quantityDifference = newQuantity - itemToUpdate.quantity;
        setCartCount((prevCount) => prevCount + quantityDifference);
        return prevCart.map((item) =>
          item.id === productId ? { ...item, quantity: newQuantity } : item
        );
      }
      return prevCart;
    });
  }, []);

  const clearCart = useCallback(() => {
    setCart([]);
    setCartCount(0);
  }, []);

  return (
    <CartContext.Provider
      value={{
        cart,
        cartCount,
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
