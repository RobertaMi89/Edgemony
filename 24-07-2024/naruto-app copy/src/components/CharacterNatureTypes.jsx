import React from "react";

const CharacterNatureTypes = ({ natureTypes }) => {
  return (
    <div>
      <p className="mt-2 text-gray-500">
        Nature type: {natureTypes.join(" - ")}
      </p>
    </div>
  );
};

export default CharacterNatureTypes;
