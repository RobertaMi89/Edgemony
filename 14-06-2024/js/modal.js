//ADD
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

//DELETE

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

//EDIT

export function initEditProductModal() {
  const editModal = document.getElementById("editProductModal");
  const editBtn = document.getElementById("edit");
  const editSpan = editModal.getElementsByClassName("close")[0];

  editBtn.onclick = function () {
    editModal.style.display = "block";
  };

  editSpan.onclick = function () {
    editModal.style.display = "none";
  };

  window.onclick = function (event) {
    if (event.target == editModal) {
      editModal.style.display = "none";
    }
  };
}

export function openEditModal(product) {
  const modal = document.getElementById("editProductModal");
  modal.style.display = "block";

  document.getElementById("editProductId").value = product.id;
  document.getElementById("editTitle").value = product.title;
  document.getElementById("editPrice").value = product.price;
  document.getElementById("editDescription").value = product.description;
  document.getElementById("editCategoryId").value = product.categoryId;
  document.getElementById("editImages").value = product.images[0];
}
