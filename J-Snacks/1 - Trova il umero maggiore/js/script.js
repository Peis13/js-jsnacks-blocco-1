// L'utente inserisce due numeri in successione, con due prompt
// Il SW stampa il maggiore

// INFO UTENTE
// Chiedo all'utente di inserire un numero
var primoNumero =  parseInt(prompt('Dimmi il primo numero'));
var secondoNumero =  parseInt(prompt('Dimmi il secondo numero'));

// VERIFICA IL NUMERO MAGGIORE
var messaggio;
if (primoNumero > secondoNumero) {
  messaggio = 'Il primo numero è maggiore';
} else if (secondoNumero > primoNumero) {
  messaggio = 'Il secondo numero è maggiore';
} else {
  messaggio = 'I numeri sono uguali';
}

// STAMPO IL MESSAGGIO
alert(messaggio);
