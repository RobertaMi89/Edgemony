import React from "react";
import CharacterCard from "./CharacterCard";

const CharacterList = ({ filteredList }) => {
  return (
    <div className="character-list">
      <h2>Lista dei Personaggi</h2>
      {filteredList?.length > 0 ? (
        filteredList.map((character) => (
          <CharacterCard
            key={character.id}
            id={character.id}
            name={character.name}
            image={character.images}
          ></CharacterCard>
        ))
      ) : (
        <></>
      )}
    </div>
  );
};

export default CharacterList;
