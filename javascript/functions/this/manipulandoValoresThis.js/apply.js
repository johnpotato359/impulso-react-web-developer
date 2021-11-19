// APPLY

const usuario = {
    nome: "Tobias"
};

const pet = {
    nome: "Noronha"
};

function getSomething() {
    console.log(this.nome);
}

getSomething.apply(pet);

// APPLY
// É possível passar parâmetros para essa
// função dentro de um array

const myObject = {
    num1: 2,
    num2: 4
};

function soma(a, b) {
    console.log(this.num1 + this.num2 + a + b);
}

soma.apply(myObject, [1, 5]);