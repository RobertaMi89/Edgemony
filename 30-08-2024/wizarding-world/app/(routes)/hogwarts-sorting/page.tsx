function Sorting() {
  fetch("http://localhost:3000/utils")
    .then((res) => res.json())
    .then((res) => console.log(res));
  return <div>page</div>;
}

export default Sorting;
