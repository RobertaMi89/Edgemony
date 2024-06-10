import { API_KEY } from "./keys.js";
import { renderCards, searchBar, updateMediaTypeTitle } from "./card.js";

export let currentPage = 1;
export let totalPages = 0;
let currentEndpoint = "popular";
let currentMediaType = "movie"; // Tipo di media attuale (film per impostazione predefinita)

const options = {
  headers: {
    Authorization: `Bearer ${API_KEY}`,
  },
};

// Funzione che gestisce il cambio di endpoint
function changeEndpoint(endpoint, mediaType) {
  currentEndpoint = endpoint;
  currentMediaType = mediaType;
  currentPage = 1; // Resetta la pagina quando cambi endpoint
  fetchData(currentPage, currentEndpoint, currentMediaType);

  // Aggiorna il tipo di media nel titolo
  updateMediaTypeTitle(currentMediaType);
}

// Caricamento dei film/popular iniziali
fetchData(currentPage, currentEndpoint, currentMediaType);

// Funzione per effettuare la richiesta API
export async function fetchData(page, endpoint, mediaType) {
  let apiUrl = "";
  if (mediaType === "movie") {
    apiUrl = `https://api.themoviedb.org/3/movie/${endpoint}?language=en-US&page=${page}&api_key=${API_KEY}`;
  } else if (mediaType === "tv") {
    apiUrl = `https://api.themoviedb.org/3/tv/${endpoint}?language=en-US&page=${page}&api_key=${API_KEY}`;
  }

  try {
    const response = await fetch(apiUrl, options);
    if (!response.ok) {
      throw new Error("Network response was not ok " + response.statusText);
    }
    const data = await response.json();
    console.log("Data received:", data);
    const items = data.results;
    renderCards(items, mediaType); // Passa il tipo di media a renderCards
    if (totalPages === 0) totalPages = data.total_pages;
    updatePageNumber(page, totalPages);
    searchBar();
  } catch (err) {
    console.error("Fetch error or JSON parsing error: ", err);
    showError();
    throw err; // Rilancia l'errore per gestione ulteriore
  }
}

// Funzione per mostrare eventuali errori
function showError() {
  const errorMessage = document.querySelector("#error-message");
  errorMessage.style.display = "block";
}

// Funzione per aggiornare il numero della pagina corrente
function updatePageNumber(currentPage, totalPages) {
  const pageNumberElement = document.getElementById("page-number");
  pageNumberElement.textContent = `Pagina: ${currentPage} di ${totalPages}`;
}

// BTN per il cambio di endpoint
document
  .getElementById("popular-btn")
  .addEventListener("click", () => changeEndpoint("popular", currentMediaType));
document
  .getElementById("nowplaying-btn")
  .addEventListener("click", () =>
    changeEndpoint("now_playing", currentMediaType)
  );
document
  .getElementById("top-rated-btn")
  .addEventListener("click", () =>
    changeEndpoint("top_rated", currentMediaType)
  );
document
  .getElementById("upcoming-btn")
  .addEventListener("click", () =>
    changeEndpoint("upcoming", currentMediaType)
  );

// BTN per il cambio di tipo di media (film/serie TV)
document
  .getElementById("movies-btn")
  .addEventListener("click", () => changeMediaType("movie"));
document
  .getElementById("series-btn")
  .addEventListener("click", () => changeMediaType("tv"));

const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");

prevBtn.addEventListener("click", async () => {
  if (currentPage > 1) {
    currentPage--;
    await fetchData(currentPage, currentEndpoint, currentMediaType);
    updateButtons();
  }
});

nextBtn.addEventListener("click", async () => {
  if (currentPage < totalPages) {
    currentPage++;
    await fetchData(currentPage, currentEndpoint, currentMediaType);
    updateButtons();
  }
});

function updateButtons() {
  prevBtn.disabled = currentPage === 1;
  nextBtn.disabled = currentPage === totalPages;
}

// Funzione per il cambio del tipo di media (film/serie TV)
function changeMediaType(mediaType) {
  currentMediaType = mediaType;
  changeEndpoint(currentEndpoint, currentMediaType);
}
