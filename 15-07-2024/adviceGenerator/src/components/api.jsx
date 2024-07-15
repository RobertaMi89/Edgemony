export const fetchAdvice = async () => {
  try {
    const response = await fetch("https://api.adviceslip.com/advice");
    if (!response.ok) {
      throw new Error("Errore nel caricamento dei dati");
    }
    const data = await response.json();
    return data.slip;
  } catch (error) {
    console.error("Errore nel recupero degli advice:", error);
    return null;
  }
};
