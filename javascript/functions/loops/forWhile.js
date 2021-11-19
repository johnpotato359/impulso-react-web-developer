//FOR
function multiplicaPorDois(arr) {
    let multiplicados = [];

    for(let i = 0; i < arr.length; i++) {
        multiplicados.push(arr[i] * 2);
    }

    return multiplicados;
}

const meusNumeros = [2, 33, 456, 356, 40];

console.log(multiplicaPorDois(meusNumeros));

// FOR IN 
// Para propriedades enumeráveis
function forInExemplo(obj) {
    for(prop in obj) {
        console.log(prop);
    }
}

//Acessando os valores das propriedades
function forInExemploTypeTwo(obj) {
    for(prop in obj) {
        console.log(obj[prop]);
    }
}


const meuObjeto = {
    nome: "João",
    idade: "20",
    cidade: "Salvador"
}

console.log(forInExemplo(meuObjeto));
console.log(forInExemploTypeTwo(meuObjeto));

// For Of
// Loop entre estruturas iteráveis

function logLetras(palavra) {
    for(letra of palavra) {
        console.log(letra);
    }
}

function logNumeros(nums) {
    for(num of nums) {
        console.log(num);
    }
}

const palavra = "abacaxi";
const nums = [30, 20, 233, 2];

logLetras(palavra);
logNumeros(nums);



// While
// Executa instruções até que a condição se torne false

function multiplicaPorQuatro(arr) {
    let count = 0;
    let multiplicados = [];

    while(count < arr.length) {
        multiplicados.push(arr[count] * 4);
        count++;
    }

    return multiplicados;
}

console.log(multiplicaPorQuatro(meusNumeros));


// Do While
// Executa instruções até que a condição se torne falsa.
// Porém a primeira execução sempre ocorre

function exemploDoWhile() {
    let num = 0;

    do {
        console.log(num);
        num++;
    } while(num <= 5);
}

function exemploDoWhileTypeTwo() {
    let num = 6;

    do {
        console.log(num);
        num++;
    } while(num <= 5);
}


exemploDoWhile();
exemploDoWhileTypeTwo();
