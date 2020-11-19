// Retorna o tamanho de uma string 
const textSize = 'Texto'.length;
console.log(`Quantidade de letras: ${textSize}`);

// Retorna o um Array quebrando a string por um delimitador 
const splittedText = 'Texto'.split('x');
console.log('\nArray com as posiçoes separadas pelo delimitador:', splittedText);

// Busca um valor e substitui por outro  
const replacedText = 'Texto'.replace('Texto', 'otxeT');
console.log('\nSubstituição de valor:', replacedText);

// Retorna a "fatia" de um valor 
const lastChar = 'Texto'.slice(-1);
console.log('\nUltima letra de uma  string:', lastChar);

const allWithouLasChar = 'Texto'.slice(0, -1);
console.log('\nValor da string da primeira  letra menos a ultima:', allWithouLasChar);

const secondToEnd = 'Texto'.slice(-1);
console.log('\nValor da string da segunda  letra até a ultima:', lastChar);

// Retorna N caracters a partir de  uma posição 

const twoCharsBeforeFirstPos = 'Texto'.substr(0, 2);
console.log('\nAs duas  primeiras letras são:', twoCharsBeforeFirstPos);