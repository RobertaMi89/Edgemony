import CharacterList from "./CharacterList";
import React, { useState, useEffect } from "react";
import { fetchCharacters } from "../utils/api";
import SearchBar from "./SearchBar";

function Main() {
  const [characters, setCharacters] = useState([]);
  const [filteredList, setFilteredList] = useState([]);

  useEffect(() => {
    async function setChars() {
      const chars = (await fetchCharacters()).characters;
      setCharacters(chars);
      setFilteredList(chars);
    }

    setChars();

    // Imposta i personaggi nello stato locale
  }, []); // Esegui l'effetto solo una volta all'avvio

  return (
    <div className="Main">
      <SearchBar characters={characters} setFilteredList={setFilteredList} />
      <CharacterList filteredList={filteredList} />
    </div>
  );
}

export default Main;
