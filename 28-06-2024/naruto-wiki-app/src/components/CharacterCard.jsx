import React from "react";

function CharacterCard({ character }) {
  return (
    <div className="character-card">
      <h2>{character.name}</h2>
      <p>Age: {character.age}</p>
      <p>Village: {character.village}</p>
      {/* Add other relevant details */}
    </div>
  );
}

export default CharacterCard;
