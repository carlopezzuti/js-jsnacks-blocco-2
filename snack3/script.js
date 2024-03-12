// Crea due tag div con due id diversi:
    // - un div avrà il testo colorato di rosso mentre l’altro di verde.
// Partendo da un array di numeri, stampiamo nell’id rosso i numeri dispari e in verde i numeri pari.

const numbersContainer = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

const boxRed = document.querySelector("#box-red");
boxRed.style.color = ("red");
const boxGreen = document.querySelector("#box-green");
boxGreen.style.color = ("green")

for (let i = 0; i < numbersContainer.length; i++) {
    const number = numbersContainer[i];

    if (number % 2 === 0) {
        boxGreen.innerHTML += number + " ";
    } else {
        boxRed.innerHTML += number + " ";
    }
}