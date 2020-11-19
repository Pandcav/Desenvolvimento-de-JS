// Factory
//todas as funçoes que retornam um objeto
// sem a necessidade de chamá-las com new
// são consideradas funcões Factory (fabrica)


// exemplode de uma fução não factory 
function FakeUser() {
    this.name: 'Guilherme';
    this.lastName: 'Cabrini'

}

const user = new FakeUser();



// exemplo de uma função Factory
function FakeUser() {
    return {
        name: 'Guilherme',
        lastName: 'Cabrine'

    }
}

const user = FakeUser();