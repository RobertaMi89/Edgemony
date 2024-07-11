import { useState } from "react";
import styles from "./App.module.css";
import Main from "./components/organism/main/Main.jsx";
import Header from "./components/organism/header/Header.jsx";
import Footer from "./components/organism/footer/Footer.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
}

export default App;
