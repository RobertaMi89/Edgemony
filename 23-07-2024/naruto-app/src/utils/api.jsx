export const fetchCharacters = async () => {
  try {
    const response = await fetch(
      "https://dattebayo-api.onrender.com/characters"
    );
    if (!response.ok) {
      throw new Error("Errore nel caricamento dei dati");
    }

    return response.json();
  } catch (error) {
    console.error("Errore nel recupero dei personaggi:", error);
  }
};
