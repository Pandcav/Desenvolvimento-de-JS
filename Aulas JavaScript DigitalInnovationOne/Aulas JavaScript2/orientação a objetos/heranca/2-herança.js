function petShop(mascote) {
    this.mascote
}

const m = new petShop('Gato')


console.log(m);

//-------------------------

function petShop(mascote) {
    this.mascote
    return {
        mascote: 'Teste'
    }
}

const m = new petShop("Gato")


console.log(m);