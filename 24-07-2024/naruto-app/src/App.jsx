import React, { useState, useEffect } from "react";
import { useNinjaContext } from "./utils/NinjaContext.jsx";
import { fetchAllCharacters } from "./utils/api.jsx";
import bg from "./assets/bg.jpg";
import imgLoading from "./assets/loading.gif";
import { Link } from "react-router-dom";
import SearchBar from "./components/SearchBar.jsx";

const ITEMS_PER_PAGE = 20;

const App = () => {
  const { ninjaList } = useNinjaContext();
  const [characterList, setCharacterList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [filteredList, setFilteredList] = useState([]);

  const getCharacters = async (page) => {
    try {
      const data = await fetchAllCharacters(page, ITEMS_PER_PAGE);
      setCharacterList(data.characters || []);
      setTotalPages(Math.ceil(data.total / ITEMS_PER_PAGE));
      setFilteredList(data.characters || []);
    } catch (error) {
      console.error("Errore durante il recupero dei personaggi:", error);
      setError("Si è verificato un errore durante il recupero dei dati.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getCharacters(page);
  }, [page]);

  if (loading && page === 1)
    return (
      <div
        className="flex items-center justify-center min-h-screen bg-gray-900 bg-cover text-yellow-500 text-center"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div>
          <img src={imgLoading} alt="loading" className="mx-auto" />
          <p>Loading...</p>
        </div>
      </div>
    );

  if (error)
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-900 bg-cover text-yellow-500 text-center">
        <p>{error}</p>
      </div>
    );

  const getTeamName = (team) => {
    if (Array.isArray(team)) {
      return team[0] || "N/A";
    } else if (typeof team === "string") {
      return team;
    }
    return "N/A";
  };

  return (
    <div
      className="flex justify-center min-h-screen bg-gray-900 bg-cover"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <main className="w-[1200px] bg-gray-800 bg-opacity-70 rounded-lg shadow-lg">
        <div className="p-4 border-b border-gray-700">
          <h1 className="text-3xl text-yellow-400 font-bold flex justify-between">
            Character List
            <SearchBar
              characters={characterList}
              setFilteredList={setFilteredList}
            />
          </h1>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y-2 divide-gray-700 bg-gray-800 text-sm text-white">
            <thead className="text-left">
              <tr>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-yellow-400">
                  Name
                </th>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-yellow-400">
                  Clan
                </th>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-yellow-400">
                  Rank
                </th>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-yellow-400">
                  Team
                </th>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-yellow-400">
                  Actions
                </th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-700">
              {[
                ...ninjaList,
                ...(filteredList.length > 0 ? filteredList : characterList),
              ].map((character) => (
                <tr key={character.id}>
                  <td className="whitespace-nowrap px-4 py-2 font-medium">
                    {character.name}
                  </td>
                  <td className="whitespace-nowrap px-4 py-2">
                    {character.personal?.clan || character.clan}
                  </td>
                  <td className="whitespace-nowrap px-4 py-2">
                    {character.rank?.ninjaRank?.["Part I"] || "N/A"}
                  </td>
                  <td className="whitespace-nowrap px-4 py-2">
                    {getTeamName(character.personal?.team || character.team)}
                  </td>
                  <td className="whitespace-nowrap px-4 py-2">
                    <Link
                      to={`/character/${character.id}`}
                      className="inline-block rounded bg-orange-600 px-4 py-2 text-xs font-medium text-white hover:bg-orange-700"
                    >
                      View
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex justify-between p-4">
          <button
            onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
            disabled={page === 1}
            className="px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 disabled:bg-gray-600 border border-black shadow-lg"
          >
            Previous
          </button>
          <span className="text-white">
            Page {page} of {totalPages}
          </span>
          <button
            onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}
            disabled={page === totalPages}
            className="px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 disabled:bg-gray-600 border border-black shadow-lg"
          >
            Next
          </button>
        </div>
      </main>
    </div>
  );
};

export default App;
