
// Spread: uma forma de lidar sepadaramente com elementos
// o que era parte de um array se torna um elemento indepente.

function sum(x, y, z) {
    return x + y + z;
}

const numbers = [1, 2, 3];

console.log(sum(...numbers));