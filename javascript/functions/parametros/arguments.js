// um array com todos os parâmetros passados quando a função foi invocada.

function findMax() {
    let max = -Infinity;

    for(let i = 0; i < arguments.length; i++) {
        if (arguments[i] > max) {
            max = arguments[i];
        }
    }

    return max;
}

function showArgs() {
    return arguments;
}


let numeros = findMax(200,102,300,233,953);
console.log(numeros);

let argumentos = showArgs("BlackJack", 21, true, [0,3,2,1], {name: "Nolan"});
console.log(argumentos);