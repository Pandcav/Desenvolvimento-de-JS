//Values
// Retorna um "Array Iterator" que contem 
//os valores para cada elemento do array

const arr = [1, 2, 3, 4];

const arrIterator = arr.values();

const arr1 = arrIterator.next();

const arr2 = arrIterator.next();

const arr3 = arrIterator.next();

const arr4 = arrIterator.next();

console.log(arr);
console.log(arr1);
console.log(arr2);
console.log(arr3);
console.log(arr4);