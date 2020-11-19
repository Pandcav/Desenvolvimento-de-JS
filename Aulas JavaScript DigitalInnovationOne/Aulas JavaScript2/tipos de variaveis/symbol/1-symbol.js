const symbol1 = Symbol();
const symbol2 = Symbol();

// Symbol são únicos 
console.log('Symbol é igual a Symbol2:', symbol1 === symbol2);

// Previnir conflitos entre nome de propriedades
const nameSymbol1 = Symbol('nome');
const nameSymbol2 = Symbol('nome');

const user = {
    [nameSymbol1]: 'Guilherme',
    [nameSymbol2]: 'Outro nome',
    lastName: 'Cabrine da Silva'
}

console.log(user);

// Symbol cria propeiedades que não são enumberables
for (const key in user) {
    if (user.hasOwnProperty(key)) {
        console.log(`\nValor da chave ${key}: ${user[key]}`);
    }
}

console.log('Propriedade do objeto user:', Object.keys(user))
console.log('Valores das propriedade do objeto user:', Object.values(user));

// Exibir Synbol de um  objeto
console.log('Symbol registrado no objeto user:', Object.getOwnPropertySymbols(user));

// Acessando  todas  as propriedades do objeto 
console.log('Todas as Propriedades do objeto user:', Reflect.ownKeys(user));

// Criar um enum
const directions = {
    UP: Symbol('UP'),
    DOWN: Symbol('DOWN'),
    LEFT: Symbol('LEFT'),
    RIGHT: Symbol('RIGHT'),
};