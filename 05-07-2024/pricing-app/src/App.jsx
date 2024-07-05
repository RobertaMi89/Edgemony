import { useState } from "react";
import "./App.css";
import Card from "./components/card/Card.jsx";
import Header from "./components/header/Header.jsx";

function App() {
  return (
    <div className="container">
      <Header />
      <Card />
    </div>
  );
}

export default App;
