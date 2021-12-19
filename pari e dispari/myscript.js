// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.


//L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
    document.addEventListener('click', function(){
    document.getElementById('pari-dispari')
    .addEventListener('click', seleziona);
});

function seleziona(a){
    let result=false;
    let select= document.getElementById('pari-dispari');
    console.log(select.value);
    let numeroUtente= parseInt(prompt('inserisci un numero da 1 a 5'));
    console.log(numeroUtente);
    let numeroPc = (Math.floor(Math.random()*5)+1);
    console.log(numeroPc);
    let somma=0;
    somma = numeroPc + numeroUtente;
    console.log(somma);



// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)


    if (somma %2 !=0 && select.value=='pari'){
        console.log('hai perso');
    }if (somma %2 !=0 && select.value=='dispari'){
        console.log('hai vinto');
    }if(somma %2 ==0 && select.value=='pari'){
        console.log('hai vinto');
    }if(somma %2 ==0 && select.value=='dispari'){
    console.log('hai perso');

}
}




