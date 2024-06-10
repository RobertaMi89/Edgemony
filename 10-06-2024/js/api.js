import { API_KEY } from "./keys.js";
import { renderCards, searchBar } from "./card.js";

let currentPage = 1;
let totalPages = 0;
let currentEndpoint = "popular";
let currentMediaType = "movie";

const options = {
  headers: {
    Authorization: `Bearer ${API_KEY}`,
  },
};

// Funzione che gestisce il cambio di endpoint
function changeEndpoint(endpoint, mediaType) {
  currentEndpoint = endpoint;
  currentMediaType = mediaType;
  currentPage = 1;
  fetchData(currentPage, currentEndpoint, currentMediaType);
}

// Funzione che gestisce il cambio del tipo di media e aggiorna i bottoni degli endpoint
async function changeMediaType(mediaType) {
  currentMediaType = mediaType;
  updateEndpoints(mediaType);
  await populateGenresDropdown(); // Aggiorna anche i generi nel menu a tendina
  changeEndpoint(currentEndpoint, currentMediaType);
}

// Caricamento dei film/popular iniziali
fetchData(currentPage, currentEndpoint, currentMediaType);

// Popola il menu a tendina dei generi all'avvio
populateGenresDropdown();

// Funzione per effettuare la richiesta API
async function fetchData(page, endpoint, mediaType) {
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
    const movies = data.results;
    renderCards(movies, currentMediaType);
    if (totalPages === 0) totalPages = data.total_pages;
    updatePageNumber(page, totalPages);
    searchBar(currentMediaType);
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

// Funzione per aggiornare i bottoni degli endpoint
function updateEndpoints(mediaType) {
  const endpointsContainer = document.getElementById("endpoints");
  endpointsContainer.innerHTML = "";

  const endpoints =
    mediaType === "movie"
      ? ["popular", "now_playing", "top_rated", "upcoming"]
      : ["popular", "airing_today", "on_the_air", "top_rated"];

  endpoints.forEach((endpoint) => {
    const button = document.createElement("button");
    button.id = `${endpoint}-btn`;
    button.textContent = endpoint
      .replace("_", " ")
      .replace(/\b\w/g, (l) => l.toUpperCase());
    button.addEventListener("click", () => changeEndpoint(endpoint, mediaType));
    endpointsContainer.appendChild(button);
  });
}

// Funzione per popolare il menu a tendina dei generi
async function populateGenresDropdown() {
  const genresDropdown = document.getElementById("genres-dropdown");
  genresDropdown.innerHTML = "<option value=''>Seleziona un genere</option>";

  try {
    // Effettua la chiamata API per ottenere la lista dei generi
    const response = await fetch(
      `https://api.themoviedb.org/3/genre/movie/list?language=en-US&api_key=${API_KEY}`
    );
    if (!response.ok) {
      throw new Error("Errore di rete: " + response.statusText);
    }
    const data = await response.json();
    console.log("Data received:", data);
    const genres = data.genres;

    // Aggiunge le opzioni al menu a tendina
    genres.forEach((genre) => {
      const option = document.createElement("option");
      option.value = genre.id;
      option.textContent = genre.name;
      genresDropdown.appendChild(option);
    });
  } catch (error) {
    console.error("Errore durante il recupero dei generi:", error.message);
    // Puoi gestire l'errore qui, ad esempio visualizzando un messaggio di errore all'utente
  }
}

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
