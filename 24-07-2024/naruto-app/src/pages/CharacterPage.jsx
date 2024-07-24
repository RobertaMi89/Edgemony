import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchCharacterDetails } from "../utils/api";
import bg from "../assets/bg.jpg";
import imgLoading from "../assets/loading.gif";
import { labels } from "../data/labels";
import CharacterNatureTypes from "../components/path-api.jsx/CharacterNatureTypes";
import JutsuList from "../components/path-api.jsx/Jutsu";
import FamilyList from "../components/path-api.jsx/FamilyList";

function CharacterPage() {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getCharacterDetails = async () => {
      try {
        const data = await fetchCharacterDetails(id);
        setCharacter(data);
      } catch (error) {
        console.error("Error fetching character details:", error);
        setError("An error occurred while fetching the details.");
      } finally {
        setLoading(false);
      }
    };

    getCharacterDetails();
  }, [id]);

  if (loading)
    return (
      <div
        className="flex items-center justify-center min-h-screen bg-gray-900 bg-cover text-yellow-500 text-center"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div>
          <img src={imgLoading} alt="loading" className="mx-auto" />
          <p className="text-xl font-bold">Loading...</p>
        </div>
      </div>
    );

  if (error)
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-900 bg-cover text-yellow-500 text-center">
        <p className="text-xl font-bold">{error}</p>
      </div>
    );

  if (!character)
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-900 bg-cover text-yellow-500 text-center">
        <p className="text-xl font-bold">Character not found</p>
      </div>
    );

  return (
    <div className="bg-gray-800 text-white">
      <div className="container mx-auto p-5">
        <div className="md:flex no-wrap md:-mx-2">
          <div className="w-full md:w-3/12 md:mx-2">
            {/*scheda avatar*/}
            <div className="bg-gray-900 p-4 border-t-4 border-orange-400 rounded-lg">
              <div className="image overflow-hidden">
                <img
                  className="h-auto w-full mx-auto border-4 border-orange-400 rounded-lg"
                  src={character.images[0]}
                  alt={character.name}
                />
              </div>
              <h1 className="text-orange-400 font-bold text-2xl leading-8 my-1">
                {character.name}
              </h1>
              <h3 className="text-orange-400 text-lg font-semibold leading-6">
                {character.title}
              </h3>
              <p className="text-sm text-gray-300 hover:text-gray-200 leading-6">
                {character.bio}
              </p>
              <ul className="bg-gray-700 text-gray-400 py-2 px-3 mt-3 divide-y rounded-lg shadow-lg">
                <li className="flex items-center py-3">
                  <span>
                    Rank: {character.rank?.ninjaRank?.["Part I"] || "N/A"}
                  </span>
                  <span className="ml-auto">{character.memberSince}</span>
                </li>
              </ul>
            </div>
            <div className="my-4"></div>

            {/*scheda famiglia*/}
            <div className="bg-gray-900 p-4 rounded-lg shadow-lg">
              <div className="flex items-center space-x-3 font-semibold text-orange-400 text-xl leading-8">
                <span className="text-orange-400">
                  <svg
                    className="h-6 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </span>
                <span>{labels.charTableFamily}</span>
              </div>
              <div className="grid grid-cols-3 gap-4 mt-4">
                <FamilyList family={character.family} />
              </div>
            </div>
          </div>
          <div className="w-full md:w-9/12 md:mx-2">
            {/*scheda dati personali*/}
            <div className="bg-gray-900 p-4 border-t-4 border-orange-400 rounded-lg">
              <div className="flex flex-col md:flex-row">
                <div className="flex-1">
                  <div className="flex flex-col text-gray-500">
                    <div className="flex justify-between">
                      <span className="text-xl font-semibold leading-8">
                        {labels.charTableBio}
                      </span>
                    </div>
                    <div className="mt-4">
                      <p>Birthdate: {character.personal.birthdate}</p>
                      <p>Sex: {character.personal.sex}</p>
                      <p>Age: {character.personal.age?.["Part I"]}</p>
                      <CharacterNatureTypes
                        natureTypes={character.natureType}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*scheda poteri*/}
            <div className="bg-gray-900 p-4 border-t-4 border-orange-400 rounded-lg">
              <div className="flex flex-col md:flex-row">
                <div className="flex-1">
                  <div className="flex flex-col text-gray-500">
                    <div className="flex justify-between">
                      <span className="text-xl font-semibold leading-8">
                        {labels.charTableJutsu}
                      </span>
                    </div>
                    <div className="mt-4">
                      <JutsuList jutsu={character.jutsu} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CharacterPage;
