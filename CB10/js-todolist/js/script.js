import { toDo } from "./component.js";
import { card, cardList } from "./card.js";

/**al caricamento della pagina selezioniamo il main dove verrà visualizzata la card-list precedentemente creata */
window.onload = () => {
  const mainSec = document.querySelector("main");
  const sectionCardList = cardList();

  const categories = toDo();
  /*utilizziamo il for per leggere tutto l'array e stampare gli items nelle card*/
  for (let i = 0; i < categories.length; i++) {
    sectionCardList.appendChild(card(categories[i]));
  }

  mainSec.append(sectionCardList);
};

/*
1 - dobbiamo interagire con gli items, (onclick) al click della checkbox depennare l'item selezionato,
4 - cancellare gli item che non servono icona cash
6 - inserire icone nella category (inserire icon nell'oggetto)
*/
