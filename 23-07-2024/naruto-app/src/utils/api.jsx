const API_BASE_URL = "https://dattebayo-api.onrender.com";

// Funzione per recuperare tutti i personaggi
export const fetchAllCharacters = async (page = 1, limit = 20) => {
  try {
    const response = await fetch(
      `${API_BASE_URL}/characters?page=${page}&limit=${limit}`
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Errore durante il recupero dei personaggi:", error);
    throw error;
  }
};

// Funzione per recuperare i dettagli di un personaggio specifico
export const fetchCharacterDetails = async (id) => {
  try {
    const response = await fetch(`${API_BASE_URL}/characters/${id}`);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`Errore durante il recupero del personaggio ${id}:`, error);
    throw error;
  }
};
