var test = 'example';

(() => {
    console.log(`Valor dentro da função "${test}"`);

    if (true) {
        var test = 'exemple';
        console.log(`valor dentro do if "${test}"`)
    }

    console.log(`Valor após a execução do if "${test}"`)
})();