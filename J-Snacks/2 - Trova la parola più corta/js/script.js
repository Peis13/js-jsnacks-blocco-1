// L’utente inserisce due parole in successione, con due prompt.
// Il software stampa prima la parola più corta, poi la parola più lunga.

// INPUT
var primaParola = prompt('Inserisci la prima parola');
var secondaParola = prompt('Inserisci la seconda parola');

// OUTPUT
var parolaCorta = document.getElementById('parola-corta');
var parolaLunga = document.getElementById('parola-lunga');
var messaggioAschermo = document.getElementById('messaggio-a-schermo');
var messaggio;

// Controllo che le parole immesse non sia un numero
// CONFRONTO LA LUNGHEZZA DELLE DUE PAROLE
// Se la prima parola è più lunga della seconda
if (primaParola.length > secondaParola.length) {

  parolaCorta.innerHTML = 'Seconda parola: ' + secondaParola;
  parolaLunga.innerHTML = 'Prima parola: ' + primaParola;
  messaggio = 'La parola più corta è ' + secondaParola;

  // Se la seconda parola è più lunga della prima
} else if (secondaParola.length > primaParola.length) {

  parolaCorta.innerHTML = 'Prima parola: ' + primaParola;
  parolaLunga.innerHTML = 'Seconda parola: ' + secondaParola;
  messaggio = 'La parola più corta è ' + primaParola;

  // Se le due parole sono di ugual lunghezza
} else {

  parolaCorta.innerHTML = 'Prima parola: ' + primaParola;
  parolaLunga.innerHTML = 'Seconda parola: ' + secondaParola;
  messaggio = 'Le parole sono lunghe uguali';
}

messaggioAschermo.innerHTML = messaggio;
