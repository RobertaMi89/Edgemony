import React, { createContext, useState, useEffect, useContext } from "react";

const NinjaContext = createContext();

export const NinjaProvider = ({ children }) => {
  const [ninjaList, setNinjaList] = useState([]);

  // Carica i dati dal localStorage all'inizio
  useEffect(() => {
    const savedNinjas = JSON.parse(localStorage.getItem("ninjaList")) || [];
    setNinjaList(savedNinjas);
  }, []);

  // Salva i dati nel localStorage ogni volta che ninjaList cambia
  useEffect(() => {
    localStorage.setItem("ninjaList", JSON.stringify(ninjaList));
  }, [ninjaList]);

  const addNinja = (ninja) => {
    setNinjaList((prev) => {
      const updatedList = [...prev, { ...ninja, id: Date.now() }];
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
