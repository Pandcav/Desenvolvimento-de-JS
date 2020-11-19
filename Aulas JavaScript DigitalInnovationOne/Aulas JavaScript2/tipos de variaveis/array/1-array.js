const user = ['Gulherme', 'Pedro', 'Jennifer'];

const gender = {
    MAN: Symbol('M'),
    WOMA: Symbol('W')
}

const persons = [{
        name: 'Guilherme',
        age: 26,
        gender: gender.MAN
    },
    {
        name: 'Pedro',
        age: 43,
        gender: gender.MAN
    },
    {
        name: 'Jennifer',
        age: 18,
        gender: gender.WOMA
    },
]

// Retornar a quantidade de itens de uma array
console.log('items:', persons.length)

//Verificar se é Array 
console.log('A variavel person é um array:', Array.isArray(persons));

//Iterar os itens do array
persons.forEach(persons => {
    console.log(`Nome: ${person.name}`);
});

// filtrar  array
const mens = persons.filter(person => persons.gender == gender.MAN)
console.log('\nNova Lista apenas com homens:', mens);

// Retornar um novo
const personWithCourse = person.map(person => {
    person.course = 'Introdução ao Javascript'
    return person;
})
console.log('\nPessoas coma a adição de course:', personWithCourse);

// Transforma um array em outro tipo 
const totalAge = persons.reduce((age, person) => {
    age += person.age;
    return age;
}, 0);
console.log('\nSoma de idade das pessoas:', totalAge);

// Juntando operações 
const totalEvanAges = persons
    .filter(persons => person.age % 2 == 0)
    .reduce((age, person) => {
        age += person.age;
        return age;
    }, 0);

console.log('\nSoma a idades das pessoas que possuem idade par', totalEvanAges);