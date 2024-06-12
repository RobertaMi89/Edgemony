export function renderCards(data, mediaType) {
  const cardsContainer = document.querySelector("#cards-container");

  cardsContainer.innerHTML = "";

  data.forEach((item) => {
    // console.log("Rendering item:", item);
    const div = document.createElement("div");
    const title = document.createElement("h3");
    const divText = document.createElement("div");
    const overview = document.createElement("p");

    div.classList.add("card");
    div.style.backgroundImage = `url(https://image.tmdb.org/t/p/w500${item.poster_path})`;
    div.dataset.genreIds = item.genre_ids.join(",");
    title.classList.add("card-title");
    divText.classList.add("div-text");
    overview.classList.add("card-overview");

    title.textContent = mediaType === "movie" ? item.title : item.name;
    overview.textContent = item.overview;

    div.appendChild(divText);
    divText.appendChild(title);
    divText.appendChild(overview);
    cardsContainer.appendChild(div);
  });
}

// Funzione per la ricerca e il filtraggio delle card in base al titolo e al genere selezionato
export function searchBar(mediaType) {
  const searchInput = document.getElementById("search-input");
  const genresDropdown = document.getElementById("genres-dropdown");

  searchInput.addEventListener("input", () => {
    const input = searchInput.value.toLowerCase();
    const selectedGenre = genresDropdown.value;

    const products = document.querySelectorAll(".card");

    products.forEach((product) => {
      const title = product.querySelector("h3").textContent.toLowerCase();
      const genreIds = Array.from(product.dataset.genreIds.split(","));

      const titleMatch = title.includes(input);
      const genreMatch =
        selectedGenre === "" || genreIds.includes(selectedGenre);

      product.style.display = titleMatch && genreMatch ? "block" : "none";
    });
  });

  genresDropdown.addEventListener("change", () => {
    const input = searchInput.value.toLowerCase();
    const selectedGenre = genresDropdown.value;

    const products = document.querySelectorAll(".card");

    products.forEach((product) => {
      const title = product.querySelector("h3").textContent.toLowerCase();
      const genreIds = Array.from(product.dataset.genreIds.split(","));

      const titleMatch = title.includes(input);
      const genreMatch =
        selectedGenre === "" || genreIds.includes(selectedGenre);

      product.style.display = titleMatch && genreMatch ? "block" : "none";
    });
  });
}
