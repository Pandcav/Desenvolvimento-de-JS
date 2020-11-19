//Some 
// retona um booleano verificando de pelo menos 
//um item de um array satisfaz a condição

const arr = [1, 2, 3, 4];

const fristGreaterThanTwo = arr.some(value => value % 2 === 0)

console.log(fristGreaterThanTwo);