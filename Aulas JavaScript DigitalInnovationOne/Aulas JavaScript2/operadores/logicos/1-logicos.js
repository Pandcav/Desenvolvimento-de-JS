exp1 || exp2

var o1 = true || true; // retorna true
var o2 = false || true; // retorna true
var o3 = true || false; // retorna true
var o4 = false || (3 == 4); // retorna false
var o5 = "Gato" || "Cão"; // retorna gato
var o6 = false || "Gato"; // retorna gato
var o1 = "Gato" || false; // retorna gato  

// NOT logicos (!)
!exp1

var n1 = !true; // retorna false
var n1 = !true; // retorna true
var n1 = !"Gato"; // retorna false