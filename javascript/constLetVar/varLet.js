//Escopo global
var primeiroNome = "Julia";
let sobreNome = "Silva";


if(primeiroNome === "Julia") {
    //Escopo local
    var primeiroNome = "Juliana";
    let sobreNome = "Santos";

    console.log(primeiroNome);
    console.log(sobreNome);
}

console.log(primeiroNome);
console.log(sobreNome);
