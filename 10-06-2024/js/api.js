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

// Cambio di endpoint
function changeEndpoint(endpoint, mediaType) {
  currentEndpoint = endpoint;
  currentMediaType = mediaType;
  currentPage = 1;
  fetchData(currentPage, currentEndpoint, currentMediaType);
}

// Cambio del tipo di media e aggiorno i bottoni degli endpoint
async function changeMediaType(mediaType) {
  currentMediaType = mediaType;
  updateEndpoints(mediaType);
  await populateGenresDropdown(mediaType);
  changeEndpoint("popular", mediaType);
}

// Caricamento dei film/popular iniziali
fetchData(currentPage, currentEndpoint, currentMediaType);

// Popola il menu a tendina dei generi all'avvio
populateGenresDropdown(currentMediaType);

// Effettuo la richiesta API
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
    throw err;
  }
}

// Eventuali errori
function showError() {
  const errorMessage = document.querySelector("#error-message");
  errorMessage.style.display = "block";
}

// Aggiorno il numero della pagina corrente
function updatePageNumber(currentPage, totalPages) {
  const pageNumberElement = document.getElementById("page-number");
  pageNumberElement.textContent = `Pagina: ${currentPage} di ${totalPages}`;
}

// Aggiorno i bottoni degli endpoint
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

// Popolo il menu a tendina dei generi
async function populateGenresDropdown(mediaType) {
  const genresDropdown = document.getElementById("genres-dropdown");
  genresDropdown.innerHTML = "<option value=''>Seleziona un genere</option>";

  try {
    const genreUrl = `https://api.themoviedb.org/3/genre/${mediaType}/list?language=en-US&api_key=${API_KEY}`;

    console.log("Fetching genres from URL: ", genreUrl);

    // Effettuo la chiamata API per ottenere la lista dei generi
    const response = await fetch(genreUrl, options);
    if (!response.ok) {
      throw new Error("Errore di rete: " + response.statusText);
    }
    const data = await response.json();
    console.log("Data received for genres:", data);
    const genres = data.genres;

    // Aggiungo le opzioni al menu a tendina
    genres.forEach((genre) => {
      const option = document.createElement("option");
      option.value = genre.id;
      option.textContent = genre.name;
      genresDropdown.appendChild(option);
    });
  } catch (error) {
    console.error("Errore durante il recupero dei generi:", error.message);
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
