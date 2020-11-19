// in 
something in somethingItem

// Array
var arvores = new Array("pau-brasil", "Loureiro", "cedro", "carvalho", "sicômoro");
0 in arvores; // retorna true
3 in arvores; // retorna true
6 in arvores; // retorna false
"cedro" in aevores; // retorna false (Vecê deve especificar o numero do indce
// não o valor naquele indice)
"length" in arvores;


//obejetos predefinidos 
"PI" in Math; // retorna true
var minhastring = new String('coral');
"length" in minhastring; // retorna true

// objetos personalizados
var meucarro = { marca: "Honda", modelo: "Accord", ano: 1998 }
"marca" in meucarro; // retorna true
"modelo" in meucarro; // retorna true


// Instaceof

objeto instanceof tipoObjeto

var dia = new Date(2018, 12, 17);

if (dia instanceof Date) {
    //code here
}