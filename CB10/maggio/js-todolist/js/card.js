export const cardColor = [
  "#ffdef2",
  "#f2e2ff",
  "#e2eeff",
  "#ddfffc",
  "#ffffe3",
  "#e5ffe4",
  "#ffffb0",
  "#ffe6c7",
  "#b0ceff",
];
const getRandomColor = () => {
  const randomIndex = Math.floor(Math.random() * cardColor.length);
  const color = cardColor[randomIndex];
  cardColor.splice(randomIndex, 1); // Rimuove il colore selezionato dall'array
  return color;
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

  const modal = document.getElementById("myModal");
  const span = document.getElementsByClassName("close")[0];

  // Funzione per aprire la modale
  function openModal() {
    modal.style.display = "block";
  }

  // Funzione per chiudere la modale
  span.onclick = function () {
    modal.style.display = "none";
  };

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };

  //al click del bottone tutto ciò che scritto i input verrà messo in fondo alla lista
  btn.addEventListener("click", () => {
    const inputValue = input.value.trim().toLowerCase();
    const listItems = list.getElementsByTagName("li");
    let itemExists = false;

    for (let i = 0; i < listItems.length; i++) {
      if (listItems[i].textContent.toLowerCase() === inputValue) {
        itemExists = true;
        break;
      }
    }
    if (itemExists) {
      openModal();
    } else if (inputValue !== "") {
      const newLi = document.createElement("li");
      newLi.textContent = inputValue;
      list.appendChild(newLi);
      input.value = "";

      // Modifica elemento quando viene cliccato
      newLi.onclick = function (event) {
        const clickedElement = event.target;
        if (clickedElement.tagName === "LI") {
          input.value = clickedElement.textContent;
          clickedElement.remove();
        }
      };
    }
  });

  return container;
};

// Bottone close da associare ad ogni list item
const myNodelist = document.getElementsByTagName("LI");
let i;
for (i = 0; i < myNodelist.length; i++) {
  const span = document.createElement("SPAN");
  const txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Clicco il btn Close per rimuovere un item
const close = document.getElementsByClassName("close");
let y;
for (y = 0; y < close.length; y++) {
  close[i].onclick = function () {
    const div = this.parentElement;
    div.style.display = "none";
  };
}

// // Add a "checked" symbol when clicking on a list item Aggiungo il pulsante quando cicco un item
// const list = document.querySelector("ul");
// list.addEventListener(
//   "click",
//   function (ev) {
//     if (ev.target.tagName === "LI") {
//       ev.target.classList.toggle("checked");
//     }
//   },
//   false
// );

// // Create a new list item when clicking on the "Add" button
// function newElement() {
//   const li = document.createElement("li");
//   const inputValue = document.getElementById("myInput").value;
//   const t = document.createTextNode(inputValue);
//   li.appendChild(t);
//   if (inputValue === "") {
//     alert("You must write something!");
//   } else {
//     document.getElementById("myUL").appendChild(li);
//   }
//   document.getElementById("myInput").value = "";

//   const span = document.createElement("SPAN");
//   const txt = document.createTextNode("\u00D7");
//   span.className = "close";
//   span.appendChild(txt);
//   li.appendChild(span);

//   for (i = 0; i < close.length; i++) {
//     close[i].onclick = function () {
//       const div = this.parentElement;
//       div.style.display = "none";
//     };
//   }
// }
