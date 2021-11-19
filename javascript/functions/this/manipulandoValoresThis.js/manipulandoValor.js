const pessoa = {
    nome: "Miguel",
    sobreNome: "Silveira"
};

const animal = {
    nome: "Murphy"
};

function getSomething() {
    console.log(this.nome);
}

getSomething.call(animal);