// Chiedi un numero di 4 cifre all’utente.
// Calcola la somma di tutte le cifre che compongono il numero.

// INPUT
var numero = document.getElementById('numero');

// BOTTONI
var calcola = document.getElementById('calcola');

// OUTPUT
var messaggio = document.getElementById('messaggio');

// LOGICA
calcola.addEventListener('click',
  function() {

    var somma = 0;
    var numeroSplit = numero.value.split('');
    var risposta = 'Inserisci 4 cifre';

    // Se la lunghezza del numero inserito è diversa da 4
    if (numeroSplit.length != 4) {

      // scrivi il messaggio "risposta"
      messaggio.innerHTML = risposta;

      // Altrimenti
    } else {

      // calcolami la somma delle 4 cifre
      for (var i = 0; i < numeroSplit.length; i++) {
        somma += parseInt(numeroSplit[i]);
      }

      // e cambia la "risposta"
      risposta = 'La somma è: '+ somma;
    }

    // Stampa il messaggio
    messaggio.innerHTML = risposta;
  }
)
