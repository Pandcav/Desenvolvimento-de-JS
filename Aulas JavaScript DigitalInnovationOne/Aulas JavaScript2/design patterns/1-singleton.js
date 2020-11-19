// Singleton 
// O objetivo desse Pattern é criar uma instancia de uma função 
// construtora e retorná-la toda vez em que for necessario ultilizá-la


// exemplo 

var SETTINGS = {
    api: 'http://localhost',
    TrackToken: '12345'
}

function MyApp() {
    if (!MyApp.instance) {
        MyApp.instance = this;

    }

    return MyApp.instance
}