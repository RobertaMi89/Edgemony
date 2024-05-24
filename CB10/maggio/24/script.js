/*Aggiungiamo al nostro HTML tramite JS due nuovi elementi: un h1 ed un paragrafo. Usiamo il metodo document.createElement per creare i vari elementi Per inserirli nella pagina usiamo rispettivamente: insertAdjacentElement() per h1, e append() per il <p>.*/
const bodyEl = document.querySelector('body');

// ho creato un elemento nuovo H1
const newH1 = document.createElement('h1');
newH1.className = 'text-big';
newH1.innerHTML = 'Sono un h1';
bodyEl.insertAdjacentElement('afterbegin', newH1);

// Ho creato un paragrafo
const newP = document.createElement('p');
newP.innerHTML = 'Questo è un paragrafo.';
bodyEl.append(newP);

/*Button contatore dinamico:
Aggiungiamo nella nostra pagina, dopo il paragrafo, un <button>0</button>.
Al button associamo un evento onmouseenter che cambierà lo style del button (sperimentiamo un po');
Al button associamo un altro evento onclick che al click aumenta di uno il numero inserito nel proprio innerHTML;*/

const buttonEl = document.createElement('button');
buttonEl.innerHTML = '0'; 
bodyEl.append(buttonEl);  


buttonEl.onmouseenter = function() {
    this.style.backgroundColor = 'yellow';
    this.style.color = 'darkblue';
    this.style.borderRadius = '10px';
    this.style.fontSize = '30px';
    this.style.padding = "20px";
};
buttonEl.onmouseout = function() {
    this.style.backgroundColor = '';
    this.style.color = '';
    this.style.borderRadius = '';
    this.style.fontSize = '';
};
buttonEl.onclick = function() {
    let currentValue = parseInt(this.innerHTML, 10); 
    if (isNaN(currentValue)) {
        currentValue = 0;
    }
    this.innerHTML = currentValue + 1; 
};

//////////bottone extra/////////////////
const buttonEl1 = document.createElement('button');
buttonEl1.innerHTML = 'Click me if you can!'; 
bodyEl.append(buttonEl1);  

buttonEl1.onmouseenter = function() {
    this.style.backgroundColor = 'yellow';
    this.style.color = 'darkblue';
    this.style.borderRadius = '10px';
    this.style.fontSize = '30px';
    this.style.padding = "20px";
};
    buttonEl1.style.position = 'absolute';
    buttonEl1.style.top = '50%';
    buttonEl1.style.left = '50%';
    buttonEl1.style.transform = 'translate(-50%, -50%)';


buttonEl1.onmousemove = function(){
    const xX = window.innerWidth - this.offsetWidth;
    const yY = window.innerHeight - this.offsetHeight;
    const randomX = Math.floor(Math.random() * xX);
    const randomY = Math.floor(Math.random() * yY);
    this.style.left = `${randomX}px`;
    this.style.top = `${randomY}px`;
}

/*Lista di nomi:
Insieriamo all'interno della pagina HTML un elemento form secondo quanto riportato sotto:*/

const formEl = document.querySelector('form');
const inputEl = document.getElementById('nomi');
const listEl = document.querySelector('.list');

formEl.onsubmit = function(event) {
    event.preventDefault();
    const inputValue = inputEl.value.trim();

    if (inputValue.length >= 3 && inputValue.includes(' ')) {
        const newLi = document.createElement('li');
        newLi.innerText = inputValue;
        listEl.appendChild(newLi);
        newLi.onclick = function() {
            console.log(inputValue);
        };

        inputEl.value = '';
    } else {
        alert('Inserisci un nome e cognome valido (almeno 3 caratteri e uno spazio).');
    }
};
listEl.onclick = function(event) {
    const clickedElement = event.target;
    if (clickedElement.tagName === 'LI') {
        clickedElement.remove();
    }
};