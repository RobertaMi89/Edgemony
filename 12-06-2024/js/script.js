import {
  getProducts,
  addProduct,
  deleteProduct,
  editProduct,
} from "./fetch.js";
import { printAllProducts } from "./card.js";
import { initPagination, nextPage, prevPage } from "./pages.js";
import {
  initAddProductModal,
  initDeleteProductModal,
  initEditProductModal,
} from "./modal.js";

document.addEventListener("DOMContentLoaded", () => {
  initAddProductModal();
  initDeleteProductModal();
  initEditProductModal();
  initializeApp();
  printAllProducts();
});
const productForm = document.getElementById("productForm");
const deleteForm = document.getElementById("deleteForm");
const editProductForm = document.getElementById("editProductForm");

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

editProductForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  const id = document.getElementById("editProductId").value;
  const productData = {
    title: document.getElementById("editTitle").value,
    price: parseFloat(document.getElementById("editPrice").value),
    description: document.getElementById("editDescription").value,
    categoryId: parseInt(document.getElementById("editCategoryId").value),
    images: [document.getElementById("editImages").value],
  };

  try {
    if (
      !id ||
      !productData.title ||
      !productData.price ||
      !productData.description ||
      !productData.categoryId ||
      !productData.images[0]
    ) {
      throw new Error("Tutti i campi sono obbligatori");
    }

    const updatedProduct = await editProduct(id, productData);
    console.log("Prodotto modificato:", updatedProduct);
    document.getElementById("editProductModal").style.display = "none";
  } catch (error) {
    console.error("Errore nella modifica del prodotto:", error.message);
    alert("Errore nella modifica del prodotto: " + error.message);
  }
});
//pagine
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
