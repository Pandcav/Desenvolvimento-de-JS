//Reduce
//Retorna um novo tipo de dados interando 
//cada posição de um array


const arr = [1, 2, 3, 4];

const arr2 = arr.reduce((total, value) => total += value, 0)


console.log(arr2);