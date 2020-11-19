//Decorator
//Uma função decoratorrecebe uma outra função como parametro
// e estede seu comportameto sem modificá-la explicitamente  

//exemplo
let loggedin = false;

function callAthenticated(fn) {
    return !!loggedin && fn();
}

function sum(a, b) {
    return a + b
}


console.log(callAthenticated(() => sum(2, 6)));