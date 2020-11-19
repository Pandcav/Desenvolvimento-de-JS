const arr1 = [1, 2, 3];
const arr2 = new Array(1, 2, 3);


// Array.of
//Cia uma nova instancia de array apartir 
//do numero de parametros informados 

//const pessoas = new Array.of('moises', 'guilherme', 'rick');

//Array
// cria uma nova instancioa de array de acordo 
//com os parâmetros informados


const ar = Array(3);
const ar2 = Array(2, 3)

console.log(pessoas);

//Array.fron 

//cria uma nova instancia de array apartir de um parametro 
// array-like ou interable object

const divs = document.querySelectorAll('div');
const ary = Array.from(divs)

//Push
// adcionar um ou mais elementos no final
//do array e retorna o tamanho do array

const ar1 = ['banana', 'melancia', 'abacate'];
const arrLength = ar1.push('acerola')

console.log(arrLength);


//POP 
// remover o ultimo de um elemnto de um array
//e retorna o elemento removido

const ar1 = ['banana', 'melancia', 'abacate'];
const removedItem = ar1.pop()

console.log(removedItem);

//unshift
// adcionar um ou mais elementos no inicio
//do array e retorna o tamanho do array

const ar1 = ['banana', 'melancia', 'abacate'];
const arrLength = ar1.unshift('acerola')

console.log(arrLength);

//shift 
// remover o primeiro  de um elemnto de um array
//e retorna o elemento removido

const ar1 = ['banana', 'melancia', 'abacate'];
const removedItem = ar1.shift()

console.log(removedItem);

//concat
// concatena um ou mais arrays retornando um novo array

const frutas = ['banana', 'melancia', 'abacate'];
const salgados = ['kibe', 'coexinha', 'pastel'];

const alimentos = frutas.concat(salgados)


// Slice 
// Retornara um novo array "fatiando" 
//o array de acordo com inicio e fim 
const arr1 = [1, 2, 3, 4, 5];

arr1.slice(0, 2)

arr1.slice(2)

arr1.slice(-1)

arr1.slice(-3)
    //////////////////////////////////////////////////////////////

//Splice 
// Altera um array adicionando novos elementos 
// enquanto remove elementos antigos 

const arr1 = [1, 2, 3, 4, 5];

arr1.splice(2)

console.log(arr1);


arr1.splice(0, 0, 'first')

console.log(arr1);