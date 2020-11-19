function calcular() {
    var fim = window.document.getElementById('txtfim')
    var ini = window.document.getElementById('txtini')
    var passo = window.document.getElementById('txtpas')
    var res = window.document.querySelector('div#res')
    var alt = window.document.getElementById('alt')

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        window.alert('[ERROR] Faltam os dados')
    } else {
        res.innerHTML = 'Contando: '
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)

        if (p == 0) {
            alt.innerHTML = 'O valor de passos não pode ser menor que 1'
            alt.style.color = 'red'
            p = 1

            if (i < f) {
                for (let c = i; c <= f; c += p) {
                    res.innerHTML += `${c} \u{1F9B6} `
                }
            } else {
                for (let c = i; c >= f; c -= p) {
                    res.innerHTML += `${c} \u{1F9B6} `
                }
            }
        } else {
            if (i < f) {
                for (let c = i; c <= f; c += p) {
                    res.innerHTML += `${c} \u{1F9B6} `
                }
            } else {
                for (let c = i; c >= f; c -= p) {
                    res.innerHTML += `${c} \u{1F9B6} `
                }
            }
        }


    }

}