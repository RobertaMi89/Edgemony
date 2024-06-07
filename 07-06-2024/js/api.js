import { API_KEY } from "./keys.js";
import { renderCards, searchBar } from "./card.js";

export let currentPage = 1;
export let totalPages = 0;
let currentEndpoint = "popular";

const options = {
  headers: {
    Authorization: `Bearer ${API_KEY}`,
  },
};

// funzione che gestisce il cambio di endpoint
function changeEndpoint(endpoint) {
  currentEndpoint = endpoint;
  currentPage = 1;
  fetchData(currentPage, currentEndpoint);
}
// caricamento dei film
fetchData(currentPage, currentEndpoint);

// Funzione per effettuare la richiesta API

export function fetchData(page, endpoint) {
  const apiUrl = `https://api.themoviedb.org/3/movie/${endpoint}?language=en-US&page=${page}&api_key=${API_KEY}`;
  fetch(apiUrl, options)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok " + response.statusText);
      }
      return response.json();
    })
    .then((data) => {
      console.log("Data received:", data);
      const movies = data.results;
      renderCards(movies);
      if (totalPages === 0) totalPages = data.total_pages;
      updatePageNumber(page, totalPages);
      searchBar();
    })
    .catch((err) => {
      console.error("Fetch error or JSON parsing error: ", err);
      showError();
    });
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

//BTN per il cambio di endpoint
document
  .getElementById("popular-btn")
  .addEventListener("click", () => changeEndpoint("popular"));
document
  .getElementById("nowplaying-btn")
  .addEventListener("click", () => changeEndpoint("now_playing"));
document
  .getElementById("top-rated-btn")
  .addEventListener("click", () => changeEndpoint("top_rated"));
document
  .getElementById("upcoming-btn")
  .addEventListener("click", () => changeEndpoint("upcoming"));

const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");

prevBtn.addEventListener("click", () => {
  if (currentPage > 1) {
    currentPage--;
    fetchData(currentPage, currentEndpoint);
    updateButtons();
  }
});

nextBtn.addEventListener("click", () => {
  if (currentPage < totalPages) {
    currentPage++;
    fetchData(currentPage, currentEndpoint).then(() => {
      updateButtons();
    });
  }
});

function updateButtons() {
  prevBtn.disabled = currentPage === 1;
  nextBtn.disabled = currentPage === totalPages;
}
