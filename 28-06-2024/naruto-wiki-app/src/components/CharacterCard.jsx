import React from "react";

const CharacterCard = ({ id, name, image }) => {
  return (
    <div className="character-card">
      <div className="character-details">
        <h2>ID: {id}</h2>
        <h3>Name: {name}</h3>
      </div>
      <img className="character-image" src={image[0]} alt={name} />
    </div>
  );
};

export default CharacterCard;
