export function handlePagination(
  currentPage,
  totalPages,
  fetchData,
  currentEndpoint
) {
  const prevBtn = document.getElementById("prev-btn");
  const nextBtn = document.getElementById("next-btn");

  prevBtn.addEventListener("click", () => {
    if (currentPage > 1) {
      currentPage--;
      fetchData(currentPage, currentEndpoint);
    }
  });

  nextBtn.addEventListener("click", () => {
    if (currentPage < totalPages) {
      currentPage++;
      fetchData(currentPage, currentEndpoint);
    }
  });
}
