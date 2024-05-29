import { toDo } from "./component";
import { card, cardList } from "./card";

/**al caricamento della pagina selezioniamo il main dove verrà visualizzata la card-list precedentemente creata */
window.onload = () => {
  const mainSec = document.querySelector("main");
  const sectionCardList = cardList();

  if (mainSec) {
    const categories = toDo();
    /*utilizziamo il for per leggere tutto l'array e stampare gli items nelle card*/
    for (let i = 0; i < categories.length; i++) {
      console.log(`Category: ${categories[i].category}`);
      console.log("Items:");

      for (let j = 0; j < categories[i].items.length; j++) {
        console.log(categories[i].items[j]);
      }

      console.log("---");

      sectionCardList.appendChild(card(categories[i]));
    }

    mainSec.append(sectionCardList);
    /*controllo caricamento pagina se non legge il main*/
  } else {
    console.error("Elemento 'main' non trovato nel DOM.");
  }
};

/*
1 - dobbiamo interagire con gli items creando delle checkbox selezionabili, (onclick) al click della chackbox depennare l'item selezionato,
2 - attivare il btn ADD all'onclick aggiungere l'item che inserirà l'utente nell'input
3 - si potrà modificare l'item "manuale"
4 - cancellare gli item che non servono
5 - colorare le card tutte con colori diversi, gestendo le classi CSS create (for?)
6 - inserire icone nella category (inserire icon nell'oggetto)
*/
