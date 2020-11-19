/*const name = 'Guilherme'

// não podemos alterar o valor
name = 'Guilherme';

const user = {
    name: 'Gilherme'
};

//Mas se for um objeto, podemos trocar suas proprieodades
user.nome = 'Outro nome';

// Não podemos fazer o objeoto "apontar"  para outro lugar
user = {
    name: 'Guilherme'
};*/

const persons = ['Guilherme', 'Pedro', 'Jennifer'];

//podemos adicionar novos itens
persons.push('João');

//podemos remover algum item 
persons.shift();

//podemoas alterar diretamente 
persons[1] = 'James';

console.log('\nArray após as alterações:', persons);