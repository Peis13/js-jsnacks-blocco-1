// In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby,
// chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.

// INPUT
var invitati = ["Nicolò", "Sara", "Samuele", "Alessandro", "Lorenzo"];
var nome = document.getElementById('nome');

// BOTTONI
var ok = document.getElementById('ok');

// OUTPUT
var risposta;
var messaggio = document.getElementById('messaggio');

// LOGICA
// Clicco il bottone ok
ok.addEventListener("click",
  function() {

    var i = 0;
    var presente = false;
    risposta = "Mi dispiace, non sei in lista!"

    // Entra nel ciclo se il conteggio è inferiore della longhezza della lista invitati
    // E se il flag "presente" è ancora uguale a false;
    while ((i < invitati.length) && (presente === false)) {

      // Se il nome inserito è presente nella lista,
      if (nome.value == invitati[i]) {

        // allora il flag "presente" diventa true
        presente = true;
      }
      i++;
    }

    // Se il nome è presente nella lista
    if (presente === true) {

      // allora cambia la risposta
      risposta = "Benvenuto, sei invitato alla festa";
    }

    // Stampa la risposta
    messaggio.innerHTML = risposta;
  }
)
