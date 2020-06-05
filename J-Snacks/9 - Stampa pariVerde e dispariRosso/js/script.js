// Crea due tag div con due id diversi:
// un div avrà il testo colorato di rosso mentre l’altro di verde.
// Partendo da un array di numeri,
// stampiamo nell’id rosso i numeri dispari e in verde i numeri pari.

// INPUT
var numeri = randomIntArrayLength(10, 1, 10);
console.log(numeri);

// OUTPUT
var tutti = document.getElementById('tutti');
var pari = document.getElementById('pari');
var dispari = document.getElementById('dispari');

// Controllo tutti gli elementi dell'array, cioè i numeri
// stampo tutti i numeri nel 'div blu'
// --> se il numero è pari (resto = 0),
//     lo scrivo nel paragrafo 'pari' contenuto nel 'div verde'
// --> altrimenti il numero è dispari (resto != 0),
//     quindi lo scrivo nel paragrafo 'dispari' contenuto nel 'div rosso'
for (var i = 0; i < numeri.length; i++) {
  tutti.innerHTML += numeri[i] + ', ';

  if (numeri[i] % 2 === 0) {
    pari.innerHTML += numeri[i] + ', ';

  } else {
    dispari.innerHTML += numeri[i] + ', ';

  }
}
