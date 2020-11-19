// Continue 

console.log('Exemplo de utilização de contimue');
const array = [1, 2, 3, 4, 5, 6];
for (let index = 0; index <= array.length; index++) {

    const elemento = array[index];
    if (elemento % 2 === 0) {
        continue;
    }

    console.log(elemento);
};


var filmes = ["loa", "lala", "lulu"]