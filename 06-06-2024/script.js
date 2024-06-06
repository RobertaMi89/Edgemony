fetch("https://fakestoreapi.com/products")
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    allProducts = data;
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
showProducts.classList = "seeAllBtn";
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
searchInput.addEventListener("input", searchProducts);

function searchProducts() {
  let input = document.getElementById("search-input").value.toLowerCase();
  let products = document.querySelectorAll(".card");

  products.forEach((product) => {
    let title = product.querySelector("h3").textContent.toLowerCase();
    if (!title.includes(input)) {
      product.style.display = "none";
    } else {
      product.style.display = "block";
    }
  });
}
