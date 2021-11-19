// Uma função passada como argumento para outra função.
// Utilizando callbacks, você tem maior controle da ordem de chamadas.

//                      PARÂMETROS                        
const calc = function(operacao, num1, num2) {
    return operacao(num1,num2);
}

const soma = function(num1,num2) {
    return num1 + num2;
}

const sub = function(num1, num2) {
    return num1 - num2;
}

//                      ARGUMENTOS
const resultSoma = calc(soma, 1, 2);
const resultSub = calc(sub, 1, 2);

console.log(resultSub);
console.log(resultSoma);