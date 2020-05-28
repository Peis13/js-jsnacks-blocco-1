// Il software deve chiedere per 5 volte all’utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti.
// Esegui questo programma in due versioni, con il for e con il while.
// !!! Scommenta il ciclo che vuoi utilizzare !!!

// INPUT
var numero;

// OUTPUT
var somma = 0;
var stampa = document.getElementById('stampa');

// LOGICA con FOR
// Ripetizione per 5 volte
for (var i = 0; i < 5; i++) {

  // Chiedo all'utente di inserireun numero
  numero = parseInt(prompt('Inserisci un numero'));

  // Aggiungo il numero inserito alla sommma
  somma += numero;
}
// Fine FOR

// LOGICA con WHILE
// var i = 0;
//
// // Ripetizione per 5 volte
// while (i < 5) {
//
//   // Chiedo all'utente di inserire un numero
//   numero = parseInt(prompt('Inserisci un numero'));
//
//   // Aggiungo il numero inserito alla sommma
//   somma += numero;
//
//   // Incremento l'indice di conteggio del ciclo
//   i++;
// }
// Fine WHILE

// STAMPO A SCHERMO IL RISULTATO
stampa.innerHTML = 'La somma dei numeri inseriti è: ' + somma;
