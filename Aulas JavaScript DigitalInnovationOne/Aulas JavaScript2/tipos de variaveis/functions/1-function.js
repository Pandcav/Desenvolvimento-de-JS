function fn() {
    return 'Code here';
}

const arrowFn = () => 'Code here ';
const arrowFn2 = () => {
    //mais  de uma expressão 
    return 'Code here';
}

// Funcões  também são objetos
fn.prop = 'Posso criar propriedades';

console.log(fn());
console.log(fn.prop);

// Receber Paramentros 

const logValue = value => console.log(value);
const logFnResult = fnParam => console.log(fnParam());

logFnResult(fn);

// Receber e retornar funções 
const controlFnExec => fnParam => allowed => {
    if (allowed) {
        fnParam();
    }
}

const handleFnExecution = controlFnExec(fn);

handleFnExecution(true); // Exwcuta a função fn
handleFnExecution(); // não executara a função fn 

// ControlFnExec como função
function controlFnExec(fnParam) {
    return function(allowed) {
        if (allowed) {
            fnParam();
        }
    }
}