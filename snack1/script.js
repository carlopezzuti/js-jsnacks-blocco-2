// L'utente inserisce un numero nel prompt, se è pari stampa il numero, se è dispari stampa il numero successivo
let userNumber = parseInt(prompt("Inserisci un numero"));

if (userNumber % 2 !== 0) {
    console.log(userNumber + 1);
} else {
    console.log(userNumber);
}