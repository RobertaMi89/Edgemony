// Esercizi:

/*

Trova il positivo:
dato un array di numeri [-1, -2, -10, 2, 5];

scriviamo due cicli for che soddisfano ognuno una condizione:
1. Stampare in console solo i numeri > 0
2. Deve interrompere al primo numero > 0 l'esecuzione del for (break)*/

const array = [-1, -2, -10, 2, 5];

for (let i = 0; i < array.length; i++) {
    if (array[i] > 0) {
        console.log(`Stampo solo i numeri maggiori di 0: `+array[i]);
    }
}
for (let i = 0; i < array.length; i++) {
    if (array[i] > 0) {
        console.log(`Stampo solo il primo numero positivo che trovo: `+array[i]);
        break
    }
}

/*Palindromi:
abbiamo visto come si trova una parola palindroma, ma non l'abbiamo fatto in modo efficente.
Quello che dovremo fare invece è: prendere una parola dall'utente tramite prompt, scomporla in array
ed usare un for per poter controllare se è palindroma.

nel caso in cui non troviamo corrispondenza usiamo dal for e stampiamo in console.log un messaggio.
se nell'ultimo carattere della parola non abbiamo riscontrato errori stampiamo un console.log con "Successo! è un palindromo!"


tips:
ogni carattere è uguale al suo elemento specchio nella parola
elemento ad indice 0 === elemento ad indice fine meno -1
elemento ad indice 1 === elemento ad indice fine meno -2
elemento ad indice i === elemento ad indice fine meno (i * -1) -1 /// length - i - 1 

```js
for(){

    if( elemento corrisponde a...){}

    isLast = index === length -1;

    if(elemento è l'ultimo dell'array...){

    }
}
```*/
const word = prompt("digita una parola e ti dirò se è palindroma");
let newArray = word.split ("");

let palindromo = true;

for (let i = 0; i < newArray.length / 2; i++) {
    if (newArray[i] !== newArray[newArray.length - 1 - i]) {
        palindromo = false;
        console.log("La parola non è un palindromo.");
        break;
    }
}

if (palindromo) {
    console.log("Successo! È un palindromo!");
}
    