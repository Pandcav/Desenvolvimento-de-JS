var side = window.document.getElementById('cardsid1')
var side2 = window.document.getElementById('cardsid2')
var btn = window.document.getElementById('btn')
side.addEventListener('mouseenter', menu)

function menu() {
    side.style.background = 'rgb(155, 10, 155)'
    side2.style.width = '300px';
    side2.addEventListener('mouseout', sair)


    function sair() {
        side2.style.width = '0px'
        side.style.background = 'rgb(238, 108, 238)'
    }
}

function logof() {
    window.alert('certeza que deseja sair')
}