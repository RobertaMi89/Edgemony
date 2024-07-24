import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useNinjaContext } from "../utils/NinjaContext";

const Create = () => {
  const [name, setName] = useState("");
  const [clan, setClan] = useState("");
  const [rank, setRank] = useState("");
  const [team, setTeam] = useState("");
  const [jutsu, setJutsu] = useState("");
  const [avatar, setAvatar] = useState("");
  const [natureType, setNatureType] = useState("");
  const navigate = useNavigate();

  const { addNinja } = useNinjaContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newNinja = {
      id: crypto.randomUUID(),
      name,
      clan,
      rank,
      team,
      jutsu,
      avatar,
      natureType,
    };
    addNinja(newNinja);
    navigate("/");
  };

  return (
    <div className="flex justify-center min-h-screen bg-gray-900 bg-cover">
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-lg bg-gray-800 bg-opacity-70 p-8 rounded-lg shadow-md">
          <h1 className="text-center text-2xl font-bold text-yellow-400 sm:text-3xl">
            Create New Ninja
          </h1>
          <p className="mx-auto mt-4 max-w-md text-center text-gray-300">
            Please fill in the details to create a new ninja.
          </p>
          <form onSubmit={handleSubmit} className="mb-0 mt-6 space-y-4">
            <div>
              <label className="block text-yellow-400 mb-2">Name</label>
              <div className="relative">
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
                />
              </div>
            </div>
            <div>
              <label className="block text-yellow-400 mb-2">Clan</label>
              <div className="relative">
                <input
                  type="text"
                  value={clan}
                  onChange={(e) => setClan(e.target.value)}
                  className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
                />
              </div>
            </div>
            <div>
              <label className="block text-yellow-400 mb-2">Rank</label>
              <div className="relative">
                <input
                  type="text"
                  value={rank}
                  onChange={(e) => setRank(e.target.value)}
                  className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
                />
              </div>
            </div>
            <div>
              <label className="block text-yellow-400 mb-2">Team</label>
              <div className="relative">
                <input
                  type="text"
                  value={team}
                  onChange={(e) => setTeam(e.target.value)}
                  className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
                />
              </div>
            </div>
            <div>
              <label className="block text-yellow-400 mb-2">Jutsu</label>
              <div className="relative">
                <input
                  type="text"
                  value={jutsu}
                  onChange={(e) => setJutsu(e.target.value)}
                  className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
                />
              </div>
            </div>
            <div>
              <label className="block text-yellow-400 mb-2">Avatar</label>
              <div className="relative">
                <input
                  type="text"
                  value={avatar}
                  onChange={(e) => setAvatar(e.target.value)}
                  className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
                />
              </div>
            </div>
            <div>
              <label className="block text-yellow-400 mb-2">Nature Type</label>
              <div className="relative">
                <input
                  type="text"
                  value={natureType}
                  onChange={(e) => setNatureType(e.target.value)}
                  className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
                />
              </div>
            </div>
            <button
              type="submit"
              className="block w-full rounded-lg bg-yellow-500 px-5 py-3 text-sm font-medium text-white"
            >
              Create Ninja
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Create;
