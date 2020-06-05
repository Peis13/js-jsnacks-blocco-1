// Fai inserire un numero, che chiameremo N, all’utente.
// Genera N array, ognuno formato da 10 numeri casuali tra 1 e 100.
// Ogni volta che ne crei uno, stampalo a schermo.

// INPUT
var numero = document.getElementById('numero');

// BOTTONI
var genera = document.getElementById('genera');

// OUTPUT
var stampa = document.getElementById('stampa');

// GENERA
genera.addEventListener('click',
  function() {

    // Immissione del numero da parte dell'utente
    var n = parseInt(numero.value);

    // Creo una lista di nArray in base al numero inserito dall'utente
    var listaArray = nArray(n);

    // Stampa a schermo
    stampa.innerHTML += listaArray + '<br>';
  }
)

// FUNZIONI
// Genero N array
function nArray(num) {
  var num;
  var array = [];
  var listaArray = [];

  for (var i = 0; i < num; i++) {
    array = randomIntArrayLength(10, 1, 100);
    listaArray.push('<br>' + array);
  }
  return listaArray;
}

// Genero un array di lunghezza variabile
// contenente un range di numeri random NON RIPETUTI
function randomIntArrayLength(arrayLength, min, max) {
  var i = 0;
  var array = [];

  while (i < arrayLength) {

    var n = randomInt(min, max);
    if (array.includes(n)) {

    } else {
      array.push(n);
      i++;
    }
  }
  return array;
}
