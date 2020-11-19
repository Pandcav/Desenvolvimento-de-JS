/*

if (condition){
    //code
} 

*/

const array = [0, 1, 2, 3, 4, 5];

array.forEach(item => {
    if (item % 2 === 0) {
        console.log(`o numero ${item} é par.`);

    } else {
        console.log(`o numero ${item} é impar`);

    }
});

/*var t = [0, 1, 2, 3, 4, 5]

t.forEach(itens => {
    itens--;
    console.log(itens);

})*/