export const BASE_URL = "https://api.escuelajs.co/";
export const ProductsEndpoint = "api/v1/products";

// Funzione generica per gestire la risposta e gli errori
const handleResponse = async (response) => {
  if (!response.ok) {
    const errorData = await response.json();
    throw errorData;
  }
  return await response.json();
};

export async function getProducts() {
  try {
    const response = await fetch(`${BASE_URL}${ProductsEndpoint}`);
    return await handleResponse(response);
  } catch (error) {
    console.error("Errore durante il recupero dei prodotti:", error);
    throw error;
  }
}

export async function addProduct(productData) {
  try {
    const response = await fetch(`${BASE_URL}${ProductsEndpoint}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(productData),
    });
    return await handleResponse(response);
  } catch (error) {
    console.error("Errore durante l'aggiunta del prodotto:", error);
    throw error;
  }
}

export async function deleteProduct(id) {
  try {
    const response = await fetch(`${BASE_URL}${ProductsEndpoint}/${id}`, {
      method: "DELETE",
    });
    return await handleResponse(response);
  } catch (error) {
    console.error("Errore durante l'eliminazione del prodotto:", error);
    throw error;
  }
}

export async function editProduct(id, productData) {
  try {
    const response = await fetch(`${BASE_URL}${ProductsEndpoint}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(productData),
    });
    return await handleResponse(response);
  } catch (error) {
    console.error("Errore durante la modifica del prodotto:", error);
    errorHandler();
    throw error;
  }
}
