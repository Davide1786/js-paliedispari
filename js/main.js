// Palidroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

// var parola = prompt("inserisci una parola").toLowerCase();

// var parolaInversa = palindroma(parola);

// if(parola == parolaInversa){
//     console.log('la parola è palindroma');
//   } else {
//     console.log('la parola non è palindroma');
//   }
  
// function palindroma(str){
//   var strInversa = str.split('').reverse().join('').toLowerCase();  
//   return strInversa;
// }

// ============================================================================

// L’utente sceglie pari o dispari                          non funziona
// e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

// var pariDispari = prompt("Scegli pari o dispari");

// var numeroGiocatore = parseInt(prompt("Scegli un numero da 1 a 5"));

// var numeroRandom = (Math.floor(Math.random() * 5) + 1);

// var generaNumero = numero();

// var generaSomma = somma();

// // console.log(numeroRandom);
// // console.log(numero());
// // console.log(somma());

// // Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// function numero(){
   
//    var generaNumero = numeroGiocatore + numeroRandom;
//    console.log(generaNumero);
   
//    return generaNumero;
// }

// // Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// function somma(){

//    if(generaNumero % 2 == 0){

//       console.log("La somma uscita è pari");
//    } else{

//       console.log("La somma uscita è dispari");
//    }

// }

//    if(numeroGiocatore == generaNumero){

//       console.log("Il giocatore vince");
//    } else{

//       console.log("Il pc vince");
//    }

// se l'utente ha scelto pari e la somma è pari, vince l'utente, altrimenti vince il pc

// ============================================================================

//Funzioni

function generaNumero(min, max){
 return Math.floor(Math.random() * (max - min) + min);
}

function checkPariDispari (num1, num2){
   var somma = num1 + num2;

   if (somma % 2 == 0){
       console.log("La somma è PARI");
       var risultato = "PARI";
   } else {
      console.log("La somma è DISPARI");
      var risultato = "DISPARI";
   }
   return risultato;
}

// L’utente sceglie pari o dispari
do {
   var scegliPariDispari = prompt("Scegli pari o dispari");
   scegliPariDispari = scegliPariDispari.toUpperCase();
} while(scegliPariDispari != "PARI" && scegliPariDispari != "DISPARI");
console.log("Il giocatore ha scelto: " + scegliPariDispari);

// e inserisce un numero da 1 a 5.
do {
   var numeroGiocatore = parseInt(prompt("Scegli un numero da 1 a 5"));
} while(numeroGiocatore < 1 || numeroGiocatore > 5);
console.log("Il giocatore ha scelto: " + numeroGiocatore);

// Generiamo un numero random (sempre da 1 a 5) per il computer (creando una funzione).
var numeroComputer = generaNumero(1,5);
console.log("Il numero del Computer è: " + numeroComputer);

// Sommiamo i due numeri
var sommaNumeri = numeroComputer + numeroGiocatore;
console.log("La somma dei numeri è: " + sommaNumeri);

// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
var risultatoPariDispari = checkPariDispari(numeroGiocatore, numeroComputer);

// Dichiariamo chi ha vinto.
if(scegliPariDispari == risultatoPariDispari){
   console.log("Il giocatore vince");

} else {
   console.log("Il computer vince");
}


// ====================================================

 

