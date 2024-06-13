import { addProduct, deleteProduct, editProduct } from "./fetch.js";

const productForm = document.getElementById("productForm");
const deleteForm = document.getElementById("deleteForm");
const editProductForm = document.getElementById("editProductForm");

const inputErrors = {
  title: "Titolo obbligatorio",
  price: "Prezzo obbligatorio",
  description: "Descrizione obbligatoria",
  categoryId: "Categoria obbligatoria",
  images: "Immagine obbligatoria",
  editId: "ID obbligatorio",
  editTitle: "Titolo obbligatorio",
  editPrice: "Prezzo obbligatorio",
  editDescription: "Descrizione obbligatoria",
  editCategoryId: "Categoria obbligatoria",
  editImages: "Immagine obbligatoria",
  deleteId: "ID obbligatorio",
};

// Mostra gli errori nei campi di input
export const showInputErrors = (errors) => {
  for (const inputId in errors) {
    const errorMessage = document.getElementById(`${inputId}Error`);
    if (errorMessage) {
      errorMessage.textContent = errors[inputId] || "";
    }
  }
};

// Nasconde gli errori nei campi di input
export const hideInputErrors = () => {
  for (const inputId in inputErrors) {
    const errorMessage = document.getElementById(`${inputId}Error`);
    if (errorMessage) {
      errorMessage.textContent = "";
    }
  }
};

//Mostra gli errori specifici del form di cancellazione
const showDeleteInputError = (message) => {
  const errorMessage = document.getElementById("deleteIdError");
  if (errorMessage) {
    errorMessage.textContent = message || "";
  }
};

// Gestisce il submit del form di aggiunta prodotto
export const handleProductFormSubmit = async (event) => {
  event.preventDefault();

  const formData = new FormData(productForm);
  const productData = {
    title: formData.get("title"),
    price: parseInt(formData.get("price")),
    description: formData.get("description"),
    categoryId: parseInt(formData.get("categoryId")),
    images: [formData.get("images")],
  };

  const errors = {};

  if (
    !productData.title ||
    !productData.price ||
    !productData.description ||
    !productData.categoryId ||
    !productData.images[0]
  ) {
    errors.title = !productData.title ? "Titolo obbligatorio" : "";
    errors.price = !productData.price ? "Prezzo obbligatorio" : "";
    errors.description = !productData.description
      ? "Descrizione obbligatoria"
      : "";
    errors.categoryId = !productData.categoryId ? "Categoria obbligatoria" : "";
    errors.images = !productData.images[0] ? "Immagine obbligatoria" : "";

    showInputErrors(errors);
    return;
  }

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
};

// Gestisce il submit del form di cancellazione prodotto
export const handleDeleteFormSubmit = async (event) => {
  event.preventDefault();

  const formData = new FormData(deleteForm);
  const id = formData.get("id");

  if (!id) {
    showDeleteInputError("ID obbligatorio");
    return;
  }

  try {
    const deletedProduct = await deleteProduct(id);
    console.log("Eliminato con successo:", deletedProduct);

    deleteForm.reset();
    showDeleteInputError("");
  } catch (error) {
    console.error("Errore durante l'eliminazione del prodotto:", error);
    alert("Si è verificato un errore durante l'eliminazione del prodotto");
  }
};

// Gestisce il submit del form di modifica prodotto
export const handleEditProductFormSubmit = async (event) => {
  event.preventDefault();
  const id = document.getElementById("editProductId").value;
  const productData = {
    id: id,
    title: document.getElementById("editTitle").value,
    price: parseFloat(document.getElementById("editPrice").value),
    description: document.getElementById("editDescription").value,
    categoryId: parseInt(document.getElementById("editCategoryId").value),
    images: [document.getElementById("editImages").value],
  };

  const errors = {};

  if (
    !id ||
    !productData.title ||
    !productData.price ||
    !productData.description ||
    !productData.categoryId ||
    !productData.images[0]
  ) {
    errors.editId = !id ? "ID obbligatorio" : "";
    errors.editTitle = !productData.title ? "Titolo obbligatorio" : "";
    errors.editPrice = !productData.price ? "Prezzo obbligatorio" : "";
    errors.editDescription = !productData.description
      ? "Descrizione obbligatoria"
      : "";
    errors.editCategoryId = !productData.categoryId
      ? "Categoria obbligatoria"
      : "";
    errors.editImages = !productData.images[0] ? "Immagine obbligatoria" : "";

    showInputErrors(errors);
    return;
  }

  try {
    const updatedProduct = await editProduct(id, productData);
    console.log("Prodotto modificato:", updatedProduct);
    document.getElementById("editProductModal").style.display = "none";
  } catch (error) {
    console.error("Errore nella modifica del prodotto:", error.message);
    showInputErrors(errors);
  }
};

export const initializeFormEventListeners = () => {
  productForm.addEventListener("submit", handleProductFormSubmit);
  deleteForm.addEventListener("submit", handleDeleteFormSubmit);
  editProductForm.addEventListener("submit", handleEditProductFormSubmit);

  for (const inputId in inputErrors) {
    const inputElement = document.getElementById(inputId);
    if (inputElement) {
      inputElement.addEventListener("input", hideInputErrors);
    }
  }

  const deleteIdInput = document.getElementById("id");
  if (deleteIdInput) {
    deleteIdInput.addEventListener("input", () => showDeleteInputError(""));
  }
};
