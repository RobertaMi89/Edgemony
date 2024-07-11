import { useState } from "react";
import "./App.module.css";
import Button from "./components/button/Button.jsx";
import IconCart from "./components/icons/IconCart.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Button text={"Add to cart"}>
        <IconCart fill="#000"></IconCart>
      </Button>
    </>
  );
}

export default App;
