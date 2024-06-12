const productsPerPage = 10;
let currentPage = 1;
let totalPages = 0;

export function initPagination(products) {
  totalPages = Math.ceil(products.length / productsPerPage);
  renderProducts(currentPage, products);
}

export function nextPage(products) {
  if (currentPage < totalPages) {
    currentPage++;
    renderProducts(currentPage, products);
  }
}

export function prevPage(products) {
  if (currentPage > 1) {
    currentPage--;
    renderProducts(currentPage, products);
  }
}

function renderProducts(page, products) {
  const startIndex = (page - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;
  const visibleProducts = products.slice(startIndex, endIndex);

  const productList = document.getElementById("productList");
  productList.innerHTML = ""; // Puliamo la lista dei prodotti

  visibleProducts.forEach((product) => {
    const card = createProductCard(product);
    productList.appendChild(card);
  });

  updatePaginationButtons();
}

function updatePaginationButtons() {
  const prevPageBtn = document.getElementById("prevPageBtn");
  const nextPageBtn = document.getElementById("nextPageBtn");

  prevPageBtn.disabled = currentPage === 1; // Disabilita il pulsante "Precedente" sulla prima pagina
  nextPageBtn.disabled = currentPage === totalPages; // Disabilita il pulsante "Successiva" sull'ultima pagina
}

function createProductCard(product) {
  const card = document.createElement("div");
  card.classList.add("product-card");

  if (product.images && product.images.length > 0) {
    const img = document.createElement("img");
    img.src = product.images[0];
    card.appendChild(img);
  }
  const title = document.createElement("h3");
  title.textContent = product.title;
  card.appendChild(title);

  const price = document.createElement("p");
  price.textContent = `Prezzo: $${product.price}`;
  card.appendChild(price);

  const description = document.createElement("p");
  description.textContent = product.description;
  card.appendChild(description);

  return card;
}
