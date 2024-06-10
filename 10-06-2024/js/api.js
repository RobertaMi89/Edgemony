import { API_KEY } from "./keys.js";
import { renderCards, searchBar, updateMediaTypeTitle } from "./card.js";

export let currentPage = 1;
export let totalPages = 0;
let currentEndpoint = "popular";
let currentMediaType = "movie"; // Tipo di media attuale (film per impostazione predefinita)
let currentGenreId = null; // ID del genere corrente

const options = {
  headers: {
    Authorization: `Bearer ${API_KEY}`,
  },
};

// Funzione che gestisce il cambio di endpoint
function changeEndpoint(endpoint, mediaType) {
  currentEndpoint = endpoint;
  currentMediaType = mediaType;
  currentGenreId = null; // Reset del genere corrente
  currentPage = 1; // Resetta la pagina quando cambi endpoint
  fetchData(currentPage, currentEndpoint, currentMediaType, currentGenreId);

  // Aggiorna il tipo di media nel titolo
  updateMediaTypeTitle(currentMediaType);
}

// Caricamento dei film/popular iniziali
fetchData(currentPage, currentEndpoint, currentMediaType);

// Funzione per ottenere la lista dei generi
async function fetchGenres(mediaType) {
  let apiUrl = "";
  if (mediaType === "movie") {
    apiUrl = `https://api.themoviedb.org/3/genre/movie/list?language=en-US&api_key=${API_KEY}`;
  } else if (mediaType === "tv") {
    apiUrl = `https://api.themoviedb.org/3/genre/tv/list?language=en-US&api_key=${API_KEY}`;
  }

  try {
    const response = await fetch(apiUrl, options);
    if (!response.ok) {
      throw new Error("Network response was not ok " + response.statusText);
    }
    const data = await response.json();
    return data.genres;
  } catch (err) {
    console.error("Fetch error or JSON parsing error: ", err);
    showError();
    throw err; // Rilancia l'errore per gestione ulteriore
  }
}

// Funzione per effettuare la richiesta API
export async function fetchData(page, endpoint, mediaType, genreId = null) {
  let apiUrl = "";
  if (mediaType === "movie") {
    apiUrl = `https://api.themoviedb.org/3/${
      genreId ? `discover/movie?with_genres=${genreId}` : `movie/${endpoint}`
    }?language=en-US&page=${page}&api_key=${API_KEY}`;
  } else if (mediaType === "tv") {
    apiUrl = `https://api.themoviedb.org/3/${
      genreId ? `discover/tv?with_genres=${genreId}` : `tv/${endpoint}`
    }?language=en-US&page=${page}&api_key=${API_KEY}`;
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

// Funzione per aggiornare la lista dei generi
async function updateGenres(mediaType) {
  const genres = await fetchGenres(mediaType);
  const genresDropdown = document.getElementById("genres-dropdown");
  genresDropdown.innerHTML = '<option value="">Seleziona un genere</option>';

  genres.forEach((genre) => {
    const genreOption = document.createElement("option");
    genreOption.value = genre.id;
    genreOption.textContent = genre.name;
    genresDropdown.appendChild(genreOption);
  });
}

// Event listener per il dropdown dei generi
document
  .getElementById("genres-dropdown")
  .addEventListener("change", (event) => {
    currentGenreId = event.target.value;
    fetchData(currentPage, currentEndpoint, currentMediaType, currentGenreId);
  });

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
    await fetchData(
      currentPage,
      currentEndpoint,
      currentMediaType,
      currentGenreId
    );
    updateButtons();
  }
});

nextBtn.addEventListener("click", async () => {
  if (currentPage < totalPages) {
    currentPage++;
    await fetchData(
      currentPage,
      currentEndpoint,
      currentMediaType,
      currentGenreId
    );
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
  currentGenreId = null; // Reset del genere corrente
  changeEndpoint(currentEndpoint, currentMediaType);
  updateGenres(currentMediaType); // Aggiorna i generi disponibili
}

// Aggiorna i generi disponibili all'avvio
updateGenres(currentMediaType);
