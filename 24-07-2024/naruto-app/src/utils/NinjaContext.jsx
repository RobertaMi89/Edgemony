import React, { createContext, useState, useEffect, useContext } from "react";

const NinjaContext = createContext();

export const NinjaProvider = ({ children }) => {
  const [ninjaList, setNinjaList] = useState([]);

  // Carica i dati dal localStorage all'inizio
  useEffect(() => {
    const savedNinjas = JSON.parse(localStorage.getItem("ninjaList")) || [];
    console.log("Loaded ninjas from localStorage:", savedNinjas);
    setNinjaList(savedNinjas);
  }, []);

  // Salva i dati nel localStorage ogni volta che ninjaList cambia
  useEffect(() => {
    localStorage.setItem("ninjaList", JSON.stringify(ninjaList));
  }, [ninjaList]);

  // Funzione per aggiungere un ninja
  const addNinja = (ninja) => {
    setNinjaList((prev) => {
      const newNinjaList = [...prev, { ...ninja, id: Date.now() }];
      localStorage.setItem("ninjaList", JSON.stringify(newNinjaList));
      return newNinjaList;
    });
  };

  return (
    <NinjaContext.Provider value={{ ninjaList, addNinja }}>
      {children}
    </NinjaContext.Provider>
  );
};

// Hook per utilizzare il contesto
export const useNinjaContext = () => useContext(NinjaContext);
