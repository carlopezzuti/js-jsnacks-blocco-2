// L’utente inserisce due parole in successione, con due prompt. Il software stampa prima la parola più corta, poi la parola più lunga.
const userWord1 = prompt("Scrivi una prima parola");
const userWord2 = prompt("Scrivi una seconda parola");

if (userWord1.length < userWord2.length) {
    console.log(userWord1);
    console.log(userWord2);
} else if (userWord1.length > userWord2.length) {
    console.log(userWord2);
    console.log(userWord1);
} else  {
    console.log("Hanno la stessa lunghezza");
}