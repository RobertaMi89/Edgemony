import React from "react";

const SearchBar = ({ characters, setFilteredList }) => {
  const handleSearch = (event) => {
    const searchTerm = event.target.value.toLowerCase();

    const filteredCharacters = characters.filter((character) =>
      character.name.toLowerCase().includes(searchTerm)
    );
    setFilteredList(filteredCharacters);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search characters..."
        onChange={handleSearch}
      />
    </div>
  );
};

export default SearchBar;
