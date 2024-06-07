export function renderCards(data) {
  const cardsContainer = document.querySelector("#cards-container");

  cardsContainer.innerHTML = "";

  data.forEach((movie) => {
    console.log("Rendering movie:", movie);
    const div = document.createElement("div");
    const image = document.createElement("img");
    const title = document.createElement("h3");
    const overview = document.createElement("p");

    div.classList.add("card");
    image.classList.add("card-img");
    title.classList.add("card-title");
    overview.classList.add("card-overview");

    image.src = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
    image.alt = movie.title;
    title.textContent = movie.title;
    overview.textContent = movie.overview;

    div.appendChild(image);
    div.appendChild(title);
    div.appendChild(overview);
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
