const myNumber = 12.4032;

// Transforma numero para string  
const numberAsString = myNumber.toString();
console.log('Número transformado em string:', numberAsString, typeof numberAsString);

// Retorna número com número de casas decimal
const fixedTwouDecimals = myNumber.toFixed(2);
console.log('\nNúmero com duas casas decumais:', fixedTwouDecimals);

// Transforma uma string em float  
console.log('\nStrinh parseado para float:', parseFloat('13.22'));

// Transforma uma stringem int
console.log('\nStrinh parseado para int:', parseInt('13.20'));