/*Selettori
Usando il querySelector prendiamo l'elemento con id heading ed eseguiamo un console.log
// output <h1>...</h1>*/

console.log(document.querySelector('#heading'));

/*Per ogni elemento button presente in pagina stampiamo in console il suo testo.
const buttonEls = document.querySelectorAll('button');

for(...){
    console.log(...);
}

// output 
// cancel
// Click me!*/

const buttonEls = document.querySelectorAll('button');

for(let button of buttonEls){
    console.log(button.innerText);
};

/*Contatore
salviamo due variabili con dentro i riferimenti ai due button della pagina resetBtn e clickBtn;

inseriamo una function dentro l'evento onclick di clickBtn e per ogni click:

leggiamo il valore attuale del proprio innerHTML

convertiamo il valore a numero, se NaN portiamolo a 0;
incrementiamo il valore precedente e salviamolo in innerHTML;
inseriamo una function dentro l'evento onclick di resetBtn e per ogni click impostiamo innerHTML di clickBtn a "0";

*/
const resetBtn = document.querySelector("#reset");
const clickBtn = document.querySelector("#click");


clickBtn.onclick = function() {
    let value = clickBtn.innerHTML;
   
    let num = Number(value, 0);
    if (isNaN(num)) {
        num = 0;
    }
    num += 1;
    clickBtn.innerHTML = num;
};

resetBtn.onclick = function() {

    clickBtn.innerHTML = "Click me!";
};
