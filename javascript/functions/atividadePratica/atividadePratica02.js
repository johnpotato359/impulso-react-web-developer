function calculaIdade(anos) {
    return `Daqui a ${anos} anos, ${this.nome} terá ${this.idade + anos} anos de idade.`;
};

const pessoa1 = {
    nome: "Joel",
    idade: 27
};

const pessoa2 = {
    nome: "Lina",
    idade: 26
};

const animal = {
    nome: "Tobias",
    idade: 1,
    raca: "Salsicha"
};

// Call
console.log(calculaIdade.call(animal, 5));

// Apply
console.log(calculaIdade.apply(animal, [2]));