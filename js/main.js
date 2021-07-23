// Palidroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

var parola = prompt("inserisci una parola").toLowerCase();

var parolaInversa = palindroma(parola);

if(parola == parolaInversa){
    console.log('la parola è palindroma');
  } else {
    console.log('la parola non è palindroma');
  }
  
function palindroma(str){
  var strInversa = str.split('').reverse().join('').toLowerCase();  
  return strInversa;
}


// =============================
 

