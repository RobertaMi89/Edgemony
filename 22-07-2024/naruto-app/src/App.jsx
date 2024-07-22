import { labels } from "./data/labels.js";
import { useEffect, useState } from "react";
import { getCharacterList } from "./utils/apiFake.jsx";
import bg from "./assets/bg.jpg";

function App() {
  const [characterList, setCharacterList] = useState([]);
  const [loading, setLoading] = useState(true);

  const getCharacter = async () => {
    try {
      const data = await getCharacterList();
      setCharacterList(data);
    } catch (error) {
      console.log("stiamo sbagliando qui...");
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

  if (loading) return <p>is Loading...</p>;

  return (
    <>
      <div
        className="flex justify-center min-h-screen bg-gray-900 bg-cover"
        style={{
          backgroundImage: { bg },
        }}
      >
        <main className="w-[1200px] bg-opacity-70 bg-gray-800 rounded-lg shadow-lg">
          <div className="p-4 border-b border-gray-700">
            <h1 className="text-3xl text-yellow-400 font-bold">
              {labels.charList}
            </h1>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full divide-y-2 divide-gray-700 bg-gray-800 text-sm text-white">
              <thead className="ltr:text-left rtl:text-right">
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
                      {character.clan}
                    </td>
                    <td className="whitespace-nowrap px-4 py-2">
                      {character.rank}
                    </td>
                    <td className="whitespace-nowrap px-4 py-2">
                      {character.team}
                    </td>
                    <td className="whitespace-nowrap px-4 py-2">
                      <a
                        href="#"
                        className="inline-block rounded bg-orange-600 px-4 py-2 text-xs font-medium text-white hover:bg-orange-700"
                      >
                        View
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
