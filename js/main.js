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

// =============================

// L’utente sceglie pari o dispari
// e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

var pariDispari = prompt("Scegli pari o dispari");

var scegliNumero = parseInt(prompt("Scegli un numero da 1 a 5"));

var numeroRandom = (Math.floor(Math.random() * 5) + 1);

var generaNumero = numero();

var generaSomma = somma();

// console.log(numeroRandom);
// console.log(numero());
// console.log(somma());

// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
function numero(){
   
   var generaNumero = scegliNumero + numeroRandom;
   console.log(generaNumero);
   
   return generaNumero;
}

// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
function somma(){

   if(generaNumero % 2 == 0){

      console.log("La somma uscita è pari");
   } else{

      console.log("La somma uscita è dispari");
   }

}

   if (generaNumero = pariDispari !== generaNumero){

      console.log("Il giocatore vince");
   } else{

      console.log("Il pc vince");
   }

// se l'utente ha scelto pari e la somma è pari, vince l'utente, altrimenti vince il pc

 

