/*var nome = 'moises '
window.alert(`ola senhor ${nome}`)*/


function validar(ida){
    var valid;
    var cor = window.document.getElementById('corp')

    if(ida <=18){
        valid = true
        cor.style.background = "green"
        cor.innerHTML="<h1>Verdadeiro</h1>"
    
    }
    else{
        valid = false
        cor.style.background = "red"
        cor.innerHTML="<h1>Falso</h1>"
       
    }
    return valid;
}
var ida = prompt("Qual sua idade")
console.log(validar(ida))

