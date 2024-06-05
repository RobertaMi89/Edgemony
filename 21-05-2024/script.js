/*Scriviamo ed eseguiamo una funzione che permetta di fare rapidamente un console.clear()*/

function clear(){
    console.clear()
}
clear() 

/*Scriviamo ed eseguamo una funzione che possa data una stringa tornarne una nuova con la prima lettera maiuscola, il resto minuscolo.*/

function capitalize(string){
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}
console.log(capitalize('ciao'));
console.log(capitalize('mondo'));
console.log(capitalize('Mondo'));
console.log(capitalize('TEST'));

/*Scrivere una function che dati due parametri in ingresso controlla se siano numeri e torna il numero più piccolo:*/

function min(a, b){
    if (isNaN(a) || isNaN(b)) {
        return "Uno o entrambi i valori non sono numeri";
    }
    return a < b ? a : b;
}
console.log(min(1, 3));
console.log(min(5, -3));
console.log(min(100, 20));

/*Scriviamo una function potenza che accetta due parametri: base ed esponente. Facciamo tornare alla funzione il numero "base" moltiplicato per se stesso tante volte quante indicate dall'esponente*/

function potenza(base, esponente){
    if (esponente === 0) {
        return 1;
    }
    
    let risultato = base;
    
    for(let i = 1; i < esponente; i++) {
        risultato *= base;
    }

    return risultato;
}

console.log(potenza(4, 2));
console.log(potenza(5, 3));
console.log(potenza(1, 100));


/*Bonus point (opzionale): il fattoriale (n!) in matematica è il prodotto di un numero intero per tutti i numeri precedenti positivi (!==0). esempio: 5! (fattoriale di 5) è 5 * 4 * 3 * 2 * 1 = 120*/
function factorial(n) {
    
    if (n === 0) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

console.log(factorial(5));
console.log(factorial(4));
