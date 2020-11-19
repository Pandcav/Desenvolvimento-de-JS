const myText = 'Hello prototype!'
myText.split('');

const myText = String('Hello Prototype!')
console.log(myText.__proto__.split);
log

console.log(String.prototype.split);

console.log(myText.__proto__.split === String.prototype.split);
// verdadeiro no caso...

console.log(myText.constructor === String);


// __proto__ -> prototype -> constructor