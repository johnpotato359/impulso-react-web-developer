const alunos = [
    {
        nome: "Tobias",
        nota: 5,
        turma: "1B",
    },
    {
        nome: "Noronha",
        nota: 9,
        turma: "1B",
    },
    {
        nome: "Celso",
        nota: 6,
        turma: "2C",
    },
    {
        nome: "Sarcelo",
        nota: 3,
        turma: "2C",
    },
]

function alunosAprovados(arr, media) {
    let aprovados = [];

    for(let i = 0; i < arr.length; i++) {
        const {nome, nota} = arr[i]; 

        if(nota >= media){
            aprovados.push(nome);
        }
    }

    return aprovados;

}

function alunosReprovados(arr, media) {
    let reprovados = [];

    for(let i = 0; i < arr.length; i++) {
        const {nota, nome} = arr[i];

        if(nota < media) {
            reprovados.push(nome);
        }
    }

    return reprovados;
}

console.log(alunosAprovados(alunos, 6));
console.log(alunosReprovados(alunos, 6))