import { addProduct, deleteProduct, getProducts } from "./fetch.js";

const productForm = document.getElementById("productForm");
const deleteForm = document.getElementById("deleteForm");
console.log(deleteForm);
async function printAllProducts() {
  try {
    const products = await getProducts();
    console.log("Lista completa dei prodotti:", products);
  } catch (error) {
    console.error("Errore durante il recupero dei prodotti:", error);
  }
}

// Stampiamo la lista dei prodotti quando la pagina viene caricata
window.addEventListener("DOMContentLoaded", printAllProducts);

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
    // Pulisce il form dopo l'aggiunta del prodotto
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
  console.log(id);
  console.log(formData);
  try {
    const deletedProduct = await deleteProduct(id);
    console.log("Eliminato con successo:", deletedProduct);

    // Pulisce il form dopo l'aggiunta del prodotto
    deleteForm.reset();
  } catch (error) {
    console.error("Errore durante l'eliminazione del prodotto:", error);
    alert("Si è verificato un errore durante l'eliminazione del prodotto");
  }
});
