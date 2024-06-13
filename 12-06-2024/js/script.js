import { getProducts, addProduct, deleteProduct } from "./fetch.js";
import { printAllProducts } from "./card.js";
import { initPagination, nextPage, prevPage } from "./pages.js";
import { initAddProductModal, initDeleteProductModal } from "./modal.js";

const productForm = document.getElementById("productForm");
const deleteForm = document.getElementById("deleteForm");

//stampa dei prodotti al caricamento pagina
window.addEventListener("DOMContentLoaded", () => {
  printAllProducts();
  initializeApp();
  initAddProductModal();
  initDeleteProductModal();
});

productForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  const formData = new FormData(productForm);
  const productData = {
    title: formData.get("title"),
    price: parseInt(formData.get("price")),
    description: formData.get("description"),
    categoryId: parseInt(formData.get("categoryId")),
    images: [formData.get("images")],
  };

  try {
    const newProduct = await addProduct(productData);
    console.log("Nuovo prodotto aggiunto:", newProduct);
    alert("Prodotto aggiunto con successo!");

    productForm.reset();
  } catch (error) {
    console.error("Errore durante l'aggiunta del prodotto:", error);
    alert(
      "Si è verificato un errore durante l'aggiunta del prodotto. Controlla la console per i dettagli."
    );
  }
});

deleteForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  const formData = new FormData(deleteForm);
  const id = formData.get("id");

  try {
    const deletedProduct = await deleteProduct(id);
    console.log("Eliminato con successo:", deletedProduct);

    deleteForm.reset();
  } catch (error) {
    console.error("Errore durante l'eliminazione del prodotto:", error);
    alert("Si è verificato un errore durante l'eliminazione del prodotto");
  }
});

//pagine
async function initializeApp() {
  const prevPageBtn = document.getElementById("prevPageBtn");
  const nextPageBtn = document.getElementById("nextPageBtn");

  try {
    const products = await getProducts();
    console.log(products);
    initPagination(products);

    nextPageBtn.addEventListener("click", () => {
      nextPage(products);
    });

    prevPageBtn.addEventListener("click", () => {
      prevPage(products);
    });
  } catch (error) {
    console.error("Errore durante il recupero dei prodotti:", error);
  }
}

initializeApp();
