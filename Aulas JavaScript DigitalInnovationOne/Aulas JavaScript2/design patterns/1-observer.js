//Observer
// é um pattern  muito popular em aplicações Javascript.
// A instancia (subscriber) mantém uma coleção  de objetos (observers)
// e notifica todos eles quando occorem mudanças no estado.


// exemplo :

class Observer {
    constructor() {
        this.observers = [];
    }

    subscrible(fn) {
        this.observers.push(fn)
    }

    unsubscribe(fn) {
        this.observers = this.observers.filter(obs => obs !== fn);
    }

    notify(data) {
        this.observers.forEach(fn => fn(data));
    }
}

const o = new Observer();
const logData1 = data => console.log(`subscrible 1: ${data}`);
const logData2 = data => console.log(`subscrible 2: ${data}`);
const logData3 = data => console.log(`subscrible 3: ${data}`);


o.subscrible(logData1)
o.subscrible(logData2)
o.subscrible(logData3)


o.notify('notified 1');

o.unsubscribe(logData1);

const logData4 = data => console.log(`subscrible 4: ${data}`);
o.subscrible(logData4);

o.notify('notiflied 2')

o.unsubscribe(logData2);

const logData5 = data => console.log(`subscrible 5: ${data}`);
o.subscrible(logData5)

o.notify('notiflied 3')