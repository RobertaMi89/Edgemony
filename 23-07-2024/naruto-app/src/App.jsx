import { labels } from "./data/labels.js";
import { useEffect, useState } from "react";
import { fetchCharacters } from "./utils/api.jsx";
import bg from "./assets/bg.jpg";
import imgLoading from "./assets/loading.gif";
import { Link } from "react-router-dom";

function App() {
  const [characterList, setCharacterList] = useState([]);
  const [loading, setLoading] = useState(true);

  const getCharacter = async () => {
    try {
      const data = await fetchCharacters();
      setCharacterList(data.characters || []);
    } catch (error) {
      console.log("stiamo sbagliando qui...");
      setCharacterList([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getCharacter();
  }, []);

  useEffect(() => {
    console.log(characterList);
  }, [characterList]);

  if (loading)
    return (
      <div
        className="flex items-center justify-center min-h-screen bg-gray-900 bg-cover text-yellow-500 text-center"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div>
          <img src={imgLoading} alt="loading" className="mx-auto" />
          <p>is Loading...</p>
        </div>
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
      <main className="w-[1200px] bg-opacity-70 bg-gray-800 rounded-lg shadow-lg">
        <div className="p-4 border-b border-gray-700">
          <h1 className="text-3xl text-yellow-400 font-bold">
            {labels.charList}
          </h1>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y-2 divide-gray-700 bg-gray-800 text-sm text-white">
            <thead className="text-left">
              <tr>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-yellow-400">
                  {labels.charTableName}
                </th>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-yellow-400">
                  {labels.charTableClan}
                </th>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-yellow-400">
                  {labels.charTableRank}
                </th>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-yellow-400">
                  {labels.charTableTeam}
                </th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-700">
              {characterList.map((character, index) => (
                <tr key={index}>
                  <td className="whitespace-nowrap px-4 py-2 font-medium">
                    {character.name}
                  </td>
                  <td className="whitespace-nowrap px-4 py-2">
                    {character.personal.clan}
                  </td>
                  <td className="whitespace-nowrap px-4 py-2">
                    {character.rank?.ninjaRank?.["Part I"] || "N/A"}
                  </td>
                  <td className="whitespace-nowrap px-4 py-2">
                    {getTeamName(character.personal?.team)}
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
      </main>
    </div>
  );
}

export default App;
