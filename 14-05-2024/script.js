/*Esercizi:
- definiamo variabile che contiene una stringa
    - Usiamo i doppi apici e salviamo la stringa: Ciao Mondo!*/
    let str = "Ciao Mondo!\n";
   console.log(str);

   /* - Usiamo i singoli apici e salviamo la stringa: Mio zio viene dalla città di l'Aquila
        - Occhio ad usare un escape per i singoli apici dentro la stringa!!*/
        let str1 = 'Mio zio viene dalla città di l\'Aquila';
    console.log(str1);

   /* - Usiamo il backtick per concatenare le due stringhe precendti dentro una nuova, usiamo anche "l'andata a capo" */
let dblstr = `${str}${str1}`;
console.log(dblstr);

/*- Creiamo una nuova variabile in cui inseriamo una variabile precedente che modifichiamo portato il tutto in maiuscolo (.toUpperCase()) */
newstr = str.toUpperCase();
console.log(newstr);

/*- Definiamo una variabile e salviamo all'interno un dato passato dall'utente tramite prompt()*/
const userNumber = prompt("Inserisci un numero");
console.log(userNumber)

    /*- Facciamo un console.log del dato precedento portato a lowercase*/
console.log(newstr.toLowerCase());

/*- Chiediamo al nostro user un numero da uno a 10 tramite prompt e solo se maggiore di 7 esclamare in console che ha vinto!
    - tips:
        prompt('Dammi un numero da uno a dieci!'); // occhio che il prompt torna una stringa!!
        if([...] > 7 ){

        }*/
userTest=prompt ("Dammi un numero da uno a dieci!");
if(Number(userTest)>7){
    console.log("hai vinto!")
}else if(Number(userTest)<=7){
    console.log("hai perso");
}








