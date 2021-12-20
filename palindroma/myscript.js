// Palidroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma



// // Creare una funzione per capire se la parola inserita è palindroma
function checkParola(parola,nuovaParola){
    let risultato = false;
    if(parola===nuovaParola){
        console.log('la parola inserita è palindroma');
        risultato=true;
    }else{
        console.log('la parola inserita non è palindroma');
    }
    return risultato;
}

let parola = prompt('inserisci una parola');
console.log(parola.length);

let nuovaParola = '';

for (let i=parola.length-1; i>=0; i--){
    nuovaParola+=parola[i];
}
console.log(nuovaParola);

    

console.log(checkParola(parola,nuovaParola));
