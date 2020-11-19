// Module
// é um pattern que possibolita organizarmos melhor nosso código 
// sem a necessidades de esportas as variaveis globais.

// exemplo

class Person {
    constructor(name) {
        this.name = name;
    }
}

export default Person;

import Person from './module';