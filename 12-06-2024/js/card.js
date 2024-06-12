import { getProducts } from "./fetch.js";

export async function printAllProducts() {
  const productList = document.getElementById("productList");

  try {
    if (!productList) {
      throw new Error("Elemento 'productList' non trovato nel DOM.");
    }

    const products = await getProducts();
    productList.innerHTML = "";

    products.forEach((product) => {
      if (!product || typeof product !== "object") {
        console.error("Dati prodotto non validi:", product);
        return; // Passa al prossimo prodotto
      }

      const card = createProductCard(product);
      productList.appendChild(card);
    });
  } catch (error) {
    console.error("Errore durante il recupero dei prodotti:", error);
  }
}

function createProductCard(product) {
  const card = document.createElement("div");
  card.classList.add("product-card");

  // Immagine
  if (product.images && product.images.length > 0) {
    const img = document.createElement("img");
    img.src = product.images[0];
    card.appendChild(img);
  }

  // Titolo
  const title = document.createElement("h3");
  title.textContent = product.title || "Titolo non disponibile";
  card.appendChild(title);

  // Prezzo
  const price = document.createElement("p");
  price.textContent = `Prezzo: $${product.price || "N/D"}`;
  card.appendChild(price);

  // Descrizione
  const description = document.createElement("p");
  description.textContent =
    product.description || "Descrizione non disponibile";
  card.appendChild(description);

  return card;
}
