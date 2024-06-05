const coder = {
    firstName: 'Luca', // coppia chiave - valore : "firstName" - "Luca"
    lastName: 'Pagliaro',
    age: 29,
    skills: ['JavaScript', 'HTML', 'CSS'],
    address: {
        city: 'Catania',
        zipCode: '95100'
    }
};

/*stampare un console.log per ogni skill presente in coder.skills*/

for(let str of coder.skills)
    console.log(str)

/*salvare dentro "coder.address" due nuove proprietà da chidere all'utente tramite prompt: "country" e "street". Eseguiamo poi un console.log per controllare tutto sia OK.*/

let isUserPropCountry = prompt("inserisci la nazione");
let isUserPropStreet = prompt("Inserisci l'indirizzo di residenza");

coder.country = isUserPropCountry 
coder.street = isUserPropStreet
console.log(coder)

/*Stampiamo in console tutte le chiavi presenti dentro il mio oggetto.*/
for(let key in coder)
    console.log(key)

/*Per ogni proprietà presente dentro il nostro object, controlliamo la chiave. Se la prima lettera è una vocale stampiamo in console la chiave ed il suo valore.*/

const vocali = ['a', 'e', 'i', 'o', 'u'];

for (let key in coder) {
    if (vocali.includes(key.charAt(0).toLowerCase())) {
        console.log(`${key}: ${coder[key]}`);
    }
}

/*Chiediamo all'utente, tramite prompt, cosa vuole salvare dentro il nostro object e (tramite un altro prompt) quale valore voglia inserire. Salviamo quindi una nuova proprietà con chiave/valore presi dai prompt.*/

let newKey = prompt("Quale chiave vuoi aggiungere all'oggetto?");
let newValue = prompt("Quale valore vuoi assegnare a questa chiave?");

coder[newKey] = newValue;
console.log("Oggetto aggiornato:", coder);

