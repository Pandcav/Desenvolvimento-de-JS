const user = {
    name: 'Guilherme',
    LastName: 'Cabrine da Silva '
}

// Recupera as chaves do objeto 
console.log('Proprieodade do objeto user:', Object.keys(user));

// Recupera os valores das chaves do obejeto 
console.log('\nValores das propiedades do objeto user:', Object.values(user));

// Retoma um array de array contendo [ nome_prop, valor_prop ]
console.log('\nLista de propriedade e valores:', Object.entries(user));

// Mergear propriedades de objetos 
Object.assign(user, { fullName: 'Guilherme Cabrine da Silva' });

console.log('\nAdiciona a propriedade fulName no obejeto user', user)
console.log('\nRetorna um novo objeto mergeado dois ou mais objetos', Object.assign({}, user, { age: 26 }));

// Previne todas as alterações em um objeto 
const newObj = { foo: 'bar' };
Object.freeze(newObj);

newObj.foo = 'changes';
delete newObj.foo;
newObj.bar = 'foo';

console.log('\nVariáveis newObj ápos as altyerações', newObj);

// Permite apenas a alteração  de propriedades existentes em um Objeto
const person = { name: 'Guilherme' };
Object.seal(person);

perso.name = 'Guilherme Cabrini';
delete person.name;
person.age = 26;

console.log('\nVariaveis person após as alterações:', person);