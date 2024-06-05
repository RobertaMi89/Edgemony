//MODALE
const modal = document.getElementById("myModal");
const span = document.getElementsByClassName("close")[0];

// Aprire modale
export function openModal() {
  modal.style.display = "block";
}
// Chiudere modale
span.onclick = function () {
  modal.style.display = "none";
};
// Click fuori dalla modale per chiuderla
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
