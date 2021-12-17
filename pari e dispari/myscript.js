// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.


//L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
let pariDispari = prompt('pari o dispari?');
let numeroUtente = parseInt(prompt('scegli un numero da 1 a 5'));

//Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione)
function randomPc(){
    let numeroRandomPc = (Math.floor(Math.random()*5)+1);
    return numeroRandomPc;
}

// Sommiamo i due numeri
let somma = numeroRandomPc + numeroUtente;

// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
function sommaNumeri(numeroRandomPc,numeroUtente){
    let risultato = numeroRandomPc + numeroUtente;
    return risultato;
}


// Dichiariamo chi ha vinto.
function vincente(){
    if (somma %2 !=0){
        console.log ('ha vinto l utente');
    }else{
        console.log ('ha vinto il pc');
    }
    return somma;
}


    