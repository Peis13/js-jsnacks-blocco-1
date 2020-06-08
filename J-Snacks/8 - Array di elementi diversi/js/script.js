// Crea due array che hanno un numero di elementi diversi.
// Aggiungi elementi casuali all’array che ha meno elementi,
// fino a quando ne avrà tanti quanti l’altro.

// INPUT
var arrayUno = [];
var arrayDue = [];
var lunghezzaUno = randomInt(1, 6);
var lunghezzaDue = randomInt(1, 6);
var elementoCasuale = randomInt(1, 10);
var mancanti;

// popolo gli array con numeri casuali e casuale lunghezza
// arrayUno
for (var i = 0; i < lunghezzaUno; i++) {
  arrayUno.push(randomInt(1, 10))
}

// arrayDue
for (var i = 0; i < lunghezzaDue; i++) {
  arrayDue.push(randomInt(1, 10))
}

console.log(arrayUno);
console.log(arrayDue);

// Confronta la lunghezza dei due array
// e aggiungi nElementi ('mancanti') all'array più corto
if (arrayUno.length > arrayDue.length) {
  mancanti = lunghezzaUno - lunghezzaDue;

  for (var i = 0; i < mancanti; i++) {
    arrayDue.push(randomInt(1, 10))
  }
} else {
  mancanti = lunghezzaDue - lunghezzaUno;

  for (var i = 0; i < mancanti; i++) {
    arrayUno.push(randomInt(1, 10))
  }
}

console.log(mancanti);
console.log(arrayUno);
console.log(arrayDue);

//          CORREZIONE           //
var arrayUno = [9, 8, 4, 33, 45];
var arrayDue = [5, 2, 1, 4, 6];

var lunghezzaArrayUno = arrayUno.length;
var lunghezzaArrayDue = arrayDue.length;

// console.log(arrayUno);
// console.log(arrayDue);

if (lunghezzaArrayUno > lunghezzaArrayDue) {
  arrayDue = riempiArray(arrayDue, lunghezzaArrayUno);
  // console.log('ArrayUno è più lungo, aggiungo elementi ad arrayDue');
  // console.log(arrayUno);
  // console.log(arrayDue);

} else if (lunghezzaArrayDue > lunghezzaArrayUno) {
  arrayUno = riempiArray(arrayUno, lunghezzaArrayDue);
  // console.log('ArrayDue è più lungo, aggiungo elementi ad arrayUno');
  // console.log(arrayUno);
  // console.log(arrayDue);

} else {
  // Sono uguali
  // console.log('I due array sono uguali');
}

// Funzione per riempire gli array
// Aggiungi elementi casuali all'array più corto
// finchè non raggiunge una determinata lunghezza
// ATTENZIONE: questa funzione non rimuove mai elementi dall'array originario,
// li aggiunge soltanto
//    --> arrayDaRiempire: array in cui aggiungere i nuovi elementi
//    --> lunghezzaDaRaggiungere: numero intero che definisce la nuova lunghezza dell'array
//    --> return: array modificato (la cui lunghezza sarà il valore dell'argomento lunghezzaDaRaggiungere)
function riempiArray(arrayDaRiempire, lunghezzaDaRaggiungere) {
  while (arrayDaRiempire.length < lunghezzaDaRaggiungere) {
    var numeroCasuale = randomInt(1, 100);
    // console.log(numeroCasuale);

    arrayDaRiempire.push(numeroCasuale);
  }
  // console.log(arrayDaRiempire);
  return arrayDaRiempire
}
