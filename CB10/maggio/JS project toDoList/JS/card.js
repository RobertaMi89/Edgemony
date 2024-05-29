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

  container.classList.add("card", el.category);
  // card.classList.add(
  //   ".pink",
  //   ".lilac",
  //   ".lightblue",
  //   ".aqua",
  //   ".yellow",
  //   ".green"
  // );

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
  container.append(title, text, list, radio);
  return container;
};
