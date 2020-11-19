//FlatMap
// retorna um novo array assim com a função 
// map e executa um flat de profundidade 1

const arr = [1, 2, 3, 4, 5];

const arrindex = arr.flatMap(value => [value * 2])
const arrindex2 = arr.flatMap(value => [
    [value * 2]
])

console.log(arr);

console.log(arrindex);

console.log(arrindex2);