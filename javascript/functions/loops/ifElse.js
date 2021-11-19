function numeroPositivo(num) {
    let resultado;

    if(num < 0) {
        resultado = false;
    } else {
        resultado = true;
    }

    return resultado;
}

console.log(numeroPositivo(2)); // true
console.log(numeroPositivo(-3)); // false

// jeitos diferentes de codar a mesma função

function numPositivo(num) {
    let resultado;
    const ehNegativo = num < 0;

    if(ehNegativo) {
        resultado = false;
    } else {
        resultado = true;
    }

    return resultado;
}

console.log(numPositivo(2));
console.log(numPositivo(-2));



function numberPositivo(num) {
    const ehNegativo = num < 0;

    if(ehNegativo) {
        return false;
    }

    return true;
}

console.log(numberPositivo(2));
console.log(numberPositivo(-2));

// ELSE IF

function numeroPositve(num) {
    const ehNegativo = num < 0;
    const maiorQueDez = num > 10;

    if(ehNegativo) {
        return "Esse número é negativo!";
    } else if(!ehNegativo && maiorQueDez) {
        return "Esse número é positivo e maior que 10!";
    }

    return "Esse número é positivo";
}

console.log(numeroPositve(-1));
console.log(numeroPositve(1));
console.log(numeroPositve(11));