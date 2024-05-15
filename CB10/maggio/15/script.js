/*
### Nome e Cognome
    - Chiediamo all'utente tramite un prompt di inserire il suo nome, poi salviamo il dato in una variabile;*/
    let userName = prompt("Inserisci il tuo nome");
    
    /* - Chiediamo all'utente tramite un prompt di inserire il suo cognome, poi salviamo il dato in una variabile;*/
    let userSurname = prompt("Inserisci il tuo cognome")

   /* - Controlliamo che siano valori validi (non null), con almeno 3 caratteri e mostriamo tramite alert errori specifici;
    - Se abbiamo mostrato un errore ricarichiamo la pagina usando `window.location.reload()`;*/

    if (!userName || !userSurname) {
        alert("Devi inserire sia il nome che il cognome.");
        window.location.reload();
    } else if (userName.length < 3 || userSurname.length < 3) {
        alert("Il nome e il cognome devono contenere almeno 3 caratteri.");
        window.location.reload();
    } else {
       alert("Hai inserito correttamente i dati richiesti.");
    }
   /* - Prendiamo il nome inserito e salviamo una nuova variabile trasformando la prima lettera in maiuscola, tip:
    ```js
    const firstName = '...';
    const firstLetter; // ...
    const nameWithoutFirstLetter; // ...
    const firstNaneWithCapitalize; // ...
    ```*/

    /*NOME*/
    const firstName = userName.toLowerCase();
    const firstLetter = firstName.charAt(0).toUpperCase(); 
    
    const nameWithoutFirstLetter = firstName.slice(1); 
    const firstNameWithCapitalize = firstLetter + nameWithoutFirstLetter; 
    console.log(nameWithoutFirstLetter)

    /*COGNOME*/
    const firstSurName = userSurname.toLowerCase();
    const firstLetterSur = firstSurName.charAt(0).toUpperCase(); 
   
    const surNameWithoutFirstLetter = firstSurName.slice(1); 
    const surNameWithCapitalize = firstLetterSur + surNameWithoutFirstLetter; 
    console.log(surNameWithoutFirstLetter)
    
    /* - Mostriamo tramite alert "Ciao + [Nome] + [Cognome]";*/
    alert(`Ciao ${firstNameWithCapitalize} ${surNameWithCapitalize}`)


/*### Quizzone - Qui usiamo lo switch dove possibile
    - Creiamo una variabile `let score = 0;`;
    - Proponiamo all'utente, tramite prompt, 4 domande di cultura generale e raccogliamo le sue risposte in altrettante variabili;
    - Per ogni risposta corretta aggiungiamo al `score` 3 punti, per ogni errata togliamo 1 punto;
    - Alla fine delle 4 domande mostriamo il pungeggio complessivo;
    - Poi se le hai indovinate tutte mostra un alert "Sei il nuovo campione!"

*/
let score = 0;
let answ1 = prompt("Qual è la capitale dell'Italia?");
let answ2 = prompt("Quanti continenti ci sono nel mondo?");
let answ3 = prompt("Chi ha dipinto la Gioconda?");
let answ4 = prompt("Quanto fa 5 + 7?");

switch(answ1){
    case "roma":
        score += 3;
        break;
    default:
        score -= 1;
}
switch (answ2.toLowerCase()) {
    case "sette":
    case "7":
        score += 3;
        break;
    default:
        score -= 1;
}

switch (answ3.toLowerCase()) {
    case "leonardo da vinci":
        score += 3;
        break;
    default:
        score -= 1;
}

switch (answ4) {
    case "dodici":
    case "12":
        score += 3;
        break;
    default:
        score -= 1;
}

alert("Il tuo punteggio complessivo è: " + score);

if (score === 12) {
    alert("Sei il nuovo campione!");
}