const pessoa = {
    firstName: "Gil",
    lastName: "Pasteleiro",
    id : 1,

    // Sempre que uma função está dentro
    // de um objeto chamamos de método
    // Quando declaramos o this dentro de um método
    // estamos nos referindo ao objeto
    fullName: function() {
        return `${this.firstName} ${this.lastName}`;
    },
    getId: function() {
        return this.id;
    }
};

let nomeFull = pessoa.fullName();

console.log(nomeFull);


// Função auto invocável
(function () {
    console.log(this);
})();