let opt = document.getElementById('opt')
opt.innerText = "digite um numero acima"

function tabuada() {

    let num = document.getElementById('txtnum')
    let tab = document.getElementById('txttabu')
    let alt = document.getElementById('alerta')


    if (num.value.length == 0) {
        alt.innerText = "[ERROR]. Por favor insira um numero para iniciar a taboada"
        alt.style.color = 'red'

    } else {
        let n = Number(num.value)
        tab.innerHTML = ''
        for (let c = 1; c <= 10; c++) {
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
        }
    }
}