function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('txtano')
    var res = window.document.querySelector('div#res')

    if (fano.value.length == 0 || fano.value > ano) {
        alert('[ERROR] Verifique os dadose tente novamnete!')
    } else {
        var fsex = window.document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = window.document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 12) {
                //criança
                img.setAttribute('src',
                    'criancam.jpg')
            } else if (idade < 20) {
                // jovem
                img.setAttribute('src',
                    'jovemm.jpg')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src',
                    'adultom.jpg')
            } else {
                // idoso 
                img.setAttribute('src',
                    'idosom.jpg')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 12) {
                //criança
                img.setAttribute('src',
                    'criancaf.jpg')
            } else if (idade < 20) {
                // jovem
                img.setAttribute('src',
                    'jovemf.jpg')

            } else if (idade < 50) {
                //adulto
                img.setAttribute('src',
                    'adultof.jpg')
            } else {
                //idoso 
                img.setAttribute('src',
                    'idosof.jpg')
            }
        }

        res.style.textAlign = 'center'
        res.innerHTML = ` Detectamos ${genero} com ${idade} anos .`
        res.appendChild(img)
    }
}