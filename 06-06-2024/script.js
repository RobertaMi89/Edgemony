fetch("https://fakestoreapi.com/products")
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    renderCards(data);
  });

//creazione card
const cardsContainer = document.querySelector("#cards-container");
function renderCards(data) {
  data.forEach((e) => {
    const div = document.createElement("div");
    const image = document.createElement("img");
    const title = document.createElement("h3");
    const price = document.createElement("p");

    div.classList = "card";
    image.classList = "card-img";
    price.classList = "card-price";

    image.src = e.image;
    title.textContent = e.title;
    price.textContent = `${e.price} €`;
    div.appendChild(image);
    div.appendChild(title);
    div.appendChild(price);
    cardsContainer.appendChild(div);
  });
}
cardsContainer.innerHTML = "";
//bottone per mostrare le card al click
const showProducts = document.querySelector("button");
showProducts.textContent = "See all products";

showProducts.addEventListener("click", () => {
  const inputContainer = document.querySelector("input");
  if (inputContainer) {
    inputContainer.style.display = "block";
  }
  div = document.querySelector(".display");
  div.style.display = "block";
});

//filtro dentro il campo input
const searchInput = document.getElementById("search-input");

searchInput.addEventListener("input", () => {
  const input = searchInput.value.toLowerCase();
  const products = document.querySelectorAll(".card");

  products.forEach((product) => {
    const title = product.querySelector("h3").textContent.toLowerCase();
    product.style.display = title.includes(input) ? "block" : "none";
  });
});
