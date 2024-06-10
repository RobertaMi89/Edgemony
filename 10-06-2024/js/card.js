export function renderCards(data, mediaType) {
  const cardsContainer = document.querySelector("#cards-container");

  cardsContainer.innerHTML = "";

  data.forEach((item) => {
    console.log("Rendering item:", item);
    const div = document.createElement("div");
    const title = document.createElement("h3");
    const divText = document.createElement("div");
    const overview = document.createElement("p");

    div.classList.add("card");
    div.style.backgroundImage = `url(https://image.tmdb.org/t/p/w500${item.poster_path})`;

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

export function searchBar() {
  const searchInput = document.getElementById("search-input");

  searchInput.addEventListener("input", () => {
    const input = searchInput.value.toLowerCase();
    const products = document.querySelectorAll(".card");

    products.forEach((product) => {
      const title = product.querySelector("h3").textContent.toLowerCase();
      product.style.display = title.includes(input) ? "block" : "none";
    });
  });
}

export function updateMediaTypeTitle(mediaType) {
  const mediaTitleElement = document.getElementById("media-title");
  if (mediaTitleElement) {
    mediaTitleElement.textContent =
      mediaType === "movie" ? "Movies" : "TV Series";
  }
}
