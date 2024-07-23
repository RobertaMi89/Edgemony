import React from "react";
import { useParams } from "react-router-dom";
import { fetchCharacters } from "../../utils/api";
import { useEffect, useState } from "react";

function CharacterPage() {
  const [character, setCharacter] = useState([]);
  const { id } = useParams();

  const getChar = async (id) => {
    try {
      const data = await fetchCharacters(id);
    } catch (error) {
      console.lor(error);
    }
  };

  useEffect(() => {
    getChar();
  }, []);

  useEffect(() => {
    console.log(character);
  }, [character]);

  return (
    <div className="bg-gray-100">
      <div className="w-full text-white bg-main-color">
        <div className="flex flex-col max-w-screen-xl px-4 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8">
          <div className="p-4 flex flex-row items-center justify-between">
            <a
              href="#"
              className="text-lg font-semibold tracking-widest uppercase rounded-lg focus:outline-none focus:shadow-outline"
            >
              example profile
            </a>
            <button className="md:hidden rounded-lg focus:outline-none focus:shadow-outline">
              <svg fill="currentColor" viewBox="0 0 20 20" className="w-6 h-6">
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <nav className="flex-col flex-grow pb-4 md:pb-0 hidden md:flex md:justify-end md:flex-row">
            <div className="relative">
              <button className="flex flex-row items-center space-x-2 w-full px-4 py-2 mt-2 text-sm font-semibold text-left bg-transparent hover:bg-blue-800 md:w-auto md:inline md:mt-0 md:ml-4 hover:bg-gray-200 focus:bg-blue-800 focus:outline-none focus:shadow-outline">
                <span>Jane Doe</span>
                <img
                  className="inline h-6 rounded-full"
                  src="https://avatars2.githubusercontent.com/u/24622175?s=60&amp;v=4"
                  alt="Profile"
                />
                <svg
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  className="inline w-4 h-4 transition-transform duration-200 transform"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
              <div className="absolute right-0 w-full mt-2 origin-top-right rounded-md shadow-lg md:w-48">
                <div className="py-2 bg-white text-blue-800 text-sm rounded-sm border border-main-color shadow-sm">
                  <a
                    className="block px-4 py-2 mt-2 text-sm bg-white md:mt-0 focus:text-gray-900 hover:bg-indigo-100 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                    href="#"
                  >
                    Settings
                  </a>
                  <a
                    className="block px-4 py-2 mt-2 text-sm bg-white md:mt-0 focus:text-gray-900 hover:bg-indigo-100 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                    href="#"
                  >
                    Help
                  </a>
                  <div className="border-b"></div>
                  <a
                    className="block px-4 py-2 mt-2 text-sm bg-white md:mt-0 focus:text-gray-900 hover:bg-indigo-100 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                    href="#"
                  >
                    Logout
                  </a>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
      <div className="container mx-auto my-5 p-5">
        <div className="md:flex no-wrap md:-mx-2">
          <div className="w-full md:w-3/12 md:mx-2">
            <div className="bg-white p-3 border-t-4 border-green-400">
              <div className="image overflow-hidden">
                <img
                  className="h-auto w-full mx-auto"
                  src={
                    character.profilePicture ||
                    "https://lavinephotography.com.au/wp-content/uploads/2017/01/PROFILE-Photography-112.jpg"
                  }
                  alt={character.name}
                />
              </div>
              <h1 className="text-gray-900 font-bold text-xl leading-8 my-1">
                {character.name}
              </h1>
              <h3 className="text-gray-600 font-lg text-semibold leading-6">
                {character.title}
              </h3>
              <p className="text-sm text-gray-500 hover:text-gray-600 leading-6">
                {character.bio}
              </p>
              <ul className="bg-gray-100 text-gray-600 hover:text-gray-700 hover:shadow py-2 px-3 mt-3 divide-y rounded shadow-sm">
                <li className="flex items-center py-3">
                  <span>Status</span>
                  <span className="ml-auto">
                    <span className="bg-green-500 py-1 px-2 rounded text-white text-sm">
                      Active
                    </span>
                  </span>
                </li>
                <li className="flex items-center py-3">
                  <span>Member since</span>
                  <span className="ml-auto">{character.memberSince}</span>
                </li>
              </ul>
            </div>
            <div className="my-4"></div>
            <div className="bg-white p-3 hover:shadow">
              <div className="flex items-center space-x-3 font-semibold text-gray-900 text-xl leading-8">
                <span className="text-green-500">
                  <svg
                    className="h-5 fill-current"
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
                <span>Similar Profiles</span>
              </div>
              <div className="grid grid-cols-3">
                <div className="bg-gray-200 p-3 rounded-lg text-center">
                  <img
                    className="h-16 w-16 rounded-full mx-auto"
                    src="https://lavinephotography.com.au/wp-content/uploads/2017/01/PROFILE-Photography-112.jpg"
                    alt="Profile"
                  />
                  <p className="text-gray-800 text-sm font-semibold leading-5 mt-2">
                    John Doe
                  </p>
                </div>
                <div className="bg-gray-200 p-3 rounded-lg text-center">
                  <img
                    className="h-16 w-16 rounded-full mx-auto"
                    src="https://lavinephotography.com.au/wp-content/uploads/2017/01/PROFILE-Photography-112.jpg"
                    alt="Profile"
                  />
                  <p className="text-gray-800 text-sm font-semibold leading-5 mt-2">
                    Anna Smith
                  </p>
                </div>
                <div className="bg-gray-200 p-3 rounded-lg text-center">
                  <img
                    className="h-16 w-16 rounded-full mx-auto"
                    src="https://lavinephotography.com.au/wp-content/uploads/2017/01/PROFILE-Photography-112.jpg"
                    alt="Profile"
                  />
                  <p className="text-gray-800 text-sm font-semibold leading-5 mt-2">
                    Mike Johnson
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-9/12 md:mx-2">
            <div className="bg-white p-3 border-t-4 border-green-400">
              <div className="flex flex-col md:flex-row">
                <div className="flex-1">
                  <div className="flex flex-col text-gray-700">
                    <div className="flex justify-between">
                      <span className="text-xl font-semibold leading-8">
                        {character.name}
                      </span>
                      <button className="bg-green-500 text-white px-4 py-2 rounded-md">
                        Follow
                      </button>
                    </div>
                    <div className="mt-4">
                      <p>{character.detailedBio}</p>
                    </div>
                  </div>
                </div>
                <div className="flex-1 mt-4 md:mt-0 md:ml-4">
                  <div className="bg-gray-100 p-4 rounded-lg shadow">
                    <h2 className="text-gray-900 font-semibold text-lg">
                      Recent Activity
                    </h2>
                    <ul className="mt-2 text-gray-600">
                      <li className="py-2">
                        Liked a post by{" "}
                        <span className="font-semibold">John Doe</span>
                      </li>
                      <li className="py-2">
                        Commented on a photo by{" "}
                        <span className="font-semibold">Anna Smith</span>
                      </li>
                      <li className="py-2">
                        Started following{" "}
                        <span className="font-semibold">Mike Johnson</span>
                      </li>
                    </ul>
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
