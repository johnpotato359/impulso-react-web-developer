const array = [30, 30, 40, 5, 233, 2049, 3034, 5];

function valoresUnicos(array) {
    let myArray = []
    const mySet = new Set(array);
    
    return [...mySet];
}

console.log(valoresUnicos(array));

