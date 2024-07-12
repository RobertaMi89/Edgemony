import { useState } from "react";
import styles from "./App.module.css";
import Main from "./components/organism/main/Main.jsx";
import Header from "./components/organism/header/Header.jsx";
import Footer from "./components/organism/footer/Footer.jsx";

function App() {
  const [cartCount, setCartCount] = useState(0);

  const addToCart = (count) => {
    setCartCount(cartCount + count);
  };

  return (
    <>
      <Header count={cartCount} />
      <Main addToCart={addToCart} />
      <Footer />
    </>
  );
}

export default App;
