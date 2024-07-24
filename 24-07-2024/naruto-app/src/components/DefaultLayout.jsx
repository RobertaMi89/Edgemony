import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar.jsx";

const DefaultLayout = () => {
  const [ninjaList, setNinjaList] = useState([]);

  const addNinja = (ninja) => {
    setNinjaList((prevList) => [
      ...prevList,
      { ...ninja, id: crypto.randomUUID() },
    ]);
  };

  return (
    <div>
      <Navbar />
      <Outlet context={{ addNinja, ninjaList }} />
    </div>
  );
};

export default DefaultLayout;
