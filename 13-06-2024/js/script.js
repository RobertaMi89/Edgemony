import { getProducts } from "./fetch.js";
import { printAllProducts } from "./card.js";
import { initPagination, nextPage, prevPage } from "./pages.js";
import {
  initAddProductModal,
  initDeleteProductModal,
  initEditProductModal,
} from "./modal.js";
import { initializeFormEventListeners } from "./form.js";

document.addEventListener("DOMContentLoaded", () => {
  initAddProductModal();
  initDeleteProductModal();
  initEditProductModal();
  initializeApp();
  printAllProducts();
  initializeFormEventListeners();
});

//PAGINE
async function initializeApp() {
  const prevPageBtn = document.getElementById("prevPageBtn");
  const nextPageBtn = document.getElementById("nextPageBtn");

  try {
    const products = await getProducts();
    console.log("Lista Prodotti:", products);
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
