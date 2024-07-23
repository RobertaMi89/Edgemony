export const fetchCharacters = async (page = 1, pageSize = 20) => {
  const response = await fetch(
    `https://dattebayo-api.onrender.com/characters?page=${page}&pageSize=${pageSize}`
  );
  const data = await response.json();
  return data;
};
