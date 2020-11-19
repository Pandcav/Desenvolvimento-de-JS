//Every
// Retorna um Booleano verificando se todos os itens 
// de um array satisfazem a condição

const arr = [1, 2, 3, 4];

const fristGreaterThanTwo = arr.every(value => value % 2 === 0)

console.log(fristGreaterThanTwo);