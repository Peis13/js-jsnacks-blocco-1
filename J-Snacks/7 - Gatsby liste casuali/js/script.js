// Generatore di “nomi cognomi” casuali:
// prendendo una lista di nomi e una lista di cognomi,
// Gatsby vuole generare una falsa lista di invitati.

// INPUT
var nomi = ['Bianco', 'Rosso', 'Giallo','Verde','Blu'];
var cognomi = ['Uno', 'Due', 'Tre','Quattro','Cinque'];
var nStringhe = 3;
var listaCasuale = [];

for (var i = 0; i < nStringhe; i++) {

  // indici casuali
  var nUno = randomInt(0, nomi.length-1);
  var nDue = randomInt(0, cognomi.length-1);

  var nomeCasuale = nomi[nUno];
  var cognomeCasuale = cognomi[nDue];

  var nomeFalso = nomeCasuale + ' ' + cognomeCasuale;

  listaCasuale.push(nomeFalso);
}

// OUTPUT
console.log(nomi);
console.log(cognomi);
console.log(listaCasuale);

//          CORREZIONE           //
// INPUT
var numeroDiNomiFalsi = 5;
var nomi = ['Bianco', 'Rosso', 'Giallo','Verde','Blu'];
var cognomi = ['Uno', 'Due', 'Tre','Quattro','Cinque'];
var listaFalsa = [];

// Genero una falsa lista di invitati
for (var i = 0; i < numeroDiNomiFalsi; i++) {

  // nome preso a caso
  var indiceNomeCasuale = randomInt(0, nomi.length-1);
  var nomeCasuale = nomi[indiceNomeCasuale];
  // console.log(indiceNomeCasuale);
  // console.log(nomeCasuale);

  // cognome preso a caso
  var indiceCognomeCasuale = randomInt(0, cognomi.length-1);
  var cognomeCasuale = cognomi[indiceCognomeCasuale];
  // console.log(indiceCognomeCasuale);
  // console.log(cognomeCasuale);

  // genero un nome falso, concatenando un nome preso a caso e un cognome preso a caso dalle rispettive liste
  var nuovoNomeFalso = nomeCasuale + ' ' + cognomeCasuale;
  console.log(nuovoNomeFalso);

  // aggiungo i nomi e i cognomi casuali alla lista falsa
  listaFalsa.push(nuovoNomeFalso);
  console.log(listaFalsa);
}
