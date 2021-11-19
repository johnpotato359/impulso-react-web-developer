
// Declarando função de forma padrão
const helloWorld = function() {
    return "Hello World";
}

// Declarando Arrow Functions
const olaMundo = () => {
    return "Olá, Mundo!";
}

// Caso exista apenas uma linha, pode dispensar
// as chaves e o return
const soma = (a, b) => a + b;
console.log(soma(4, 6));

// Caso exista apenas um parâmetro, pode dispensar
// os parênteses
const somaTipoDois = a => a;
console.log(somaTipoDois(5));


// Arrow function NÃO faz hoisting!

console.log(subtracao(2, 4));
function subtracao(a, b) {
    return a - b;
}

// ERRO
/*
subtracao(2, 4);
const subtracao = (a, b) => a - b;

*/

// OUTRAS RESTRIÇÕES
/*

- "this" será o objeto global. Métodos para modificar
    seu valor não irão funcionar;

- Não existe o objeto "arguments";

- O construtor (ex: new MeuObjeto()) também não
    pode ser utilizado

*/