/*Scriviamo una function che prende in parametro una serie indefinita di indicazioni, per ogni indicazione stampare un console.log

nb: le indicazione possono essere solo "su" "giù" "sinistra" "destra"

indicazioni('su', 'su', 'sinistra'); 
// output:
// 'su'
// 'su'
// 'sinistra'*/

function indicazioni(...directions){
    for(let direct of directions){
        if (direct === 'su' || direct === 'giù' || direct === 'sinistra' || direct === 'destra') { //["su","giù","sx","dx"].includes(directions) è vaido solo con || OR
            console.log(direct);
        } else {
            console.log(`${direct} non è una direzione valida`);
        }
    }    
}
indicazioni('su', 'su', 'sinistra')



/*scrivere una function partendo da quella di prima, per ogni direzione salvare dentro un oggetto il numero di indicazioni uguali.*/
function contaIndicazioni(...directions){
    const moves = { 
        su: 0,
        giù: 0,
        sinistra: 0,
        destra: 0
    };

    for(let direct of directions){
        if (moves.hasOwnProperty(direct)){
            moves[direct]++;
        } else {
            console.log(`${moves} non è una direzione valida`);
        }
    }    

    return moves;
}
console.log(contaIndicazioni('su', 'su','su', 'sinistra')); 
/*scriviamo una function che conta quante volte viene eseguita. Attacchiamo questa function all'evento click sul body usando document.body.onclick.*/

let count = 1;
const countClick = () => {
      console.log(`Click-> ${count++}`)
} 
document.body.onclick = countClick;


/* Scrivere una function che data una stringa in input possa sostituire ogni carattere con il suo indice nell'alfabeto.

esempio: a = 1; b = 2;

console.log(alphabetPosition('Rosso di sera, bel tempo si spera')) // output: "18 15 19 19 15 4 9 19 5 18 1 2 5 12 20 5 13 16 15 19 9 19 16 5 18 1"*/
function alphabetPosition(text) {
    const alphabet = {
        a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, g: 7, h: 8, i: 9, j: 10, 
        k: 11, l: 12, m: 13, n: 14, o: 15, p: 16, q: 17, r: 18, s: 19, 
        t: 20, u: 21, v: 22, w: 23, x: 24, y: 25, z: 26
    };

    let result = [];
    
    for (let char of text.toLowerCase()) {
        if (alphabet[char]) {
            result.push(alphabet[char]);
        }
    }
    
    return result.join(' ');
}

console.log(alphabetPosition('Rosso di sera, bel tempo si spera'));
// Output: "18 15 19 19 15 4 9 19 5 18 1 2 5 12 20 5 13 16 15 19 9 19 16 5 18 1"

/*const alphabet ="abcdefghijklmnopqrstuvwxyz";

    function alpPosition(string = " "){
        let output = ""
        string = string.toLowerCase();

            for(let char of string){
                const indexOfChar = alphabet.indexOf(char);
                const isValid = indexOfChar >-1
                if(isValid){
                    output += (indexOfChar+1)+" ";
                }else{
                    output += char;
                }
                
                output +=(isValid)?((indexOfChar)+" "):char
            }
            return output
    }*/