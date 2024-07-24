import React from "react";
import { labels } from "../data/labels";

const SearchBar = ({ characters, setFilteredList }) => {
  const handleSearch = (event) => {
    const searchTerm = event.target.value.toLowerCase();

    const filteredCharacters = characters.filter((character) =>
      character.name.toLowerCase().includes(searchTerm)
    );
    setFilteredList(filteredCharacters);
  };

  return (
    <div className="search-bar relative">
      <input
        type="text"
        placeholder={labels.searchBar}
        onChange={handleSearch}
        className="w-full px-4 py-2 text-gray-900 bg-gray-200 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
      />
      <svg
        className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-500"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M21 21l-4.35-4.35m1.34-5.15a7.5 7.5 0 11-10.6-10.6 7.5 7.5 0 0110.6 10.6z"
        />
      </svg>
    </div>
  );
};

export default SearchBar;
