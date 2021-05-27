// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole: il prezzo del biglietto è definito in base ai km (0.21 € al km) va applicato uno sconto del 20% per i minorenni va applicato uno sconto del 40% per gli over 65.
// L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).
// Questo richiederà un minimo di ricerca.


var numKm = prompt('Quanti km vuoi percorrere?');
var eta = prompt('Quanti hanni hai');
var prezzo = numKm * 0.21

if (eta < 18) {
    prezzo *= 0.8;
}
else if (eta > 65) {
    prezzo *= 0.6;
}

alert('Il prezzo del biglietto è '+ (Math.round(prezzo * 100) / 100).toFixed(2) + '€');
