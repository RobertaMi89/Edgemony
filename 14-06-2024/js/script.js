import { getProducts } from "./fetch.js";
import { initLogInUserModal } from "./logInSignUp.js";
import { initializeFormEventListeners } from "./form.js";

document.addEventListener("DOMContentLoaded", () => {
  // Inizializza la modale di login/sign up
  initLogInUserModal();
  initializeFormEventListeners();
});
console.log(await getProducts());
