import React, { createContext, useContext, useState } from "react";

const NinjaContext = createContext();

export const NinjaProvider = ({ children }) => {
  const [ninjaList, setNinjaList] = useState([]);

  const addNinja = (ninja) => {
    setNinjaList((prevList) => [ninja, ...prevList]);
  };

  return (
    <NinjaContext.Provider value={{ ninjaList, addNinja }}>
      {children}
    </NinjaContext.Provider>
  );
};

export const useNinjaContext = () => useContext(NinjaContext);
