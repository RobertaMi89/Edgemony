export function initAddProductModal() {
  const addModal = document.getElementById("addProductModal");
  const addBtn = document.getElementById("add");
  const addSpan = addModal.getElementsByClassName("close")[0];

  addBtn.onclick = function () {
    addModal.style.display = "block";
  };

  addSpan.onclick = function () {
    addModal.style.display = "none";
  };

  window.onclick = function (event) {
    if (event.target == addModal) {
      addModal.style.display = "none";
    }
  };
}

export function initDeleteProductModal() {
  const deleteModal = document.getElementById("deleteProductModal");
  const deleteBtn = document.getElementById("delete");
  const deleteSpan = deleteModal.getElementsByClassName("close")[0];

  deleteBtn.onclick = function () {
    deleteModal.style.display = "block";
  };

  deleteSpan.onclick = function () {
    deleteModal.style.display = "none";
  };

  window.onclick = function (event) {
    if (event.target == deleteModal) {
      deleteModal.style.display = "none";
    }
  };
}
