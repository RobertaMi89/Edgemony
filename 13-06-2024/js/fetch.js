export const BASE_URL = "https://api.escuelajs.co/";
export const ProductsEndpoint = "api/v1/products";

export async function getProducts() {
  try {
    const response = await fetch(`${BASE_URL}${ProductsEndpoint}`);
    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      throw new Error(
        `Errore durante il recupero dei prodotti: ${response.status}`
      );
    }
  } catch (error) {
    console.error("Errore:", error);
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

    if (!response.ok) {
      throw new Error(
        `Errore durante l'aggiunta del prodotto: ${response.status}`
      );
    }

    const responseData = await response.json();
    return responseData;
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

    if (!response.ok) {
      throw new Error(
        `Errore durante l'eliminazione del prodotto: ${response.status}`
      );
    }

    const responseData = await response.json();
    return responseData; //ID oggetto
  } catch (error) {
    console.error("Errore:", error);
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

    if (!response.ok) {
      throw new Error(
        `Errore durante la modifica del prodotto: ${response.status}`
      );
    }

    const responseData = await response.json();
    return responseData; //ID oggetto
  } catch (error) {
    console.error("Errore durante la modifica del prodotto:", error);
    throw error;
  }
}
