import { toDo } from "./component.js";
import { card, cardList } from "./card.js";

/**al caricamento della pagina selezioniamo il main dove verrà visualizzata la card-list precedentemente creata */
window.onload = () => {
  const mainSec = document.querySelector("main");
  const sectionCardList = cardList();

  const categories = toDo();
  /*utilizziamo il for per leggere tutto l'array e stampare gli items nelle card*/
  for (let i = 0; i < categories.length; i++) {
    for (let j = 0; j < categories[i].items.length; j++) {}
    sectionCardList.appendChild(card(categories[i]));
  }

  mainSec.append(sectionCardList);
};

/*
1 - dobbiamo interagire con gli items creando delle checkbox selezionabili, (onclick) al click della chackbox depennare l'item selezionato,
3 - si potrà modificare l'item "manuale"
4 - cancellare gli item che non servono
6 - inserire icone nella category (inserire icon nell'oggetto)
*/
