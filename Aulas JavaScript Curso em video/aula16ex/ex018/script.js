let num = document.getElementById('num')
let selc = document.getElementById('selc')
let crd = document.getElementById('card')
let res = document.getElementById('res')
let valores = []

function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function add() {

    if (isNumero(num.value) && !inLista(num.value, valores)) {
        crd.innerHTML = ''
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.innerText = `Valor ${num.value} foi adicionado `
        item.value = `selc ${num.value}`
        selc.appendChild(item)


    } else {
        crd.innerText = '[ERROR] dados invalido. Lembrando digite um numero de 0 á 100'
        crd.style.background = 'red'
        crd.style.font = 'normal 10pt'
        crd.style.textAlign = 'center'

    }
    num.value = ''
    num.focus()


}

function finalizar() {
    if (valores.length == 0) {
        let p = document.getElementById('p')
        p.innerText = '[ERROR] para finalizar você precisa inserir um valor.'
        p.style.color = 'red'
    } else {

        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0

        for (let pos in valores) {
            soma += valores[pos]
            if (valores[pos] > maior) {
                maior = valores[pos]

            }
            if (valores[pos] < menor) {
                menor = valores[pos]

            }



            media = soma / tot
            res.innerHTML = ''
            res.innerHTML += `<p> Ao todo, temos ${tot} valores Cadastrados</p>`
            res.innerHTML += `<p> O maior valor registrado é  ${maior} </p>`
            res.innerHTML += `<p> O menor valor registrado é  ${menor} </p>`
            res.innerHTML += `<p> A soma dos valores registrados  ${soma} </p>`
            res.innerHTML += `<p> a media dos valores registrados  ${media} </p>`


        }





    }
}