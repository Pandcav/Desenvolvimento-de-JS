let user = {
    name: 'Guilherme'
};

// Alterando a propiedade de um objeto 
console.log(user)
user.name = 'outro name 1';
console.log(user)
user['name'] = 'outro name 2';

console.log(user)
const prop = 'name';
user[prop] = 'outro name 3';

console.log(user)

// Criando uma propiedade 
user.lastName = 'Cabrine da Silva';
console.log(user)

// Deletando uma propiedade 
delete user.name;
console.log(user)