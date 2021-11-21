//SET
// Set são estruturas que armazenam apenas valore únicos.

// Set vs Array
/*
 - Possui valores únicos
 - Em vez da propriedade length, consulta-se o número
    de registros pela propriedade size
 - Não possui os métodos map, filter, reduce etc.

 */

const mySet = new Set();

mySet.add(1);
mySet.add(5);

mySet.has(1);
// true

mySet.has(3);
// false

mySet.delete(3);