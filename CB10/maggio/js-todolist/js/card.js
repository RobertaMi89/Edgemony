export const cardColor = [
  "#ffdef2",
  "#f2e2ff",
  "#e2eeff",
  "#ddfffc",
  "#ffffe3",
  "#e5ffe4",
];
const getRandomColor = () => {
  const randomIndex = Math.floor(Math.random() * cardColor.length);
  return cardColor[randomIndex];
};

/*abbiamo selezionato e creato la card-list dove andranno tutte le card iterate in base all'oggetto */
/*FUNZIONI*/
export const cardList = () => {
  const container = document.createElement("div");
  container.className = "card-list";
  return container;
};

/* CREAZIONE CARD*/
export const card = (el) => {
  const container = document.createElement("div");
  const title = document.createElement("h2");
  const text = document.createElement("div");
  const input = document.createElement("input");
  const btn = document.createElement("button");
  const list = document.createElement("ul");
  const liEl = document.createElement("li");
  // const radio = document.createElement("checkbox");

  const randomColor = getRandomColor();
  container.style.backgroundColor = randomColor;
  container.classList.add("card");
  title.classList.add("card__title");
  title.innerHTML = el.category;
  title.className = "card__title";
  title.textContent = el.category;

  text.className = "text";
  text.appendChild(input);
  text.appendChild(btn);
  btn.innerHTML = "Add";
  btn.classList.add("card__btn");
  input.classList.add("card__input");

  list.className = "todo";
  for (let i = 0; i < el.items.length; i++) {
    const liEl = document.createElement("li");
    liEl.textContent = el.items[i];
    list.appendChild(liEl);
  }
  container.append(title, text, list);

  //al click del bottone tutto ciò che scritto i input verrà messo in fondo alla lista
  btn.addEventListener("click", () => {
    const inputValue = input.value.trim();
    if (inputValue !== "") {
      const newLi = document.createElement("li");
      newLi.textContent = inputValue;
      list.appendChild(newLi);
      input.value = "";
    }
  });
  return container;
};
