import React, { createContext, useState, useEffect, useContext } from "react";

const NinjaContext = createContext();

export const NinjaProvider = ({ children }) => {
  const [ninjaList, setNinjaList] = useState([]);
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    const savedNinjas = JSON.parse(localStorage.getItem("ninjaList"));
    setNinjaList(savedNinjas);
    setIsInitialized(true);
  }, []);

  useEffect(() => {
    if (isInitialized) {
      localStorage.setItem("ninjaList", JSON.stringify(ninjaList));
    }
  }, [ninjaList, isInitialized]);

  const addNinja = (ninja) => {
    setNinjaList((prev) => {
      const updatedList = [...prev, { ...ninja, id: crypto.randomUUID() }];
      localStorage.setItem("ninjaList", JSON.stringify(updatedList));
      return updatedList;
    });
  };

  return (
    <NinjaContext.Provider value={{ ninjaList, addNinja }}>
      {children}
    </NinjaContext.Provider>
  );
};

export const useNinjaContext = () => useContext(NinjaContext);
