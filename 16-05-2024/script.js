/*Rifacciamo l'esercizio del quiz di ieri in cui chiediamo all'utente di rispondere a domande a risposta multipla, in particolare però:
- Raccogliamo tutte le risposte date dall'utente anche dentro un array "risposte";
- Quando diamo il risultato finale, mostriamo anche tutte le risposte date dall'utente dentro un solo console.log e dentro mettiamo anche la lunghezza del nostro array*/

const risposte = [];
let risposta;
let score = 0;
let answ1 = prompt("Qual è la capitale dell'Italia? Roma, Napoli, Palermo o Firenze?");
risposte.push(answ1.toLowerCase())
let answ2 = prompt("Quanti continenti ci sono nel mondo? 3, 7, 9 o 5?");
risposte.push(answ2.toLowerCase())
let answ3 = prompt("Chi ha dipinto la Gioconda? Picasso, Leonardo da Vinci, Giotto o Dalì?");
risposte.push(answ3.toLowerCase())
let answ4 = prompt("Quanto fa 5 + 7? 11, 20, 12 o 13?");
risposte.push(answ4.toLowerCase())

switch(answ1.toLowerCase()){
    case "roma":
        score += 3;
        break;
    case "napoli":
    case "palermo":
    case "firenze":
        score -=1;
        break;
    default:
        score -= 1;
        break;
}
switch (answ2.toLowerCase()) {
    case "sette":
    case "7":
        score += 3;
        break;
    case "3":
    case "5":
    case "9":
        score -=1;
        break;
    default:
        score -= 1;
        break;
}

switch (answ3.toLowerCase()) {
    case "leonardo da vinci":
        score += 3;
        break;
    case "picasso":
    case "giotto":
    case "dalì":
        score -=1;
        break;
    default:
        score -= 1;
        break;
}

switch (answ4.toLowerCase()) {
    case "dodici":
    case "12":
        score += 3;
        break;
    case "11":
    case "20":
    case "13":
        score -=1;
        break;
    default:
        score -= 1;
        break;
}

alert("Il tuo punteggio complessivo è: " + score);

if (score === 12) {
    alert("Sei il nuovo campione!");
}
console.log("Risposte date dall'utente:", risposte);
console.log("Numero totale di risposte:", risposte.length);


/*Raccogliamo tramite prompt (eseguito tre volte) 3 parole dall'utente, per ogni parola ricevuta mostriamo in console "vocale" o "consonante" 
in base alla prima lettera. Usiamo un solo console.log per ogni parola sfruttando la potenzialità dell'operatore ternario.*/

function isVocale(char) {
    return ['a', 'e', 'i', 'o', 'u'].includes(char.toLowerCase());
}

let word1 = prompt("digita una seconda parola");
let word2 = prompt("digita una terza parola");
let word3 = prompt("digita una parola");

console.log(`La prima lettera di "${word1}" è ${isVocale(word1.charAt(0)) ? 'vocale' : 'consonante'}`);
console.log(`La prima lettera di "${word2}" è ${isVocale(word2.charAt(0)) ? 'vocale' : 'consonante'}`);
console.log(`La prima lettera di "${word3}" è ${isVocale(word3.charAt(0)) ? 'vocale' : 'consonante'}`);


/*Data una parola stampiamo in console la parola al rovescio. 
Per farlo prima usiamo il metodo split delle stringhe che trasforma una stringa in array e poi controlliamo se esiste un metodo per invertire gli elementi... */

const string = prompt('Inserisci una parola:');

if (typeof string === 'string' && string.trim() !== '') {
    console.log('Parola al rovescio:', string.split('').reverse().join(''));
   
} else {
       console.log('Stringa non valida. Riprova inserendo una parola.');
}
