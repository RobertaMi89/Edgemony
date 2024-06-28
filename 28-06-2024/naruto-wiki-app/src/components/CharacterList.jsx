import React from "react";
import CharacterCard from "./CharacterCard";

const CharacterList = ({ filteredList }) => {
  return (
    <div>
      <h2>Lista dei Personaggi</h2>
      <ul>
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
      </ul>
    </div>
  );
};

export default CharacterList;
