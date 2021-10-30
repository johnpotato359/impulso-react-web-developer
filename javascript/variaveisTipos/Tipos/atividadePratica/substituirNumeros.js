let array = [1,3,4,6,80,33,23,90];
let array2 = [];

function modificaArray(array) {
    if(array.length === 0) {
        return -1;
    } else {
        for(let i = 0; i <= array.length; i++) {
            if(array[i] % 2 == 0 && array[i] != 0) {
                array[i] = 0;
            }
        }
        return array;
    }   
}

console.log(modificaArray(array));
console.log(modificaArray(array2));